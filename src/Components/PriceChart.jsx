import React from 'react';

function PriceChart(props){
  let data= props.type;
  return <>
    
    <div class="col-lg-4">
          <div class="card mb-5 mb-lg-0">
            <div class="card-body">
              <h5 class="card-title text-muted text-uppercase text-center">{data.product}</h5>
              <h6 class="card-price text-center">${data.price}<span class="period">/month</span></h6>
              <hr/>
              <ul class="fa-ul">
                <li><span class="fa-li"><i class="fas fa-check"></i></span>{data.users}</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>{data.storage}</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>{data.public_projects}</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>{data.access}</li>
                <li class={data.privateProjectsEnabler?"":"text-muted"}><span class="fa-li"><i class={data.privateProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.private_projects}</li>
                <li class={data.phoneSupportEnabler?"":"text-muted"}><span class="fa-li"><i class={data.phoneSupportEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.phone_support}</li>
                <li class={data.subdomainEnabler?"":"text-muted"}><span class="fa-li"><i class={data.subdomainEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.subdomain}</li>
                <li class={data.statusReportEnabler?"":"text-muted"}><span class="fa-li"><i class={data.statusReportEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.status_report}</li>
              </ul>
              <div class="d-grid">
                <a href="#" class="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
    </div>  
    
  </>
}
export default PriceChart;