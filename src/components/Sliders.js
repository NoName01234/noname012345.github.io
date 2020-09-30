import React, { Fragment } from 'react'
import { Panel, Group, CardScroll, Card } from '@vkontakte/vkui'
import './Sliders.css'

const Sliders = (fetchedState, snackbarError) => {
    return (
      <Fragment>
        <Group>
            <CardScroll>
            <Card size="m" className="card fantastic">
                <p class="card_text">Фантастика</p>
                <div style={{ width: 224, height: 96 }} />
            </Card>
            <Card size="m" className="card business">
                <p class="card_text">Бизнес-книги</p>
                <div style={{ width: 224, height: 96 }} />
            </Card>
            <Card size="m" className="card psychology">
                <p class="card_text">Книги по-психологии</p>
                <div style={{ width: 224, height: 96 }} />
            </Card>
            </CardScroll>
        </Group>
      </Fragment>)
}

export default Sliders