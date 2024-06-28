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
      {/* <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5e26c02bdaaca76c6fcf11b6/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script--> */}

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
