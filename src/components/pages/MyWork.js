import { useLoaderData, Link } from "react-router-dom";

export default function MyWork(){
  const projects = useLoaderData()

  const firstProjects = projects.slice(0, 6);

  return (
    <div className="projects">
      {firstProjects.map(project => (
        <div className="project-card" key={project.id}>
          <Link to={project.id.toString()}>
            <div className="project-card-image">
              <img src={project.image} alt="Design" />
            </div>
            <div className="project-card-info">
              <h3>{project.title}</h3>
              {/* <p>{project.description}</p> */}
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}


// loader function
export const projectLoader = async() => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await fetch('https://api.npoint.io/9338837632d477ae7f92/projects/')

  return res.json()
}