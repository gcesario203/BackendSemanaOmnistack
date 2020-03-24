const connection = require('../database/connection')

module.exports = {
    async index(req,res){
        const ong_ig = req.headers.authorization
        const incidents = await connection('incidents')
        .where('ong_id', ong_ig).select('*')
        
        return res.json(incidents)
    }
}