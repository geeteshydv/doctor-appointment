import HeroImage from '@/images/heroImage.png'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className=" sm:flex bg-gradient-to-r from-teal-200 to-teal-50 justify-between items-center">
      <div className="flex-1 p-5 sm:p-20 flex-col-reverse ">
        <p className="text-blue-500 font-semibold mb-8 ">
          |  Welcome to Doctor Ready
        </p>
        <h1 className=" font-semibold text-5xl mb-5">
          We Are Committed<br></br> To Your Health
        </h1>
        <p className="mb-7">Welcome to Doctor Ready, where your well-being is our top priority. We are dedicated to providing exceptional care and comprehensive health services tailored to meet your unique needs.</p>
        <button className="bg-blue-500   text-white font-semibold px-4 py-2 rounded-md hover:bg-black">Meet a Doctor</button>
      </div>
      <div className="flex-1">
        <Image src={HeroImage} alt='hero-image' width={600} />
      </div>
    </div>
  )
}

export default Hero