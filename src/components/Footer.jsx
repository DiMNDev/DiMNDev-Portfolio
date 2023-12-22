import React from "react";
import Image from "next/image";
import dimndPortrait from "../../public/images/DiMNDev-portrait-1mb.png";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353f] border-l-transparent border-b-transparent border-r-transparent text-white">
      <div className=" p-12 flex justify-between">
        <div className="h-24px w-24px  relative">
          <Image
            src={dimndPortrait}
            alt="DiMNDev Logo"
            width={64}
            height={64}
          />
          <span className="absolute -bottom-1 font-extrabold">DiMNDev</span>
        </div>

        <div className="text-slate-700 text-center self center">
          DiMND Development - All Rights Reserved
          <p className="text-slate-700">
            &quot;Diamonds are made under heat and pressure&quot;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
