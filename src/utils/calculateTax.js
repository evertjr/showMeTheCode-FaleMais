const calculateTax = (origin, destination, time, plan) => {
  try {
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

    return ({ valueCalc, planValueCalc });
  } catch (error) {
    console.log(error);
    return alert('Ops! Perdi as contas, tente novamente!');
  }
};

export default calculateTax;
