import { Signup, Thankyou } from "./components";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <main className="font-roboto bg-[var(--dark-navy)] h-screen w-full flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/success" element={<Thankyou/>} />
      </Routes>
    </main>
  );
}

export default App;
