import { Content } from "@/components/AboutUs/Content/Content";
import { Hero } from "@/components/AboutUs/Hero/Hero";
import { Stats } from "@/components/AboutUs/Stats/Stats";
import { Clients } from "@/components/Commons/Clients";
import { Team } from "@/components/Team/Team";

export const AboutUsPage = () => {
  return (
    <>
      <Hero />
      <Content />
      <Stats />
      <Team />
      <Clients />
    </>
  );
};
