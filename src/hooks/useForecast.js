import { useState } from "react"
import axios from 'axios'
import moment from 'moment'

const useForecast = () => {
    const [isError, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [forecast, setForecast] = useState(null)
    
    const handleRequest = async (lat, long) => {
        setLoading(true);
        axios.get(`http://localhost:3001/api/?lattlong=${lat},${long}`)
            .then(response => createForecast(response.data));
    } 

    const createForecast = data => {
        setLoading(false);
        const currentDay = currentDayForecast(data.consolidated_weather[0], data.title)
        const futureDays = futureDaysForecast(data.consolidated_weather);
        setForecast({currentDay, futureDays})
        // setLoading(false);
    }

    const currentDayForecast = (data, title) => {
        return ({
            weekday: moment(data.applicable_date).format('dddd'),
            date: moment(data.applicable_date).format('MMMM Do'),
            location: title,
            temperature: Math.round(data.the_temp),
            min: Math.round(data.min_temp),
            max: Math.round(data.max_temp),
            humidity: data.humidity,
            wind_speed: Math.round(data.wind_speed),
            weatherIcon: `https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
        })
    }

    const futureDaysForecast = (data) => {
        const futureDays = data.slice(1);
        return (
            futureDays.map(day => ({
                imgUrl: `https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`,
                min: Math.round(day.min_temp),
                max: Math.round(day.max_temp),
                weekday: day.applicable_date,
            }))
        )
    }

    return {
            isError,
            isLoading,
            forecast,
            handleRequest
        }
}

export default useForecast