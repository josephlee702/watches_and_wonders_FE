// 'react-router-dom' is a library that handles routing in React applications
// "BrowserRouter" is renamed as "Router"
// "Route" is used to define individual routes in my app
// "Routes" is used to wrap all Route components. It handles the routing and decides which component to render based on the current URL.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// imports BrandIndex component from BrandIndex.js , which will be rendered when the URL matches the /brands route
import BrandIndex from './pages/BrandIndex';
// same as above, just for WatchIndex component and /watches route
import WatchIndex from './pages/WatchIndex';

function App() {
  return (
    <Router>
      <Routes>
        {/* each Route maps a specific URL to a component that should be displayed when that URL is visited */}
        <Route path="/brands" element={<BrandIndex />} />
        <Route path="/watches" element={<WatchIndex />} />
      </Routes>
    </Router>
  );
}

export default App;
