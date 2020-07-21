import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState({
    origin: '011',
    destination: '016',
    plan: 30,
    time: 0,
    value: 0,
    planValue: 0,
  });

  const ddd = ['011', '016', '017', '018'];
  const planos = [30, 60, 120];

  function selectOrigin(e) {
    setData({ ...data, origin: e.target.value });
  }

  function selectDestination(e) {
    setData({ ...data, destination: e.target.value });
  }

  function selectTime(e) {
    setData({ ...data, time: e.target.value });
  }

  function selectPlan(e) {
    setData({ ...data, plan: e.target.value });
  }

  const {
    destination, origin, plan, time, value, planValue,
  } = data;

  function getValue() {
    let tax = 0;
    if (origin === '011' && destination === '016') {
      tax = 1.9;
    } else if ((origin === '016' && destination === '011')) {
      tax = 2.9;
    } else if ((origin === '011' && destination === '017')) {
      tax = 1.7;
    } else if ((origin === '017' && destination === '011')) {
      tax = 2.7;
    } else if ((origin === '011' && destination === '018')) {
      tax = 0.9;
    } else if ((origin === '018' && destination === '011')) {
      tax = 1.9;
    }

    const valueCalc = time * tax;

    const planValueCalc = ((time - plan) * tax) * 1.1;

    setData({
      ...data,
      value: valueCalc,
      planValue: planValueCalc > 0 ? planValueCalc : 0,
    });
  }

  return (
    <>
      <h1>Fale mais</h1>
      <select name="" id="" onChange={selectOrigin}>
        {ddd.filter((d) => d !== destination).map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>
      <select name="" id="" onChange={selectDestination}>
        {ddd.filter((d) => d !== origin).map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>
      <select name="Planos" id="" onChange={selectPlan}>
        {planos.map((p) => (
          <option key={p} value={p}>FaleMais {p}</option>
        ))}
      </select>
      <input type="number" onChange={selectTime} />
      <button type="submit" onClick={getValue}>Enviar</button>
      <h2>Origem: {origin}</h2>
      <h2>Destino: {destination}</h2>
      <h2>Plano: {plan}</h2>
      <h2>Minutos: {time}</h2>
      <h2>Valor: {value}</h2>
      <h2>Com Plano: {planValue}</h2>
    </>
  );
};

export default App;
