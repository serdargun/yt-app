import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = (term) => {
    const KEY = "AIzaSyDnBBThOe7pa9IRZCs1obBoMuZgBOVyQ58";

    youtube
      .get("search/", {
        params: {
          q: term,
          part: "snippet",
          maxResults: 5,
          type: "video",
          key: `${KEY}`,
        },
      })
      .then((response) => {
        setVideos(response.data.items);
      });
  };

  return [videos, search];
};

export default useVideos;
