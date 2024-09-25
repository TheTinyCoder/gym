import React from 'react';
import './Pricing.css';
import {plansData} from '../../data/plansData';
import feature_icon from '../../assets/whiteTick.png';


const Pricing = () => {
  return (
    <div className='pricing' id='pricing'>
      <div className='programs-header'>
            <h2>Pricing</h2>
      </div>
      <div className='plans'>
        {plansData.map((plan,i)=>(
          <div className='plan' key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className='features'>
              {plan.features.map((feature,i)=>(
                <div className='feature'>
                  <img src={feature_icon} alt=''/>
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div className='btn'>Join Now</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing