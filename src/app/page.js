import AboutSection from "@/components/AboutSection/page";
import Hero from "@/components/Hero/page";
import MedicalServices from "@/components/MedicalServices/page";
import Emergency from "@/components/Emergency/page";
import Team from "@/components/Team/page";

import { databaseConnection } from "@/database/database";

const Homepage = () => {
  databaseConnection();
  return (
    <div>
      <Hero />
      <AboutSection />
      <MedicalServices />
      <Emergency />
      <Team />
    </div>
  );
};

export default Homepage;
