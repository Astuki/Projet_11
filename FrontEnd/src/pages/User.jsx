import React from "react";

import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import AccountContent from "../Components/AccountContent/AccountContent";
import BankAccount from "../Components/BankAccount/BankAccount";

import TransactionData from "../datas/TransactionData";

export default function User() {
    return(
            <div id="root">
                <Nav />
                <main className="main bg-dark">
                    <AccountContent />
                    {TransactionData.map((account, index) => (
                    <BankAccount key={index} {...account} />
                    ))}
                </main>
                <Footer />
            </div>
    )
}