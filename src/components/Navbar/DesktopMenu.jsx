import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { menu } from "../../lib/menu";
import AuthContext from "../../context/Auth";
function DesktopMenu() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const visibleMenu = menu.filter((i) => {
    if (i.auth === "all") return true;
    if (i.auth === "guest") return !currentUser;
    if (i.auth === "user") return !!currentUser;

    return false;
  });
  console.log(currentUser);
  const logout = () => {
    setCurrentUser(null);
  };
  return (
    <>
      <div className="md:flex gap-13 hidden ">
        {visibleMenu.map((item) => (
          <Link key={item.menu} to={item.url} className="font-semibold">
            {item.menu}
          </Link>
        ))}
        {currentUser && (
          <button className="font-semibold" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </>
  );
}

export default DesktopMenu;
