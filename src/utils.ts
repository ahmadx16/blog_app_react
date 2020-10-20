export const handleErrors = (err:any) => {
    // No response indicating a network error
    if (!err.response) {
        return {
            error: "Network Error: Cannot connect to backend server"
        }
    }
    
    return {
        error: "An Error occured, Please contact support"
    }
}
