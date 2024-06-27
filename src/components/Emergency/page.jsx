import Image from "next/image";
import emergency_img from "@/images/emergency_img.png";
const page = () => {
  return (
    <div className="bg-blue-50 flex md:flex-row sm:flex-col py-20 mb-10 ">
      <div className="w-1/2 ">
        <div className="text-[#00a6fb] pl-10 text-2xl font-semibold my-5">
          | Emergency Helpline
        </div>
        <div className="text-5xl font-bold pl-10 my-5">
          Need Emergency Contact
        </div>
        <div className="pl-10 my-5 text-[22px] text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor inciut labore et dolore magna aliqua. Quis ipsum susp
          endisse ultrices gravida tempor inut labore et dolore magna aliqua.
        </div>
        <div className="pl-10 my-5 text-[22px] text-gray-500">
          ✅ 24/7 Contact Our Hospital.
        </div>
        <div className="pl-10 my-5 text-[22px] text-gray-500">
          ✅ 24 hours Open Our Hospital.
        </div>
        <div className="pl-10 my-5 text-[22px] text-gray-500">
          ✅ Emergency Contact Our Phone Number.
        </div>
        <div className="flex flex-row pl-10">
          <div className="bg-white rounded-lg p-4 mr-4 w-auto">
            <div className="text-gray-500">📞 Phone Number</div>
            <div>+880 13 2525 065</div>
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="text-gray-500">📩 Quick Your Email</div>
            <div>help.info@gmail.com</div>
          </div>
        </div>
      </div>
      <div>
        <Image
          className="w-[700px] h-[550px]"
          src={emergency_img}
          alt="emergency"
        />
      </div>
    </div>
  );
};

export default page;
