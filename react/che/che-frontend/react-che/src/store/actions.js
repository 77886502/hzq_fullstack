import { 
    ACTION_SET_FROM, 
    ACTION_SET_TO
  } from './constants';
  // to  => from
  export const setForm = (from) => ({
    type: ACTION_SET_FROM,
    payload: from
  })
  // from => to
  export const setTo = (to) => ({
    type: ACTION_SET_TO,
    payload: to
  })
  