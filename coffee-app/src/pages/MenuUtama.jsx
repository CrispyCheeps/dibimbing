import React, { useState } from "react";
import "../index.css"; // if you have custom styles
import "../App.css"; // optional
import logokecil from "../images/logokecil.png";
import ceweMakanBanner from "../images/cewe-makan-banner.png";
import coffeeCup from "../images/coffee-cup.png";
import orderingApp from "../images/ordering-app.png";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";

export default function MenuUtama() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
      return (
        <main>
          <Header />
    
          <div id="content-test">
            <div className="mx-[114px] rounded-xl">
              <img src={ceweMakanBanner} alt="Banner" />
            </div>
    
            <section className="flex flex-wrap sm:flex-nowrap mx-[117px] my-[50px] bg-gray-200 p-[20px] gap-x-8 rounded-xl text-black">
              <div>
                <p>
                  Di Kupa-Kupi, kami percaya bahwa tidak ada yang lebih sempurna
                  dari kombinasi kopi hangat dan piza lezat...
                </p>
              </div>
              <div>
                <img className="sm:w-[200px]" src={coffeeCup} alt="Coffee Cup" />
              </div>
            </section>
    
            <p className="mx-[117px] text-right">
              Jadi, nikmati secangkir kopi terbaik sambil menyantap piza favorit Anda...
            </p>
    
            <div className="mx-[117px]">
              <img src={orderingApp} alt="Ordering App" />
            </div>
    
            {/* Stats */}
            <section className="flex justify-center items-center mt-8 bg-gray-100">
              <div className="flex flex-col md:flex-row w-full max-w-6xl bg-orange-400 rounded-xl overflow-hidden text-white text-center">
                {[
                  { number: "12+", label: "Jenis Kopi" },
                  { number: "10000+", label: "cups per day" },
                  { number: "690+", label: "Restaurants Partnered" },
                  { number: "17,457+", label: "Food Items" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex-1 p-8 flex flex-col justify-center items-center ${index !== 3 ? "border-b md:border-b-0 md:border-r border-white/30" : ""}`}
                  >
                    <div className="text-5xl font-bold mb-2">{item.number}</div>
                    <div className="text-lg">{item.label}</div>
                  </div>
                ))}
              </div>
            </section>
    
            <footer className="flex item-center justify-center mt-10">
              <img className="w-56" src={logokecil} alt="Footer Logo" />
            </footer>
          </div>
        </main>
      );
}