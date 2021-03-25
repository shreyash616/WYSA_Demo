import React, {useState} from 'react'
import {Fab} from '@material-ui/core'
import NextIcon from '@material-ui/icons/NavigateNext'
import CheckIcon from '@material-ui/icons/Check'

import {connect} from 'react-redux'

import {
    CenterDiv,
    H1,
    Wrapper
} from '../select-user/styles'
import { CheckIconWrapper, Choice } from './styles'

const mapStateToProps = state => ({
    userId: state.globalData.userId
})

const StrugglePeriod = (props) => {

    const [selectedChoice, setSelectedChoice] = useState('')

    const getChoiceStyle = (i) => {
        const choiceBackgrounds = {
            '1': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,108,255,1) 0%, rgba(46,46,135,1) 100%)',
            '2': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,224,255,1) 0%, rgba(46,46,135,1) 100%)',
            '3': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(141,0,255,1) 0%, rgba(46,46,135,1) 100%)'
        }
        return {
            background: choiceBackgrounds[i],
            boxShadow: 'rgb(0 0 0) 5px 4px 10px 0px',
            color: 'white',
            fontFamily: 'Comic Sans MS'
        }
    }

    const submitStrugglePeriod = () => {
        const strugglePeriodIndexes = {
            'Less than 2 weeks': 1,
            '2 to 8 weeks': 2,
            'More than 8 weeks': 3
        }
        const payload = {
            userId: props.userId,
            strugglePeriod: strugglePeriodIndexes[selectedChoice]
        }
        props.actions.saveStrugglePeriod(payload)
    }

    const choiceProps = choice => {
        return {
            onClick: () => setSelectedChoice(choice),
            onKeyPress: e => e.key === 'Enter' && setSelectedChoice(choice)
        }
    }

    const Check = () => {
        return <CheckIconWrapper><CheckIcon/></CheckIconWrapper>
    }

    const getStruggleChoices = () => {
        return <div>
            <Choice tabIndex={0} {...choiceProps('Less than 2 weeks')} style={getChoiceStyle(1)}>{'Less than 2 weeks'}{selectedChoice === 'Less than 2 weeks' && <Check/>}</Choice>
            <Choice tabIndex={0} {...choiceProps('2 to 8 weeks')} style={getChoiceStyle(2)}>{'2 to 8 weeks'}{selectedChoice === '2 to 8 weeks' && <Check/>}</Choice>
            <Choice tabIndex={0} {...choiceProps('More than 8 weeks')} style={getChoiceStyle(3)}>{'More than 8 weeks'}{selectedChoice === 'More than 8 weeks' && <Check/>}</Choice>
        </div>
    }

    return <Wrapper>
        <CenterDiv><H1>{'How long have you been struggling with sleep?'}</H1></CenterDiv>
        <CenterDiv>{getStruggleChoices()}</CenterDiv>
        <CenterDiv>
            <Fab
                color='primary'                
                disabled={!selectedChoice} 
                onClick={submitStrugglePeriod}                   
            >
                <NextIcon/>
            </Fab>
        </CenterDiv>
    </Wrapper>
}

export default connect(mapStateToProps, null)(StrugglePeriod)