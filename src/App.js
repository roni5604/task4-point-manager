// src/App.js
import React, { useState } from 'react';
import Point from './Point';
import './App.css';

function App() {
  const [points, setPoints] = useState([]);
  const [formData, setFormData] = useState({
    x: '',
    y: '',
  });
  const [totalDistance, setTotalDistance] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddPoint = (e) => {
    e.preventDefault();
    const { x, y } = formData;
    if (x === '' || y === '') {
      alert('Please enter both x and y coordinates');
      return;
    }
    const newPoint = new Point(x, y);
    setPoints([...points, newPoint]);
    setFormData({ x: '', y: '' });
  };

  const calculateTotalDistance = () => {
    if (points.length < 2) {
      alert('Need at least two points to calculate distance');
      return;
    }
    let distance = 0;
    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      distance += Math.sqrt(dx * dx + dy * dy);
    }
    setTotalDistance(distance);
  };

  return (
    <div className="App">
      <h1>Point Application</h1>
      <form onSubmit={handleAddPoint}>
        <input
          type="number"
          name="x"
          value={formData.x}
          onChange={handleInputChange}
          placeholder="Enter x coordinate"
        />
        <input
          type="number"
          name="y"
          value={formData.y}
          onChange={handleInputChange}
          placeholder="Enter y coordinate"
        />
        <button type="submit">Add Point</button>
      </form>
      {points.length > 0 && (
        <div className="point-list">
          <h3>Points:</h3>
          <ul>
            {points.map((point, index) => (
              <li key={index}>{point.show()}</li>
            ))}
          </ul>
          <button onClick={calculateTotalDistance}>Calculate Total Distance</button>
          {totalDistance !== null && (
            <p>Total Distance: {totalDistance.toFixed(2)}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
