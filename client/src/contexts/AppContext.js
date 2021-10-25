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
      //  .get(`/users`, { withCredentials: true })
      //  .then(({ data }) => {
      //    setCurrentUser(data);
      //               setLoggedIn(true)
      //  })
      //  .catch((error) => console.log(error));

      axios
        .get(`/users/${user}`)
        .then((response) => {
          console.log("HERE", response);
          setCurrentUser(response.data._id);
          // const CardsList = response.data.cardsList;
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  }, [user, currentUser]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const login = () => {
    sleep(2000).then(() => setLoggedIn(true));
  };

  const logout = () => {
    sleep(2000).then(() => setLoggedIn(false));
  };

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
        login,
        logout
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

