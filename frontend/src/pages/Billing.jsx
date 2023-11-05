import React from 'react'
import Header from '../components/Postpaid Dashboard Components/Header'
import BillingCard from '../components/Billing Components/BillingCard'


function Billing() {
  return (
    <div>
        <Header/>
        <div>
           <BillingCard/> 
        </div>
    </div>
  )
}

export default Billing