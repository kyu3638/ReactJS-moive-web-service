function Home() {
  /* api의 로딩 여부를 체크하고 로딩 전/후 화면을 위해 사용하는 boolean */
  const [loading, setLoading] = useState(true);
  /* api를 통해 불러온 영화 데이터를 json의 형태로 저장하게 하는 함수와 배열  */
  const [movies, setMovies] = useState([]);
  /* 최초에 영화를 불러와서 json 구조로 movies에 저장하고 loading을 false로 변환 */
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  /* getMovies는 최초에 한번만 실행 */
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
