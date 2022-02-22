import './App.css';
import useForecast from '../hooks/useForecast'
import SearchAutoComplete from './Search'
import Forecast from './Forecast'
import Loading from './Loading'
import Welcome from './Welcome'

function App() {
  const {isError, isLoading, forecast, handleRequest} = useForecast();

  const handleSubmit = (lat, lng) => {
    handleRequest(lat, lng)
  }

  return (
    <div className="App">
      < SearchAutoComplete submitSearch={handleSubmit}/>
      {!forecast && !isLoading && (
        <div>
          < Welcome />
        </div>
        )}
      {!forecast && (
        <div>
          {isLoading && < Loading />}
        </div>

      )}
      {forecast && (
        <div>
          < Forecast forecast={forecast}/>
        </div>
      )}
    </div>
  );
}

export default App;
