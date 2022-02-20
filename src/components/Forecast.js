import DailyForecast from './DailyForecast'
import FutureForecast from './FutureForecast.js'

const Forecast = ({forecast}) => {
    const { currentDay } = forecast;
    const { futureDays } = forecast;
    return (
        <div className='forecast-wrapper'>
            < DailyForecast forecast={currentDay} />
            < FutureForecast forecast={futureDays} />
        </div>
    )
}

export default Forecast