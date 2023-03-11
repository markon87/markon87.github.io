import GlowButton from "../GlowButton"
import GlowButtonExternal from "../GlowButtonExternal"
import { useLoaderData } from "react-router-dom"

export default function ProjectDetails() {
    // const { id } = useParams()
    const project = useLoaderData()
    
  return (
    <div className="project-details">
      <div className="project-wrapper">
        <div className="project-info">
            <h2>{project.title}</h2>    
            <p>{project.description}</p>
            <br />
            <GlowButtonExternal text="Website" linkTo={project.website} />
          </div>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
      </div>
        <div className="navigation">
          <GlowButton buttonText="Back to Projects" glowOffset={true} linkTo="/my-work" />
        </div>
    </div>
  )
}


// loader function
export const projectDetailsLoader = async ({ params }) => {
    const { id } = params
    
    // const res =  await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    const res =  await fetch('https://api.npoint.io/9338837632d477ae7f92/projects/' + id)

    return res.json()
}