import "./index.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="flex h-screen w-full font-inter bg-background text-text">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold">Welcome to QPLIX UI</h1>
        <p className="text-muted-text mt-2">Main content goes here</p>
      </div>
    </div>
  );
}

export default App;
