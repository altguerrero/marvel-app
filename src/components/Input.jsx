import "../styles/Input.scss";

function Input({
  type = "text",
  id,
  placeholder,
  name,
  value,
  onChange,
  required,
}) {
  return (
    <input
      className="input"
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}

export default Input;
