const initialState = {
  songs: [
    { title: "No sctubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I want it that way", duration: "1:45" },
  ],
  selectedSong: null,
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_SONG":
      return { ...state, selectedSong: action.payload };

    default:
      return state;
  }
};

export default songReducer
