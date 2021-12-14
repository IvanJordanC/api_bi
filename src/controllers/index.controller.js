const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'ubuntu',
    password: 'ubuntu5432.',
    database: 'bdd_bi',
    port: '5432'
})


//
const getData = async(req,res)=>{
    const response = await pool.query('SELECT fecha,ph,temperatura FROM fechas f, ph p, temperature t WHERE f.id=p.id AND t.id=p.id ORDER BY f.id desc');
    res.status(200).json(response.rows);
}

const getDates = async(req,res)=>{
    const response = await pool.query('SELECT * FROM fechas');
    res.status(200).json(response.rows);
}

const getPHs = async(req,res)=>{
    const response = await pool.query('SELECT * FROM ph');
    res.status(200).json(response.rows);
}

const getTemperaturas = async(req,res)=>{
    const response = await pool.query('SELECT * FROM temperature');
    res.status(200).json(response.rows);
}


const createData = async(req,res)=>{
    const {DateTime,ph,temperature} = req.body;

    const responseDate = await pool.query('INSERT INTO fechas(fecha) VALUES($1)',[DateTime]);
    const responsePH = await pool.query('INSERT INTO ph(pH) VALUES($1)',[ph]);
    const responseTemp = await pool.query('INSERT INTO temperature(temperatura) VALUES($1)',[temperature]);
    res.json({
        message: "Data created",
        body:{
            date:{DateTime},
            ph:{ph},
            temperature:{temperature}
        }
    });
}


const createFecha = async(req,res)=>{
    const{DateTime}=req.body;

    const response = await pool.query('INSERT INTO fechas(fecha) VALUES($1)',[DateTime]);
    console.log(response);
    res.json({
        message: "Date added Succesfully",
        body: {
            date:{DateTime}
        }
    });
}

const createPH = async(req,res)=>{
    const{ph}=req.body;

    const response = await pool.query('INSERT INTO ph(pH) VALUES($1)',[ph]);
    console.log(response);
    res.json({
        message: "pH added Succesfully",
        body: {
            ph:{ph}
        }
    });
}

const createTemperatura = async(req,res)=>{
    const{temperature}=req.body;

    const response = await pool.query('INSERT INTO temperature(temperatura) VALUES($1)',[temperature]);
    console.log(response);
    res.json({
        message: "Temperature added Succesfully",
        body: {
            temperature:{temperature}
        }
    });
}
/*

const getUserById = async(req,res)=>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id=$1',[id]);
    res.json(response.rows);
}

const deleteUser = async(req,res)=>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id=$1',[id]);
    res.json(`User ${1} deleted succesfully`);
}

const updateUser = async(req,res)=>{
    const id = req.params.id;
    const {name,email}=req.body;
    const response = await pool.query('UPDATE users SET name=$1, email=$2 WHERE id=$3',[
        name,
        email,
        id
    ]);
    res.json('User updated succesfully');
}
*/
module.exports = {
    getDates,
    getPHs,
    getTemperaturas,
    createFecha,
    createPH,
    createTemperatura,
    getData,
    createData
}