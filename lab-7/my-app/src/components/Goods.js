import GoodsCard from './GoodsCard';

import apple from '../images/apple.png';
import banana from '../images/banana.png';
import cherry from '../images/cherry.png';
import grape from '../images/grape.png';
import orange from '../images/orange.png';
import watermelon from '../images/watermelon.png';

const Goods = () => {
  const GOODS = [
    { name: 'Яблуко', image: apple, price: 16 },
    { name: 'Банан', image: banana, price: 60 },
    { name: 'Вишня', image: cherry, price: 80 },
    { name: 'Виноград', image: grape, price: 100 },
    { name: 'Апельсин', image: orange, price: 65 },
    { name: 'Кавун', image: watermelon, price: 70 },
  ];
  return (
    <div className='goods-grid'>
      {GOODS.map((item) => (
        <GoodsCard key={item.name} name={item.name} image={item.image} price={item.price} />
      ))}
    </div>
  );
};

export default Goods;
