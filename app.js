
//requisição na pasta express
const express = require('express') //pega a informação do node modules e passando para a variavel, passa uma informação para constante express
const userService = require('./services/users')
const app = express()
const port = 3000
app.use(express.json());



//uma consulta ou resposta retornada
//get users
app.get('/users', (request, response) => {
  response.json(userService.getUsers());
})

//lista de um usuario especifico
app.get('/users/:id',(request, response) => {

  //pegar o id da requisição
  const idUser = request.params.id;
  // encontrar o usuario correspondente no bd
  response.json(userService.getUserById(idUser));

  //responder a rquisiçao com as infos do users
})

app.post("/users", (request, response) =>{
    //pegar o corpo da requisição
    const body = request.body;
    //criar um novo objeto a partir desse corpo
    
    //adicionar esse novo objeto no banco
     
    response.status(201).json(userService.createUser(body));
      //responder a requisição com o banco completo
     // response.json(bd);
    })



    app.delete("/users/:id", (request, response)=>{
      //pegar o id da requisição
      const idUser = request.params.id;
      
      //percorrer o banco e encontrar quem tem o id de requisição
      //responder com o meu banco atualizado
      response.json(userService.deleteUser(idUser));
    })
    
    app.patch("/users/:id", (request, response) => {
    //pegar o id da resquisição
    const idUser = request.params.id;
    //pegar o corpo da requisição
    const body = request.body;
    //percorrer o banco
    
    
    //responder a requisição
    response.json(userService.updateUser(idUser, body));
  })

//servidor rastreia a porta e retorna ao usuario
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
