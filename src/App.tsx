import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetail from "./component/layouts/ProjectDetail";
import HomePage from "./pages/HomePage";
import MyResume from "./component/fragments/Home/MyResume";

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
