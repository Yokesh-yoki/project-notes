import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import NotFound from "../pages/NotFound";
import BasicLayouts from "../Layouts/BasicLayouts";
import Intro from "../pages/dashboard/Intro";
import Counter from "../pages/dashboard/Counter";
import Profile from "../pages/dashboard/Profile";
import TodoList from "../pages/dashboard/TodoList";
import DashboardLayouts from "../Layouts/DashboardLayouts";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayouts />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayouts />}>
        <Route path="/dashboard/intro" element={<Intro />} />
        <Route path="/dashboard/counter" element={<Counter />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/todo-list" element={<TodoList />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
