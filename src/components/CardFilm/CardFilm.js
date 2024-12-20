import React from "react";
import { NavLink } from "react-router-dom";
import { BiPlayCircle } from "react-icons/bi";

function CardFilm({ film }) {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4">
      <NavLink to={`/film/${film.id}`} className="film">
        <img src={`https://image.tmdb.org/t/p/w500/` + film.poster_path} className="img-fluid" />
        <svg className="save" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"></path>
        </svg>
        <div className="Reviews">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"></path>
          </svg>
          <p>{film.vote_average.toFixed(1)}</p>
        </div>
        <div className="text1">
          <h6>{film.title}</h6>
          <span>Free</span>
          <span>Action</span>
          <span>{film.release_date.slice(0, 4)}</span>
        </div>
        <BiPlayCircle className="play-circle" />
      </NavLink>
    </div>
  );
}

export default CardFilm;
