import { useEffect, useState } from "react";
import AnimeCard from "./anime-card";
import { FaSearch } from "react-icons/fa";

const AnimeSearch = () => {
  const [topAnime, SetTopAnime] = useState([]);
  const [animeList, SetAnimeList] = useState([]);

  const [search, setSearch] = useState("");

  const GetTopAnime = async () => {
    try {
      const response = await fetch(
        "https://api.jikan.moe/v4/characters?page=1&limit=15&q=&order_by=favorites&sort=desc"
      ).then((response) => response.json());
      SetTopAnime(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetTopAnime();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    fetchAnime(search);
  };

  const fetchAnime = async (query) => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/characters?page=1&limit=15&q=${query}&order_by=favorites&sort=desc`
      ).then((response) => response.json());

      SetAnimeList(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const animeData = search ? animeList : topAnime;

  return (
    <div className="search-anime-container">
      <div className="anime-upper-container">
        <h1 className="page-heading">Search Anime Characters</h1>
        <FaSearch className="search-icon" />
        <input
          className="search-feild"
          placeholder="Search for an anime..."
          value={search}
          onChange={(e) => handleSearch(e)}
        />

        {search ? (
          animeList?.length >= 0 ? (
            <h2 className="found-length">
              Total {animeList?.length} matching anime characters found{" "}
            </h2>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
      <div className="anime-lower-container">
        {animeData?.length > 0 ? (
          animeData?.map((animeItem, i) => {
            return (
              <AnimeCard
                id={i}
                url={animeItem.url}
                imageUrl={animeItem.images.jpg.image_url}
                animeName={animeItem.name}
                nickNames={animeItem.nicknames}
                favorites={animeItem.favorites}
              />
            );
          })
        ) : (
          <h1>No results found !</h1>
        )}
      </div>
    </div>
  );
};

export default AnimeSearch;
