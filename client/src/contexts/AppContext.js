import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const user = JSON.parse(localStorage.getItem('user'));
	const cardId = JSON.parse(localStorage.getItem('cardId'));
	// const user = localStorage.getItem("user");
	const [currentUser, setCurrentUser] = useState('');
	const [role, setRole] = useState([]);
	const [cards, setCardsList] = useState([]);
	const [greetingCard, setGreetingCard] = useState('');
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
					setCurrentUser(response.data);
					setLoggedIn(true);
					setCardsList(response.data.cardsList);
				})
				.catch((error) => {
					console.error('There was an error!', error);
				});
		}
	}, [user, currentUser, cards]);

	useEffect(() => {
		if (user && !currentUser) {
			axios
				.get(`/card/${cardId}`, { cardId: cardId })
				.then((response) => {
					// console.log('HERE', response);
					setGreetingCard(response);
				})
				.catch((error) => {
					console.error('There was an error!', error);
				});
		}
	}, [user, currentUser, cards, greetingCard]);

	return (
		<AppContext.Provider
			value={{
				currentUser,
				setCurrentUser,
				cards,
				setCardsList,
				greetingCard,
				setGreetingCard,
				setLoggedIn,
				loggedIn,
				role,
				setRole,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppContextProvider };

