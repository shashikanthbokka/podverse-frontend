import HomePage from "./components/homepage";
import Trending from "./components/trending";
import Explore from "./components/explore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Library from "./components/library";
import Video from "./components/video";
import Login from "./components/login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/library" element={<Library />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
