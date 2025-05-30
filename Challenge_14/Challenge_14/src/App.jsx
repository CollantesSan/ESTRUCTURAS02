import React, { useEffect, useState } from 'react';
import Tree from 'react-d3-tree';
import { ArbolBinario } from './BinaryTree';
import './App.css';

const App = () => {
  const [treeData, setTreeData] = useState([]);
  const [arbol, setArbol] = useState(null);
  const [valor, setValor] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [resultadoBusqueda, setResultadoBusqueda] = useState('');
  const [recorrido, setRecorrido] = useState([]);

  useEffect(() => {
    const nuevoArbol = new ArbolBinario();
    const valores = [10, 5, 15, 3, 7];
    valores.forEach(v => nuevoArbol.insertar(v));
    setArbol(nuevoArbol);
    setTreeData(nuevoArbol.getTreeData());
  }, []);

  const insertarValor = () => {
    if (valor && !isNaN(valor)) {
      arbol.insertar(Number(valor));
      setTreeData(arbol.getTreeData());
      setValor('');
    }
  };

  const verificarValor = () => {
    if (!busqueda) return;
    const existe = arbol.contiene(Number(busqueda));
    setResultadoBusqueda(existe ? '✅ El valor está en el árbol.' : '❌ El valor NO está en el árbol.');
  };

  const mostrarRecorrido = (tipo) => {
    if (!arbol) return;
    let resultado = [];
    switch (tipo) {
      case 'inorden':
        resultado = arbol.inorden();
        break;
      case 'preorden':
        resultado = arbol.preorden();
        break;
      case 'postorden':
        resultado = arbol.postorden();
        break;
      default:
        break;
    }
    setRecorrido(resultado);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', padding: '1rem', fontFamily: 'Arial' }}>
      <h1>Binary Tree Visualizer</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Insertar valor"
        />
        <button onClick={insertarValor}>Insertar</button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="number"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar valor"
        />
        <button onClick={verificarValor}>Buscar</button>
        <p>{resultadoBusqueda}</p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => mostrarRecorrido('inorden')}>Mostrar Inorden</button>
        <button onClick={() => mostrarRecorrido('preorden')}>Mostrar Preorden</button>
        <button onClick={() => mostrarRecorrido('postorden')}>Mostrar Postorden</button>
        {recorrido.length > 0 && (
          <p><strong>Recorrido:</strong> {recorrido.join(', ')}</p>
        )}
      </div>

      <div style={{ height: '500px', border: '1px solid #ccc', padding: '1rem' }}>
        {treeData.length > 0 && (
          <Tree data={treeData} orientation="vertical" />
        )}
      </div>
    </div>
  );
};

export default App;


