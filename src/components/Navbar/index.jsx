const Navbar = () => {
  const menuNavbar = ["Home", "About", "Promotions", "Blog", "Contact Us"];
  return (
    <>
      <nav>
        <div className="container py-4 flex justify-between gap-10 items-center">
          <div>
            <img src="/images/logo.svg" alt="" className="w-[150px] h-[36px] lg:w-[207px] lg:h-[50px]" />
          </div>
          <ul className="hidden lg:flex gap-8 text-[#757575]">
            {menuNavbar.map((item) => (
              <li key={item} className="cursor-pointer font-medium text-sm leading-[22px] ">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6">
            <p className="cursor-pointer font-medium text-sm leading-[22px] text-[#333333] hidden lg:flex">Masuk</p>
            <button className="bg-[#8BAC3E] text-white leading-[22px] font-medium rounded-[100px] py-[10px] px-[18px] text-sm border-none">Dafttar Sekarang</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
