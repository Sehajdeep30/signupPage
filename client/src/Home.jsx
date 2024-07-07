import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Assuming you save the CSS code in HomePage.css

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="home-container">
      <h1 className="welcome-message">Welcome to Your Home Page!</h1>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Home;
