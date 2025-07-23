import React, { useState, useEffect, useRef } from 'react';
import '../assets/scss/_03-Componentes/_MainCalculadora.scss';

const MainCalculadora = () => {
  // Estados del componente
  const [display, setDisplay] = useState('0');
  const [history, setHistory] = useState([]);
  const [soundOn, setSoundOn] = useState(true);
  const [activeKey, setActiveKey] = useState(null);
  
  // Referencias
  const equalButtonRef = useRef(null);
  const ceButtonRef = useRef(null);

  // Función para reproducir sonido
  const playSound = () => {
    if (soundOn) {
      const audio = new Audio('/audio/calculadora/sonidocalculadora.mp3');
      audio.play().catch(e => console.log("Error al reproducir sonido:", e));
    }
  };

  // Manejador de clic
  const handleClick = (value) => {
    playSound();
    setDisplay(prev => prev === '0' ? String(value) : prev + value);
    setActiveKey(value);
    setTimeout(() => setActiveKey(null), 200);
  };

  // Manejador de limpieza
  const handleClear = () => {
    playSound();
    setDisplay('0');
  };

  // Manejador de cálculo
  const handleCalculate = () => {
    try {
      const result = eval(display);
      if (result !== undefined && !isNaN(result)) {
        setHistory(prev => [...prev, `${display} = ${result}`]);
        setDisplay(String(result));
      } else {
        setDisplay('Error');
      }
    } catch (e) {
      setDisplay('Error');
    }
    playSound();
  };

  // Manejador de teclado
  const handleKeyDown = (event) => {
    const key = event.key;
    if (key === 'Enter') {
      event.preventDefault();
      equalButtonRef.current?.click();
    } else if (key === 'Escape') {
      handleClear();
    } else if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
      handleClick(key);
    }
    setActiveKey(key);
    setTimeout(() => setActiveKey(null), 200);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="retro-calculator">
      <div className="calculator-body">
        {/* Pantalla retro */}
        <div className="display-container">
          <div className="display">{display}</div>
        </div>
        
        {/* Teclado retro */}
        <div className="keyboard">
          {/* Fila 1 */}
          <button className="function" onClick={handleClear}>AC</button>
          <button className="function" onClick={() => handleClick('%')}>%</button>
          <button className="function" onClick={() => handleClick('/')}>÷</button>
          <button className="function" onClick={() => handleClick('*')}>×</button>
          
          {/* Fila 2 */}
          <button className="number" onClick={() => handleClick('7')}>7</button>
          <button className="number" onClick={() => handleClick('8')}>8</button>
          <button className="number" onClick={() => handleClick('9')}>9</button>
          <button className="function" onClick={() => handleClick('-')}>-</button>
          
          {/* Fila 3 */}
          <button className="number" onClick={() => handleClick('4')}>4</button>
          <button className="number" onClick={() => handleClick('5')}>5</button>
          <button className="number" onClick={() => handleClick('6')}>6</button>
          <button className="function" onClick={() => handleClick('+')}>+</button>
          
          {/* Fila 4 */}
          <button className="number" onClick={() => handleClick('1')}>1</button>
          <button className="number" onClick={() => handleClick('2')}>2</button>
          <button className="number" onClick={() => handleClick('3')}>3</button>
          <button 
            className="equals" 
            onClick={handleCalculate}
            ref={equalButtonRef}
          >=</button>
          
          {/* Fila 5 */}
          <button className="number zero" onClick={() => handleClick('0')}>0</button>
          <button className="number" onClick={() => handleClick('.')}>.</button>
          <button className="sound-toggle" onClick={() => setSoundOn(!soundOn)}>
            {soundOn ? '🔊 ON' : '🔈 OFF'}
          </button>
        </div>
      </div>

      {/* Historial retro */}
      <div className="history-ticket">
        <h3>Historial de Operaciones</h3>
        <div className="ticket-roll">
          {history.map((item, index) => (
            <div key={index} className="ticket-item">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCalculadora;