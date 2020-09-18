import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, Group, Search, Tabs, TabsItem, Root, PanelHeaderClose, Spinner, Avatar, Counter, Alert, CellButton, Div, Panel, Cell, PanelHeaderBack, List, PanelHeaderButton, PanelHeaderContent, PanelHeaderContext, PanelHeader } from '@vkontakte/vkui';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown'
import Icon24Done from '@vkontakte/icons/dist/24/done'
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline'
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications'
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline'
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline'
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline'
import Icon28MusicOutline from '@vkontakte/icons/dist'
import Icon28UsersOutline from '@vkontakte/icons/dist/28/users_outline'
import '@vkontakte/vkui/dist/vkui.css';

class App extends React.Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
		activePanel: 'panel1'
	  }
	}
  
	render() {
	  return (
		<View activePanel={this.state.activePanel}>
		  <Panel id="panel1">
			<PanelHeader>More</PanelHeader>
			<Group>
			  <Cell expandable before={<Icon28UserOutline/>} onClick={() => this.setState({ activePanel: 'panel2' })}>
				Friends
			  </Cell>
			  <Cell expandable before={<Icon28UsersOutline/>} onClick={() => this.setState({ activePanel: 'panel2' })}>
				Communities
			  </Cell>
			  <Cell expandable before={<Icon28MusicOutline/>} onClick={() => this.setState({ activePanel: 'panel2' })}>
				Music
			  </Cell>
			</Group>
		  </Panel>
		  <Panel id="panel2">
			<PanelHeader separator={false} left={<PanelHeaderBack onClick={() => this.setState({ activePanel: 'panel1' })}/>}>
			  Communities
			</PanelHeader>
			<Search />
			<Cell description="Humor" before={<Avatar />} onClick={() => this.setState({ activePanel: 'panel3' })}>
			  Swipe Right
			</Cell>
			<Cell description="Cultural Center" before={<Avatar />} onClick={() => this.setState({ activePanel: 'panel3' })}>
			  Out Cinema
			</Cell>
			<Cell description="Movies" before={<Avatar />} onClick={() => this.setState({ activePanel: 'panel3' })}>
			  #ARTPOKAZ
			</Cell>
		  </Panel>
		  <Panel id="panel3" centered>
			<PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activePanel: 'panel2' })}/>}>
			  Out Cinema
			</PanelHeader>
			<Spinner />
			<div style={{ marginTop: 10 }}>Centered Content</div>
		  </Panel>
		</View>
	  )
	}
  }
  
export default App