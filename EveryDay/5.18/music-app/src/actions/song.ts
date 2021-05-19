import api from "../services/api/api";
import {GETRECOMMENDPLAYLIST} from "../constants/song";

export const getRecommentPlayList = () => {
    return dispatch => {
        api
            .get("/personalized")
            .then(res => {
                let recommendPlayList = res.data.result
                dispatch({
                    type:GETRECOMMENDPLAYLIST,
                    payload: {
                        recommendPlayList
                    }
                });
            })
    }
}