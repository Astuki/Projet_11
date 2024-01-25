import React from "react";

import Nav from "../Components/Nav/Nav"
import Footer from "../Components/Footer/Footer"
import SignIn from "../Components/SignIn/SignIn"



export default function Login() {
    return(
            <div>
                <Nav />
                <main className="main bg-dark">
                    <SignIn />
                </main>
                <Footer />
            </div>
    )
}