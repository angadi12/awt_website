"use client";
import { Button, Divider } from "@nextui-org/react";
import Menuicon from "../../public/Homeasset/Menuicon.png";
import Closeicon from "../../public/Homeasset/Closeicon.png";
import Pointer from "../../public/Homeasset/Pointer.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, stagger, animate, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { cubicBezier } from "framer-motion";
import { IoMdHome } from "react-icons/io";
import Logo from "../../public/Solutionasset/Navlogo.png";
import { IoIosCloseCircle } from "react-icons/io";

const staggerMenuItems = stagger(0.2, { startDelay: 0.2 });
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > prevScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setPrevScrollY(scrollY.get());
    };

    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollY, prevScrollY]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeitem, setactiveitem] = useState();

  const data = [
    {
      image: Pointer,
    },
    {
      image: Menuicon,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const Extendmenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    animate("li", isMenuOpen ? { opacity: 1 } : { opacity: 0 }, {
      duration: 0.2,
      delay: isMenuOpen ? staggerMenuItems : 0,
    });
  }, [isMenuOpen]);

  const active =
    "uppercase text-xs font-bold cursor-pointer list-none text-[#FF7143]";
  const unactive = "uppercase text-xs font-bold cursor-pointer list-none";

  const linkitem = [
    "HOME",
    "who are we",
    "OUR SOLUTIONS",
    "portfolio",
    "products",
    "blog",
    "Careers",
    "CONTACT US",
  ];

  const handleredirect = (link) => {
    switch (link) {
      case "HOME":
        router.push("/");
        break;
      case "who are we":
        router.push("/Aboutus");
        break;
      case "OUR SOLUTIONS":
        router.push("/Oursolution");
        break;
      case "portfolio":
        router.push("/Portfolio");
        break;
      case "products":
        router.push("/Products");
        break;
      case "blog":
        router.push("/Blog");
        break;
      case "Careers":
        router.push("/Careers");
        break;
      case "CONTACT US":
        router.push("/Contactus");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    switch (pathname) {
      case "/":
        setactiveitem("HOME");
        break;
      case "/Aboutus":
        setactiveitem("who are we");
        break;
      case "/Oursolution":
        setactiveitem("OUR SOLUTIONS");
        break;
      case "/Portfolio":
        setactiveitem("portfolio");
        break;
      case "/Products":
        setactiveitem("products");
        break;
      case "/Blog":
        setactiveitem("blog");
        break;
      case "/Careers":
        setactiveitem("Careers");
        break;
      case "/Contactus":
        setactiveitem("CONTACT US");
        break;

      case pathname.startsWith("/Jobdetails"):
        setactiveitem("Careers");
        break;
      case pathname.startsWith("/Oursolution"):
        setactiveitem("OUR SOLUTIONS");
        break;
      default:
        setactiveitem("");
    }
  }, [pathname]);



  return (

   

    <motion.div initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{duration:0.5 }}  className="fixed transform -translate-x-1/2 -translate-y-1/2 md:top-10 lg:top-10 top-3 md:left-14 lg:left-14 left-4 w-11/12 mx-auto    h-14 flex justify-between items-center z-20">
      <div className="md:hidden lg:hidden  bg-white ring-1 ring-gray-300 rounded-full h-8 px-4 justify-between items-center gap-2 absolute z-10 flex ">
        <p className="uppercase  text-[0.7rem] font-bold ">MENU</p>
        <Sheet>
          <SheetTrigger>
            <div>
              <div className="relative flex justify-center h-6 w-6 overflow-hidden  bg-black  rounded-full items-center">
                {data.map(
                  (value, i) =>
                    currentIndex === i && (
                      <motion.div
                        key={i}
                        initial={{ x: 10, opacity: 0 }}
                        whileInView={{ x: 2, opacity: 1 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.5, type: "spring" }}
                      >
                        <Image
                          onClick={Extendmenu}
                          className="h-6 w-6 cursor-pointer"
                          src={value.image}
                          alt="Menuicon"
                        />
                      </motion.div>
                    )
                )}
              </div>
            </div>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <div className="flex justify-between items-center w-full">
                  <div>
                    <Image className="h-10 w-20" src={Logo} alt="logo" />
                  </div>
                  <div className="w-8 h-8 bg-black rounded-full flex justify-center items-center">
                    <SheetClose>
                      <span className="text-lg font-bold text-white p-2  text-center">
                        X
                      </span>
                    </SheetClose>
                  </div>
                </div>
              </SheetTitle>
              <SheetDescription>
                <div className="flex flex-col justify-between sm:gap-24 gap-16  items-start mt-8 overflow-scroll">
                  <div className="flex justify-center items-start gap-4 flex-col w-full">
                    {linkitem.map((value, index) => (
                      <div
                        key={index}
                        className="w-full flex justify-start items-start flex-col gap-4"
                      >
                        <SheetClose>
                          <span
                            onClick={() => handleredirect(value)}
                            className={
                              activeitem === value
                                ? "text-sm font-semibold uppercase text-[#FF7143]"
                                : "text-sm font-semibold uppercase text-black"
                            }
                          >
                            {value}
                          </span>
                        </SheetClose>
                        <Divider />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-cente items-center text-center w-full">
                    <SheetClose>
                      <button
                        onClick={() => router.push("/Contactus")}
                        className="ring-1 ring-black h-8 bg-black text-white rounded-full  w-52 font-bold"
                      >
                        GET STARTED
                      </button>
                    </SheetClose>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <motion.div
        initial={{ width: 160 }}
        animate={{
          width: isMenuOpen ? "100%" : [1000, 800, 600, 400, 200, 160],
        }}
        transition={{ duration: 2, type: "spring" }}
        className="md:flex lg:flex  bg-white ring-1 ring-gray-300 rounded-full h-10 px-4 justify-between items-center gap-4 absolute z-10 hidden "
      >
        <motion.div
          className={
            isMenuOpen
              ? "flex justify-between overflow-hidden gap-2 items-center"
              : "flex justify-between w-16  overflow-hidden gap-4 items-center"
          }
        >
          <div>
            <p className="uppercase  text-xs font-bold ">MENU</p>
          </div>
          <motion.div
            initial={{ width: "100%", opacity: 0 }}
            animate={{
              width: isMenuOpen ? "80%" : 0,
              opacity: isMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.8 }}
            className="flex text-black justify-around gap-2 absolute items-center ml-24 overflow-hidden"
          >
            <Link href={"/"}>
              <li className={pathname === "/" ? active : unactive}>Home</li>
            </Link>
            <Link href={"/Aboutus"}>
              <li className={pathname === "/Aboutus" ? active : unactive}>
                WHO ARE WE
              </li>
            </Link>
            <Link href={"/Oursolution"}>
              <li className={pathname === "/Oursolution" ? active : unactive}>
                OUR SOLUTIONS
              </li>
            </Link>
            <Link href={"/Portfolio"}>
              <motion.span
                animate={{
                  display: isMenuOpen ? "" : "none",
                  opacity: isMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.8 }}
                className={pathname === "/Portfolio" ? active : unactive}
              >
                PORTFOLIO
              </motion.span>
            </Link>
            <Link href={"/Products"}>
              <motion.span
                animate={{
                  display: isMenuOpen ? "" : "none",
                  opacity: isMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.8 }}
                className={pathname === "/Products" ? active : unactive}
              >
                PRODUCTS
              </motion.span>
            </Link>
            <Link href={"/Blog"}>
              <motion.span
                animate={{
                  display: isMenuOpen ? "" : "none",
                  opacity: isMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.8 }}
                className={pathname === "/Blog" ? active : unactive}
              >
                BLOG
              </motion.span>
            </Link>
            <Link href={"/Careers"}>
              <motion.span
                animate={{
                  display: isMenuOpen ? "" : "none",
                  opacity: isMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.8 }}
                className={
                  pathname === "/Careers" || pathname.startsWith("/Jobdetails")
                    ? active
                    : unactive
                }
              >
                Careers
              </motion.span>
            </Link>
            <Link href={"/Contactus"}>
              <motion.span
                animate={{
                  display: isMenuOpen ? "" : "none",
                  opacity: isMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.8 }}
                className={pathname === "/Contactus" ? active : unactive}
              >
                CONTACT US
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        <div>
          {isMenuOpen ? (
            <Image
              onClick={Extendmenu}
              className="h-8 w-8 cursor-pointer"
              src={Closeicon}
              alt="Closeicon"
            />
          ) : (
            <div className="relative flex justify-center h-8 w-8 overflow-hidden  bg-black  rounded-full items-center">
              {data.map(
                (value, i) =>
                  currentIndex === i && (
                    <motion.div
                      key={i}
                      initial={{ x: 10, opacity: 0 }}
                      whileInView={{ x: 2, opacity: 1 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      <Image
                        onClick={Extendmenu}
                        className="h-8 w-8 cursor-pointer"
                        src={value.image}
                        alt="Menuicon"
                      />
                    </motion.div>
                  )
              )}
            </div>
          )}
        </div>
      </motion.div>

      {/* GET STARTED */}
      <div className="absolute  right-0 z-0">
        <Button
          onClick={() => router.push("/Contactus")}
          variant="solid"
          className="uppercase bg-black ring-1 ring-white rounded-full md:h-10 lg:h-10 h-8  md:w-44 lg:w-44 w-24  text-center text-white md:text-xs lg:text-xs text-[0.6rem] font-semibold"
        >
          GET STARTED
        </Button>
      </div>
    </motion.div>
   
  );
};

export default Nav;
