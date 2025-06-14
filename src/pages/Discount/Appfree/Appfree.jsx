import React, { useEffect, useState } from 'react';

import EnemyWord from '../../Discount/EnemyWord/EnemyWord';
import wordList from '../../Discount/Words/Words';

function App() {
  const [enemies, setEnemies] = useState([]);
  const [input, setInput] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(5);

  const restartGame = () => {
    setEnemies([]);
    setInput('');
    setIsGameOver(false);
    setScore(0);
    setSpeed(5);
  };

  useEffect(() => {
    if (isGameOver) return;
    const interval = setInterval(() => {
      const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
      setEnemies(prev => [...prev, { word: randomWord, y: 0, x: Math.random() * 80 + 10, id: Date.now() }]);
    }, 3000);
    return () => clearInterval(interval);
  }, [isGameOver]);

  useEffect(() => {
    if (isGameOver) return;
    const moveInterval = setInterval(() => {
      setEnemies(prev => {
        const updated = prev.map(enemy => ({ ...enemy, y: enemy.y + speed }));
        const reachedBottom = updated.some(enemy => enemy.y > window.innerHeight - 100);
        if (reachedBottom) {
          setIsGameOver(true);
        }
        return updated;
      });
    }, 100);
    return () => clearInterval(moveInterval);
  }, [isGameOver, speed]);

  useEffect(() => {
    setEnemies(prev =>
      prev.filter(enemy => {
        if (enemy.word === input.trim()) {
          setInput('');
          setScore(prevScore => prevScore + 1);
          return false;
        }
        return true;
      })
    );
  }, [input]);

  useEffect(() => {
    if (score > 0 && score % 10 === 0) {
      setSpeed(prevSpeed => prevSpeed + 2);
    }
  }, [score]);

  return (
    <div
      style={{
        height: '100vh',
        background: '#000',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
        padding: '0 10px',
        boxSizing: 'border-box'
      }}
    >
      <h3
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          fontSize: '16px',
        }}
      >
        🎯 Ball: {score}
      </h3>

      {enemies.map(enemy => (
        <div
          key={enemy.id}
          style={{
            position: 'absolute',
            top: enemy.y,
            left: `${enemy.x}%`,
            fontSize: window.innerWidth < 400 ? '16px' : '18px',
            fontWeight: 'bold',
            color: '#00ffea',
            textShadow: '0 0 5px #00ffea',
            animation: 'wobble 3s ease-in-out infinite',
            whiteSpace: 'nowrap',
            transform: 'translateX(-50%)'
          }}
        >
          {enemy.word}
        </div>
      ))}

      {!isGameOver ? (
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '20px',
            width: '90%',
            maxWidth: '400px',
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc'
          }}
          placeholder="So‘z yozing..."
          autoFocus
        />
      ) : (
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0,0,0,0.8)',
            padding: '30px',
            borderRadius: '12px',
            textAlign: 'center',
            width: '90%',
            maxWidth: '320px'
          }}
        >
          <h1 style={{ color: 'red', fontSize: '22px' }}>❌ O‘yin tugadi</h1>
          <p style={{ fontSize: '18px' }}>Natija: {score}</p>
          <button
            onClick={restartGame}
            style={{
              marginTop: '15px',
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#00aaff',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            🔁 Qayta boshlash
          </button>
        </div>
      )}

      <style>{`
        @keyframes wobble {
          0% { transform: translate(-50%, 0); }
          25% { transform: translate(-48%, 5px); }
          50% { transform: translate(-52%, 0); }
          75% { transform: translate(-48%, -5px); }
          100% { transform: translate(-50%, 0); }
        }
      `}</style>
    </div>
  );
}

export default App;