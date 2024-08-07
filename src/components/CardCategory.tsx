
type Props = {
  data: { id: number; title: string };
};

const CardCategory = ({ data }: Props) => {
  const { title} = data;
  return (
    <div>
      <h2>""{title}""</h2>
    </div>
  );
};

export default CardCategory;
