import { useState } from 'react';
import '../styles/components/HistoricalSolarForm.css';

const HistoricalSolarForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    location: '',
    startDate: '',
    endDate: ''
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
          id="startDate"
          value={formData.startDate}
          onChange={handleChange}
          max={today}
          required
        />
      </div>

      <div className="form-group">
        <label>End Date</label>
        <input
          type="date"
          id="endDate"
          value={formData.endDate}
          onChange={handleChange}
          min={formData.startDate}
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