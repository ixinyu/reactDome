import {createStore} from 'redux'

const notices = (state={isAllRead:false,count:6},action)=>{
  switch (action.type) {
    case 'READ_ALL':
      return {...state,isAllRead:true}
    default:
      return state
  }
}

const store = createStore(notices)

export default store