import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/Auth";

function AuthLayout({ children, authentication }) {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (authentication === true && currentUser === null) {
      navigate("/login");
    }
    if (authentication === false && currentUser === true) {
      navigate("/");
    }
    setLoading(false);
  }, [currentUser, navigate, authentication]);
  return loading ? (
    <div>
      <h1 className="text-center">Loading</h1>
    </div>
  ) : (
    children
  );
}

export default AuthLayout;
