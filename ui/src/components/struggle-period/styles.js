import styled from 'styled-components'

export const Choice = styled.div`    
    padding: 20px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 10px;
    background: ${props => props.backgroundColor};
    width: 300px;
    border: none;    
    outline: none;  
    margin-bottom: 30px;
    &:hover{
        cursor: pointer;
        transform: scale(1.02);
        transition: 0.2s;
    }
    &:focus{        
        transform: scale(1.02);
        transition: 0.2s;
    }    
`

export const CheckIconWrapper = styled.span`
    display: block;    
    float: right;
`