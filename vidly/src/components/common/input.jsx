const Input = ({ name, value, onValueChange, label, type, error }) => {
  //inputVariables ,account,handleChange,handleLogin
  return (
    <div key={name} className="form-group col-sm-4">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onValueChange}
        value={value}
        id={name}
        name={name}
        type={type}
        className="form-control"
      />
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
