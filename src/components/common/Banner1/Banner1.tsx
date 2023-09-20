import { services } from "../../../../db/Services/services";
import BannerItem from "./BannerItem";


const Banner1 = ({ icon, title, body }:any) => {
  console.log(services)
  return (
    <div className="flex md:bg-white justify-center md:flex-row flex-col md:border-none border-t border-white border-opacity-25" >
      {
        services.map((x) => (
          <BannerItem  icon={x.icon} key={x.id} title={x.title} body={x.body} />
        ))
      }
    </div>
  );
};
 
export default Banner1;
