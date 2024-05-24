import Bottomnav from "@/components/Oursolutioncomponets/Bottomnav";
import Commonheader from "@/components/Oursolutioncomponets/Commonheader";
import { NavigationProvider } from './NavigationContext';


export default function SolutionLayout({
  children, // will be a page or nested layout
}) {
  return (
    <> 
   

   <NavigationProvider>
      <Commonheader/>
      {children}
      <Bottomnav/>
    </NavigationProvider>
    </>
  );
}
