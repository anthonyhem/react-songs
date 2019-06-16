//reducers file
import { combineReducers } from 'redux';


const songsReducer = () => {
	return ([
		{title: 'No Diggity', duration: '4:05'},
		{title: 'Let it Burn', duration: '5:35'},
		{title: 'Ladder', duration: '3:23'},
		{title: 'Changes', duration: '4:35'}
	]);	
};

const selectedSongReducer = (selectedSong=null, action) => {
	if(action.type === 'SONG_SELECTED'){
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer	
});