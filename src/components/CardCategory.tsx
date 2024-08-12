type Props = {
  data: { id: number; title: string };
};

const CardCategory = ({ data }: Props) => {
  const { title } = data;
  return (
    <div className="border border-solid p-3 bg-gradient-to-r from-gray-400 shadow-md">
      <h2>""{title}""</h2>
    </div>
  );
};

export default CardCategory;
