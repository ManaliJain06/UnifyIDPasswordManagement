export const userMenu = (flag) => {
    return {
        type: "MENU_SELECTED",
        flag
    }
}

export const userState = (payload) => {
    return {
        type: "USER_STATE",
        payload
    }
}

export const shareState = (payload) => {
    return {
        type: "SHARE_STATE",
        payload
    }
}