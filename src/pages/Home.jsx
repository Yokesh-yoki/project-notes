import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-[85vh] px-4 bg-gray-100">
        <div className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-10 drop-shadow-lg text-center">
          Welcome to My Application
        </div>
        <Link
          to="/login"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl shadow-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          Get Started
        </Link>
      </section>
    </>
  );
}
