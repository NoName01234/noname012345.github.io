import React from 'react'
import { Tabbar, TabbarItem, PanelHeader, View, Panel, Epic } from '@vkontakte/vkui'
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline'
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline'
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline'
import Icon28ClipOutline from '@vkontakte/icons/dist/28/clip_outline'
import Icon28UserCircleOutline from '@vkontakte/icons/dist/28/user_circle_outline'

class Epics extends React.Component {
    constructor (props) {
      super(props);
  
      this.state = {
        activeStory: 'feed'
      };
      this.onStoryChange = this.onStoryChange.bind(this);
    }
  
    onStoryChange (e) {
      this.setState({ activeStory: e.currentTarget.dataset.story })
    }
  
    render () {
  
      return (
        <Epic activeStory={this.state.activeStory} tabbar={
          <Tabbar>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'feed'}
              data-story="feed"
              text="Новости"
            ><Icon28NewsfeedOutline /></TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'services'}
              data-story="services"
              text="Сервисы"
            ><Icon28ServicesOutline/></TabbarItem>
            
          </Tabbar>
        }>
          <View id="feed" activePanel="feed">
            <Panel id="feed">
              <PanelHeader>Новости</PanelHeader>
            </Panel>
          </View>
          <View id="services" activePanel="services">
            <Panel id="services">
              <PanelHeader>Сервисы</PanelHeader>
            </Panel>
          </View>
        </Epic>
      )
    }
  }

export default Epics