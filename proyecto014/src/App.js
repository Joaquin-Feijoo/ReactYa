import './App.css';
import { useState } from 'react';

function App() {
  const [texto,setTexto] = useState('')

  function cambioTexto(e){
    setTexto(e.target.value)
  }

  return (
    <div>
      <p><textarea value={texto} onChange={cambioTexto} cols='100' rows='5'></textarea></p>
      <p><textarea value={texto} onChange={cambioTexto} cols='100' rows='5' disabled></textarea></p>
      <p>Cantidad de caracteres: {texto.length}</p>
    </div>
  );
}

export default App;
