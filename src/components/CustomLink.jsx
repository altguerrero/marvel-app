import "../styles/CustomLink.scss";
import { Link } from "react-router-dom";

function CustomLink({
  children,
  href = "#",
  color = "primary",
  align = "left",
  decoration = "underline",
}) {
  return (
    <Link
      className={`customLink customLink__color--${color} customLink__align--${align} customLink__decoration--${decoration}`}
      to={href}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
