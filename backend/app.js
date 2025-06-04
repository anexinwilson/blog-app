const express = require('express')
const pool = require("./db/conn.js")
const multer  = require('multer')
const cors = require('cors')

const app = express()
app.use(express.json()) 
app.use(cors())
app.use('/uploads',express.static('uploads'))
port = 8000


 const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, 'uploads')
   },
   filename: function (req, file, cb) {
     cb(null, `${Date.now()}.${file.originalname}`)
   }
 })
 
 const upload = multer({ storage: storage })

 app.get('/',(req,res) => {
    res.send("hi")
 })


app.get('/blog/:id',async (req,res) => {
   const result = await pool.query(`SELECT * from blogs WHERE id = ${req.params.id}`);
   console.log(result.rows[0])
   res.json({"data": result.rows})
})

app.get('/blog/:categ?',async (req,res) => {
   if (req.params.categ) {
   const result = await pool.query("SELECT * from blogs where category = $1", [req.params.categ]);
   res.json({"data": result.rows})
   } else {
      const result = await pool.query("SELECT * from blogs");
      res.json({ "data": result.rows });
   }
})


app.post('/blog', async(req,res) => {
   console.log(req.body);
   const result = await pool.query("INSERT INTO blogs(title,image,post,category) VALUES ($1 , $2, $3, $4)",
      [req.body.title,req.body.image,req.body.post,req.body.category])
   res.json(result)
})



app.post('/blogimage', upload.single('file'), function (req, res, next) {
   // req.file is the `avatar` file
   // req.body will hold the text fields, if there were any
   res.json(req.file)
 })
 
 
 app.listen(port,() => {
    console.log(`${port}`)
 })