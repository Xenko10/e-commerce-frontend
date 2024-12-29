type Props = {
  rating: number;
};

const Stars = ({ rating }: Props) => {
  const filledStars = Math.floor(rating);
  const halfFilledStar = rating - filledStars === 0.5;
  return (
    <span>
      {Array.from(Array(5), (_, index) => (
        <img
          key={index}
          src={`/img/stars/${
            index < filledStars
              ? "star_filled.png"
              : index === filledStars && halfFilledStar
                ? "star_half_filled.png"
                : "star_not_filled.png"
          }`}
          alt="star"
        />
      ))}
    </span>
  );
};

export default Stars;
