


import React, { useState } from 'react';

const Calculator = () => {
  const productPrices = {
    Sugar: 44,
    Rice: 60,
  };

  const [product, setProduct] = useState('Sugar');
  const [weightInput, setWeightInput] = useState('');
  const [moneyInput, setMoneyInput] = useState('');
  const [result, setResult] = useState('');

  const handleConvert = () => {
    const pricePerKg = productPrices[product];

    if (weightInput && !moneyInput) {
      // Convert weight to price
      const cost = (weightInput / 1000) * pricePerKg;
      const weightInKg = weightInput >= 1000 ? (weightInput / 1000).toFixed(2) : weightInput;
      const unit = weightInput >= 1000 ? 'kg' : 'grams';
      setResult(`It will cost ₹${cost.toFixed(2)} for ${weightInKg} ${unit} of ${product.toLowerCase()}.`);
    } else if (moneyInput && !weightInput) {
      // Convert money to weight
      const weight = (moneyInput / pricePerKg) * 1000;
      const weightInKg = weight >= 1000 ? (weight / 1000).toFixed(2) : weight.toFixed(2);
      const unit = weight >= 1000 ? 'kg' : 'grams';
      setResult(`You will get ${weightInKg} ${unit} of ${product.toLowerCase()} for ₹${moneyInput}.`);
    } else {
      setResult('Please fill only one field.');
    }
  };

  const handleWeightInput = (e) => {
    setWeightInput(e.target.value);
    setMoneyInput('');
    setResult('');
  };

  const handleMoneyInput = (e) => {
    setMoneyInput(e.target.value);
    setWeightInput('');
    setResult('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>CONVERTOR</h2>

      <div style={styles.row}>
        <label style={styles.label}>PRODUCT</label>
        <select
          style={styles.input}
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        >
          <option value="Sugar">Sugar</option>
          <option value="Rice">Rice</option>
        </select>
      </div>

      <div style={styles.row}>
        <label style={styles.label}>PRICE</label>
        <input
          type="number"
          placeholder="Enter price"
          value={moneyInput}
          onChange={handleMoneyInput}
          style={styles.input}
        />
      </div>

      <div style={styles.row}>
        <label style={styles.label}>GRAM</label>
        <input
          type="number"
          placeholder="Enter grams"
          value={weightInput}
          onChange={handleWeightInput}
          style={styles.input}
        />
      </div>

      <div style={styles.buttonRow}>
        <button onClick={handleConvert} style={styles.button}>
          CONVERT
        </button>
      </div>

      {result && <p style={styles.result}>{result}</p>}
    </div>
  );
};

const styles = {
  container: {
    border: '2px solid black',
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  label: {
    flex: '1',
    textAlign: 'left',
  },
  input: {
    flex: '2',
    padding: '5px',
    marginLeft: '10px',
  },
  buttonRow: {
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    width: '100%',
  },
  result: {
    marginTop: '20px',
    fontWeight: 'bold',
  },
};

export default Calculator;
