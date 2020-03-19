const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'gsivasankar',
    host: 'localhost',
    database: 'gsivasankar',
    password: 'Shivarafale15',
    port: 5432,
});

const getdet = (req,res) =>{
    pool.query('select * from leads', (error, result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);
    }
    )
}
const getdetById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM leads WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      if(results.rows != 0) response.status(200).json(results.rows)
      else response.json({message : "no Valid Data found"})
    })
  }
const createdet = (request, response) => {
    const { id , name } = request.body
  
    pool.query('INSERT INTO leads (id, name ) VALUES ($1, $2)', [ id, name], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.insertId}`)
    })
  }
  const updatedet = (request, response) => {
    const id_o = parseInt(request.params.id)
    const {name} = request.body
  
    pool.query(
      'UPDATE leads SET name = $1 WHERE id = $2',
      [name, id_o],
      (error, results) => {
        if (error) {
          throw error
        }
         response.status(200).send(`User modified with ID: ${id_o}`)
        
      }
    )
  }
  const deletedet = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM leads WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }
  

module.exports = { 
    getdet,
    getdetById,
    createdet,
    updatedet,
    deletedet,
}