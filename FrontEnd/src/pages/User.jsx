import React from "react";

import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import AccountContent from "../Components/AccountContent/AccountContent";
import Transactions from "../Components/transactions/transactions";

import TransactionData from "../datas/TransactionData";

export default function User() {
    return(
            <div id="root">
                <Nav />
                <main className="main bg-dark">
                    <AccountContent />
                    {TransactionData.map((account, index) => (
                    <Transactions key={index} {...account} />
                    ))}
                </main>
                <Footer />
            </div>
    )
}