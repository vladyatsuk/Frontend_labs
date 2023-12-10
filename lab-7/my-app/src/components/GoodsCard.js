const GoodsCard = ({image, name, price}) => {
  return (
    <div className='goods-card'>
      <img src={image} alt={name} />
        <ul>
          <li>Товар: {name}</li>
          <li>Ціна: {price} UAH</li>
        </ul>
    </div>
  ); 
}

export default GoodsCard;