import React from "react";

export default function InformationComponent({ color, icon, text, duration }) {
  return (
    <div className="justify-center">
      <div className="text-xl font-bold uppercase text-blue-900 text-center">
        {text}
      </div>
      <div className="relative mt-2">
        <div className={`absolute top-2.5 left-2.5 text-${color} flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-lg`}>
          {React.cloneElement(icon, { style: { color: color }, className: "h-5 w-5" })}
        </div>
        <div className="flex items-center justify-center w-28 h-28 m-1 rounded-full shadow-lg">
          <div style={{ borderColor: color }} className={`flex items-center justify-center w-24 h-24 m-1 border-4 rounded-full`}>
            <span style={{ color: color }} className="text-2xl font-bold text-center">
              {duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
