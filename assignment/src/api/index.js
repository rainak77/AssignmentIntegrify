import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/users';

export const userList = async () => {

    try {
        const { data } = await axios.get(url);
        return data;
    }
    catch (error) {
        console.log(error);
    }
};


export const fetchUserById = async (id) => {
    let changeableUrl = url;
    if (id) {
        changeableUrl = `${url}/${id}`;
    }
    try {
        const { data } = await axios.get(changeableUrl);
        return data;

    }
    catch (error) {
        console.log(error);
    }
};