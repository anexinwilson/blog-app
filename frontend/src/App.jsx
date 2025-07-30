import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { CreateBlog } from "./pages/CreateBlog";
import { NoPage } from "./pages/NoPage";

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          {/* Main layout wrapper */}
          <Route path = '/' element={<Layout/>}>
          <Route path = '/' element={<Home/>}/> 
          <Route path = '/blog/:id' element={<Blog/>}/> 
          <Route path = '/create' element={<CreateBlog/>}/> 
          <Route path='*' element={<NoPage/>} />
          </Route>
        </Routes> 
      </Router>
    </>
  );
}

export default App;