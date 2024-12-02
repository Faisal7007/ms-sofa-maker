"use client"; // Marks this component as a Client Component

import { usePathname } from "next/navigation";
import WhatsAppChat from "../../../app/components/whatsup/Whatsup";
import { useContext, useEffect } from "react";
import { useFirebase } from "@/app/context/Firebase";
import UserContext from "@/app/contextApi/UserContext";


const WhatsAppConditionalRender = () => {
  const pathname = usePathname();
  const firebase=useFirebase()


// useEffect(()=>{
//   console.log(firebase.getID(),'IN WhatsAppCondition')
// },[])
const {idx} = useContext(UserContext)
console.log(idx,"IDx")

  
  const adminRoutes = ["/admin", "/admin/settings", "/admin/add-product","/admin/products-list","/admin/edit-product",`/admin/edit-product/${idx}`];
  // console.log(pathname,'Path Name')

  return !adminRoutes.includes(pathname) ? <WhatsAppChat/> : null;
};

export default WhatsAppConditionalRender;
