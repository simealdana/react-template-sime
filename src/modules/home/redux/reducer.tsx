import {Types} from './actions'
import {Actions} from './interfaces'

const INITIAL_STATE = {
  items: [],
  item: null,
}

export default function homeReducer(state = INITIAL_STATE, action: Actions) {
  switch (action.type) {
    case Types.SET_ITEMS: {
      return {
        ...state,
        items: action.payload.items ? action.payload.items : [],
      }
    }
    case Types.SET_ITEM: {
      return {
        ...state,
        item: action.payload.item,
      }
    }
    default: {
      return state
    }
  }
}
