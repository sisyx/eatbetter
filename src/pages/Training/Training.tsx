import Container from "../../components/modules/Container/Container";
import Title from "../../components/modules/Title/Title";
import Card from "../../components/templates/UserPanel/Training/Card";

const Training = () => {
  return (
    <Container>
      <div className="px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:!px-28">
        <Title className="!flex-row" title="متخصص خود شوید (ورزش)" />

        <main className="mt-6 grid grid-cols-[1fr] items-center gap-4 pb-8 lg:!grid-cols-[1fr,1fr]">
          <Card />
          <Card />
          <Card />
          <Card />
        </main>
      </div>
      <img
        style={{ transform: "rotateY(181deg)" }}
        className="absolute left-16 top-12 hidden h-[600px] w-[50%] object-cover opacity-30 sm:block xl:top-28"
        src="/images/blob.svg"
        alt=""
      />
    </Container>
  );
};

export default Training;
