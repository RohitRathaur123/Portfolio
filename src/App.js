import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RohitPortfolio from "./component/RohitPortfolio";
function App() {
  return (
      <Router>
        <Routes>
          {/* All other routes with layout */}
          <Route
            path="*"
            element={
              <>
                <Routes>
                  <Route path="/" element={<RohitPortfolio />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </Router>
  );
}

export default App;
