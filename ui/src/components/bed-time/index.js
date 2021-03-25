import React, {useState} from 'react'

import TimePicker from 'react-timekeeper'

import {Fab} from '@material-ui/core'
import NextIcon from '@material-ui/icons/NavigateNext'

import {
    CenterDiv, Wrapper, H1
} from '../select-user/styles'

const BedTime = (props) => {

    const [time, setTime] = useState(`${new Date().getHours()}:${new Date().getMinutes()}`)

    const saveBedTime = () => {
        const payload = {
            userId: props.userId,
            sleepTime: time
        }
        props.actions.saveBedTime(payload)
    }

    return <Wrapper>
        <CenterDiv>
            <H1>{'What time do you go to bed for sleep?'}</H1>
        </CenterDiv>
        <CenterDiv>
            <TimePicker 
                time={time}
                onChange={value => setTime(value.formatted24)}
            />
        </CenterDiv>
        <CenterDiv>                  
            <Fab
                color='primary'
                onClick={saveBedTime}                
            >
                <NextIcon/>
            </Fab>          
        </CenterDiv>
    </Wrapper>
}

export default BedTime