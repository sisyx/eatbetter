import { FaAngleLeft } from "react-icons/fa";

import { Link } from "react-router-dom";

type Props = {};

const Card = (props: Props) => {
  return (
    <div data-aos='fade-up' className="rounded-md p-3 shadow-lg relative bg-white z-10" dir="rtl">
      <img
        className="h-[200px] w-full rounded-md object-cover"
        src="https://media.post.rvohealth.io/wp-content/uploads/2020/09/vegetarian-diet-plan-732x549-thumbnail.jpg"
        alt=""
      />
      <p className="my-4 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima placeat
        voluptates in odit, cumque debitis asperiores quos harum eveniet
        consectetur vitae nulla nesciunt adipisci! Quam adipisci illo aliquam
        commodi iusto.
      </p>
      <Link className="mb-3 items-center w-full flex justify-center text-center text-blue-600" to={"/"}>
        مشاهده
        <FaAngleLeft   />
      </Link>
    </div>
  );
};

export default Card;
