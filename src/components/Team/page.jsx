import Image from "next/image";
import doc1 from "@/images/doc1.png";
import doc2 from "@/images/doc2.png";
import doc3 from "@/images/doc3.png";
import doc4 from "@/images/doc4.png";
const page = () => {
  return (
    <div className="bg-blue-50 py-20">
      <div className="font-semibold text-1xl text-[#00a6fb] flex justify-center m-5">
        | Our Team
      </div>
      <div className="font-semibold text-5xl pb-10 flex justify-center m-5">
        Meet Our Team Members
      </div>
      <div className="flex flex-row justify-evenly">
        <div>
          <Image
            className="h-[300px] w-[300px] mx-4 rounded-t-xl"
            src={doc1}
            alt="doc1"
          />
          <div className="bg-green-500 mx-4 rounded-b-xl">
            <div className="m-4 mt-0 px-4 pt-3 text-2xl font-semibold text-white">
              Dr. Angle Reo
            </div>
            <div className="m-4 px-4 pb-3 font-medium text-white">
              Cencer Specialist
            </div>
          </div>
        </div>
        <div>
          <Image
            className="h-[300px] w-[300px] mx-4  rounded-t-xl"
            src={doc2}
            alt="doc1"
          />
          <div className="bg-green-500 mx-4 rounded-b-xl">
            <div className="m-4 mt-0 px-4 pt-3 text-2xl font-semibold text-white">
              Dr. Jon Miller
            </div>
            <div className="m-4 px-4 pb-3 font-medium text-white">
              Cancer Specialist
            </div>
          </div>
        </div>
        <div>
          <Image
            className="h-[300px] w-[300px] mx-4  rounded-t-xl"
            src={doc3}
            alt="doc1"
          />
          <div className="bg-green-500 mx-4 rounded-b-xl">
            <div className="m-4 mt-0 px-4 pt-3 text-2xl font-semibold text-white">
              Dr. Nennif Winds{" "}
            </div>
            <div className="m-4 px-4 pb-3 font-medium text-white">
              Cencer Specialist
            </div>
          </div>
        </div>
        <div>
          <Image
            className="h-[300px] w-[300px] mx-4  rounded-t-xl"
            src={doc4}
            alt="doc1"
          />
          <div className="bg-green-500 mx-4 rounded-b-xl">
            <div className="m-4 mt-0 px-4 pt-3 text-2xl font-semibold text-white">
              Dr. Happy Heya
            </div>
            <div className="m-4 px-4 pb-3 font-medium text-white">
              Cencer Specialist
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
