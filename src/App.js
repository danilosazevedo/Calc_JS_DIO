import { Container, Content, Row } from './styles'
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';
import { keyboard } from '@testing-library/user-event/dist/keyboard';


const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState()

console.log(KeyboardEvent)

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev} ${num}`)
  }

  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
  }

  const somar = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber.replace(/\s+/g, '')) + Number(currentNumber.replace(/\s+/g, ''));
      setCurrentNumber(String(sum))
      console.log(firstNumber)
      console.log(currentNumber)
    }
  }

  const subtrair = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sub = Number(firstNumber.replace(/\s+/g, '')) - Number(currentNumber.replace(/\s+/g, ''));;
      setCurrentNumber(String(sub))
    }
  }

  const multiplicar = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const mult = Number(firstNumber.replace(/\s+/g, '')) * Number(currentNumber.replace(/\s+/g, ''));;
      setCurrentNumber(String(mult))
    }
  }

  const dividir = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const div = Number(firstNumber.replace(/\s+/g, '')) / Number(currentNumber.replace(/\s+/g, ''));;
      setCurrentNumber(String(div))
    }
  }

  const igual = () => {
    switch (operation) {
      case '+':
        somar();
        break;
      default: break;
      case '-':
        subtrair();
        break;
      case '*':
        multiplicar();
        break;
      case '/':
        dividir();
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="+" onClick={() => somar()} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber(5)} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={() => subtrair()} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="÷" onClick={() => dividir()} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="C" onClick={() => handleClear()} />
          <Button label="=" onClick={() => igual()} />
          <Button label="x" onClick={() => multiplicar()} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
