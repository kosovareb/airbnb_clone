"use client";

import { useEffect, useState } from "react";

interface ClientOnlyProps{
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({children}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(()=>{
    setHasMounted(true)
  },[]) 
  
if(!hasMounted){
    return null;  // return null when not mounted yet to avoid rendering anything in the browser
  
}

  return (
    <>
    {children}
    </>
  )
};

export default ClientOnly;
