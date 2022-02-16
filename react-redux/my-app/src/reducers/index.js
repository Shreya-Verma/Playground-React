import { combineReducers } from 'redux';

const songsListReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:03' },
    { title: 'Al Star', duration: '3:17' },
    { title: 'Beliver', duration: '4:05' },
  ];
};

const seletSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsListReducer,
  selectedSong: seletSongReducer,
});
