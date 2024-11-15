import React, { useState } from 'react';

function NumberCounter({ numbers }) {
  const [inputNumber, setInputNumber] = useState('');
  const [count, setCount] = useState(0);

  // Fungsi untuk menghitung berapa kali angka muncul secara real-time
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputNumber(value);

    // Cek apakah input adalah angka yang valid
    const parsedNumber = parseInt(value, 10);
    if (!isNaN(parsedNumber)) {
      const occurrence = numbers.filter((num) => num === parsedNumber).length;
      setCount(occurrence);
    } else {
      setCount(0); // Reset jika input tidak valid
    }
  };

  return (
    <div className="number-counter">
      <input
        type="number"
        placeholder="Enter a number to count"
        value={inputNumber}
        onChange={handleInputChange}
        className="form-control"
      />
      <p>
        {inputNumber === '' ? 'Masukkan angka' : `Number ${inputNumber} appears ${count} time(s).`}
      </p>
    </div>
  );
}

export default NumberCounter;
