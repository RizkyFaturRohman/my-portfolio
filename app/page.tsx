import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import ChapterOne from "./components/sections/ChapterOne";
import ChapterTwo from "./components/sections/ChapterTwo";
import ChapterThree from "./components/sections/ChapterThree";
import ChapterFour from "./components/sections/ChapterFour";
import Footer from "./components/sections/Footer";

export default function Home(){
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="home"><Hero /></div>
      <div id="about"><ChapterOne /></div>
      <div id="works"><ChapterTwo /></div>
      <div id="contact"><ChapterThree /></div>
      <div id="footer"><ChapterFour /></div>
      <Footer />
    </main>
  );
}