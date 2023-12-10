import React from 'react';

import Grid from './Grid';
import Goods from './Goods';

class Content extends React.Component {
  random(number) {
    return Math.floor(Math.random() * (number + 1));
  }

  getRandomColor() {
    return `rgb(${this.random(255)}, ${this.random(255)}, ${this.random(255)})`;
  }
  
  setRandomColors(element) {
    element.style.backgroundColor = this.getRandomColor();
    element.style.color = this.getRandomColor();
  };

  render() {
    return (
      <>
        <p>Дата і місце народження: 06.12.2003, м.Васильків</p>
        <p>Освіта: Васильківська ЗОШ I-III ст. №2, КПІ ім. Ігоря Сікорського</p>
        <p>Хобі:</p>
        <ul id="hobbyList" onClick={(e) => this.setRandomColors(e.currentTarget)}>
          <li>Ігри</li>
          <li>Музика</li>
          <li>Малювання</li>
        </ul>
        <p className="movies" onClick={(e) => this.setRandomColors(e.currentTarget)}>
          Улюблені фільми:
        </p>
        <ol>
          <li>Мій сусід Тоторо (1988)</li>
          <li>Віднесені привидами (2001)</li>
          <li>Вітер дужчає (2013)</li>
        </ol>
        <p>
          Львів - це одне з найкрасивіших і найстаріших міст України, яке
          славиться своєю архітектурою, культурою і історією. Львів - це місто, де
          можна насолодитися чудовими кав'ярнями, музеями, театрами і парками.
          Львів - це місто, де живуть дружелюбні і гостинні люди, які люблять свою
          батьківщину і свої традиції. Львів - це місто, яке варто відвідати хоча
          б раз у житті.
        </p>
        <Grid />
        <Goods />
      </>
    );
  }
}

export default Content;