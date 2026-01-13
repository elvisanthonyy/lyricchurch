import React from "react";

interface ChildProps {
  mode?: string;
}

const ButtonLoading = ({ mode }: ChildProps) => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div
        className={`w-6 h-6 border-transparent border-3 ${
          mode === "dark"
            ? "border-t-white border-r-white"
            : "border-t-black border-r-black"
        } rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default ButtonLoading;
