import React, { useState, useEffect } from 'react';
import '../assets/scss/_03-Componentes/_MainTemporizadorTareas.scss';
import { FaTrash, FaPlay, FaPause, FaRedo } from 'react-icons/fa';
import MainTemporizadorTimePicker from './MainTemporizadorTimePicker';
import Swal from 'sweetalert2';

const MainTemporizadorTareas = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [taskName, setTaskName] = useState('');
  const [totalTime, setTotalTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [progress, setProgress] = useState(100);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const newTotalTime = (hours * 3600 + minutes * 60 + seconds) * 1000;
    setTotalTime(newTotalTime);
    setTimeLeft(newTotalTime);
    setProgress(100);
  }, [hours, minutes, seconds]);

  useEffect(() => {
    if (isActive && !isPaused) {
      const id = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(id);
            setIsActive(false);
            playAlarm();
            return 0;
          }
          const newProgress = (prevTime / totalTime) * 100;
          setProgress(newProgress);
          return prevTime - 10;
        });
      }, 10);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [isActive, isPaused, totalTime]);

  const startTimer = () => {
    if (timeLeft > 0 && !isActive) {
      if (!taskName) {
        Swal.fire({
          title: '¡Atención!',
          text: 'Por favor ingrese un nombre para la tarea',
          icon: 'warning',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#0d6efd'
        });
        return;
      }
      setIsActive(true);
      setIsPaused(false);
      addToHistory();
    }
  };

  const addToHistory = () => {
    if (taskName) {
      setHistory((prevHistory) => [
        ...prevHistory,
        {
          taskName,
          hours,
          minutes,
          seconds,
          totalTime: hours * 3600 + minutes * 60 + seconds,
        },
      ]);
    }
  };

  const pauseTimer = () => {
    setIsPaused(true);
    clearInterval(intervalId);
  };

  const resetTimer = () => {
    setTimeLeft(totalTime);
    setIsActive(false);
    setIsPaused(false);
    setProgress(100);
    clearInterval(intervalId);
  };

  const deleteTimer = () => {
    resetTimer();
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTaskName('');
  };

  const playAlarm = () => {
    const audio = new Audio('/audio/temporizador/sonidoTemporizador1.mp3');
    audio.play();
  };

  return (
    <div className="main-temporizador-tareas">
      <div className="timer-container">
        <h2 className="titulo-temporizador">Temporizador de Tareas</h2>
        
        <div className="circle-container">
          <div
            className="circle"
            style={{
              background: `conic-gradient(#0d6efd ${progress}%, #e9ecef ${progress}%)`,
            }}
          >
            <div className="time-display">
              {`${Math.floor(timeLeft / 3600000)
                .toString()
                .padStart(2, '0')}:${Math.floor(
                (timeLeft % 3600000) / 60000
              )
                .toString()
                .padStart(2, '0')}:${Math.floor((timeLeft % 60000) / 1000)
                .toString()
                .padStart(2, '0')}`}
            </div>
          </div>
        </div>

        <MainTemporizadorTimePicker
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          setHours={setHours}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />
        
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Nombre de la tarea"
          className="task-input"
        />
        
        <div className="buttons">
          {!isActive && !isPaused && (
            <button onClick={startTimer} className="btn-start">
              <FaPlay /> Iniciar
            </button>
          )}
          {isActive && !isPaused && (
            <>
              <button onClick={pauseTimer} className="btn-pause">
                <FaPause /> Pausar
            </button>
              <button onClick={deleteTimer} className="btn-delete">
                <FaTrash />
              </button>
            </>
          )}
          {isPaused && (
            <button onClick={() => setIsActive(true)} className="btn-resume">
              <FaPlay /> Reanudar
            </button>
          )}
          {!isActive && totalTime > 0 && (
            <button onClick={resetTimer} className="btn-reset">
              <FaRedo /> Reiniciar
            </button>
          )}
        </div>
      </div>

      <div className="history">
        <h3>Historial de Tareas</h3>
        {history.length > 0 ? (
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                <span className="task-name">{item.taskName}</span>
                <span className="task-time">{`${item.hours}h ${item.minutes}m ${item.seconds}s`}</span>
                <button
                  onClick={() => setHistory(history.filter((_, i) => i !== index))}
                  className="btn-delete-item"
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-history">No hay tareas registradas</p>
        )}
      </div>
    </div>
  );
};

export default MainTemporizadorTareas;