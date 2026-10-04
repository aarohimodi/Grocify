import React, { useContext } from "react";
import { menu } from "../../lib/menu";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../context/Auth";
import UiContext from "../../context/UiContext";
function MobileMenu({ status }) {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const visibleMenu = menu.filter((i) => {
    if (i.auth === "all") return true;
    if (i.auth === "guest") return !currentUser;
    if (i.auth === "user") return !!currentUser;

    return false;
  });
  const { setIsMenuOpen } = useContext(UiContext);
  const navigate = useNavigate();
  const mobileDrawer = (url) => {
    setIsMenuOpen(false);
    navigate(url);
  };
  const logout = () => {
    setCurrentUser(null);
  };
  return (
    <div
      className={`shadow-xl md:hidden w-full  items-center gap-x-15 flex absolute top-30 flex-col  gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 top-20 -left-full transition-all duration-500 transform -translate-x-1/2 ${status ? "left-1/2" : ""}`}
    >
      {visibleMenu.map((m) => (
        <div key={m.menu} onClick={() => mobileDrawer(m.url)}>
          <Link to={m.url}>{m.menu}</Link>
        </div>
      ))}
      {currentUser && (
        <button className="font-semibold" onClick={logout}>
          Logout
        </button>
      )}
    </div>
  );
}

export default MobileMenu;
