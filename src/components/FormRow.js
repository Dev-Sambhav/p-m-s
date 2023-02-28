const FormRow = ({
  type,
  name,
  handleChange,
  value,
  labelText,
  handleFileChange,
  readOnly,
}) => {
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
        autoComplete="off"
        readOnly={readOnly === "true" ? true : false}
      />
    </div>
  );
};
export default FormRow;
