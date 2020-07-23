const express = require('express');
const { response } = require('express');

const app = express();

app.use(express.json());

const projects = [];

app.get('/projects', (request, response) => {
    const {name, projects} = request.query;
    
    console.log(name);
    console.log(projects);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
})

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;

    console.log(title);
    console.log(owner);
    
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
    ]);
})

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;

    console.log(id);

    return response.json([
        'Projeto 5',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
    ]);
})

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 5',
        'Projeto 2',
        'Projeto 3',
    ]);
}) 
 
app.get('/', (request, response) => {
    return response.json({ message: 'Home'});
})

app.listen(3333, () => {
    console.log('Back-End started! ✅');
});