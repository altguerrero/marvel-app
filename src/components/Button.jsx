import { Link } from "react-router-dom";
import "../styles/Button.scss";

function Button({
  children,
  variant = "text",
  color = "primary",
  startIcon,
  endIcon,
  width = "full",
  align,
  href,
  onClick,
}) {
  const styles = `btn btn__variant--${variant} btn__color--${color} btn__width--${width} btn__align--${align}`;
  return (
    <>
      {href ? (
        <Link onClick={onClick} className={styles} to={href}>
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
        </Link>
      ) : (
        <button onClick={onClick} className={styles}>
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
        </button>
      )}
    </>
  );
}

export default Button;
