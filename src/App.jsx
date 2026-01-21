import { useEffect, useState, useMemo } from 'react';
import { getRestaurants } from './services/api';
import RestaurantCard from './components/restaurantCard';

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

    return copy;
  }, [restaurants, sortType]);

  if (loading) return <p>Cargando restaurantes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Melp Restaurants</h1>

      {/* CONTROLES */}
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setSortType('name')}>
          Ordenar por nombre
        </button>
        <button onClick={() => setSortType('rating')} style={{ marginLeft: '8px' }}>
          Ordenar por rating
        </button>
      </div>

      {/* LISTA */}
      <div style={gridStyle}>
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
