import { BODY_CHANGE, IMAGE_CHANGE, TITLE_CHANGE } from "../actions/post"

const initialState = {
  title: '',
  image: '',
  body: '',
}

export const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case TITLE_CHANGE: {
      return {
        ...state,
        title: action.payload
      }
    }
    case IMAGE_CHANGE: {
      return {
        ...state,
        image: action.payload
      }
    }
    case BODY_CHANGE: {
      return {
        ...state,
        body: action.payload
      }
    }
    default:
      return state
  }
}
