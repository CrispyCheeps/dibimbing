import { useNavigate } from 'react-router-dom';
import logokecil from "../images/logokecil.png";
import ceweMakanBanner from "../images/cewe-makan-banner.png";
import coffeeCup from "../images/coffee-cup.png";
import orderingApp from "../images/ordering-app.png";

export default function Navbar() {

    const navigate = useNavigate();
    
  return (
    <>
      <nav>
        <ul className="navbar flex items-center justify-between px-4 py-2">
          <img src={logokecil} alt="Logo" className="h-10" />
          <li className="hidden md:block">
            <a onClick={() => navigate('/')}>Home</a>
          </li>
          <a className="hidden md:block" onClick={() => navigate('/menu-item')}>
            Intip Menu Kami
          </a>
          <a
            className="hidden md:block text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-sm px-5 py-2.5 ml-[30em] dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            href="https://www.crazygames.co.id/game/rush-hour-cafe"
          >
            Ayo Main
          </a>
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </ul>
      </nav>
    </>
  );
}
