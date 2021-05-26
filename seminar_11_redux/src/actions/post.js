export const TITLE_CHANGE = 'TITLE_CHANGE'
export const IMAGE_CHANGE = 'IMAGE_CHANGE'
export const BODY_CHANGE = 'BODY_CHANGE'

// handleTitleChange - это action creator
// объект { type: TITLE_CHANGE, payload: title } - это action
export const handleTitleChange = (title) => ({ 
  type: TITLE_CHANGE,
  payload: title
})

export const handleImageChange = (image) => ({
  type: IMAGE_CHANGE,
  payload: image
})

export const handleBodyChange = (body) => ({
  type: BODY_CHANGE,
  payload: body
})
