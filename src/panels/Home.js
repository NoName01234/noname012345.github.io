import React, { Fragment } from 'react';
import Sliders from '../components/Sliders'
import Epics from '../components/Epics'
import { Panel, PanelHeader, Group } from '@vkontakte/vkui';

import './Home.css'

const Home = ({ id, fetchedState, snackbarError, panelheader }) => (
	<Panel id={id}>
		{fetchedState && 
			<Epics/>
		}
	</Panel>
);

const style = {

}

export default Home;