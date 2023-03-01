import Avatar from "../../components/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const ProjectSummary = ({ project }) => {
  const { deleteDocument } = useFirestore("projects");
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = () => {
    deleteDocument(project.id);
    navigate("/");
  };
  return (
    <div>
      <h5 className="summary-title">Project Summary</h5>
      <div className="project-summary">
        <h3 className="project-title">{project.name}</h3>
        <span className="created-by">
          Created by {project.createdBy.displayName}
        </span>
        <p className="due-date">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4>Project assigned to:</h4>
        <div className="assigned-users">
          {project.assignedUsersList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
              <p>{user.displayName}</p>
            </div>
          ))}
        </div>
        {user.uid === project.createdBy.id && (
          <button className="btn" onClick={handleClick}>
            Mark as Complete
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectSummary;
