import React, { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Rating from "./components/Rating";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const App = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);
  const dataMenu = [
    {
      name: "Pizza Paperoni",
      image: "/images/papperoni.png",
      bgColor: "#E6F3F5",
      bgImage: "",
      category: "Pizza",
      rating: "4",
    },
    {
      name: "Pizza Meat",
      image: "/images/pizza-meat.png",
      bgColor: "#E6F3F5",
      bgImage: "",
      category: "Pizza",
      rating: "3",
    },
    {
      name: "Doner Kebab",
      image: "/images/donner-kebab.png",
      bgColor: "#EAEEFA",
      bgImage: "",
      category: "Kebab",
      rating: "5",
    },
    {
      name: "Salmon Roll ",
      image: "/images/salmon-roll.png",
      bgColor: "#F9EEF3",
      bgImage: "",
      category: "Salmon",
      rating: "4",
    },

    {
      name: "Cupcake Choco ",
      image: "/images/cupcake.png",
      bgColor: "#F0FEEB",
      bgImage: "",
      category: "Cupcake",
      rating: "4",
    },
    {
      name: "Doughnut Milk",
      image: "/images/doughnut-milk.png",
      bgColor: "#F3F7D9",
      bgImage: "/images/bg.png",
      category: "Doughnut",
      rating: "5",
    },
    {
      name: "Doughnut Unicorn",
      image: "/images/unicorn.png",
      bgColor: "#F3F7D9",
      bgImage: "",
      category: "Doughnut",
      rating: "4",
    },
    {
      name: "Kathi Kebab",
      image: "/images/kathi-kebab.png",
      bgColor: "#EAEEFA",
      bgImage: "",
      category: "Kebab",
      rating: "4",
    },
  ];

  const dataCategory = [
    {
      name: "Cupcake",
      image: "/images/cake.png",
      bgColor: "#F0FEEB",
      bgImage: "",
      totalItems: "22 Items",
    },
    {
      name: "Pizza",
      image: "/images/pizza.png",
      bgColor: "#E4F2F4",
      bgImage: "/images/bg.png",
      totalItems: "25 Items",
    },
    {
      name: "Kebab",
      image: "/images/kebab.png",
      bgColor: "#EAEEFA",
      bgImage: "",
      totalItems: "12 Items",
    },
    {
      name: "Pizza3",
      image: "/images/pizza.png",
      bgColor: "#E4F2F4",
      bgImage: "/images/bg.png",
      totalItems: "25 Items",
    },
    {
      name: "Salmon",
      image: "/images/salmon.png",
      bgColor: "#F9EEF3",
      bgImage: "",
      totalItems: "22 Items",
    },
    {
      name: "Doughnut",
      image: "/images/doughnut.png",
      bgColor: "#F3F7D9",
      bgImage: "",
      totalItems: "21 Items",
    },
    {
      name: "Pizza6",
      image: "/images/pizza.png",
      bgColor: "#E4F2F4",
      bgImage: "/images/bg.png",
      totalItems: "20 Items",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="hidden lg:grid grid-cols-2 items-center">
          <div>
            <div>
              <h1 className="text-[#8BAC3E] text-[64px] leading-[64px] font-medium">Good Food Us</h1>
              <h1 className="text-[#8BAC3E] text-[64px] leading-[64px] font-medium">Good Mood</h1>
            </div>
            <div className="py-5">
              <p className="text-[#757575] font-normal text-lg leading-[29px]">
                I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <button className="bg-[#8BAC3E] py-[10px] px-[18px] rounded-[100px] text-white font-medium text-sm leading-[22px] shadow-xl">Daftar Sekarang</button>
              <button className="bg-[#F2F2F2] py-[10px] px-[18px] rounded-[100px] text-[#333333] font-medium text-sm leading-[22px]">About Us</button>
            </div>
          </div>
          <div className="flex justify-center relative">
            <img src="/images/hero.png" alt="" className="w-[412.9px] h-[414.75px] object-cover" />
            <div className="bg-[#ffffffbd] rounded-[17px] p-5 absolute left-0 bottom-5">
              <div className="flex items-center gap-3">
                <div>
                  <img src="/images/hero.png" alt="" className="w-[53px] h-[53px]" />
                </div>
                <div>
                  <p className="text-black text-sm leading-[22px] font-normal">Green Salad Tomato</p>
                  <p className="text-[#757575] text-[12px] leading-[14px] font-normal py-2">Tomato</p>
                  <Rating rating={4} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <div>
            <h1 className="text-[#8BAC3E] text-[32px] leading-[32px] font-medium">Good Food Us</h1>
            <h1 className="text-[#8BAC3E] text-[32px] leading-[32px] font-medium">Good Mood</h1>
          </div>
          <div className="flex justify-center relative my-5">
            <img src="/images/hero.png" alt="" className="w-[220px] h-[200px] object-cover" />
            <div className="bg-[#ffffffbd] rounded-[17px] p-2 absolute right-0 bottom-5">
              <div className="flex items-center gap-3">
                <div>
                  <img src="/images/hero.png" alt="" className="w-[53px] h-[53px]" />
                </div>
                <div>
                  <p className="text-black text-sm leading-[22px] font-normal">Green Salad Tomato</p>
                  <p className="text-[#757575] text-[12px] leading-[14px] font-normal py-1">Tomato</p>
                  <Rating rating={4} />
                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <p className="text-[#757575] font-normal text-base leading-[29px]">
              I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <button className="bg-[#8BAC3E] py-[10px] px-[18px] rounded-[100px] text-white font-medium text-sm leading-[22px] shadow-xl">Daftar Sekarang</button>
            <button className="bg-[#F2F2F2] py-[10px] px-[18px] rounded-[100px] text-[#333333] font-medium text-sm leading-[22px]">About Us</button>
          </div>
        </div>

        <div className="my-20">
          <h2 className="text-[#333333] font-medium text-2xl leading-[30px] lg:text-[38px] lg:leading-[50px] ">Browser Our Category</h2>
          <h2 className="text-[#8BAC3E] font-medium text-2xl lg:text-[38px] leading-[30px] lg:leading-[50px]">Receipt</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }}
          pagination={{ clickable: true, el: null }}
          scrollbar={{ draggable: true, el: null }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          spaceBetween={20}>
          {dataCategory.map((item, index) => (
            <SwiperSlide key={index}>
              <Cards type="simple" name={item.name} image={item.image} totalItems={item.totalItems} bgColor={item.bgColor} bgImage={item.bgImage} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="lg:flex items-center justify-end gap-[10px] pt-10 hidden">
          <button ref={prevRef} className="bg-[#8BAC3E] px-4 py-3 rounded-[100px] text-white font-medium text-base leading-[18.96px] flex items-center gap-2">
            <img src="/icons/prev.svg" alt="" className="w-[33px] h-[33px]" />
            PREV
          </button>
          <button ref={nextRef} className="bg-[#8BAC3E] px-4 py-3 rounded-[100px] text-white font-medium text-base leading-[18.96px] flex items-center gap-2">
            NEXT
            <img src="/icons/next.svg" alt="" className="w-[33px] h-[33px]" />
          </button>
        </div>

        <div className="my-20">
          <h2 className="text-[#333333] font-medium text-2xl leading-[30px] lg:text-[38px] lg:leading-[50px] ">Browser Our Trending</h2>
          <h2 className="text-[#8BAC3E] font-medium text-2xl lg:text-[38px] leading-[30px] lg:leading-[50px]">Receipt</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {dataMenu.map((item, index) => (
            <Cards type="primary" key={index} name={item.name} image={item.image} bgColor={item.bgColor} bgImage={item.bgImage} category={item.category} rating={item.rating} />
          ))}
        </div>
        <div className="lg:flex justify-center my-10 hidden">
          <button className="bg-[#8BAC3E] rounded-[100px] text-white text-base font-medium py-2 px-4">ALL Receipt</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
