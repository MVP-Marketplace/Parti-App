import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const user = localStorage.getItem('user');
	const [currentUser, setCurrentUser] = useState(null);
	const [role, setRole] = useState([]);
	const [cards, setCards] = useState([]);
	const [videos, setVideos] = useState([]);
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		if (user && !currentUser) {
			axios
				.get(`/users`, { withCredentials: true })
				.then(({ data }) => {
					setCurrentUser(data);
                    setLoggedIn(true)
				})
				.catch((error) => console.log(error));
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
			}}>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppContextProvider };
