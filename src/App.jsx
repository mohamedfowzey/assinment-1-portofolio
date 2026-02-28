
import './App.css'
import Home from './components/home/home';
import Masterlayout from './components/masterLayout/masterLayout';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Experience from './components/experience/experience';
import Work from './components/work/work';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Graphic from './components/work/graphic/graphic';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


function App() {
  const routes = createBrowserRouter([
    {
      Path:"/",
      element:<Masterlayout />,
      notfound:<h1>404 not found</h1>,
      children:[
        {index:true, element:<Home />},
        { path:"/home", element:<Home />},
        { path:"/about", element:<About />},
        { path:"/skills", element:<Skills />},
        {path:"/experience", element:<Experience />},
        {path:"/work", element:<Work />,
          children:[
            {index:true,element:<Graphic/>},
            {path:"graphic", element : <Graphic/>},
            {path:"apps", element : <Graphic/>},
            {path:"software", element : <Graphic/>},
          ]
        },
      ]
    }
  ]
  );
  
  return (
    <>
      <RouterProvider router = {routes} />
    </>
  )
}

export default App
