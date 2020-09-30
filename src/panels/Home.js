import React, { Fragment } from 'react';
// import Sliders from '../components/Sliders'
import Sliders from '../components/Sliders'
import { Panel, PanelHeader, Cell, Group } from '@vkontakte/vkui';
import Icon28Settings from '@vkontakte/icons/dist/28/settings' 

import './Home.css'

const Home = ({ id, fetchedState, snackbarError, go }) => (
	<Panel id={id}>
		<PanelHeader>Электронные книги</PanelHeader>
		{fetchedState && <Sliders fetchedState={fetchedState} snackbarError={snackbarError} />}
		<Group>
			<Cell expandable before={<Icon28Settings/>} onClick={go}>
				settings
			</Cell>
		</Group>
	</Panel>
);
export default Home;