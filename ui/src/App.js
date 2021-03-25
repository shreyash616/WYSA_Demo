import './App.css';
import {useEffect} from 'react'

import Loader from './components/loader'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getKeyValue} from './utils'
import Actions from './redux/actions'

import SelectUser from './components/select-user'
import StrugglePeriod from './components/struggle-period'
import BedTime from './components/bed-time'
import WakeTime from './components/wake-time'

import {Container} from './Styles'
import Success from './components/success';

const mapStateToProps = state => ({
    userData: state.userData,
    loading: state.globalData.spinnerState.status,
    step: state.globalData.step,
    userId: state.globalData.userId,
    saveUsernameData: state.saveUsernameData,
    timeData: state.saveTimeData
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const App = (props) => {

  useEffect(()=>{
      const saveStatus = getKeyValue(['status'], props.saveUsernameData)
      const saveData = getKeyValue(['data', 'data', 'data'], props.saveUsernameData)
      if(saveStatus){
          const userString = 'user=' + saveData.userId + '&' + saveData.userName
          document.cookie = document.cookie ? document.cookie + ':' + userString : userString                      
      }
  }, [props.saveUsernameData])

  const getStepComponent = () => {
    const steps = {
      '2': <StrugglePeriod {...props} />,
      '3': <BedTime {...props} />,
      '4': <WakeTime {...props} />,
      '5': <Success />
    }    
    if(props.step){
      return steps[props.step]
    } else {
      return <SelectUser {...props} />
    }
  }

  return (
    <Container>
      {getStepComponent()}
      {props.loading && <Loader showModal={props.loading}/>}
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
