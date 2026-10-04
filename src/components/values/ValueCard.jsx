import React from "react";

function ValueCard({ icon, title, para, left = "false", right = "false" }) {
  return (
    <>
      {left && (
        <div className="flex justify-between gap-10 items-center ">
          <div className="text-right flex-1">
            <h3 className="text-[30px] font-bold ">{title}</h3>
            <p className="text-[18px] text-[#52525C] my-5">{para}</p>
          </div>
          <div>
            <div className="w-17 h-17 rounded-full flex items-center justify-center text-white bg-orange-500">
              {icon}
            </div>
          </div>
        </div>
      )}
      {right && (
        <div className="flex justify-between gap-10 items-center ">
          <div>
            <div className="w-17 h-17 rounded-full flex items-center justify-center text-white bg-orange-500">
              {icon}
            </div>
          </div>
          <div className="text-left flex-1">
            <h3 className="text-[30px] font-bold ">{title}</h3>
            <p className="text-[18px] text-[#52525C] my-5">{para}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ValueCard;
