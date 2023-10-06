import Running from "@/components/icons/Running";
import {  services, type servicesCardType } from "../../../../db/Services/services";
import BannerItem from "./BannerItem";




export default  function Banner1({ services }: {services ?: servicesCardType[]}) {
  return (
    <div className="flex md:bg-white justify-center md:flex-row flex-col md:border-none border-t border-white border-opacity-25" >
      
      {
        services?.map((x , key) => (
          <BannerItem  icon={<Running fill="#624C7B" w="25"/>} key={key} title={x.title} body={x.description} />
        ))
      }
    </div>
  );
};
 

