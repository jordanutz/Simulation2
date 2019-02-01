const initialState = {
  listings: []
}

const GET_LISTINGS = 'GET_LISTINGS'

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_LISTINGS:
      return {...state, listings: action.payload}
    default: return state;
  }
}

export function getListings (listings) {
  return {
    type: GET_LISTINGS,
    payload: listings
  }
}
