import React from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

import './Intro.css';

const Intro = ({ id, snackbarError, fetchedUser }) => {
	return (
		<Panel id={id} centered={true}>
			<PanelHeader>
				group
			</PanelHeader>

			{snackbarError}
		</Panel>
	)
}

export default Intro;