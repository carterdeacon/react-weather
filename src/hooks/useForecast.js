import { useState } from "react"
import axios from 'axios'
import moment from 'moment'

const locaionIDUrl = `https://www.metaweather.com/api/locationsearch/?query=`
const weatherUrl = `https://www.metaweather.com/api/location/ID`

const useForecast = () => {
    const [isError, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [forecast, setForecast] = useState(null)
    
    const handleRequest = async location => {
        setLoading(true);
        axios.get(`http://localhost:3001/api/?location=${location.value}`)
            .then(response => createForecast(response.data));
    } 

    const createForecast = data => {
        const currentDay = currentDayForecast(data.consolidated_weather[0], data.title)
        setForecast({currentDay})
    }

    const currentDayForecast = (data, title) => {
        return ({
            weekday: moment(data.applicable_date).format('dddd'),
            date: moment(data.applicable_date).format('MMMM Do'),
            location: title,
            temperature: Math.round(data.the_temp),
            min: Math.round(data.min_temp),
            max: Math.round(data.max_temp),
            weatherIcon: `https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
        })
    }

    return {
            isError,
            isLoading,
            forecast,
            handleRequest
        }
}

export default useForecast