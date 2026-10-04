import React from "react";

function Button({ title }) {
  return (
    <button className="bg-orange-500 text-white rounded-lg px-6 py-3">
      {title}
    </button>
  );
}

export default Button;
