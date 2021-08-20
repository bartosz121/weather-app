import { WiMoonNew, WiMoonWaxingCrescent2, WiMoonFirstQuarter, WiMoonWaxingGibbous2, WiMoonFull, WiMoonWaningGibbous2, WiMoonThirdQuarter, WiMoonWaningCrescent2 } from 'react-icons/wi';
import { GiCat } from 'react-icons/gi';

export const getMoonPhaseIcon = (moonphase: number): JSX.Element => {
    let icon = <GiCat />;
    let text = '';

    switch(true) {
        case (moonphase === 1) || (moonphase === 0):
            icon = <WiMoonNew className='icon' />;
            text = 'New Moon';
            break;
        case (moonphase > 0 && moonphase < 0.25):
            icon = <WiMoonWaxingCrescent2 className='icon' />;
            text = 'Waxing Crescent';
            break;
        case (moonphase === 0.25):
            icon = <WiMoonFirstQuarter className='icon' />;
            text = 'First Quarter';
            break;
        case (moonphase > 0.25 && moonphase < 0.5):
            icon = <WiMoonWaxingGibbous2 className='icon' />;
            text = 'Waxing Gibbous';
            break;
        case (moonphase === 0.5):
            icon = <WiMoonFull className='icon' />;
            text = 'Full Moon';
            break;
            
        case (moonphase > 0.5 && moonphase < 0.75):
            icon = <WiMoonWaningGibbous2 className='icon' />;
            text = 'Waning Gibbous';
            break;
        case (moonphase === 0.75):
            icon = <WiMoonThirdQuarter className='icon' />;
            text = 'Third Quarter';
            break;
        case (moonphase > 0.75 && moonphase < 1):
            icon = <WiMoonWaningCrescent2 className='icon' />;
            text = 'Waning Crescent';
            break;
        default: 
            icon = <GiCat className='icon' />
    }

    return <div className='icon-with-text'>
        {icon} <span>{text}</span>
    </div>
}