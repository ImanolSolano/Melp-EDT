import { useMemo } from 'react';
import { distanceInMeters } from '../utils/geo';
import { average, stdDeviation } from '../utils/stats';

export function useRestaurantsInRadius(restaurants, point, radius) {
    return useMemo(() => {
        if (!point) {
            return {
                restaurants: [],
                count: 0,
                avg: 0,
                std: 0,
            };
        }

        const inside = restaurants.filter(r => {
            const loc = r.address?.location;
            if (!loc) return false;
        
            const d = distanceInMeters(
                point.lat,
                point.lng,
                loc.lat,
                loc.lng
            );
        
            return d <= radius;
        });
    
        const ratings = inside.map(r => r.rating);

        return {
            restaurants: inside,
            count: inside.length,
            avg: average(ratings),
            std: stdDeviation(ratings),
        };
    }, [restaurants, point, radius]);
}
