import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Moviedetail from "../components/Moviedetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  /* api 자료에서 json 형태를 받아오는 코드들 */
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Moviedetail
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            description={movie.description_full}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
