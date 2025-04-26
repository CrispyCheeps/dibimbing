import React, { useState } from "react";
import logokecil from "../images/logokecil.png";
import coffeeImage from "../images/coffee.jpeg";
import pizzaImage from "../images/pizza.jpg";
import { Link } from "react-router-dom";

export default function MenuItem() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const kopiMenus = [
    {
      title: "Premium Coffee Set",
      desc: "1 Espresso, 1 Cappuccino, 1 Americano, 3 pastries included",
    },
    {
      title: "Signature Latte Trio",
      desc: "1 Vanilla Latte, 1 Caramel Latte, 1 Hazelnut Latte, 3 biscotti, free refills",
    },
    {
      title: "Cold Brew Collection",
      desc: "1 Classic Cold Brew, 1 Vanilla Sweet Cream, 1 Nitro Cold Brew, 3 cookies included",
    },
    {
      title: "Indonesian Coffee Flight",
      desc: "1 Sumatra, 1 Java, 1 Bali blend, 3 mini chocolate cakes",
    },
    {
      title: "Mocha Madness Package",
      desc: "1 White Chocolate Mocha, 1 Dark Chocolate Mocha, 1 Caramel Mocha, 3 brownies",
    },
    {
      title: "Espresso Experience",
      desc: "1 Double Espresso, 1 Macchiato, 1 Cortado, 3 almond biscotti",
    },
  ];

  const pizzaMenus = [
    {
      title: "Margherita Supreme",
      desc: "1 Large Margherita Pizza, 1 Garlic Bread, 1 Dipping Sauce, 3 drinks included",
    },
    {
      title: "Pepperoni Feast",
      desc: "1 Extra Large Pepperoni Pizza, 1 Cheese Sticks, 1 Chicken Wings, 3 sodas",
    },
    {
      title: "Veggie Supreme",
      desc: "1 Medium Veggie Pizza, 1 Garden Salad, 1 Breadsticks, 3 fruit smoothies",
    },
    {
      title: "Meat Lovers Special",
      desc: "1 Large Meat Lovers Pizza, 1 Potato Wedges, 1 BBQ Ribs, 3 beer options",
    },
    {
      title: "Hawaiian Paradise",
      desc: "1 Medium Hawaiian Pizza, 1 Coconut Shrimp, 1 Tropical Salad, 3 pineapple juices",
    },
    {
      title: "BBQ Chicken Delight",
      desc: "1 Large BBQ Chicken Pizza, 1 Onion Rings, 1 Cole Slaw, 3 craft sodas",
    },
  ];

  const renderMenuCard = (menu, image) => (
    <div
      key={menu.title}
      className="bg-white rounded-xl shadow-md overflow-hidden p-6 relative transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] group"
    >
      <div className="flex justify-between">
        <div className="flex-1 pr-4">
          <h3 className="font-bold text-lg mb-2">{menu.title}</h3>
          <p className="text-sm text-gray-600 mb-1">{menu.desc}</p>
          <p className="font-bold mt-4">Rp 23.10</p>
        </div>
        <div className="w-32 h-32 relative">
          <img src={image} alt={menu.title} className="object-cover rounded-lg" />
          <button className="absolute -bottom-3 -right-3 bg-white rounded-full p-2 shadow-md transition-all duration-200 group-hover:bg-gray-900 group-hover:text-white group-hover:scale-110">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <header>
        <nav className="flex items-center justify-between px-4 py-2">
          <img src={logokecil} alt="Logo" className="h-10" />
          <div className="hidden md:flex gap-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/menu-item" className="hover:underline">Intip Menu Kami</Link>
            <a
              href="https://www.crazygames.co.id/game/rush-hour-cafe"
              className="text-white bg-gray-800 hover:bg-gray-900 rounded-xl text-sm px-5 py-2.5"
            >
              Ayo Main
            </a>
          </div>
          <button onClick={() => setSidebarOpen(true)} className="md:hidden text-3xl">☰</button>
        </nav>

        {/* Sidebar Mobile */}
        {sidebarOpen && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)} />
            <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-4">
              <div className="flex justify-between items-center mb-6">
                <img src={logokecil} alt="Logo" className="h-10" />
                <button onClick={() => setSidebarOpen(false)} className="text-2xl">&times;</button>
              </div>
              <ul className="flex flex-col space-y-4">
                <Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link>
                <Link to="/menu-item" onClick={() => setSidebarOpen(false)}>Intip Menu Kami</Link>
                <a
                  href="https://www.crazygames.co.id/game/rush-hour-cafe"
                  className="text-white bg-gray-800 hover:bg-gray-900 rounded-xl text-sm px-5 py-2.5 mt-4"
                >
                  Ayo Main
                </a>
              </ul>
            </div>
          </>
        )}
      </header>

      <main className="mx-4 md:mx-16 mt-8">
        {/* Tabs */}
        <div className="flex items-center gap-4 border-b border-gray-200 pb-4 mb-6">
          <div className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium">Pizza</div>
          <div className="text-gray-700 font-medium">Kopi</div>
        </div>

        {/* Kopi */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Kopi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kopiMenus.map((item) => renderMenuCard(item, coffeeImage))}
          </div>
        </section>

        {/* Pizza */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Pizza</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pizzaMenus.map((item) => renderMenuCard(item, pizzaImage))}
          </div>
        </section>
      </main>
    </div>
  );
}
