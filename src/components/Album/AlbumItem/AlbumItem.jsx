import React from "react";
import Album from "../AlbumThumb/Album";
import "./style.scss";
function AlbumItem({ albumList }) {
  // console.log(albumList);
  return (
    <ul className="album-list">
      {albumList.map((album) => (
        <li key={album.id}>
          <Album album={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumItem;
