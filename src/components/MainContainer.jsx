import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./ViderBackground"

export default function MainContainer() {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) {
        return;
    }
    const mainMovie = movies[0];
    

    const { original_title, overview, id } = mainMovie;
    return (
      <div className="pt-[30%] bg-black-100 md:pt-0">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
    );
}