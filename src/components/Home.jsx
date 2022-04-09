import { useAuth } from "../context/authContext";

function Home() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <p>Werlcome {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
