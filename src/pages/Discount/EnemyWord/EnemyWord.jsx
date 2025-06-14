
export default function EnemyWord({ word, y }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: `${y}px`,
        transform: 'translateX(-50%)',
        fontSize: '24px',
        color: 'red',
        fontWeight: 'bold'
      }}
    >
      {word}
    </div>
  );
}
