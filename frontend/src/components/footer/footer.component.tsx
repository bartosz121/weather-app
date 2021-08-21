import React from 'react';

import FooterContainer from './footer.styles';

const Footer = () => {
    return (
        <FooterContainer className='footer'>
            <hr className='white'/>
            <div>Powered by <span className='paint'><a href="https://openweathermap.org/">OpenWeatherMap</a></span></div>
        </FooterContainer>
    )
}

export default Footer;