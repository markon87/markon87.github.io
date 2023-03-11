import './App.css'
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";
import MyWork, { projectLoader } from "./components/pages/MyWork";
import Contact from "./components/pages/Contact";
import PageNotFound from './components/pages/PageNotFound';
import ProjectDetails, { projectDetailsLoader } from './components/pages/ProjectDetails';

import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayouts from './layouts/RootLayouts';
import MyWorkLayout from './layouts/MyWorkLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="experience" element={<Experience />} />
      <Route path ="my-work" element={<MyWorkLayout />}>
        <Route 
          index 
          element={<MyWork />} 
          loader={projectLoader}
        />
        <Route 
          path=":id" 
          element={<ProjectDetails />} 
          loader={projectDetailsLoader}
          />
      </Route>
      <Route path="contact" element={<Contact />} />

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
