import './App.css';
import useForecast from '../hooks/useForecast'
import Search from './Search'
import DailyForecast from './DailyForecast'

function App() {
  const {isError, isLoading, forecast, handleRequest} = useForecast();

  const handleSubmit = (value) => {
    handleRequest({value})
  }

  return (
    <div className="App">
      <h1>Farmer Weather</h1>
      < Search submitSearch={handleSubmit}/>
      {/* {isLoading && < Loading />} */}
      {forecast && < DailyForecast forecast={forecast}/>}
    </div>
  );
}

export default App;
