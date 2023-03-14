import {useState, useEffect} from 'react';
import './App.css';
import Headline from './components/Headline.js';
import Button from './components/Button.js';
import Dog from './components/Dog.js';

function App() {

  const DOG_BREED_URL = 'https://dog.ceo/api/breeds/image/random';
  const [dog, setDog] = useState(null);
  const fetchDog = () => {
    fetch(`${DOG_BREED_URL}`)
    .then(response => response.json())
    .then(data => setDog(data.message))
}

useEffect(() => {
  fetchDog();
},[])

  return (
    <section className='section-main'>
      <Headline/>
      <Dog fetchDog={fetchDog} dog={dog}/>
      <Button fetchDog={fetchDog} dog={dog}/>
    </section>
  );
}

export default App;
