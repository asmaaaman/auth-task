function TextError(props) {
  return (
    <span style={{ color: "red" }} className="error">
      {props.children}
    </span>
  );
}
export default TextError;
