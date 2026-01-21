function RestaurantCard({ restaurant }) {
    const { name, rating, address, contact } = restaurant;

    return (
        <div style={cardStyle}>
            <h3>{name}</h3>

            <p>⭐ <strong>{rating}</strong></p>

            <p>
                {address.street}, {address.city}, {address.state}
            </p>

            {contact?.phone && (
                <p>📞 {contact.phone}</p>
            )}
        </div>
    );
}


const cardStyle = {
    background: '#fff',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
};

export default RestaurantCard;
