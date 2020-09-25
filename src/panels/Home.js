import React from 'react';
import Sliders from '../components/Sliders'
import { Panel, PanelHeader } from '@vkontakte/vkui';



const Home = ({ id, fetchedState, snackbarError }) => (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		{fetchedState && <Sliders fetchedState={fetchedState} snackbarError={snackbarError}/>}
	</Panel>
);

export default Home;