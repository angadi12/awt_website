import Blogpost from "@/components/Homecomponets/Blogpost";
import Brandslider from "@/components/Homecomponets/Brandslider";
import Digitalsuccess from "@/components/Homecomponets/Digitalsuccess";
import FAQ from "@/components/Homecomponets/FAQ";
import Hero from "@/components/Homecomponets/Hero";
import Introductioncrousel from "@/components/Homecomponets/Introductioncrousel";
import Moto from "@/components/Homecomponets/Moto";
import Quotes from "@/components/Homecomponets/Quotes";
import Slidertext from "@/components/Homecomponets/Slidertext";
import Solutionscrousel from "@/components/Homecomponets/Solutionscrousel";
import Technologies from "@/components/Homecomponets/Technologies";
import Technologiesmobile from "@/components/Homecomponets/Technologiesmobile";
import Whoworkmobile from "@/components/Homecomponets/Whoworkmobile";
import Workwith from "@/components/Homecomponets/Workwith";
import Script from "next/script";

export default function Home() {
  return (
    <main className="w-full m-0 p-0">
      <Script
        src="https://www.kenyt.ai/botapp/ChatbotUI/dist/js/bot-loader.js"
        type="text/javascript"
        data-bot="111784435"
      ></Script>

      <Hero />
      <Moto />
      <Brandslider />
      <Introductioncrousel />
      <div className="overflow-hidden py-16">
        <Solutionscrousel />
      </div>
      <Digitalsuccess />
      <div className="hidden md:flex lg:flex">
        <Technologies />
      </div>
      <div className="md:hidden lg:hidden flex">
        <Technologiesmobile />
      </div>
      <Slidertext />
      <div className="hidden md:flex lg:flex">
        <Workwith />
      </div>
      <div className="md:hidden lg:hidden flex">
        <Whoworkmobile />
      </div>
      <Quotes />
      <Blogpost />
    </main>
  );
}
