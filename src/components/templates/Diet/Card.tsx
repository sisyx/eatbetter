import Modal from "./Modal";

type Props = {
  title: string;
  text: string;
  image: string;
  id: number;
};

const Card = (props: Props) => {
  return (
    <div className="hover:sm:!-translate-y-2 relative mt-9 rounded-sm bg-white px-3 pb-12 pt-8 text-center transition-transform sm:!shadow-md">
      <img
        className="absolute -top-10 left-1/2 block h-16 w-[84px] -translate-x-1/2 transform"
        src={props.image}
        alt="cover"
      />
      <p className="mb-7 mt-2 text-sm sm:text-base">{props.title}</p>
      <Modal {...props} />
    </div>
  );
};

export default Card;
//aspect-[16/9]
