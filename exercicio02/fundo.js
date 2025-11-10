import React, { useState } from 'react';

// Componente Mensagem
function Mensagem({ nome }) {
  return <h2>Bem-vindo(a), {nome}!</h2>;
}

// Componente principal App
function App() {
  // Estado para o contador
  const [contador, setContador] = useState(0);

  // Estado para o texto digitado
  const [texto, setTexto] = useState('');

  // Lista de livros
  const livros = [
    { id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien' },
    { id: 2, titulo: '1984', autor: 'George Orwell' },
    { id: 3, titulo: 'Dom Casmurro', autor: 'Machado de Assis' }
  ];

  // Função para atualizar o texto digitado
  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div>
      {/* Mensagem de boas-vindas */}
      <Mensagem nome="João" />

      {/* Contador */}
      <div>
        <h3>Contador: {contador}</h3>
        <button onClick={() => setContador(contador + 1)}>Aumentar</button>
        <button onClick={() => setContador(contador - 1)}>Diminuir</button>
      </div>

      {/* Lista de livros */}
      <div>
        <h3>Livros:</h3>
        <ul>
          {livros.map((livro) => (
            <li key={livro.id}>
              {livro.titulo} - {livro.autor}
            </li>
          ))}
        </ul>
      </div>

      {/* Campo de texto */}
      <div>
        <h3>Texto digitado:</h3>
        <input 
          type="text" 
          value={texto} 
          onChange={handleChange} 
          placeholder="Digite algo..."
        />
        <p>{texto}</p>
      </div>
    </div>
  );
}

export default App;
