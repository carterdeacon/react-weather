import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';

import './DailyForecast.css'

const DailyForecast = ({forecast}) => {
    const calcMinTemperatureColors = (temp) => {
        if (temp < 5) {
            return '#95D9D7'
        } else if (temp < 10) {
            return '#61BDFA'
        } else if (temp < 15) {
            return '#3AACF8'
        } else if (temp < 20) {
            return '#27A4F7'
        } else if (temp > 20) {
            return '#139BF6'
        }
    }

    const calcMaxTemperatureColors = (temp) => {
        if (temp < 5) {
            return '#46A09F'
        } else if (temp < 20) {
            return '#F9A111'
        } else if (temp < 25) {
            return '#F59611'
        } else if (temp < 30) {
            return '#EE8111'
        } else if (temp < 35) {
            return '#DF5612'
        } else if (temp > 35) {
            return '#C20114'
        }
    }

    return (
        <div className='daily-container'>
            <section className='daily-container'>
                <div className='daily-weather'>
                    <div>
                        <img className='weather-icon' src={forecast.weatherIcon} alt="" />
                    </div>
                    <div>
                        <p>{forecast.temperature}&deg;</p>
                    </div>
                </div>
                <div className='farmer-comment'>
                    <p>Mate... it's a fuckin' scorcher!</p>
                </div>
            </section>
            <h3>Today</h3>
            <section className='stats-today'>
                <div className='row'>
                    <div style={{backgroundColor: calcMinTemperatureColors(forecast.min)}} className='min-temp bonus-data'>
                        <AcUnitIcon className='icon'/>
                        <p>Minimum {forecast.min}&deg;</p>
                    </div>
                    <div className='humidity bonus-data'>
                        <DeviceThermostatIcon className='icon'/>
                        <p>{forecast.humidity}% humidity</p>
                    </div>
                </div>
                <div className='row'>
                    <div style={{backgroundColor: calcMaxTemperatureColors(forecast.max)}} className='max-temp bonus-data'>
                        <WhatshotIcon className='icon'/>
                        <p>Maximum {forecast.max}&deg;</p>
                    </div>
                    <div className='wind-speed bonus-data'>
                        < AirIcon className='icon'/>
                        <p>{forecast.wind_speed}km/h gusts</p>
                    </div>
                </div>
            </section>

        </div>
        
    )
}

export default DailyForecast