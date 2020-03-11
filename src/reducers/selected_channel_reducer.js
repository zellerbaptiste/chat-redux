import { SELECT_CHANNEL } from '../actions';

const selectedChannelReducer = (state, action) => {
  if (state === undefined) {
    return null;
  }

  switch (action.type) {
    case SELECT_CHANNEL: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default selectedChannelReducer;
