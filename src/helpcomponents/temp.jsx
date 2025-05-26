import React from "react";

const Button = ({ text,  id }) => {
  const handleClick = (e) => {
    e.preventDefault();

    const target = document.getElementById(id);
    if (target && id) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

return (
    <a
      href={`#${id ?? ""}`}
      onClick={handleClick}
      className=" flex flex-row items-center gap-3 relative z-20 cursor-pointer group "
    >
      <div className="px-4 py-4 pl-5 cursor-pointer overflow-hidden">
        <div className="absolute rounded-lg bg-white/60 -right-5 top-1/2 -translate-y-1/2  
          w-[115%] h-[85%] group-hover:w-10 group-hover:h-10 group-hover:rounded-full 
          group-hover:right-0.77 
           transition-all duration-500  " />

        <p className="uppercase md:text-lg text-black transition-all duration-500
          group-hover:text-white group-hover:-translate-x-2 xl:translate-x-0 -translate-x-1">
          {text}
        </p>

        <div className="opacity-0 group-hover:opacity-100 group-hover:bg-white/50 w-10 h-10 rounded-full absolute -right-5 top-1/2 
          -translate-y-1/2 flex justify-center items-center overflow-hidden ">
          <img
            className="w-5 h-5 xl:-translate-y-32 translate-y-0  
            animate-bounce group-hover:translate-y-0 transition-all duration-500"
            src="/images/arrow-down.svg"
            alt="arrow"
          />
        </div>
      </div>
    </a>
);
};

export default Button;
