import SocialButtons from './SocialButtons';

function RestaurantCard({ restaurant }) {
    const { name, rating, address, contact } = restaurant;

    return (
        <div className="card">
            <h3>{name}</h3>

            <p className="rating">⭐ {rating}</p>

            <p className="address">
                {address?.street}, {address?.city} , {address?.state}
            </p>

            {contact?.phone && (
                <p className="phone">📞 {contact.phone}</p>
            )}

            <SocialButtons restaurant={restaurant} />
        </div>
    );
}


export default RestaurantCard;
