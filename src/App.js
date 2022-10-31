import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainArea from "./Components/MainArea/MainArea";
import ListNotes from "./Components/ListNotes/ListNotes";
import DisplayNote from "./Components/DisplayNote/DisplayNote";

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<ListNotes />}  />
        <Route path="/edit" element={<MainArea />}  />
        <Route path="/displayNote/:id" element={<DisplayNote />}  />
      </Routes>
    </>
  );
}

export default App;
