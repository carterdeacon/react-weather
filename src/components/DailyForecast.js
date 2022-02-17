import './DailyForecast.css'

const DailyForecast = ({forecast}) => {
    const {currentDay} = forecast;
    console.log(currentDay)
    console.log(currentDay.weatherIcon)
    return (
        <div className='daily-container'>
            <p>{currentDay.location}</p>
            <h2>{currentDay.weekday}</h2>
            <p>{currentDay.date}</p>
            <img className='weather-icon' src={currentDay.weatherIcon} alt="" />
            <h2>{currentDay.temperature}&deg;</h2>

        </div>
    )
}

export default DailyForecast