import { useState } from "react";

import "./app.css";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [mensagem, setMensagem] = useState("");

  function calcularImc() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    const resultado = imc.toFixed(2);

    if (resultado < 18.5) {
      setMensagem("Você está abaixo do peso ideal! Resultado: " + resultado);
    } else if (resultado >= 18.5 && resultado < 24.9) {
      setMensagem("Você está com o peso ideal! Resultado: " + resultado);
    } else if (resultado >= 24.9 && resultado < 30) {
      setMensagem(
        "Você está um pouco acima do peso ideal! Resultado: " + resultado
      );
    } else if (resultado >= 30) {
      setMensagem("Você está acima do peso ideal! Resultado: " + resultado);
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em kg. Ex: 90"
          value={peso}
          onChange={(e) => {
            setPeso(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Altura em cm. Ex: 185"
          value={altura}
          onChange={(event) => {
            setAltura(event.target.value);
          }}
        />

        <button onClick={calcularImc}>Calcular</button>
      </div>

      <h2>{mensagem}</h2>
    </div>
  );
}
