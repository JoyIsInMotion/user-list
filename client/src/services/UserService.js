const baseUrl = 'http://localhost:3030/jsonstore/users';

export default {
    async getAllUsers() {
        const response = await fetch(baseUrl);
        const data = await response.json();

        return Object.values(data);
    },

    async create(user) {
        const userData = {
            ...user,
            "createdAt": new Date().toISOString(),
            "updatedAt": new Date().toISOString(),

        }

        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        console.log(data);
        
        return data;
    }
}