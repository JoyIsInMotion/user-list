const baseUrl = 'http://localhost:3030/jsonstore/users';

export default {
    async getAllUsers() {
        const response = await fetch(baseUrl);
        const data = await response.json();
    
        return Object.values(data);


    }
}