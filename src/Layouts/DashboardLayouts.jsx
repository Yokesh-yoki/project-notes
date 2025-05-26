import React from "react";
import { Link, Outlet } from "react-router";
const paths = [
  { path: "/dashboard/intro", Text: "Intro" },
  { path: "/dashboard/counter", Text: "counter" },
  { path: "/dashboard/profile", Text: "profile" },
  { path: "/dashboard/todo-list", Text: "todo" },
];
function DashboardLayouts() {
  return (
    <>
      <div className="min-h-screen bg-indigo-50 flex">
        <aside className="w-64 bg-indigo-800 text-white flex flex-col py-8 px-4 shadow-lg min-h-screen">
          <h1 className="text-2xl font-bold mb-10 text-center tracking-wide">
            Dashboard
          </h1>
          <nav>
            <ul className="space-y-4">
              {paths.map(({ path, Text }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="block px-4 py-2 rounded-lg font-semibold text-indigo-100 hover:bg-indigo-700 hover:text-white transition-colors duration-200"
                  >
                    {Text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            to={"/Home"}
            className="mt-auto w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-200"
          >
            Logout
          </Link>
        </aside>
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}

export default DashboardLayouts;
