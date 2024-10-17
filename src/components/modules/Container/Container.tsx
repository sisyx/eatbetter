import Header from "../Header/Header";
import Footer from "../Footer/Footer";
type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return (
    <>
      <Header /> 
      {children}
      <Footer />
    </>
  );
}

export default Container;
