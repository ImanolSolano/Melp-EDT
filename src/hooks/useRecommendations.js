import { useMemo } from 'react';
import { distanceInMeters } from '../utils/geo';

export function useRecommendations(
    restaurants,
    point,
    radius,
    minRating,
    maxRating
) {
    return useMemo(() => {
        if (!point) return [];

    return restaurants
        .filter(r => {
            const loc = r.address?.location;
            if (!loc) return false;

        const d = distanceInMeters(
            point.lat,
            point.lng,
            loc.lat,
            loc.lng
        );

        return (
            d <= radius &&
            r.rating >= minRating &&
            r.rating <= maxRating
        );
        })
        .map(r => ({
            ...r,
            distance: distanceInMeters(
                point.lat,
                point.lng,
                r.address.location.lat,
                r.address.location.lng
            ),
        }))
        .sort((a, b) => a.distance - b.distance);
    }, [restaurants, point, radius, minRating, maxRating]);
}
