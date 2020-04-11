
export function things(state= [],action){
    console.log(action.type);
    switch(action.type){
      case "GET_THINGS_SUCCESS": 
        return action.json.workshops;
  
    }
    return state;
  }
  

