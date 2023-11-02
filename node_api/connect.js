
const express = require('express');
const cors = require('cors');
const sql = require('mssql');

const corsOptions = {
    origin: 'http://localhost:4200'  };

const app = express();
app.use(cors((corsOptions))); // Configura CORS para permitir solicitudes desde tu aplicación Angular

var config = {
    server: "DESKTOP-HGI34O9",
    authentication: {
      type: "default",
      options: {
        userName: "jorge",
        password: "Jorge$10911"
      }
    },
    options: {
      port: 1433,
      database: "MiBaseDeDatos",
      trustServerCertificate: true,
      connectTimeout: 60000,
    }
}

sql.connect(config, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Conexión exitosa a SQL Server');
  }
});

app.get('/api/login', (req, res) => {
  const request = new sql.Request();
  request.query('SELECT * FROM Clientes', (err, recordset) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al ejecutar la consulta SQL' });
    } else {
      res.send(recordset.recordset);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Node.js en ejecución en el puerto ${PORT}`);
});
