import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Snackbar, Avatar, FixedLayout } from '@vkontakte/vkui/'
import Icon24Error from '@vkontakte/icons/dist/24/error'

import Home from './panels/Home';
import Intro from './panels/Intro';
import Settings from './panels/Settings'

const ROUTES = {
	HOME: 'home',
	INTRO: 'intro',
	SETTINGS: 'settings',
};

const STORAGE_KEYS = { 
	STATUS: 'status',
	STATE: 'state'
}

const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.INTRO);
	const [fetchedUser, setUser] = useState(null);
	const [snackbar, setSnackbar] = useState(null);
	const [fetchedState, setFetchedState] = useState(false)
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [userNotification, setUserNotification] = useState(false)
	const [userNotificationOn, setUserNotificationOn] = useState(false)
	const [userHasSeenIntro, setUserHasSeenIntro] = useState(false);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			const storageData = await bridge.send('VKWebAppStorageGet', {
				keys: Object.values(STORAGE_KEYS)
			});
			console.log(storageData);
			const data = {}
			storageData.keys.forEach(({ key, value }) => {
				try {
					data[key] = value ? JSON.parse(value) : {};
					switch (key) {
						case STORAGE_KEYS.STATUS:
							if(data[key].hasSeenIntro) {
								setActivePanel(ROUTES.HOME);
								setUserHasSeenIntro(true);
							}
							break;
						case STORAGE_KEYS.STATE: 
							setFetchedState(data[key])
							break;
						default:
							break;
					}
				}
				catch(error){
					setSnackbar(<Snackbar
						layout='vertical'
						onClose={() => setSnackbar(null)}
						before={<Avatar size={24} style={{backgroundColor: 'var(--dynamic_red)'}}><Icon24Error fill='#fff' width={14} height={14} /></Avatar>}
						duration={900}
					>
						Проблема с получением данных из Storage
					</Snackbar>)
				}
			});
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = panel => {
		setActivePanel(panel);
	};

	const set = async function(){
		await go(ROUTES.SETTINGS)
	}

	const ho = async function(){
		await go(ROUTES.HOME)
	}

	const notification = async function(){
		if(!userNotification && !userNotificationOn){
			await 
				bridge.send("VKWebAppAllowNotifications")
					.then((result) => {
						setUserNotification(true)
						setUserNotificationOn(true)
					})
					.catch(err => console.log(err))
		}
		else{
			await 
				bridge.send("VKWebAppDenyNotifications")
					.then((result) => {
						setUserNotification(false)
						setUserNotificationOn(false)
					})
		}
	}

	const viewIntro = async function () {
		try { 
			await bridge.send("VKWebAppStorageSet", {
				key: STORAGE_KEYS.STATUS,
				value: JSON.stringify({
					hasSeenIntro: true
				})
			})
			go(ROUTES.HOME)
		}
		catch(error) {
			setSnackbar(<Snackbar
				layout='vertical'
				onClose={() => setSnackbar(null)}
				before={<Avatar size={24} style={{backgroundColor: 'var(--dynamic_red)'}}><Icon24Error fill='#fff' width={14} height={14} /></Avatar>}
				duration={900}
			>
				Проблема с отправкой данных из Storage
			</Snackbar>)
		}
	}

	return (
		<View activePanel={activePanel} popout={popout}>
			<Settings id={ROUTES.SETTINGS} go={ho} notification={notification} userNotificationOn={userNotificationOn}/>
			<Home id={ROUTES.HOME} fetchedUser={fetchedUser} fetchedState={fetchedState} snackbarError={snackbar} go={set}/>
			<Intro id={ROUTES.INTRO} fetchedUser={fetchedUser} go={viewIntro} snackbarError={snackbar} userHasSeenIntro={userHasSeenIntro}/>
		</View>
	);
}

export default App;