import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Header() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <header>
                <Navbar />
                {/* I want side bar that bring sidebarOpen */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            </header>
        </>
    )
}