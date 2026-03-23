import AboutUsTop from "../components/features/AboutUs/AboutUsTop";
import AboutHero from "../components/features/AboutUs/AboutHero";
import { useState, useEffect } from "react";
import Loading from "../components/common/Loading.tsx";

const AboutUs: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <Loading />;
  return (
    <main>
      <AboutUsTop />
      <AboutHero />
    </main>
  );
};

export default AboutUs;
