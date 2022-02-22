import DailyForecast from './DailyForecast'
import FutureForecast from './FutureForecast.js'
import {Animated} from "react-animated-css";

const Forecast = ({forecast}) => {
    const { currentDay } = forecast;
    const { futureDays } = forecast;
    return (
        <Animated animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
            <div className='forecast-wrapper'>
                < DailyForecast forecast={currentDay} />
                < FutureForecast forecast={futureDays} />
            </div>
        </Animated>
    )
}

export default Forecast