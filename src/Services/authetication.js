import apiInstance from './instances';

const login = async (loginData) => {
    try{
        const response = await apiInstance.post('/auth/Signin', loginData);
        return response.data;
    } catch (error) {
        console.error("Error checking credibility:", error);
        throw error;
    }

}

const register = async (registerData) => {
    try {
        const response = await apiInstance.post('/Signup', registerData);
        return response.data;
    } catch (error) {
        console.error("Error registering:", error);
        throw error;
    }
}


export {login, register};
