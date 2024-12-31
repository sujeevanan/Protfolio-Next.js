import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between  items-center">
        <div className="flex gap-3 justify-center items-center">
          <Image
            src="/images/logo.png"
            width={40}
            height={40}
            alt="logo"
          ></Image>
          <h2 className="text-2xl font-bold text-slate-400">Sujee</h2>
        </div>

        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
