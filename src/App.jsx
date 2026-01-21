import { useEffect, useState, useMemo } from 'react';
import { getRestaurants } from './services/api';
import RestaurantCard from './components/RestaurantCard';
import MapView from './components/MapView';
import StatsPanel from './components/StatsPanel';
import { useRestaurantsInRadius } from './hooks/useRestaurantsInRadius';
import './styles.css';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [sortType, setSortType] = useState('name');
  const [point, setPoint] = useState(null);
  const [radius, setRadius] = useState(500);

  const defaultCenter = [19.4326, -99.1332];

  useEffect(() => {
    getRestaurants()
      .then(data => {
        setRestaurants(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const sortedRestaurants = useMemo(() => {
    const copy = [...restaurants];

    if (sortType === 'name') {
      copy.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortType === 'rating') {
      copy.sort((a, b) => b.rating - a.rating);
    }

    if (sortType === 'rating1') {
      copy.sort((a, b) => a.rating - b.rating);
    }

    return copy;
  }, [restaurants, sortType]);

  const { count, avg, std } = useRestaurantsInRadius(
    restaurants,
    point,
    radius
  );

  if (loading) return <p style={{ padding: 20 }}>Cargando restaurantes...</p>;
  if (error) return <p style={{ padding: 20 }}>Error: {error}</p>;

  return (
    <div className="container">
      <header className="header">
        <h1>🍽️ Melp Restaurants</h1>
        <p>Discover the best places in the city</p>
      </header>

      <div className="controls">
        <button onClick={() => setSortType('name')}>
          Ordenar por nombre
        </button>
        <button onClick={() => setSortType('rating')}>
          Ordenar por rating (mayor a menor)
        </button>
        <button onClick={() => setSortType('rating1')}>
          Ordenar por rating (menor a mayor)
        </button>
      </div>

      <section style={{ marginBottom: '40px' }}>
        <h2>📍 Restaurants near a point</h2>

        <label>
          Radius (meters):
          <input
            type="number"
            value={radius}
            min={100}
            step={100}
            onChange={e => setRadius(Number(e.target.value))}
            style={{ marginLeft: '8px' }}
          />
        </label>

        <div className="map-wrapper">
          <MapView
          center={point || defaultCenter}
          radius={radius}
          onSelectPoint={setPoint}
          />
        </div>


        {point && (
          <StatsPanel
            count={count}
            avg={avg}
            std={std}
          />
        )}
      </section>

      <section>
        <h2>🍴 All Restaurants</h2>

        <div className="grid">
          {sortedRestaurants.map(r => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
