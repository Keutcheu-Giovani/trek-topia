import {
  Navbar,
  Features,
  Footer,
  Camp,
  GetApp,
  Guide,
  Hero,
} from "./components/index";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <Camp />
        <Guide />
        <Features />
        <GetApp />
      </main>
      <Footer />
    </div>
  );
};

export default App;
