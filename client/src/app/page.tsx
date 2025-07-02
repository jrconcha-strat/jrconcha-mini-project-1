import Banner from "@/components/Banner";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
// import TechStackMarquee from "@/components/ui/TechStackMarquee";

export default function Home() {
  return (
    <div id="home-content">
      <Banner></Banner>
      <HeroSection></HeroSection>
      <SkillsSection></SkillsSection>
      <ProjectsSection></ProjectsSection>
    </div>
  );
}
