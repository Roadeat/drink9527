import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <nav className="p-4 bg-blue-200">
        <Link className="mr-4" to="/">前台訂飲料</Link>
        <Link to="/admin">後台管理</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>前台訂飲料內容</div>} />
        <Route path="/admin" element={<div>後台管理內容</div>} />
      </Routes>
    </Router>
  );
}

export default App;