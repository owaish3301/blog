import { Separator } from "./components/ui/separator";
import NavBar from "./components/NavBar";
import BottomTabs from "./components/BottomTabs";
import SideBars from "./components/SideBars";

export default function App() {
  return (
    <div className="h-screen w-screen relative">
      {/* top part */}
      <NavBar />
      <Separator />

      {/* the main body part */}
      <div className="absolute bottom-0 w-full">
        <BottomTabs />
        <SideBars />
      </div>
    </div>
  );
}
