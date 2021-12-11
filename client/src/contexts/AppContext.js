import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const cardId = JSON.parse(localStorage.getItem("cardId"));

  const [currentUser, setCurrentUser] = useState("");
  const [role, setRole] = useState([]);
  const [cards, setCardsList] = useState([]);
  const [videos, setVideos] = useState([]);
  const [greetingCard, setGreetingCard] = useState("");
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

      // axios
      // 	.get(`/users/${user}`)
      // 	.then((response) => {
      // 		setCurrentUser(response.data);
      // 		setCardsList(response.data.cardsList);
      // 		let mapCards = response.data.cardsList.map((e) => e);
      // 		setGreetingCard(mapCards)
      // 		console.log(mapCards)
      // 		setLoggedIn(true);
      // 	})
      // 	.catch((error) => {
      // 		console.error('There was an error!', error);
      // 	});

      axios
        .get(`/users/${user}`)
        .then((response) => {
          console.log("USER WITH CARDLIST", response.data);
          setCurrentUser(response.data);
          setCardsList(response.data.cardsList);
          setLoggedIn(true);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  }, [user, currentUser, cards]);

  // useEffect(() => {
  //   if (user && !currentUser) {
  //     axios
  //       .get(`/card/${cardId}`, { cardId: cardId })
  //       .then((response) => {
  //         // console.log('HERE', response);
  //         setGreetingCard(response);
  //       })
  //       .catch((error) => {
  //         console.error("There was an error!", error);
  //       });
  //   }
  // }, [user, currentUser, cards, greetingCard]);
  // useEffect(() => {
  // 	async function getGreetingCard() {
  // 		const response = await axios.get(`/card/${cardId}`);
  // 		const { data } = response;
  // 		console.log('data?', data);
  // 		setGreetingCard(data);
  //     console.log("card info?:", greetingCard);
  // 	}
  // 	getGreetingCard();
  // }, [cardId, greetingCard]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const login = () => {
    // sleep(2000).then(() => setLoggedIn(true));
    setLoggedIn(true);
  };
  const logout = () => {
    sleep(2000).then(() => setLoggedIn(false));

    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.removeItem("cardId");
    localStorage.removeItem("firstname");
  };
  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        cards,
        setCardsList,
        greetingCard,
        videos,
        setVideos,
        setGreetingCard,
        setLoggedIn,
        loggedIn,
        role,
        setRole,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
