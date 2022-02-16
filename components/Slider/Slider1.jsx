import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slider1 = () => {
  return (
    <div className="flex space-x-[5px]">
      <div className="w-[75px]  h-full">
        <div className="h-[175px] w-[75px]  flex flex-col justify-around items-center">
          <div className="h-[34] w-[34] rounded-[4px] p-[8px] border border-solid border-[#dddddd]">
            <AiOutlineLeft />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        <div className="">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=283,h=177/layout-engine/2022-01/chill-at-home-2.jpg?61f4e2cddba26"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=283,h=177/layout-engine/2022-01/covid-not-over.jpg?61f4e2d0e2c9b"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=283,h=177/layout-engine/2022-01/ice-cream-25.jpg?61f4e2d568ae9"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=283,h=177/layout-engine/2021-12/dry-fruits.png?61f4e2d9a35c0"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=283,h=177/layout-engine/2021-12/dry-fruits.png?61f4e2d9a35c0"
            alt=""
          />
        </div>
      </div>
      <div className="w-[75px] h-full">
        <div className="h-[175px] w-[75px] flex flex-col justify-around items-center">
          <div className="h-[34] w-[34] rounded-[4px] p-[8px] border border-solid border-[#dddddd]">
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
