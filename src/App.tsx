import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Audience from "./components/Audience";
import About from "./components/About";
import Download from "./components/Download";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Audience />
        <About />
        <Download />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
