import {
    BlockingWrapper,
    SpinnerWrapper,
    Spinner
} from './styles'

const DialogModal = (props) => {

    return props.showModal && <BlockingWrapper>
        <SpinnerWrapper showModal={props.showModal}>
            <Spinner/>           
        </SpinnerWrapper>
    </BlockingWrapper>
}

export default DialogModal