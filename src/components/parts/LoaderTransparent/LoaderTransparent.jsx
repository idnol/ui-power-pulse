import { Preloader, Spinner } from "./LoaderTransparent.styled";

export const LoaderTransparent = () => {
  return (
    <Preloader id="preloader">
      <Spinner/>
    </Preloader>
  );
}
