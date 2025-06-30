import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() === '') return; // üres bemenet ellenőrzése
    setItems([...items, inputValue.trim()]);
    setInputValue('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Egyszerű Lista</h1>
      <input
        type="text"
        placeholder="Írd ide az új elemet"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') handleAddItem(); }}
      />
      <button onClick={handleAddItem} style={{ marginLeft: '10px' }}>
        Hozzáadás
      </button>

      <ul style={{ marginTop: '20px' }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
