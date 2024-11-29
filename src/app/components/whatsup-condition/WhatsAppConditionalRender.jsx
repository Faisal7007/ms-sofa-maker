"use client"; // Marks this component as a Client Component

import { usePathname } from "next/navigation";
import WhatsAppChat from "../../../app/components/whatsup/Whatsup";


const WhatsAppConditionalRender = () => {
  const pathname = usePathname();




  
  const adminRoutes = ["/admin", "/admin/settings", "/admin/add-product","/admin/products-list"];
  // console.log(pathname,'Path Name')

  return !adminRoutes.includes(pathname) ? <WhatsAppChat/> : null;
};

export default WhatsAppConditionalRender;
