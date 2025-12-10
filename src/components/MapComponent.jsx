
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom Marker Icon definition
const customIcon = L.divIcon({
    className: 'custom-marker-icon',
    html: '<div class="marker-pin"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10] // Center
});

const MapComponent = () => {
    // Itajubá coordinates
    const centerPosition = [-22.4269, -45.4539];
    const [geoJsonData, setGeoJsonData] = useState(null);

    useEffect(() => {
        // Fetch Itajubá boundary (Code 3132404)
        fetch('https://servicodados.ibge.gov.br/api/v3/malhas/municipios/3132404?formato=application/vnd.geo+json')
            .then(response => response.json())
            .then(data => {
                setGeoJsonData(data);
            })
            .catch(error => console.error('Error loading GeoJSON:', error));
    }, []);

    const geoJsonStyle = {
        color: '#58a6ff',
        weight: 2,
        fillColor: '#1f6feb',
        fillOpacity: 0.2,
        dashArray: '5, 5' // Dashed line
    };

    return (
        <MapContainer
            center={centerPosition}
            zoom={12} // Adjusted zoom to see the boundary
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%", borderRadius: "inherit" }}
            zoomControl={false} // Custom control position or remove if cleaner
            attributionControl={false} // Clean up
        >
            <TileLayer
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {geoJsonData && <GeoJSON data={geoJsonData} style={geoJsonStyle} />}

            <Marker position={centerPosition} icon={customIcon}>
                <Popup className="custom-popup">
                    <strong>Itajubá</strong> <br /> Minas Gerais
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;
