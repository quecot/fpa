import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-shown');
        } else {
          entry.target.classList.remove('section-shown');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.section-hidden');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <div className="App">
      <section className="section-hidden">
        <h1>Hola, món!</h1>
        <p>Això és una prova</p>
      </section>
      <section className="section-hidden">
        <h2>La Formació de persones adultes és un tema moolt important perquè...</h2>
        <p>
          <b>Persones</b>
          {' '}
          som tots i totes,
          {' '}
          <b>adults</b>
          {' '}
          ho som o ho serem, i la
          {' '}
          <b>formació</b>
          {' '}
          és a tot arreu
        </p>
      </section>
      <section className="section-hidden">
        <h2>Què et sembla el format d&apos;aquest material?</h2>
        <p>Creus que pot funcionar?</p>
        <div className="face-button">
          <button type="button" className="face-button">
            <i className="icon fa-solid fa-smile text-green-600" />
          </button>
          <button type="button" className="face-button">
            <i className="icon fa-solid fa-smile rotate-180 text-blue-600" />
          </button>
        </div>
      </section>
      <section className="section-hidden">
        <h2>Fins aquí la prova</h2>
        <p>Give me feedback!</p>
        <div>
          <i className="icon fa-solid fa-smile animate-spin" />
        </div>
      </section>
    </div>
  );
};

export default App;
