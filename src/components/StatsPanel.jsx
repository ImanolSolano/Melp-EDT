function StatsPanel({ count, avg, std }) {
    return (
    <div className="stats">
        <p>🍽️ Restaurants: <strong>{count}</strong></p>
        <p>⭐ Average rating: <strong>{avg.toFixed(2)}</strong></p>
        <p>📊 Std deviation: <strong>{std.toFixed(2)}</strong></p>
    </div>
    );
}

export default StatsPanel;
