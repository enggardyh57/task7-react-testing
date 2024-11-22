import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";
import HomePage from "./pages/HomePage";
import MyResume from "./pages/MyResume";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project-detail/:projectId" element={<ProjectDetail />} />
          <Route path="/my-resume" element={<MyResume/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
