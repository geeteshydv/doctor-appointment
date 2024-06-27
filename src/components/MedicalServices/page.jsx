import Image from "next/image";
import card1 from "@/images/card1.jpeg";
import card2 from "@/images/card2.jpeg";
import card3 from "@/images/card3.jpeg";

const page = () => {
  return (
    <div className="bg-blue-50 pt-20">
      <div className="font-semibold text-1xl text-[#00a6fb] flex justify-center m-5">
        | About Us
      </div>
      <div className="font-semibold text-4xl flex justify-center m-5">
        Our Medical Services
      </div>

      {/* card1 */}
      <div className="flex lg:flex-row sm:flex-col  justify-evenly">
        <div className="bg-white p-5 m-3 rounded-xl shadow-md w-[380px]">
          <Image
            className="w-[350px] h-[300px] hover:scale-105"
            src={card1}
            alt="card1"
          />
          <div className="font-semibold text-2xl m-2 ml-0 hover:text-blue-500">
            Diagnose & Research
          </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            quidem, illo eaque itaque aspernatur vero.
          </div>
        </div>
        {/* card2 */}
        <div className="bg-white p-5 m-3 rounded-xl shadow-md w-[380px]">
          <Image
            className=" w-[350px] h-[300px] hover:scale-105"
            src={card2}
            alt="card2"
          />
          <div className="font-semibold text-2xl m-2 ml-0 hover:text-blue-500">
            Holter Heart surgery
          </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            quidem, illo eaque itaque aspernatur vero.
          </div>
        </div>
        {/* card3 */}
        <div className="bg-white p-5 m-3 rounded-xl shadow-md w-[380px]">
          <Image
            className="w-[350px] h-[300px]  hover:scale-105"
            src={card3}
            alt="card3"
          />
          <div className="font-semibold text-2xl m-2 ml-0 hover:text-blue-500">
            Online Monitoring
          </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            quidem, illo eaque itaque aspernatur vero.
          </div>
        </div>
      </div>
      <div className="text-white flex justify-center m-8 pb-20">
        <button className="p-5 bg-[#00a6fb] rounded-lg h-[50px] w-[150px] flex items-center justify-center">
          View more
        </button>
      </div>
    </div>
  );
};

export default page;
