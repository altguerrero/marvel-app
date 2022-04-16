import "../styles/AuthLayout.scss";
import Logo from "../assets/svg/Marvel_Logo.svg";

function AuthLayout({ children }) {
  return (
    <main className="AuthLayout">
      <header className="AuthLayout__header">
        <figure>
          <img src={Logo} alt="marvel" />
        </figure>
      </header>
      <section className="AuthLayout__content">{children}</section>
    </main>
  );
}

export default AuthLayout;
