const conection = require('../database/conection');
const moment = require('moment');

class Agendamento {

    inserir(agendamento, res) {

        const sql = 'INSERT INTO agendamentos SET ?';
        
        const data_servico = moment(agendamento.data_servico).format('YYYY-MM-DD');
        const data_agendamento = moment().format('YYYY-MM-DD');
        const data = {...agendamento, data_agendamento, data_servico};
    
        const isDataValid = moment(agendamento.data_servico).isSameOrAfter(agendamento.data_agendamento);
        const isNameValid = agendamento.nome_cliente.length >= 3;
        const valid = [
            {
                nome: "data_servico",
                valido: isDataValid,
                mensagem: "Data do agendamento, deve ser igual ou posterior a data atual"

            },
            {
                nome: "data_servico",
                valido: isNameValid,
                mensagem: "O nome do cliente deve ter pelo menos 3 caracteres"
            }
        ];

        const error = valid.filter(data => !data.valido);
        if(error.length)
        {
            res.status(400).json(error);
        }

        conection.query(sql, data, async (error, result) => {

            if(error)
            {
                res.status(400).json(error);
            }

            await resp.status(201).json({...data,id: result.insertId});
        });
    }
    exibirUsers(res){

        const sql = 'SELECT * FROM agendamentos';

        conection.query(sql,(error, result) => {

            if(error)
            {
                res.status(404).json(error);
            };

            resp.status(201).json(result);

        });

    }
    excluir(id, res){

        const sql = 'DELETE FROM agendamentos WHERE id = ?'
        
        conection.query(sql, id, (error, result) => {

            if(error)
            {
                res.status(400).json(error);
            };
            res.status(201).json({
                mensagem : `Agendamento com ${id} removido com sucesso!`
            });
        });
    }
    exibirUser(id, res){

        const sql = `SELECT * FROM agendamentos WHERE id = ?`
        
        conection.query(sql, id, (error, result) => {

            if(error)
            {
                res.status(404).json(error);
            };

            res.status(201).json(result);
        })

    }

    atualizar(id, data, res){

        const sql = 'UPDATE agendamentos SET ? WHERE id = ?'
        
        if(data.data_servico)
        {
            data.data_servico = moment(data.data_servico).format('YYYY-MM-DD');
        };

        conection.query(sql, [data, id], (error, result) => {

            if(error)
            {
                res.status(400).json(error);
            };

            res.status(201).json({...data,id});
        })

    }
}

module.exports = new Agendamento;