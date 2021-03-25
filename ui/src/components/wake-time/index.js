import React, {useState} from 'react'

import TimePicker from 'react-timekeeper'

import {Fab} from '@material-ui/core'
import NextIcon from '@material-ui/icons/NavigateNext'

import {
    CenterDiv, Wrapper, H1
} from '../select-user/styles'

const WakeTime = (props) => {

    const [time, setTime] = useState(`${new Date().getHours()}:${new Date().getMinutes()}`)

    const saveWakeTime = () => {
        const payload = {
            userId: props.userId,
            wakeTime: time
        }
        props.actions.saveTime(payload)
    }

    return <Wrapper>
        <CenterDiv>
            <H1>{'What time do you wake up?'}</H1>
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
                onClick={saveWakeTime}                
            >
                <NextIcon/>
            </Fab>          
        </CenterDiv>
    </Wrapper>
}

export default WakeTime