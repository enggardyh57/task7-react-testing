import { useParams, useNavigate } from "react-router-dom";

type ProjectParams = {
  projectId: string;
};

const ProjectDetail = () => {
  const { projectId } = useParams<ProjectParams>();
  const navigate = useNavigate(); 

  
  const projectData: Record<string, { title: string; description: string; designLink: string; image: string }> = {
    "creople-edu": {
      title: "Creople Edu",
      description: "Creople Edu is an online learning platform offering a variety of courses with certificates.",
      designLink: "https://drive.google.com/file/d/1md2pVLJ1zGb_9pUdV9-cA8hJ-loxasJY/view?usp=sharing",
      image: "/1.png", 
    },
    cumu: {
      title: "Cumu",
      description: "Cumu is a counseling service application offering services like video calls and hanging out together.",
      designLink: "https://medium.com/@enggardyah57/case-study-curhat-untukmu-app-18558bdb719a",
      image: "/2.png", 
    },
    "gala-nexus": {
      title: "Gala Nexus",
      description: "Gala Nexus simplifies concert ticket booking with a search function and easy payments.",
      designLink: "https://medium.com/@enggardyah57/ui-ux-case-study-design-of-gala-nexus-app-0c40fd2c5efa",
      image: "/3.png", 
    },
  };

  
  if (!projectId || !projectData[projectId]) {
    return <p>Project not found!</p>;
  }

 
  const project = projectData[projectId];

  
  const handleBackToHome = () => {
    navigate("/"); 
  };

  return (
    <div className="project-detail bg-seccondary py-16">
      <div className="max-w-4xl mx-auto text-center text-white">
       
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{project.title}</h2>

        
        <p className="text-lg leading-relaxed mb-8">{project.description}</p>

       
        <div className="project-image mb-8">
          <img src={project.image} alt={project.title} className="max-w-full h-auto rounded-xl" />
        </div>

       
        <a href={project.designLink} target="_blank" rel="noopener noreferrer" className="bg-primary text-seccondary px-6 py-3 rounded-full hover:bg-opacity-90 font-bold">
          See Design
        </a>

        <button onClick={handleBackToHome} className="mt-6 bg-white text-black px-6 py-3 rounded-full hover:opacity-70 font-bold mx-2">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
