import React from "react";

import Nav from "../Components/Nav/Nav"
import Footer from "../Components/Footer/Footer"
import AccountContent from "../Components/AccountContent/AccountContent"

export default function User() {
    return(
            <div id="root">
                <Nav />
                <main className="main bg-dark">
                    <AccountContent />
                </main>
                <Footer />
            </div>
    )
}