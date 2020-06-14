import {CHANGE_LIST} from "./constants";

const defaultState = {
  list: []
}

export default function (state=defaultState,action) {
  switch (action.type) {
    case CHANGE_LIST:
      return {...state,list: action.value}
    default:
      return state
  }
}