import React, {useEffect, useState} from 'react'

import TimePicker from 'react-timekeeper'

import {Fab} from '@material-ui/core'
import BeforeIcon from '@material-ui/icons/NavigateBefore'
import NextIcon from '@material-ui/icons/NavigateNext'

import {
    CenterDiv, Wrapper, H1
} from '../select-user/styles'

import { getKeyValue } from '../../utils'

const WakeTime = (props) => {

    const getProperTimeDigit = value => String(value).length === 1 ? `0${value}` : value 

    const [time, setTime] = useState(`${getProperTimeDigit(new Date().getHours())}:${getProperTimeDigit(new Date().getMinutes())}`)

    useEffect(()=>{
        const timeFromApi = getKeyValue(['wakeTime', 'data', 'data', 'data', 'wakeTime'], props.timeData)
        timeFromApi && setTime(time)
        // eslint-disable-next-line
    }, [props.timeData])

    const saveWakeTime = () => {
        const payload = {
            userId: props.userId,
            wakeTime: time
        }
        props.actions.saveTime(payload)
    }

    const goBack = () => {
        const payload = {
            userId: props.userId,
            step: 3
        }
        props.actions.goToStep(payload)
    }

    return <Wrapper>
        <CenterDiv>
            <Fab
                color='secondary'
                onClick={goBack}                
            >
                <BeforeIcon/>
            </Fab>
        </CenterDiv>
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