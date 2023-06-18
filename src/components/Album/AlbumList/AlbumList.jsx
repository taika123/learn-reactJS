import React from "react";
import AlbumItem from "../AlbumItem/AlbumItem";

function AlbumList() {
  const albumList = [
    {
      id: 1,
      name: "Đóng băng thời gian, tan cham cham ",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/9/4/8/a948ceea79049e5da7eba1632119056c.jpg",
    },
    {
      id: 2,
      name: "Tha minh cung nhung giai dieu",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/c/2/4/4c245fd77bac5d44acdaeb3b87f6caae.jpg",
    },
    {
      id: 3,
      name: "Lofi 1 chut thoi",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg",
    },
    {
      id: 4,
      name: "Piano Yen Binh",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/f/f/9/5ff9545ce1cec5a1a4fa15374c45ffa6.jpg",
    },
    {
      id: 5,
      name: "Don He Nhe Nhang",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/5/6/4/6564372bd4a9df8add0125fe9fe4b226.jpg",
    },
  ];

  return (
    <div>
      <h2>Do you know think</h2>
      <AlbumItem albumList={albumList} />
    </div>
  );
}

export default AlbumList;
