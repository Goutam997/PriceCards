import React from 'react';
import './App.css';
import PriceChart from './Components/PriceChart';

function App() {

  let data = [{
    product: 'FREE',
    price: 0,
    users: "Single User",
    storage: "5GB",
    public_projects: "Unlimited Public Projects",
    access: "Community Access",
    private_projects: "Unlimited Private Projects",
    privateProjectsEnabler:false,
    phone_support: "Dedicated Phone Support",
    phoneSupportEnabler:false,
    subdomain: "Free Subdomain",
    subdomainEnabler:false,
    status_report: "Monthly Status Reports",
    statusReportEnabler:false
  },
  {
    product: "PLUS",
    price: 9,
    users: "5 Users",
    storage: "50GB",
    public_projects: "Unlimited Public Projects",
    access: "Community Access",
    private_projects: "Unlimited Private Projects",
    phone_support: "Dedicated Phone Support",
    subdomain: "Free Subdomain",
    status_report: "Monthly Status Reports",
    privateProjectsEnabler:true,
    phoneSupportEnabler:true,
    subdomainEnabler:true,
    statusReportEnabler:false
  },
  {
    product: "PRO",
    price: 49,
    users: "Unlimited Users",
    storage: "150GB",
    public_projects: "Unlimited Public Projects",
    access: "Community Access",
    private_projects: "Unlimited Private Projects",
    phone_support: "Dedicated Phone Support",
    subdomain: "Unlimited Free Subdomain",
    status_report: "Monthly Status Reports",
    privateProjectsEnabler:true,
    phoneSupportEnabler:true,
    subdomainEnabler:true,
    statusReportEnabler:true
  }];

  return <>
    <section class="pricing py-5">
      <div class="container">
        <div class="row">

          <PriceChart type={data[0]}/>
          <PriceChart type={data[1]}/>
          <PriceChart type={data[2]}/>

        </div>
      </div> 
  </section>  
  </>
}

export default App;