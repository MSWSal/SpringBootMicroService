import React from 'react';
import PrepaidCards from '../components/Postpaid Dashboard Components/PrepaidCards';
import Header from '../components/Postpaid Dashboard Components/Header'



export default function PostpaidDashboard() {
    return (
        <div className="flex flex-col w-full mt-8 ">
            <Header />
            <div className="grid grid-cols-5 gap-1 w-full ">
                {/* Left side for WalletCards */}
                <div className="col-span-3">
                    <PrepaidCards />
                </div>
                {/* Right side for WalletGraph */}
                <div className="col-span-2 ">
                </div>
            </div>
        </div>
    );
}
