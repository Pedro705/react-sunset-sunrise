import { useState } from 'react';
import HistoricalSolarForm from './HistoricalSolarForm';
import HistoricalSolarChart from './HistoricalSolarChart';
import HistoricalSolarTable from './HistoricalSolarTable';
import '../styles/components/HistoricalSolarPage.css';

const HistoricalSolarPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('');

  const handleSearch = async (formData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const queryParams = new URLSearchParams(formData).toString();
      const apiUrl = process.env.REACT_APP_SUNRISE_SUNSET_API_URL;

      const response = await fetch(`${apiUrl}/historical_solar_record?${queryParams}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = await response.json();
      setResults(data);
      setLocation(formData.location);
    } catch (error) {
      setResults(null);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="historical-solar-page">
      <h1>Historical Solar Records </h1>
      
      <HistoricalSolarForm
        onSubmit={handleSearch} 
        isLoading={isLoading} 
      />

      {error && <div className="error-message">{error}</div>}

      {results && (
        <div className="results-container">
          <h2>Results for {location}</h2>
          <div className="chart-and-table">
            <HistoricalSolarChart data={results} />
            <HistoricalSolarTable data={results} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoricalSolarPage;