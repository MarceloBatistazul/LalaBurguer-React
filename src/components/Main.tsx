import React from 'react';
import Lanche from '../assets/img/Lanche.png'; // Importando a imagem do hamburger

const Main: React.FC = () => {
  return (
    <main>
      <section className="home">
        <div className="home-txt">
          <h4 className="text-h4">
            Welcome to Lala's Burger Lounge
          </h4>
          <h1 className="text-h1">
            Different flavors, one place.
          </h1>
          <p>The best of all</p>
          <a href="#" className="home-btn">Make your Reservation</a>
        </div>
        <div className="home-img">
          <img src={Lanche} alt="Hamburger" /> {/* Use a variável importada no src */}
        </div>
      </section>
    </main>
  );
}
export default Main;