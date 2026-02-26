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
    },
    async delete(userId) {
        const response = await fetch(`${baseUrl}/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();


        return data;
    },

    async update(userId, updatedData) {
        
        const response = await fetch(`${baseUrl}/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData)
        });
        
        console.log(updatedData);
        return { ...updatedData, _id: userId };
    }
}