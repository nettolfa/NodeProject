
//requisição na pasta express
const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

let bd = [

    {
        id: "1",
        name: "Felipe"
    },
    {
        id: "2",
        name: "Bruna"
    }

]




//uma consulta ou resposta retornada
//get users
app.get('/users', (request, response) => {
  response.json(bd)
})

app.get('/users/:id',(request, response) => {

  //pegar o id da requisição
  const idUser = request.params.id;
  // encontrar o usuario correspondente no bd
  const user = bd.filter((usuario) => usuario.id === idUser);
  response.json(user);

  //responder a rquisiçao com as infos do users
})

app.post("/users", (request, response) =>{
    //pegar o corpo da requisição
    const body = request.body;
    //criar um novo objeto a partir desse corpo
    const newUser = {
      id:(bd.length.toString),
      name: body.name

    }
    //adicionar esse novo objeto no banco
      bd.push(newUser);
    
      //responder a requisição com o banco completo
      response.json(bd);
    })



    app.delete("/users/:id", (request, response)=>{
      //pegar o id da requisição
      const idUser = request.params.id;
      //percorrer o banco e encontrar quem tem o id de requisição
      bd = bd.filter((usuario) => usuario.id != idUser);
      //delete o condenado

      //responder com o meu banco atualizado
      response.json(bd);
    })
    
    app.patch("/users/:id", (request, response) => {
    //pegar o id da resquisição
    const idUser = request.params.id;
    //pegar o corpo da requisição
    const body = request.body;
    //percorrer o banco
    bd = bd.map((usuario) => {
    
      if(usuario.id === idUser){
        //atualizar as informações
        usuario.name = body.name;
    }
    return usuario
    })
    
    //responder a requisição
    response.json(bd);
  })

//servidor rastreia a porta e retorna ao usuario
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
