import { FaArrowRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const AnimeCard = ({ id, imageUrl, animeName, nickNames, url, favorites }) => {
  return (
    <div className="anime-item" key={id}>
      <div className="anime-container">
        <div>
          <img alt="animeImage" src={imageUrl} width="80" height="80" />
        </div>
        <div className="anime-content">
          <h2 className="anime-heading">{animeName}</h2>
          <div className="nicknames">
            {nickNames?.map((nickname, i) => {
              return (
                <>
                  <button key={i} className="btn">
                    {nickname}
                  </button>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="icons">
        <div className="favorites">
          <FaHeart className="favorites-icon" />
          <p>{favorites}</p>
        </div>
        <div className="rightArrow">
          <a href={url} target="_blank" rel="noreferrer">
            <FaArrowRight className="arrow-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default AnimeCard;
