import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

export default function useNowPlayingMovies() {
  const dispatch = useDispatch();
  async function getNowPlayingMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    
    dispatch(addNowPlayingMovies(json.results));
  }
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}
