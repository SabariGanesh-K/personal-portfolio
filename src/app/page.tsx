import ProfileCard from "@/modules/profile/ProfileCard";
import CareerProgress from "@/modules/timeline/careerProgress";
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
    
  
        <CareerProgress />
    
    </main>
  );
}
