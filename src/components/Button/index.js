import "./main.css";

function Button({ children, ...props }) {
  const className = props.className ? `button ${props.className}` : "button";

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
}

export { Button };
