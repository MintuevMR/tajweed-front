export const handleUserInfoFulfilled = (state, action) => {
  state.user = action.payload;
};

export const handleUserChangeInfoPending = (state) => {
  state.error = null;
};

export const handleUserChangeInfoFulfilled = (state, action) => {
  state.error = null;
  state.user = action.payload;
};

export const handleUserChangeInfoRejected = (state, action) => {
  if (Array.isArray(action.payload)) {
    state.error = action.payload[0].msg;
  } else {
    state.error = action.payload;
  }
};

export const handleUserChangeAvatarFulfilled = (state, action) => {
  state.user = action.payload;
};

export const handleBookmarkFulfilled = (state, action) => {
  state.user = action.payload;
};

export const handleUserAllFulfilled = (state, action) => {
  state.users = action.payload;
};
