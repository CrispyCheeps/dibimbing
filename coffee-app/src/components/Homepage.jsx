import { useEffect, useState } from "react";
import "../components/Homepage.css"; // Import your CSS file


export default function HomePage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [menuContent, setMenuContent] = useState("");

  // Load menu-item.html on initial load
  useEffect(() => {
    fetch("/menu-item.html") // make sure public folder has menu-item.html
      .then((res) => res.text())
      .then((data) => setMenuContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  const handleHamburgerClick = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <main>
      {/* Navigation */}
      <header>
        <nav>
          <ul className="navbar flex items-center">
            <img src="/images/logokecil.png" alt="" />
            <li className="hidden md:block">
              <a href="#">Home</a>
            </li>
            <li className="hidden md:block">
              <a href="/menu-item.html">Intip Menu Kami</a>
            </li>
            <a
              className="hidden md:block text-white bg-gray-800 hover:bg-gray-900 rounded-xl text-sm px-5 py-2.5 ml-[30em]"
              href="https://www.crazygames.co.id/game/rush-hour-cafe"
            >
              Ayo Main
            </a>
            <button
              onClick={handleHamburgerClick}
              className="md:hidden text-3xl"
            >
              ☰
            </button>
          </ul>
        </nav>

        {/* Sidebar */}
        {isSidebarOpen && (
          <>
            <div className="sidebar fixed bg-white shadow-lg p-6 z-50 top-0 left-0 h-screen w-64">
              <div className="flex justify-between items-center mb-8">
                <img src="/images/logokecil.png" alt="Logo" className="h-10" />
                <button
                  onClick={handleCloseSidebar}
                  className="text-2xl font-bold"
                >
                  &times;
                </button>
              </div>
              <ul className="flex flex-col space-y-6">
                <li>
                  <a href="/" className="text-lg font-medium">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/menu-item.html" className="text-lg font-medium">
                    Intip Menu Kami
                  </a>
                </li>
                <li className="mt-8">
                  <a
                    className="w-full text-white bg-gray-800 rounded-xl px-5 py-3"
                    href="https://www.crazygames.co.id/game/rush-hour-cafe"
                  >
                    Ayo Main
                  </a>
                </li>
              </ul>
            </div>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black opacity-50 z-40"
              onClick={handleCloseSidebar}
            ></div>
          </>
        )}
      </header>

      {/* Content area */}
      <div id="content" className="p-4">
        <div
          dangerouslySetInnerHTML={{ __html: menuContent }}
          className="bg-white rounded-xl shadow-md"
        />
      </div>
    </main>
  );
}
