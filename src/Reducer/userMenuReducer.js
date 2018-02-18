
const menuState = {
    'menuSelection' : 'All'
}

export default function (state=menuState,action){

    switch (action.type) {
        case "MENU_SELECTED":
            const newState  = Object.assign({}, state, { menuSelection: action.flag })
            return newState;
        default :
            return state;
    }

}