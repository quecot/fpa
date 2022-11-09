import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-shown');
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
      <section className="blue">
        <h1 className="section-hidden pt-[8rem]">Hola, món!</h1>
        <p className="section-hidden pb-[4rem]">Això és una prova</p>

      </section>
      <section className="pink">
        <h2 className="section-hidden pt-[8rem]">La Formació de persones adultes és un tema moolt important perquè...</h2>
        <p className="section-hidden">
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
        <div className="triangle">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill" />
          </svg>
        </div>
        <div className="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            {/* eslint-disable-next-line max-len */}
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" />
          </svg>
        </div>
      </section>
      <section className="dark">
        <h2 className="section-hidden pt-[8rem]">Què et sembla el format d&apos;aquest material?</h2>
        <p className="section-hidden">Creus que pot funcionar?</p>
        <div className="face-button section-hidden">
          <button type="button" className="face-button">
            <i className="icon fa-solid fa-smile" />
          </button>
          <button type="button" className="face-button">
            <i className="icon fa-solid fa-smile rotate-180" />
          </button>
        </div>
      </section>
      <section className="red">
        <div className="wave-dark-red" />
        <h2 className="section-hidden pt-[8rem]">Tu coneixes els vuit principis de la didàctica? Jo els he après avui!</h2>
        <div className="section-hidden card-container pt-8 flex flex-wrap gap-6 justify-center">
          <div className="card section-hidden">
            <div className="card-front">
              1
            </div>
            <div className="card-back" />
          </div>
          <div className="card section-hidden">
            <div className="card-front">
              2
            </div>
            <div className="card-back" />
          </div>
          <div className="card section-hidden">
            <div className="card-front">
              3
            </div>
            <div className="card-back" />
          </div>
          <div className="card section-hidden">
            <div className="card-front">
              4
            </div>
            <div className="card-back" />
          </div>
          <div className="card section-hidden">
            <div className="card-front">
              5
            </div>
            <div className="card-back" />
          </div>
          <div className="card section-hidden">
            <div className="card-front">
              6
            </div>
            <div className="card-back" />
          </div>
          <div className="card section-hidden">
            <div className="card-front">
              7
            </div>
            <div className="card-back" />
          </div>
          <div className="card section-hidden">
            <div className="card-front">
              8
            </div>
            <div className="card-back" />
          </div>
        </div>
        <div className="" />
      </section>
      <section className="blue">
        <h2 className="pt-[8rem] section-hidden">I... fins aquí la prova</h2>
        <p className="section-hidden">Give me feedback!</p>
        <div className="section-hidden">
          <i className="icon fa-solid fa-smile animate-spin" />
        </div>
        <div className="wave-red-blue" />
      </section>
    </div>
  );
};

export default App;
