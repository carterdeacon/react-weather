import './FutureForecast.css'

const FutureForecast = ({forecast}) => {

    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date).getDay();    
        return isNaN(dayOfWeek) ? null : 
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
      }
      
    return (
        <div>
            <div className='future-list'>
                {forecast.map((day, index) => {
                    return (
                        <div key={index} className='future-weekday'>
                            <p className='day-string'>{getDayOfWeek(day.weekday)}</p>
                            <img src={day.imgUrl} alt="" />
                            <p>{day.min}&deg;</p>
                            <p>{day.max}&deg;</p>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default FutureForecast