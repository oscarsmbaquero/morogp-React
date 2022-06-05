import React from 'react'
import './Footer.scss';

const Footer = ({networks}) => {
  return (
    <div class="footer">
      {networks.length > 0 ? networks.map((network) => {
        return (
          <div key={JSON.stringify(network)} >            
              <img src={network.image} alt={network.name} class="footer__image" />            
          </div>
        );
      }) :null}
    </div>
  );
};

export default Footer