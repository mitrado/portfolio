import HeroImageSequencePC from "./Components/indexPC";
import HeroImageSequenceMobile from "./Components/indexMobile";
import Timeline from "./Components/timeline";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

function App() {
  return (
    <div>
      <BrowserView>
        <HeroImageSequencePC />
      </BrowserView>
      <MobileView>
        <HeroImageSequenceMobile />
      </MobileView>
      <div
        style={{ top: "35%" }}
        className="absolute top-0 my-10 left-1/4 sm:px-16 md:px-24 lg:px-40 xl:px-52 2xl:mx-24 animate-fade-in-down"
      >
        <p className="mb-3 text-3xl md:text-5xl font-semibold text-white text-center">
          Davide Areias
        </p>
        <p className="text-white text-center text-xl md:text-xl">Portfólio</p>
      </div>
      <Timeline />
      <div className="text-center h-screen">
        <p className="text-black text-3xl md:text-5xl font-semibold">
          Projetos
        </p>
      </div>
    </div>
  );
}

export default App;
