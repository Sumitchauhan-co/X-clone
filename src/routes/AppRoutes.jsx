import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Notification from "../pages/Notification";
import Follow from "../pages/Follow";
import NotFound from "../pages/NotFound";
import App from "../App";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/x-clone" element={<App />}>
        <Route index element={<Navigate to={`/x-clone/home`} replace/>}/>
        <Route path="/x-clone/home" element={<Home />} />
        <Route path="/x-clone/explore" element={<Explore />} />
        <Route path="/x-clone/notification" element={<Notification />} />
        <Route path="/x-clone/follow" element={<Follow />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;