/*
  Be sure to import in all of the action types from `../actions`
*/
import * as actionTypes from '../actions';


const initialState =  {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.RETRIEVING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case actionTypes.RETRIEVED_SMURFS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    case actionTypes.ADDING_SMURFS:
      return {
        ...state,
        addingSmurfs: true
      }
    case actionTypes.ADDED_SMURFS:
      return {
        ...state,
        addingSmurfs: false,
        smurfs: action.payload
      }
    case actionTypes.ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        error: action.payload
      }
    default:
      return state;
  }
}
