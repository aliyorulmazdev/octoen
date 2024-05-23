
import MiddleComponent from "./_components/MiddleComponent";
import SidebarComponent from "./_components/SidebarComponent";
import ControlComponent from "./_components/ControlComponent";

function App() {
  return (
    <div className="flex justify-between items-start">
      <div className="w-1/6">
        <SidebarComponent />
      </div>
      <div className="w-4/6 overflow-y-auto">
        <MiddleComponent />
      </div>
      <div className="w-1/6">
        <ControlComponent />
      </div>
    </div>
  );
}

export default App;
