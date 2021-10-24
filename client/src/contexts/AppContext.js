import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  // const user = localStorage.getItem("user");
  const [currentUser, setCurrentUser] = useState("");
  const [role, setRole] = useState([]);
  const [cards, setCards] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (user && !currentUser) {
      // axios
      // 	.get(`/users`, { withCredentials: true })
      // 	.then(({ data }) => {
      // 		setCurrentUser(data);
      //               setLoggedIn(true)
      // 	})
      // 	.catch((error) => console.log(error));

      axios
        .get(`/users/${user}`)
        .then((response) => {
          console.log("HERE", response);
          setCurrentUser(response.data._id);
          setLoggedIn(true);
          // const CardsList = response.data.cardsList;
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  }, [user, currentUser]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        cards,
        setCards,
        videos,
        setVideos,
        setLoggedIn,
        loggedIn,
        role,
        setRole,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
