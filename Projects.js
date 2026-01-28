import websiteImg1 from '../assets/image5.png'
import websiteImg2 from '../assets/image6.png'
import websiteImg3 from '../assets/image7.png'

export default function Projects() {
  const config = {
    projects: [
      {
        image: websiteImg1,
        description: 'A todo Application. Built with MERN Stack.',
        link: 'https://github.com/Anurajeshwari/MERN-todo-application.git'
      },
      {
        image: websiteImg2,
        description: 'Wedding Attire Rental Application built using Figma',
        link: 'https://github.com/Anurajeshwari/MERN-todo-application.git'
      },
      {
        image: websiteImg3,
        description: 'Storing Patients Vaccination Records using Blockchain',
        link: 'https://github.com/Anurajeshwari/MERN-todo-application.git'
      }
    ]
  }

  return (
    <section className="flex flex-col py-20 px-5 justify-center bg-[#FAFAFA]" id="projects">
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-3xl border-b-4 mb-5 w-[117px] font-bold">Projects</h1>
          <p>
            Here are some of the projects I’ve built using MERN, Figma, and Blockchain technologies.
            Feel free to check them out
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {config.projects.map((project, index) => (
            <div className="relative" key={index}>
              <img className="h-[200px]" src={project.image} alt="project" />
              <div className="project-desc">
                <p className="text-center px-5 py-14">{project.description}</p>
                <div className='flex justify-center'>
                         <a className='btn' target='_blank' href={project.link}>View Project</a>
                 </div>
              </div>
               
            </div>
            
          ))}
        </div>
      </div>
    </section>
  )
}
