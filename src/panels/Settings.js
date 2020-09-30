import React from 'react'
import { Panel, View, PanelHeader, Cell, Group, Switch, Header, PanelHeaderClose } from '@vkontakte/vkui/dist'

const Settings = ({ id, go, notification, userNotificationOn }) => {
    return (
        <Panel id={id}>
            {console.log(userNotificationOn)}
            <PanelHeader left={<PanelHeaderClose onClick={go}/>}>Настройки</PanelHeader>
            <div>
            <Group header={<Header mode="secondary">Уведомление</Header>}>
                <Cell asideContent={<Switch onClick={notification} checked={userNotificationOn}/>}>
                    Уведомление
                </Cell>
            </Group>
        </div>
        </Panel>
    )
}

export default Settings