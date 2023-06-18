import React from "react";
import "./style.scss";

function Album({ album }) {
  return (
    <div className="album">
      <div className="album__thumb">
        <img src={album.image} alt={album.name} />
      </div>
      <p className="album__name">{album.name}</p>
    </div>
  );
}

export default Album;
