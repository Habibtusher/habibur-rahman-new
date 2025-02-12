import { Blogs } from "./(home)/blogs/Blogs";
import { HeroSection } from "./(home)/hero/HeroSection";


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Blogs />
    </div>
  );
}
