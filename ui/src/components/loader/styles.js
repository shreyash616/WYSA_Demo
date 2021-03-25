import styled from 'styled-components'

export const BlockingWrapper = styled.div`    
    background-color: rgba(256,256,256,0.2);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex; 
`

export const SpinnerWrapper = styled.div`
    display: flex;
    margin: auto;
    margin-top: 100px;       
    background-color: #181818;    
    border-radius: 2%;
    min-height: 300px;
    min-width: 300px;
    animation: showUp 0.2s ease-out;
    @keyframes showUp {
        from {
            opacity: 0;            
            transform: translate(0px, -40px);                         
        }
        to {
            opacity: 1;                    
            transform: translate(0px, 0px);                         
        }
    }    
`

export const Spinner = styled.div`
    position: relative;    
    margin: auto;
    z-index: 9999;    
    width: 150px;
    height: 150px;
    border: 5px solid #181818;
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;

    @keyframes spin {
        to {
          -webkit-transform: rotate(360deg);
        }
      }
      
    @-webkit-keyframes spin {
    to {
        -webkit-transform: rotate(360deg);
    }
    }
`