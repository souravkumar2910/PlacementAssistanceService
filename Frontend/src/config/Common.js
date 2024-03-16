export const getUser = () => {
    const userGet = sessionStorage.getItem("user");
    if(userGet) return JSON.parse(userGet);
    else return null;
}

export const getToken = () => {
    return sessionStorage.getItem("token") || null;
}

export const setUserSession = (token,user) => {
    localStorage.setItem("token",token);
    localStorage.setItem("user",JSON.stringify(user));
}


export const setUserIdSession = (user) => {
    localStorage.setItem("userId",JSON.stringify(user));
}

export const removeUserSession = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // localStorage.removeItem("personalId");
}