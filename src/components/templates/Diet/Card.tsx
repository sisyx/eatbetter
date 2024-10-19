import Modal from "./Modal";

type Props = {
  title: string;
  text: string;
  image: string;
  id: number;
};

const Card = (props: Props) => {
  return (
    <div
      data-aos="fade-up"
      className="relative mt-9 rounded-sm bg-white px-3 pb-12 pt-8 text-center transition-transform sm:!shadow-md hover:sm:!-translate-y-2"
    >
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
