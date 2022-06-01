import * as actions from './actionType';


export const todoAdd = text => ({
    type: actions.TODOADDED,
    payload: {
        text
    }
});


export const todoDel = id => ({
    type: actions.TODODELETED,
    payload: {
        id 
    }
})
