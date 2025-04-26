import React, { useState } from "react";
import logokecil from "./images/logokecil.png";
import coffeeImg from "./images/coffee.jpeg";
import pizzaImg from "./images/pizza.jpg";

const menuItems = {
  kopi: [
    {
      title: "Premium Coffee Set",
      desc: "1 Espresso, 1 Cappuccino, 1 Americano, 3 pastries included",
      img: coffeeImg,
    },
    {
      title: "Signature Latte Trio",
      desc: "1 Vanilla Latte, 1 Caramel Latte, 1 Hazelnut Latte, 3 biscotti, free refills",
      img: coffeeImg,
    },
    {
      title: "Cold Brew Collection",
      desc: "1 Classic Cold Brew, 1 Vanilla Sweet Cream, 1 Nitro Cold Brew, 3 cookies included",
      img: coffeeImg,
    },
    {
      title: "Indonesian Coffee Flight",
      desc: "1 Sumatra, 1 Java, 1 Bali blend, 3 mini chocolate cakes, tasting notes included",
      img: coffeeImg,
    },
    {
      title: "Mocha Madness Package",
      desc: "1 White Chocolate Mocha, 1 Dark Chocolate Mocha, 1 Caramel Mocha, 3 brownies",
      img: coffeeImg,
    },
    {
      title: "Espresso Experience",
      desc: "1 Double Espresso, 1 Macchiato, 1 Cortado, 3 almond biscotti, sparkling water",
      img: coffeeImg,
    },
  ],
  pizza: [
    {
      title: "Margherita Supreme",
      desc: "1 Large Margherita Pizza, 1 Garlic Bread, 1 Dipping Sauce, 3 drinks included",
      img: pizzaImg,
    },
    {
      title: "Pepperoni Feast",
      desc: "1 Extra Large Pepperoni Pizza, 1 Cheese Sticks, 1 Chicken Wings, 3 sodas",
      img: pizzaImg,
    },
    {
      title: "Veggie Supreme",
      desc: "1 Medium Veggie Pizza, 1 Garden Salad, 1 Breadsticks, 3 fruit smoothies",
      img: pizzaImg,
    },
    {
      title: "Meat Lovers Special",
      desc: "1 Large Meat Lovers Pizza, 1 Potato Wedges, 1 BBQ Ribs, 3 beer options",
      img: pizzaImg,
    },
    {
      title: "Hawaiian Paradise",
      desc: "1 Medium Hawaiian Pizza, 1 Coconut Shrimp, 1 Tropical Salad, 3 pineapple juices",
      img: pizzaImg,
    },
    {
      title: "BBQ Chicken Delight",
      desc: "1 Large BBQ Chicken Pizza, 1 Onion Rings, 1 Cole Slaw, 3 craft sodas",
      img: pizzaImg,
    },
  ],
};

export default function MenuPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("pizza");

  const renderCard = (item, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-md overflow-hidden p-6 relative transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] group"
    >
      <div className="flex justify-between">
        <div className="flex-1 pr-4">
          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600 mb-1">{item.desc}</p>
          <p className="font-bold mt-4">Rp 23.10</p>
        </div>
        <div className="w-32 h-32 relative">
          <img
            src={item.img}
            alt={item.title}
            className="object-cover rounded-lg"
          />
          <button className="absolute -bottom-3 -right-3 bg-white rounded-full p-2 shadow-md transition-all duration-200 ease-in-out group-hover:bg-gray-900 group-hover:text-white group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="p-4 bg-white shadow-md">
        <nav className="flex justify-between items-center">
          <img src={logokecil} alt="logo" className="h-10" />
          <ul className="hidden md:flex gap-6">
            <li><a href="/" className="font-medium">Home</a></li>
            <li><a href="/menu-item" className="font-medium">Intip Menu Kami</a></li>
            <li>
              <a
                className="text-white bg-gray-800 hover:bg-gray-900 rounded-xl px-5 py-2 text-sm font-medium"
                href="https://www.crazygames.co.id/game/rush-hour-cafe"
              >
                Ayo Main
              </a>
            </li>
          </ul>
          <button onClick={() => setSidebarOpen(true)} className="md:hidden text-3xl">☰</button>
        </nav>

        {sidebarOpen && (
          <>
            <div className="fixed top-0 left-0 w-[250px] h-full bg-white shadow-md z-50 p-5">
              <div className="flex justify-between items-center mb-6">
                <img src={logokecil} alt="logo" className="h-10" />
                <button
                  className="text-2xl font-bold"
                  onClick={() => setSidebarOpen(false)}
                >
                  &times;
                </button>
              </div>
              <ul className="flex flex-col gap-4">
                <li><a href="/" className="text-lg font-medium">Home</a></li>
                <li><a href="/menu-item" className="text-lg font-medium">Intip Menu Kami</a></li>
                
                <li>
                  <a
                    className="text-white bg-gray-800 hover:bg-gray-900 rounded-xl px-5 py-2 text-sm font-medium block text-center"
                    href="https://www.crazygames.co.id/game/rush-hour-cafe"
                  >
                    Ayo Main
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setSidebarOpen(false)}
            ></div>
          </>
        )}
      </header>

      <main className="px-8 py-6">
        <div className="flex items-center gap-4 border-b border-gray-200 pb-4 mb-6">
          <button
            onClick={() => setActiveTab("pizza")}
            className={`px-6 py-2 rounded-full font-medium ${
              activeTab === "pizza" ? "bg-gray-900 text-white" : "text-gray-700"
            }`}
          >
            Pizza
          </button>
          <button
            onClick={() => setActiveTab("kopi")}
            className={`px-6 py-2 rounded-full font-medium ${
              activeTab === "kopi" ? "bg-gray-900 text-white" : "text-gray-700"
            }`}
          >
            Kopi
          </button>
        </div>

        <h2 className="text-3xl font-bold mb-6 capitalize">{activeTab}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems[activeTab].map(renderCard)}
        </div>
      </main>
    </div>
  );
}
