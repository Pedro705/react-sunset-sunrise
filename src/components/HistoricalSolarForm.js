import { useState } from 'react';
import '../styles/components/HistoricalSolarForm.css';

const HistoricalSolarForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    location: '',
    start_date: '',
    end_date: ''
  });

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="historical-solar-form">
      <div className="form-group">
        <label>Location</label>
        <input
          type="text"
          id="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g., Lisbon, London"
          required
        />
      </div>

      <div className="form-group">
        <label>Start Date</label>
        <input
          type="date"
          id="start_date"
          value={formData.start_date}
          onChange={handleChange}
          max={today}
          required
        />
      </div>

      <div className="form-group">
        <label>End Date</label>
        <input
          type="date"
          id="end_date"
          value={formData.end_date}
          onChange={handleChange}
          min={formData.start_date}
          max={today}
          required
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
};

export default HistoricalSolarForm;