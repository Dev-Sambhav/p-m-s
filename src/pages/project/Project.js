import { useDocument } from "../../hooks/useDocument";
import { useParams } from "react-router-dom";

// styles
import Wrapper from "../../assets/wrappers/ProjectDetails";
//components
import ProjectComments from "./ProjectComments";
import ProjectSummary from "./ProjectSummary";

const Project = () => {
  const { id } = useParams();
  const { document: project, error } = useDocument("projects", id);
  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!project) {
    return <div className="loading"></div>;
  }
  return (
    <Wrapper>
      <div className="project-details">
        <ProjectSummary project={project} />
        <ProjectComments project={project} />
      </div>
    </Wrapper>
  );
};

export default Project;
