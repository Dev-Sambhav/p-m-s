import { useEffect, useState } from "react";
import Select from "react-select";
import { useCollection } from "../../hooks/useCollection";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";
import { FormRow } from "../../components";

// styles
import Wrapper from "../../assets/wrappers/Create";

const categories = [
  { value: "Development", label: "Development" },
  { value: "Design", label: "Design" },
  { value: "Sales", label: "Sales" },
  { value: "Marketing", label: "Marketing" },
];

const Create = () => {
  const { documents } = useCollection("users");
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formErrors, setFormErrors] = useState(null);
  const { user } = useAuthContext();
  const { addDocument, response } = useFirestore("projects");
  const navigate = useNavigate();

  // fetching all the users and make a new users object with label and value props
  useEffect(() => {
    if (documents) {
      const option = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(option);
    }
  }, [documents]);

  // submit form to firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(null);
    // handling errors
    if (!category) {
      setFormErrors("Please select a project category");
      return;
    }
    if (assignedUsers.length < 1) {
      setFormErrors("Please assign the project to at least one user");
      return;
    }

    // project admin details
    const createdBy = {
      displayName: user.displayName,
      id: user.uid,
      photoURL: user.photoURL,
    };

    // assign to user
    const assignedUsersList = assignedUsers.map((assignUser) => {
      return {
        displayName: assignUser.value.displayName,
        id: assignUser.value.id,
        photoURL: assignUser.value.photoURL,
      };
    });

    // if there is no error create a project collection which contain all the info of project
    const project = {
      name,
      details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy,
      assignedUsersList,
    };
    // adding project object into firestore
    await addDocument(project);
    if (!response.error) {
      navigate("/");
    }
  };
  return (
    <Wrapper>
      <div className="form create-form">
        <h4 className="page-title">Create a New Project</h4>
        <form onSubmit={handleSubmit}>
          <FormRow
            type="text"
            name="name"
            handleChange={(e) => setName(e.target.value)}
            value={name}
            labelText="Project Name"
          />
          <FormRow
            type="date"
            name="name"
            handleChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
            labelText="Set Due Date"
          />
          <div className="form-row">
            <label htmlFor={users} className="form-label">
              Assign to
            </label>
            <Select
              options={users}
              onChange={(option) => setAssignedUsers(option)}
              isMulti
              maxMenuHeight={200}
            />
          </div>
          <div className="form-row">
            <label htmlFor={categories} className="form-label">
              Project Category
            </label>
            <Select
              options={categories}
              onChange={(option) => setCategory(option)}
              defaultValue={category}
              maxMenuHeight={200}
            />
          </div>
          <div className="form-row">
            <label htmlFor={details} className="form-label">
              Project Details
            </label>
            <textarea
              required
              onChange={(e) => setDetails(e.target.value)}
              value={details}
              className="form-text"
            ></textarea>
          </div>
          {response.isLoading && (
            <button className="btn" disabled>
              Adding...
            </button>
          )}
          {!response.isLoading && <button className="btn">Add Project</button>}
          {formErrors && <p className="error">{formErrors}</p>}
        </form>
      </div>
    </Wrapper>
  );
};

export default Create;
