import { MapContainer, TileLayer, Marker, Circle, useMapEvents } from 'react-leaflet';
import { useState } from 'react';

function LocationMarker({ onSelect }) {
    useMapEvents({
        click(e) {
            onSelect(e.latlng);
        },
    });
    return null;
}

function MapView({ center, radius, onSelectPoint, restaurants = [] }) {
    return (
        <MapContainer
        center={center}
        zoom={13}
        className="leaflet-map"
        >

        <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker onSelect={onSelectPoint} />
        {center && (
            <>
            <Marker position={center} />
            <Circle center={center} radius={radius} />
            </>
        )}
        </MapContainer>
    );
}

export default MapView;
