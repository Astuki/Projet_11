import React from "react";
import Nav from "../Components/Nav/Nav"
import Hero from "../Components/Hero/Hero"
import Features from "../Components/Features/Features"
import Footer from "../Components/Footer/Footer"


export default function Home() {
    return(
            <div id="root">
                <Nav />
                <main>
                    <Hero />
                    <Features />
                </main>
                <Footer />
            </div>
    )
}