import jwt_decode from "jwt-decode"

export const checkIfLogin = () => {
    let accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
        return true
    } else {
        return false
    }
}


export const getUserDetails = () => {
    let accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
        let userDetails = jwt_decode(accessToken)
        return userDetails
    } else {
        return null
    }
}

export const sendJwt = () => {
    return {
        "headers": {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }
}

