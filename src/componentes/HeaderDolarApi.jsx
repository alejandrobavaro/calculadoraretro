import React, { useState, useEffect } from "react";
import "../assets/scss/_03-Componentes/_HeaderDolarApi.scss";

const HeaderDolarApi = ({ expanded = false }) => {
  const [dollarData, setDollarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDollarValue = async () => {
      try {
        const response = await fetch("https://dolarapi.com/v1/dolares");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        const filteredData = data
          .filter(d => ['oficial', 'blue', 'bolsa', 'contadoconliqui', 'mayorista', 'tarjeta'].includes(d.casa))
          .map(d => ({
            nombre: d.casa === 'contadoconliqui' ? 'Liquid' : 
                   d.casa === 'oficial' ? 'Oficial' :
                   d.casa === 'blue' ? 'Blue' :
                   d.casa === 'bolsa' ? 'Bolsa' :
                   d.casa === 'mayorista' ? 'Mayorista' : 'Tarjeta',
            venta: d.venta?.toFixed(2) || 'N/A',
            compra: d.compra?.toFixed(2) || 'N/A'
          }));
          
        setDollarData(filteredData);
        setError(null);
      } catch (error) {
        console.error("Error fetching dollar data:", error);
        setError("Error al cargar datos del dólar");
      } finally {
        setLoading(false);
      }
    };

    fetchDollarValue();
    const interval = setInterval(fetchDollarValue, 300000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="dollar-container">Cargando cotizaciones...</div>;
  if (error) return <div className="dollar-container error">{error}</div>;

  return (
    <div className={`dollar-container ${expanded ? 'expanded' : 'compact'}`}>
      {expanded ? (
        <table className="dollar-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Compra</th>
              <th>Venta</th>
            </tr>
          </thead>
          <tbody>
            {dollarData.map((dollar, index) => (
              <tr key={`dollar-${index}`}>
                <td className="dollar-name">{dollar.nombre}</td>
                <td>${dollar.compra}</td>
                <td>${dollar.venta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        dollarData.slice(0, 3).map((dollar, index) => (
          <div key={`dollar-${index}`} className="dollar-item">
            <span className="dollar-name">{dollar.nombre}</span>: ${dollar.venta}
          </div>
        ))
      )}
    </div>
  );
};

export default HeaderDolarApi;