const FormRow = ({ type, name, handleChange, value, labelText, handleFileChange}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        className="form-input"
        name={name}
        type={type}
        value={value}
        onChange={handleChange || handleFileChange}
        required
      />
    </div>
  );
};
export default FormRow;
