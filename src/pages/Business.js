import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Business = () => {
  const { user } = useContext(UserContext);
  const [doors, setDoors] = useState(100);
  const [photoProof, setPhotoProof] = useState(true);
  const [estimate, setEstimate] = useState(0.20); // base price

  const price = photoProof ? 0.25 : 0.20;
  const total = (doors * price).toFixed(2);

  const [language, setLanguage] = useState('en');
  const t = {
    en: {
      title: 'Business Dashboard',
      email: 'Logged in as',
      toggleProof: 'Require Photo Proof?',
      selectDoors: 'How many doors?',
      priceEstimate: 'Estimated Total',
      submit: 'Launch Campaign',
      note: '* Pricing adjusts based on neighborhood and timing.',
      status: 'Stepper Progress',
      verified: 'Verified Stepper',
      language: 'Select Language',
    },
    es: {
      title: 'Panel del Cliente',
      email: 'Conectado como',
      toggleProof: '¿Requiere Prueba Fotográfica?',
      selectDoors: '¿Cuántas puertas?',
      priceEstimate: 'Costo Estimado',
      submit: 'Lanzar Campaña',
      note: '* El precio varía según vecindario y horario.',
      status: 'Progreso del Repartidor',
      verified: 'Repartidor Verificado',
      language: 'Seleccionar Idioma',
    }
  };

  const i18n = t[language];

  const launchCampaign = () => {
    alert('📬 Your flyer delivery campaign has been launched!');
  };

  return (
    <div className="business-page dark-mode">
      <header className="business-header">
        <h1>{i18n.title}</h1>
        <p>{i18n.email}: {user?.email}</p>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">🇺🇸 English</option>
          <option value="es">🇪🇸 Español</option>
        </select>
      </header>

      <div className="campaign-form">
        <label>{i18n.selectDoors}</label>
        <input
          type="number"
          value={doors}
          onChange={(e) => setDoors(parseInt(e.target.value))}
          min={10}
          max={5000}
        />

        <label>
          <input
            type="checkbox"
            checked={photoProof}
            onChange={(e) => setPhotoProof(e.target.checked)}
          />
          {i18n.toggleProof}
        </label>

        <div className="estimate">
          <h3>{i18n.priceEstimate}</h3>
          <p>${total}</p>
        </div>

        <button className="launch-btn" onClick={launchCampaign}>{i18n.submit}</button>
        <p className="note">{i18n.note}</p>
      </div>

      <div className="stepper-preview">
        <h2>{i18n.status}</h2>
        <div className="card">
          <h4>{i18n.verified}</h4>
          <p>⭐️⭐️⭐️⭐️⭐️  (Dallas, TX)</p>
          <p>ETA: 2 hours</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
