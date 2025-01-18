type Props = {
  image: string;
  name: string;
  price: number;
  quantity: number;
};
const SummaryItem = ({ image, name, price, quantity }: Props) => {
  return (
    <div>
      <img src={`/img/flashsales/${image}`} alt={name} />
      <span>
        {name} ({quantity})
      </span>
      <span>{price}</span>
    </div>
  );
};

export default SummaryItem;
