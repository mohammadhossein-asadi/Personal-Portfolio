import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full h-full min-h[100vh] bg-white ${darkMode && "dark"}`}
    >
      <div className="w-full h-full min-h-[100vh] bg-white">
        <div className="dark:bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e]">
          <Navbar darkMode={darkMode} isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}

export default App;
