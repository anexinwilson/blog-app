const express = require('express')
const pool = require("./db/conn.js")
const multer  = require('multer')
const cors = require('cors')

const app = express()
port = 8000

// Middleware setup
app.use(express.json()) 
app.use(cors())
app.use('/uploads',express.static('uploads')) // Serve uploaded files

// Configure multer for file uploads
 const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, 'uploads') // Upload directory
   },
   filename: function (req, file, cb) {
     // Generate unique filename with timestamp
     cb(null, `${Date.now()}.${file.originalname}`)
   }
 })
 
 const upload = multer({ storage: storage })
 
 // Basic health check endpoint
 app.get('/',(req,res) => {
    res.send("hi")
 })

// Get single blog by ID
app.get('/blog/:id',async (req,res) => {
   const result = await pool.query(`SELECT * from blogs WHERE id = ${req.params.id}`);
   console.log(result.rows[0])
   res.json({"data": result.rows})
})

// Get all blogs or filter by category
app.get('/blog/:categ?',async (req,res) => {
   if (req.params.categ) {
   // Get blogs by category
   const result = await pool.query("SELECT * from blogs where category = $1", [req.params.categ]);
   res.json({"data": result.rows})
   } else {
      // Get all blogs
      const result = await pool.query("SELECT * from blogs");
      res.json({ "data": result.rows });
   }
})

// Create new blog post
app.post('/blog', async(req,res) => {
   console.log(req.body);
   const result = await pool.query("INSERT INTO blogs(title,image,post,category) VALUES ($1 , $2, $3, $4)",
      [req.body.title,req.body.image,req.body.post,req.body.category])
   res.json(result)
})

// Handle image upload
app.post('/blogimage', upload.single('file'), function (req, res, next) {
   // req.file is the uploaded file
   // req.body will hold the text fields, if there were any
   res.json(req.file)
 })
 
 
 // Start server
 app.listen(port,() => {
    console.log(`${port}`)
 })