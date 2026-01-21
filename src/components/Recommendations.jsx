function Recommendations({ items }) {
    if (!items.length) return null;

    return (
        <section className="recommendations">
            <h3>⭐ Recommended nearby</h3>

            <ul>
                {items.map(r => (
                <li key={r.id}>
                    <strong>{r.name}</strong>
                    <span>⭐ {r.rating}</span>
                    <span>{Math.round(r.distance)} m</span>
                </li>
                ))}
            </ul>
        </section>
    );
}

export default Recommendations;
