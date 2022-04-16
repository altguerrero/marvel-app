import "../styles/Stack.scss";

function Stack({ children, spacing = 0, direction = "row" }) {
  return (
    <div
      className={`stack stack__spacing--${spacing} stack__direction--${direction}`}
    >
      {children}
    </div>
  );
}

export default Stack;
