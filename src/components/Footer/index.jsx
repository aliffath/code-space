import React from "react";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container bg-[#F9FFF6] py-10 rounded-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            <div>
              <div>
                <img src="/images/logo.svg" alt="" className="w-[150px] h-[36px] lg:w-[207px] lg:h-[50px]" />
              </div>
              <div className="mt-4">
                <p className="text-[#757575] text-sm font-normal">Jl. Arumba No.7, RT.001/RW.004 Tunggulwulung, Kec. Lowokwaru, Kota Malang, Jawa Timur 65143</p>
              </div>
              <div className="flex items-center gap-[10px] pt-5">
                <div className="bg-[#8BAC3E] p-[10px] rounded-full">
                  <AiOutlineMail size={20} color="white" />
                </div>
                <LuPhone size={20} color="#8BAC3E" />
                <AiOutlineInstagram size={20} color="#8BAC3E" />
              </div>
            </div>
            <div>
              <p className="text-[#333333] font-medium text-lg leading-6">Categories</p>
              <div className="mt-10">
                <div className="flex flex-col gap-4">
                  <p className="text-[#757575] text-sm leading-4 font-normal">Cupcake</p>
                  <p className="text-[#757575] text-sm leading-4 font-normal">Pizza</p>
                  <p className="text-[#757575] text-sm leading-4 font-normal">Kebab</p>
                  <p className="text-[#757575] text-sm leading-4 font-normal">Salmon</p>
                  <p className="text-[#757575] text-sm leading-4 font-normal">Dougnut</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#333333] font-medium text-lg leading-6">About Us</p>
              <div className="mt-10">
                <div className="flex flex-col gap-4">
                  <p className="text-[#757575] text-sm leading-4 font-normal">About Us</p>
                  <p className="text-[#757575] text-sm leading-4 font-normal">FAQ</p>
                  <p className="text-[#757575] text-sm leading-4 font-normal">Report Problem</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#333333] font-medium text-lg leading-6">Newsletter</p>
              <div className="mt-10">
                <p className="text-[#757575] text-sm leading-4 font-normal">Get now free 50% discount for alll products on your first order</p>
                <div className="flex my-4">
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="w-full border-2 border-black placeholder:text-black bg-transparent rounded-tl-lg rounded-bl-lg placeholder:color-black text-black px-4 py-2  outline-none focus:outline-none focus:ring-0"
                  />
                  <button className="bg-[#8BAC3E] text-white w-[60px] rounded-br-lg rounded-tr-lg text-sm leading-6 font-medium">SEND</button>
                </div>
                <div>
                  <div className="flex items-center gap-[10px]">
                    <AiOutlineMail size={20} color="#8BAC3E" />
                    <p className="text-black text-sm leading-[24px] font-normal"> mail@codespace.id</p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <LuPhone size={20} color="#8BAC3E" />
                    <p className="text-black text-sm leading-[24px] font-normal"> +62 821-4186-6633 (Hiegar) </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10">
          <p className="text-[#757575] text-xs font-normal text-center">© 2025 Codespace Indonesia. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
