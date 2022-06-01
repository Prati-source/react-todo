
import { v4 as uuidv4 } from 'uuid'
import { createSlice } from '@reduxjs/toolkit'





const sliceTodo = createSlice({
    name: 'todo' ,
    initialState :[],
    reducers: {
        addTODO: (state, action) => {
            const newTODO =
            {
                id: uuidv4(),
                text: action.payload.text,
                completed: false
            };
            state.push(newTODO);
        

    },
    removeTODO: (state, action) => {
       return state.filter((todo) => (action.payload.id !== todo.id));
    },
    toggleTODO: (state, action) =>{ 
       const ID = state.findIndex((todo) => todo.id === action.payload.id);
      state[ID].completed = action.payload.completed


    }
}

}
)

export const { addTODO, removeTODO, toggleTODO } = sliceTodo.actions;
export default sliceTodo.reducer;
