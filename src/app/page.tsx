import Carousel from "@/components/community/Carousel";
import CommunityBuildCarousel from "@/components/community/CommunityBuildCard";
import Downloadables from "@/components/downloadables/Downloadables";
import ProfileDescription from "@/modules/description/ProfileDescription";
import EpicHighlights from "@/modules/highlights/highlights";
import ProfileCard from "@/modules/profile/ProfileCard";
import ProjectsCatalogue from "@/modules/projects/ProjectsCatalogue";
import Skills from "@/modules/projects/SkillsAndProjects/Skills";
import Testimonial from "@/modules/testomonial.tsx/Testimonial";
import CareerProgress from "@/modules/timeline/careerProgress";
import EpicVictories from "@/modules/victories/EpicVictories";
import Header from "@/shared/header/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Header />
      <br />
      <br />
      <br />

      <ProfileCard />
      <br />
      <br />
      <br />

      <ProfileDescription />

      <br />
      <br />
      <br />
      <Downloadables />
      <br />
      <br />
      <br />

      <CareerProgress />
      <br />
      <br />
      <br />
      <Testimonial />
      <br />
      <br />
      <br />
      <EpicHighlights />
      <br />
      <br />
      <br />
      <EpicVictories/>
      <br/><br/><br/>
      <CommunityBuildCarousel/>
      <br/><br/><br/> <br/><br/><br/>
      
      <ProjectsCatalogue/>
    </main>
  );
}
