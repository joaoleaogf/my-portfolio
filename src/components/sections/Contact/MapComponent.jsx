import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom Marker Icon definition
const customIcon = L.divIcon({
    className: 'custom-marker-icon',
    html: '<div class="marker-pin"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
});

const MapComponent = () => {
    // Itajubá coordinates
    const centerPosition = [-22.4269, -45.4539];
    
    // Mock route for demonstration of routing/graph analysis
    const routeCoordinates = [
        [-22.4269, -45.4539],
        [-22.4220, -45.4490],
        [-22.4180, -45.4510],
        [-22.4150, -45.4560],
        [-22.4190, -45.4600]
    ];

    return (
        <MapContainer
            center={centerPosition}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%", borderRadius: "inherit" }}
            zoomControl={true}
            attributionControl={false}
        >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {/* Routing demonstration */}
            <Polyline
                positions={routeCoordinates}
                color="#E0A458"
                weight={3}
                dashArray="5, 10"
                opacity={0.8}
            />

            {/* Start Node */}
            <Marker position={routeCoordinates[0]} icon={customIcon}>
                <Popup className="custom-popup">
                    <strong>Ponto de Partida</strong> <br /> Análise de Rota
                </Popup>
            </Marker>

            {/* End Node */}
            <CircleMarker 
                center={routeCoordinates[routeCoordinates.length - 1]} 
                radius={6}
                pathOptions={{ color: '#E0A458', fillColor: '#ecb978', fillOpacity: 0.8 }}
            >
                <Popup className="custom-popup">
                    <strong>Destino</strong> <br /> Otimização Concluída
                </Popup>
            </CircleMarker>
            
            {/* Intermediate Nodes */}
            {routeCoordinates.slice(1, routeCoordinates.length - 1).map((pos, idx) => (
                <CircleMarker 
                    key={idx}
                    center={pos} 
                    radius={4} 
                    pathOptions={{ color: '#ffffff', fillColor: '#fff', fillOpacity: 0.5, weight: 1 }}
                />
            ))}
        </MapContainer>
    );
};

export default MapComponent;
