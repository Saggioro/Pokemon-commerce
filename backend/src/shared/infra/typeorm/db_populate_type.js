import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
});

async function populate() {
    try {
        const { data } = await api.get('/type');
        const types = data.map(async type => {
            const res = await api.get(type.url);
            return { name: type.name, weakness: [], strongness: [] };
        });
    } catch (err) {
        console.log(err);
    }
}

populate();
