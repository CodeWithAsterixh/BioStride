import { useState } from "react";


export  function useOpenPeopleList() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  

  return {
    sidebarOpen,
    setSidebarOpen,
  };
}
