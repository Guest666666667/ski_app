//路由配置
import App from "../app";
import Home from "../pages/Home";
import Map from "../pages/Map";
import NotYet from "../pages/NotYet";
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
const router = (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate replace to="/map" />} />
        <Route path="home" element={<Home />} />
        <Route path="map" element={<Map />} />
        <Route path="notYet" element={<NotYet />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default router