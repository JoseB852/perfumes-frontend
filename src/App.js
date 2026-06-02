import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./view/Home/Home";
import { PrefumProvider } from "./Context/PerfumContext";
import ClickSpark from "./components/ClickSpark/ClickSpark";

function App() {
  return (
    <PrefumProvider>
      <BrowserRouter>

        <ClickSpark
          sparkColor="rgba(0,0,0,0.4)"
          sparkSize={10}
          sparkRadius={18}
          sparkCount={8}
          duration={400}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ClickSpark>

      </BrowserRouter>
    </PrefumProvider>
  );
}

export default App;