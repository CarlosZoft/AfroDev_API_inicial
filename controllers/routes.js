const Agendamento = require('../models/Agendamento');


module.exports = app => {

    app.get('/agenda', (req, res) => {

        Agendamento.exibir(res);

    });    
    app.post('/agenda', (req,res) => {

        var agendamento = req.body;
        Agendamento.inserir(agendamento, res);
    
    })
    
    app.get('/agenda/:id', (req,res) => {

        const id = parseInt(req.params.id);
        Agendamento.exibirUser(id, res);

    })

    app.delete('/agenda/:id', (req,res) => {

        const id = parseInt(req.params.id);
        Agendamento.excluir(id, res);
    
    })

    app.put('/agenda/:id', (req,res) => {
        const id = parseInt(req.params.id);
        const data = req.body;

        Agendamento.atualizar(id,data, res);
    })


};

