import styled from 'styled-components'

export const UsersHeading = styled.h3`
    font-family: Comic Sans MS;
    color: #1267a3;
    margin-top: ${props => props.lessTopMargin ? '30px' : '50px'};
    margin-bottom: ${props => props.lessTopMargin ? '30px' : '20px'};;
    margin-left: auto;
    margin-right: auto; 
`

export const CenterDiv = styled.div`
    margin-top: ${props => props.noTopMargin ? '' : '50px'};
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;    
`

export const H1 = styled.h1`
    font-family: Comic Sans MS;
    color: white;
`
export const ColoredSpan = styled.span`
    color: #1267a3;
`

export const H3 = styled.h3`
    font-family: Comic Sans MS;
    color: ${props => props.darkBlue ? '#1267a3' : 'white'};
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
`
export const WysaInput = styled.input`
    padding: 10px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 20px;
    margin-right: 20px;
    background: white;
    width: 300px;
    border: none;
    outline: none;
    min-height: 30px;
    font-family: Comic Sans MS;
    font-size: 1.5em;
    margin-bottom: 20px;
    ::placeholder {        
        font-size: 1em;
        font-family: Comic Sans MS;
    }
`
export const AvatarWrapper = styled.div`
    margin: 10px;
    &:hover{
        cursor: pointer;
        transform: scale(1.02);
        transition: 0.2s;
    }
`

export const AvatarName = styled.p`
    display: block;
    margin-top: 8px;
    font-family: Comic Sans MS;
    color: white;
    text-align: center;
`