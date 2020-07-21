import React, { useState } from 'react';
import { FiArrowRight, FiPhoneIncoming, FiPhoneOutgoing } from 'react-icons/fi';
import calculateTax from '../../utils/calculateTax';
import formatValue from '../../utils/formatValue';

import logo from '../../assets/logo.png';

import {
  Title, Container, Card, Options,
} from './styles';

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

  function handleSubmit(e) {
    e.preventDefault();
    const values = calculateTax(origin, destination, time, plan);
    setData({
      ...data,
      value: formatValue(values.valueCalc),
      planValue: values.planValueCalc > 0 ? formatValue(values.planValueCalc) : 0,
    });
  }

  return (
    <>
      <img src={logo} alt="FaleMais" />
      <Title>Verifique o plano de longa distância ideal para você.</Title>
      <Container>
        <Options>

          <select name="Origem" onChange={selectOrigin}>
            <option value="option">Origem</option>
            {ddd.filter((d) => d !== destination).map((d) => (
              <option key={d} value={d}>DDD: {d}</option>
            ))}
          </select>

          <select name="Destino" onChange={selectDestination}>
            <option value="option">Destino</option>
            {ddd.filter((d) => d !== origin).map((d) => (
              <option key={d} value={d}>DDD: {d}</option>
            ))}
          </select>
          <select name="Planos" id="" onChange={selectPlan}>
            <option value="option">Plano</option>
            {planos.map((p) => (
              <option key={p} value={p}>FaleMais {p}</option>
            ))}
          </select>
          <input type="number" placeholder="min. utilizados" onChange={selectTime} />
          <button type="submit" onClick={handleSubmit}>Calcular</button>
        </Options>
        <Card>
          <h1>FaleMais {plan}</h1>
          <div>
            <FiPhoneOutgoing />
            <span>{origin}</span>

            <FiArrowRight />

            <span>{destination}</span>
            <FiPhoneIncoming />
          </div>
          <p>{time} minutos utilizados</p>
          <span>Valor sem plano: {value === 0 ? 'Aguardando informações :)' : value } </span>
          <span>Com plano: <strong>{planValue === 0 ? 'Sem custo adicional!' : planValue}</strong></span>
        </Card>
      </Container>
    </>
  );
};

export default App;
