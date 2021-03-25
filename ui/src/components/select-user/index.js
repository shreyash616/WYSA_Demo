import React, { useEffect, useState } from 'react'

import {Avatar, Fab} from '@material-ui/core'
import NextIcon from '@material-ui/icons/NavigateNext'
import { makeStyles } from '@material-ui/core/styles';

import {connect} from 'react-redux'
import {
    CenterDiv,
    H1,
    H3,
    Wrapper,
    ColoredSpan,
    WysaInput,
    AvatarWrapper,
    UsersHeading,
    AvatarName
} from './styles'

const mapStateToProps = state => ({
    userData: state.userData,
    saveUsernameData: state.saveUsernameData
})

const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10)
    }
  }));

const SelectUser = props => {

    const [previousUsers, setPreviousUsers] = useState([])    
    const [username, setUsername] = useState('')

    useEffect(()=>{
        let prevUsers = document.cookie.split(':')
        prevUsers = prevUsers[0].split('&')[0] ? prevUsers: []
        setPreviousUsers(prevUsers.length > 0 ? prevUsers.map((user) => {
            return {
                userId: user.split('&')[0].split('=')[1],
                userName: user.split('&')[1],
                color: generateRandomColor()
            }
        }).reverse().slice(0,3) : [])        
    }, [])

    const saveUsername = () => {
        const payload = {
            userName: username
        }
        props.actions.saveUsername(payload)
    }

    const fetchUserDetails = (selectedUser) => {    
        console.log(selectedUser)    
        const payload = {
            userId: Number(selectedUser.userId)
        }
        props.actions.getUserData(payload)
    }

    const classes = useStyles()

    return (
        <Wrapper>
            <CenterDiv><H1>{'Hey! I\'m '}<ColoredSpan>{'wysa'}</ColoredSpan></H1></CenterDiv>
            <CenterDiv><H3>{'Our Conversations are private & anonymous, so there is no login. Just choose a nickname and we\'re good to go.'}</H3></CenterDiv>
            {previousUsers.length > 0 && <React.Fragment><UsersHeading>{'Continue with existing users?'}</UsersHeading>
                <CenterDiv noTopMargin>                    
                    {previousUsers.map((user) => {
                        return <AvatarWrapper key={user.userId}><Avatar className={classes.large} style={{background: user.color}} alt={user.userName} onClick={() => fetchUserDetails(user)}>{user.userName[0]}</Avatar><AvatarName>{user.userName}</AvatarName></AvatarWrapper>
                    })}
                </CenterDiv>
            <UsersHeading lessTopMargin>{'Or'}</UsersHeading>
            </React.Fragment>}
            <CenterDiv noTopMargin={previousUsers.length > 0}>    
                <WysaInput 
                    id='username'
                    value={username}
                    placeholder='Choose a nickname...'
                    maxLength={15}
                    onChange={e => setUsername(e.target.value)}
                />      
                <Fab
                    color='primary'
                    onClick={saveUsername}
                    disabled={!username || !username.trim()}                    
                >
                    <NextIcon/>
                </Fab>          
            </CenterDiv>            
        </Wrapper>
    )
}

export default connect(mapStateToProps, null)(SelectUser)