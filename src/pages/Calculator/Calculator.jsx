import React, { useState, useEffect } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');
  const [operation, setOperation] = useState(undefined);
  const [lastOperator, setLastOperator] = useState('');
  const [lastOperand, setLastOperand] = useState('');
  const [clearButtonText, setClearButtonText] = useState('C');

  const appendNumber = (number) => {
    if (number === '.' && currentNumber.includes('.')) return;
    setCurrentNumber((prev) => prev.toString() + number.toString());
    if (clearButtonText === 'C') {
      setClearButtonText('CE');
    }
  };

  const chooseOperation = (op) => {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
      compute();
    }
    setOperation(op);
    setPreviousNumber(currentNumber);
    setCurrentNumber('');
  };

  const compute = () => {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    if (isNaN(prev)) return;

    if (operation) {
      switch (operation) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        default:
          return;
      }
      setLastOperand(current);
      setLastOperator(operation);
      setCurrentNumber(result.toString());
      setOperation(undefined);
    } else if (lastOperator) {
      switch (lastOperator) {
        case '+':
          result = parseFloat(currentNumber) + lastOperand;
          break;
        case '-':
          result = parseFloat(currentNumber) - lastOperand;
          break;
        default:
          return;
      }
      setCurrentNumber(result.toString());
    }

    setPreviousNumber(currentNumber);
  };

  const clearInput = () => {
    if (clearButtonText === 'CE') {
      setCurrentNumber('');
      setClearButtonText('C');
    } else {
      setCurrentNumber('');
      setPreviousNumber('');
      setOperation(undefined);
      setLastOperand('');
      setLastOperator('');
    }
  };

  const dataDelete = () => {
    setCurrentNumber((prev) => prev.toString().slice(0, -1));
  };

  const updateDisplay = () => {
    return currentNumber;
  };

  const checkkeyboard = (e) => {
    switch (e.key) {
      case 'Escape': // ตรวจจับปุ่ม ESC ทำหน้าที่เหมือนการกดปุ่ม C และ CE
        clearInput();
        break;
      case 'Backspace':
        dataDelete();
        break;
      case 'Enter': // ตรวจจับปุ่ม ENTER
        compute();
        break;
      case '+': // ตรวจจับปุ่ม +
      case '=': // ตรวจจับปุ่ม =
        compute();
        chooseOperation('+');
        break;
      case '-': // ตรวจจับปุ่ม -
        compute();
        chooseOperation('-');
        break;
      default:
        if (e.key >= 0 && e.key <= 9) { // ตรวจจับการกดปุ่มตัวเลข
          appendNumber(e.key);
        }
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', checkkeyboard);
    return () => {
      document.removeEventListener('keydown', checkkeyboard);
    };
  }, [currentNumber, previousNumber, operation, lastOperator, lastOperand]);

  return (
    <div className="calculator">
      <input
        type="text"
        className="calculator-display"
        id="display"
        value={updateDisplay()}
        disabled
      />
      <div className="calculator-buttons">
        <button className="disabled-button" disabled>
          MC
        </button>
        <button className="disabled-button" disabled>
          MR
        </button>
        <button className="disabled-button" disabled>
          M+
        </button>
        <button className="disabled-button" disabled>
          M-
        </button>
        <button
          className={`button ${clearButtonText}`}
          id="clearButton"
          onClick={clearInput}
        >
          {clearButtonText}
        </button>

        <button className="calculator-button" onClick={() => appendNumber('7')}>
          7
        </button>
        <button className="calculator-button" onClick={() => appendNumber('8')}>
          8
        </button>
        <button className="calculator-button" onClick={() => appendNumber('9')}>
          9
        </button>
        <button className="disabled-button" disabled>
          ÷
        </button>
        <button className="calculator-button-delete" onClick={dataDelete} id="dataDelete">
          ←
        </button>

        <button className="calculator-button" onClick={() => appendNumber('4')}>
          4
        </button>
        <button className="calculator-button" onClick={() => appendNumber('5')}>
          5
        </button>
        <button className="calculator-button" onClick={() => appendNumber('6')}>
          6
        </button>
        <button className="disabled-button" disabled>
          ×
        </button>
        <button className="disabled-button" disabled>
          %
        </button>

        <button className="calculator-button" onClick={() => appendNumber('1')}>
          1
        </button>
        <button className="calculator-button" onClick={() => appendNumber('2')}>
          2
        </button>
        <button className="calculator-button" onClick={() => appendNumber('3')}>
          3
        </button>
        <button
          className="calculator-button-operator"
          onClick={() => chooseOperation('-')}
        >
          -
        </button>
        <button className="disabled-button" disabled>
          1/x
        </button>

        <button className="calculator-button" onClick={() => appendNumber('0')}>
          0
        </button>
        <button className="calculator-button" onClick={() => appendNumber('.')}>
          .
        </button>
        <button className="disabled-button" disabled>
          +/-
        </button>
        <button
          className="calculator-button-operator"
          onClick={() => chooseOperation('+')}
        >
          +
        </button>
        <button className="calculator-button equals" onClick={compute}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
