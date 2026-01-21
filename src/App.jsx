import { useEffect, useState, useMemo } from 'react';
import { getRestaurants } from './services/api';
import RestaurantCard from './components/restaurantCard';
import './styles.css';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortType, setSortType] = useState('name'); // name | rating

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

  if (loading) return <p>Cargando restaurantes...</p>;
  if (error) return <p>Error: {error}</p>;

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

      <div className="grid">
        {sortedRestaurants.map(r => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
    </div>
  );

}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '16px'
};

export default App;
