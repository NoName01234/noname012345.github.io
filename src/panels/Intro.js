import React, {Fragment} from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import { PanelHeader, Div, Group, Avatar, FixedLayout, Button } from '@vkontakte/vkui';

import './Intro.css';

const Intro = ({ id, snackbarError, fetchedUser, userHasSeenIntro, go }) => {
	return (
		<Panel id={id} centered={true}>
			<PanelHeader>
				group
			</PanelHeader>
			{(!userHasSeenIntro && fetchedUser) && 
				<Fragment>
					<Group>
						<Div className='User'>
							{fetchedUser.photo_200 && <Avatar src={fetchedUser.photo_200}/>}
							<h2>Привет, {fetchedUser.first_name}!</h2>
							<h1></h1>
						</Div>
					</Group>
					<FixedLayout vertical="bottom">
						<Div>
							<Button mode="commerce" size="xl" onClick={go}>OK</Button>
						</Div>
					</FixedLayout>
				</Fragment>
			}
			{snackbarError}
		</Panel>
	)
}

export default Intro;