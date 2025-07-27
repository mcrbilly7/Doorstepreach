import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Dashboard = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const [language, setLanguage] = useState('en');
  const [deliveries, setDeliveries] = useState(148);
  const [earnings, setEarnings] = useState(312.8);
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [mapCenter, setMapCenter] = useState([32.7767, -96.7970]); // Dallas

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setUploadedPhoto(URL.createObjectURL(file));
  };

  const translate = {
    en: {
      welcome: `Welcome, ${user?.email}`,
      logout: 'Log Out',
      deliveries: 'Deliveries Made',
      earnings: 'Earnings',
      rating: 'Verified Rating',
      map: 'Route Map',
      status: 'Status',
      upload: 'Upload Proof of Delivery',
      verified: '✅ Verified Account',
      level: `🌟 Level ${Math.min(5, Math.floor(deliveries / 50))} Stepper`,
    },
    es: {
      welcome: `Bienvenido, ${user?.email}`,
      logout: 'Cerrar sesión',
      deliveries: 'Entregas Realizadas',
      earnings: 'Ganancias',
      rating: 'Calificación Verificada',
      map: 'Mapa de Ruta',
      status: 'Estado',
      upload: 'Subir Prueba de Entrega',
      verified: '✅ Cuenta Verificada',
      level: `🌟 Nivel ${Math.min(5, Math.floor(deliveries / 50))} Repartidor`,
    },
  };

  const t = translate[language];

  return (
    <div className="dashboard-page dark-mode">
      <header className="dashboard-header">
        <h1>{t.welcome}</h1>
        <button onClick={handleLogout} className="logout-button">{t.logout}</button>
        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
          <option value="en">🇺🇸 English</option>
          <option value="es">🇪🇸 Español</option>
        </select>
      </header>

      <div className="dashboard-content">
        <section className="summary-cards">
          <div className="card"><h3>{t.deliveries}</h3><p>{deliveries}</p></div>
          <div className="card"><h3>{t.earnings}</h3><p>${earnings.toFixed(2)}</p></div>
          <div className="card"><h3>{t.rating}</h3><p>⭐️⭐️⭐️⭐️⭐️</p></div>
        </section>

        <section className="map-section">
          <h2>{t.map}</h2>
          <MapContainer center={mapCenter} zoom={12} style={{ height: '300px', width: '100%' }}>
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={mapCenter}>
              <Popup>Your Delivery Start Point (Dallas)</Popup>
            </Marker>
          </MapContainer>
        </section>

        <section className="upload-section">
          <h2>{t.upload}</h2>
          <input type="file" accept="image/*" onChange={handlePhotoUpload} />
          {uploadedPhoto && (
            <div style={{ marginTop: '10px' }}>
              <img src={uploadedPhoto} alt="Uploaded" style={{ maxWidth: '100%', borderRadius: '8px' }} />
            </div>
          )}
        </section>

        <section className="status-badges">
          <h2>{t.status}</h2>
          <div className="badge verified">{t.verified}</div>
          <div className="badge star-level">{t.level}</div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
