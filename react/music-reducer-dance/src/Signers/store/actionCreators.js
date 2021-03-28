import {CHANGE_ARTIST,CHANGE_ENTER_LOADING,CHANGE_SONGS_OF_ARTIST} from './constants';
import {fromJS} from 'immutable';
import {getStringerInfoRequest} from 'immutable';
const changeArtist = (data) =>({
    type:CHANGE_ARTIST,
    data:fromJS(data)
})
const changeSongs = (data) => ({
    type:CHANGE_SONGS_OF_ARTIST,
    data
})
const changeEnterLoading = (data) => ({
    type:CHANGE_SONGS_OF_ARTIST,
    data
})
export const getStringerInfo = (id) =>{
    return dispatch => {
        getStringerInfoRequest(id)
            .then(data =>{
                dispatch(changeArtist(data.artist));
                dispatch(changeSongs(data.hosSongs));
                dispatch(changeEnterLoading(false));
            })
    }
}