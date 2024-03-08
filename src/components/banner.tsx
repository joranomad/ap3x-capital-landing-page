import React from "react";

const Banner = ({ text }: { text: string }) => {
  return (
    <div className="relative mb-12 md:mb-32  my-32 mt-40 flex items-center justify-center ">
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-20 md:h-40 flex justify-center items-center max-w-[90vw] overflow-hidden">
        <img
          src="./assets/banner.png"
          alt="barcode"
          className=" w-1/5 h-full "
        />{" "}
        <img
          src="./assets/banner.png"
          alt="barcode"
          className=" w-1/5 h-full "
        />
        <img
          src="./assets/banner.png"
          alt="barcode"
          className="w-1/5 h-full "
        />{" "}
        <img
          src="./assets/banner.png"
          alt="barcode"
          className="w-1/5 h-full "
        />{" "}
        <img
          src="./assets/banner.png"
          alt="barcode"
          className="w-1/5 h-full "
        />{" "}
      </div>
      <p className="relative z-10 text-background text-center text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-bold uppercase pt-2 md:pt-4">
        {text}
      </p>
    </div>
  );
};

export default Banner;

// export default Banner;
