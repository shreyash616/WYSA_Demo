import React, {useState, useEffect} from 'react'

import TimePicker from 'react-timekeeper'

import {Fab} from '@material-ui/core'
import NextIcon from '@material-ui/icons/NavigateNext'
import BeforeIcon from '@material-ui/icons/NavigateBefore'

import {
    CenterDiv, Wrapper, H1
} from '../select-user/styles'

import { getKeyValue } from '../../utils'

const BedTime = (props) => {

    const getProperTimeDigit = value => String(value).length === 1 ? `0${value}` : value 

    const [time, setTime] = useState(`${getProperTimeDigit(new Date().getHours())}:${getProperTimeDigit(new Date().getMinutes())}`)

    useEffect(()=>{
        const timeFromApi = getKeyValue(['bedTime', 'data', 'data', 'data', 'sleepTime'], props.timeData)
        timeFromApi && setTime(time)
        // eslint-disable-next-line
    }, [props.timeData])

    const saveBedTime = () => {
        const payload = {
            userId: props.userId,
            sleepTime: time
        }
        props.actions.saveTime(payload)
    }
    
    const goBack = () => {
        const payload = {
            userId: props.userId,
            step: 2
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