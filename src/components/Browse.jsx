import useNowPlayingMovies from "../Hooks/useNowPlayingMovies"
import { Header } from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

export default function Browse() {
    useNowPlayingMovies();
  return (
      <>
          <Header />
          <MainContainer />
          <SecondaryContainer />
      </>
  )
}