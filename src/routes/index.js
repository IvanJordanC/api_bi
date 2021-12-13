const { Router }=require('express');
const { route } = require('express/lib/application');
const router = Router();

route.get('/', (req,res)=>res.send('Hello World'));

const {
    getDates,
    getPHs,
    getTemperaturas,
    createFecha,
    createPH,
    createTemperatura,
    getData
} = require('../controllers/index.controller');

router.get('/dates',getDates);
router.post('/dates',createFecha);

router.get('/ph',getPHs);
router.post('/ph',createPH);

router.get('/temperature',getTemperaturas);
router.post('/temperature',createTemperatura);

router.get('/data',getData);

module.exports = router;