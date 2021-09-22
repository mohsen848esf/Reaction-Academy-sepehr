import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const Teachers = async () => {

    try {
        const result = await Http.get(`${MainUrl}employee/getallteachers`);
        return result;
    
    } catch (error) {
        
    }
    
    }
    
    export {Teachers};