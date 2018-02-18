

const userState = {
    "own_credentials":[
        {
            "website":"google.com",
            "username":"johndoe@gmail.com",
            "password_id":"#jknkjndsjk$SSD"
        },
        {
            "website":"facebook.com",
            "username":"johndoe@gmail.com",
            "password_id":"nnjnnnc#D"
        },
        {
            "website":"reddit.com",
            "username":"thejohndoe",
            "password_id":"#)_2-==23D"
        },
        {
            "website":"wellsfargo.com",
            "username":"johndoebanks",
            "password_id":"iuh!@@22"
        },
        {
            "website":"netflix.com",
            "username":"johndoeandchill",
            "password_id":"(*#$2k$SSD"
        },
        {
            "website":"play.hbogo.com",
            "username":"johndoewatchesgameofthrones",
            "password_id":"23789$$SSD"
        }
    ],
    "shared_with_me":[
        {
            "website":"youtube.com",
            "username":"macklemore299",
            "password_id":"(*#$2k$SSD",
            "lender_user_id": "macklemore"
        },
        {
            "website":"hulu.com",
            "username":"lorenzo789",
            "password_id":"23789$$SSD",
            "lender_user_id": "lorenzochello"
        }
    ],
    "shared_with_others":[
        {
            "website":"netflix.com",
            "username":"johndoeandchill",
            "password_id":"(*#$2k$SSD",
            "borrower_user_id": "thefriendofjohndoe"
        },
        {
            "website":"play.hbogo.com",
            "username":"johndoewatchesgameofthrones",
            "password_id":"23789$$SSD",
            "borrower_user_id": "gotfan"
        }
    ],
    "username":"johndoe19",
    "name": "John Doe"
}


export default function (state=userState,action){

    switch (action.type) {
        case "USER_STATE":
            const newState  = Object.assign({}, state)
            return newState;

        case "SHARE_STATE":
            var newState = state.shared_with_others;
            const newSt = Object.assign([], newState, action.payload);
            const newState1  = Object.assign({}, state, { shared_with_others: newSt})
            return newState1;

        default :
            return state
    }

}

