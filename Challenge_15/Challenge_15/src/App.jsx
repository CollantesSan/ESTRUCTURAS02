import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './SideBar';
import menuTree from './data/Menu';

const generateRoutes = (items) => {
  let routes = [];
  items.forEach(item => {
    if (item.component) {
      routes.push(<Route key={item.link} path={item.link} element={<item.component />} />);
    }
    if (item.children) {
      routes = routes.concat(generateRoutes(item.children));
    }
  });
  return routes;
};

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar menu={menuTree} />
        <div style={{ padding: '20px', flex: 1 }}>
          <Routes>
            {generateRoutes(menuTree)}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
