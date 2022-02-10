
export const checkIfLogin = () => {
    let accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
        return true
    } else {
        return false
    }
}