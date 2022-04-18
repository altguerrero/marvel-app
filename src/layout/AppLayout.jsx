import "../styles/AppLayout.scss";
import { useAuth } from "../context/authContext";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

function AppLayout({ children }) {
  const { user, logout } = useAuth();
  return (
    <div className="appLayout">
      <header>
        <Nav user={user} logout={logout} />
      </header>
      <section>{children}</section>
      <Footer />
    </div>
  );
}

export default AppLayout;
