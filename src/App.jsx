import "./App.css";
import FetchContextProvider from "./contexts/FetchContextProvider";
import Section1 from "./sections/Section1";
import Section3 from "./sections/Section3";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <FetchContextProvider>
      <div className="bg-black h-screen w-screen grid xl:grid-cols-[0.8fr_1.2fr_1fr] lg:grid-cols-[0.5fr_1.7fr_1fr] sm:grid-cols-[0.5fr_1.5fr]">
        <Section1 />
        <Outlet />
        <Section3 />
      </div>
    </FetchContextProvider>
  );
}

export default App;
