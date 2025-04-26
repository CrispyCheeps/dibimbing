import { useNavigate } from "react-router-dom";
import logokecil from "../images/logokecil.png";
export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`sidebar fixed top-0 left-0 w-[250px] h-full bg-white shadow-lg p-5 z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <img src={logokecil} alt="Logo" className="h-10" />
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-2xl font-bold"
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col space-y-6">
          <li>
            <a
              className="text-lg font-medium hover:text-gray-700"
              onClick={() => useNavigate("/")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="./menu-item.html"
              className="text-lg font-medium hover:text-gray-700"
              onClick={() => useNavigate("/")}
            >
              Intip Menu Kami
            </a>
          </li>
          <li className="mt-8">
            <a
              className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-sm px-5 py-3"
              href="https://www.crazygames.co.id/game/rush-hour-cafe"
            >
              Ayo Main
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
