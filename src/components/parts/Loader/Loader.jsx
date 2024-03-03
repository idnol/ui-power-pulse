import { Preloader, Spinner } from "./Loader.styled";

const Loader = () => {
  return (
    <Preloader id="preloader">
      <Spinner/>
    </Preloader>
  );
}

export default Loader;
