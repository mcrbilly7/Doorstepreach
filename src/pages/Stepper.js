import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Stepper = () => {
  const { user } = useContext(UserContext);
  const [language, setLanguage] = useState('en');
  const [proof, setProof] = useState(null);

  const [deliveriesToday, setDeliveriesToday] = useState(43);
  const [ratePerDoor, setRatePerDoor] = useState(0.15);
  const [photoBonus, setPhotoBonus] = useState(0.05);
  const total = (deliveriesToday * (ratePerDoor + photoBonus)).toFixed(2);

  const handleProofUpload = (e) => {
    const file = e.target.files[0];
    if (file) setProof(URL.createObjectURL(file));
  };

  const t = {
    en: {
      header: 'Stepper Dashboard',
      deliveries: 'Today’s Deliveries',
      rate: 'Pay Per Door',
      bonus: 'Photo Bonus',
      earnings: 'Total Earnings',
      upload: 'Upload Proof',
      status: 'Stepper Status',
      verified: '✅ Verified',
      select: 'Select Language',
    },
    es: {
      header: 'Panel del Repartidor',
      deliveries: 'Entregas de Hoy',
      rate: 'Pago por Entrega',
      bonus: 'Bono por Foto',
      earnings: 'Ganancias Totales',
      upload: 'Subir Prueba',
      status: 'Estado del Repartidor',
      verified: '✅ Verificado',
      select: 'Seleccionar Idioma',
    },
  };

  const i18n = t[language];

  return (
    <div className="stepper-page dark-mode">
      <header className="stepper-header">
        <h1>{i18n.header}</h1>
        <p>{user?.email}</p>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">🇺🇸 English</option>
          <option value="es">🇪🇸 Español</option>
        </select>
      </header>

      <div className="stepper-stats">
        <div className="card"><h3>{i18n.deliveries}</h3><p>{deliveriesToday}</p></div>
        <div className="card"><h3>{i18n.rate}</h3><p>${ratePerDoor.toFixed(2)}</p></div>
        <div className="card"><h3>{i18n.bonus}</h3><p>${photoBonus.toFixed(2)}</p></div>
        <div className="card total"><h3>{i18n.earnings}</h3><p>${total}</p></div>
      </div>

      <div className="upload-proof">
        <h2>{i18n.upload}</h2>
        <input type="file" onChange={handleProofUpload} />
        {proof && (
          <img src={proof} alt="Proof of Delivery" style={{ marginTop: '10px', maxWidth: '100%' }} />
        )}
      </div>

      <div className="stepper-status">
        <h2>{i18n.status}</h2>
        <div className="badge verified">{i18n.verified}</div>
        <div className="badge level">🌟 Level {Math.min(5, Math.floor(deliveriesToday / 10))}</div>
      </div>
    </div>
  );
};

export default Stepper;
