import doctor from "@/images/doctor.jpg";
import doctor1 from "@/images/doctor1.jpg";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="sm:flex-row justify-center items-center p-7 ">
      <div className=" relative h-[380px] w-full sm:w-auto">
        {/* Image section */}
        <div className="sm:absolute  sm:top-10 sm:left-10 sm:transform-none flex  justify-center">
          <Image
            src={doctor1}
            alt="doctor1"
            width={400}
            height={500}
            className=" w-80 rounded-3xl hover:shadow-lg hover:shadow-teal-400"
          />
        </div>
        <div className="absolute top-44 left-24  sm:top-40 sm:left-52 sm:transform-none">
          <Image
            src={doctor}
            alt="doctor"
            width={400}
            height={500}
            className=" w-60 rounded-3xl hover:shadow-lg hover:shadow-teal-300"
          />
        </div>
      </div>
      <div className="  flex-1 bg-red-500 p-10 rounded-xl">
        <h2 className="text-2xl font-bold text-white">About Us</h2>
        <p className="text-white mt-4">
          Welcome to our health center where we prioritize your well-being with
          exceptional care and comprehensive health services. Our dedicated team
          of professionals is here to support you on your journey to optimal
          health.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
