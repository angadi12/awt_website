'use client'
import React, { createContext, useState,useEffect } from 'react';
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const pathname = usePathname()
    const router=useRouter()

  const [selectedTab, setSelectedTab] = useState('UIUX');


  const pathnameToTabKey = {
    '/Oursolution/Development/Mobileappdev': 'DEVELOPMENT',
    '/Oursolution/Development/Websitedev': 'DEVELOPMENT',
    '/Oursolution/Development/Softwaredev': 'DEVELOPMENT',
    '/Oursolution/Services/DigitalMakeover': 'SERVICES',
    '/Oursolution/Services/CloudConsultation': 'SERVICES',
    '/Oursolution/Services/GraphicDesign': 'SERVICES',

    '/Oursolution/Marketing/DigitalMarketing': 'MARKETING',
    '/Oursolution/Marketing/Seo': 'MARKETING',
    '/Oursolution/Marketing/DigitalBranding': 'MARKETING',

    '/Oursolution/Mobileappdesign': 'UIUX',
    '/Oursolution/Websitedesign': 'UIUX',
    '/Oursolution/Webappdesign': 'UIUX',
   
  };

  // Update the selected tab based on the current pathname
  useEffect(() => {
    const tabKey = pathnameToTabKey[pathname];
    if (tabKey) {
      setSelectedTab(tabKey);
    }
  }, [pathname]);



  const handleTabSelectionChange = (key) => {
    setSelectedTab(key);
    // window.scrollTo({ top: 530, behavior: 'smooth' });
    router.push('/Oursolution')
  };

  return (
    <NavigationContext.Provider value={{ selectedTab, handleTabSelectionChange }}>
      {children}
    </NavigationContext.Provider>
  );
};
