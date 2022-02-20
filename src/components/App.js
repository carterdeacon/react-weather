import './App.css';
import useForecast from '../hooks/useForecast'
import SearchAutoComplete from './Search'
import Forecast from './Forecast'
import Loading from './Loading'
import { withTheme } from '@emotion/react';

function App() {
  const {isError, isLoading, forecast, handleRequest} = useForecast();

  const handleSubmit = (lat, lng) => {
    handleRequest(lat, lng)
  }

  return (
    <div className="App">
      < SearchAutoComplete submitSearch={handleSubmit}/>
      {!forecast && (
        <div>
          {isLoading && < Loading />}
        </div>

      )}
      {forecast && < Forecast forecast={forecast}/>}
    </div>
  );
}

export default App;
