import { FaBars, FaHeart, FaSearch, FaShoppingBag } from "react-icons/fa";
import { RiMenu4Line } from "react-icons/ri";
import UiContext from "../../context/UiContext";
import ProductContext from "../../context/ProductContext";
import { useContext, useRef } from "react";
import AuthContext from "../../context/Auth";

function Extras() {
  const { isMenuOpen, setIsMenuOpen, setActivePanel, activePanel } =
    useContext(UiContext);
  const { currentUser } = useContext(AuthContext);
  const { setSearch, search } = useContext(ProductContext);
  const handleScroll = () => {
    const section = document.getElementById("productSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="p-2 border border-orange-500 rounded-full hidden md:flex border-2 ">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={handleScroll}
          className="focus:outline-none"
        />

        <div className="bg-orange-500 rounded-full p-2 flex ">
          <FaSearch className="text-white" />
        </div>
      </div>
      {isMenuOpen ? (
        <RiMenu4Line
          className="md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      ) : (
        <FaBars
          className="md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      )}

      <FaHeart
        className="text-black "
        size={25}
        onClick={() =>
          currentUser
            ? setActivePanel("wishlist")
            : alert("Please Login to open the wishlist")
        }
      />
      <FaShoppingBag
        className="text-black "
        size={25}
        onClick={() =>
          currentUser
            ? setActivePanel("cart")
            : alert("Please Login to open the cart")
        }
      />
    </div>
  );
}

export default Extras;
