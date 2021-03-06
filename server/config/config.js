// import { setFlagsFromString } from "v8";

// puerto
process.env.PORT = process.env.PORT || 3000

//entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//vencimiento de token
//60 seg
//60 min
//24 horas
//30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// seed de autenticacion

process.env.SEED = process.env.SEED || 'este-es el-seed-desarrollo'


//base de datos


let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;