"use client";
import Hero from "../components/Hero"
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="bg-slate-900 w-[1500px] h-[800px] top-[100px]">
            <Navbar />             
            <Hero />                   
        </div>
    );
}