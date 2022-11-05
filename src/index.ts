import 'dotenv/config';
import 'reflect-metadata';
import fs from 'fs';
import path from 'path';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import './utils/response/customSuccess';
import './utils/connection'
import { errorHandler } from './middleware/errorHandler';

import router from './routes';

(async () => {
  const app = express();
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
 

  //Logs
  try {
    const accessLogStream = fs.createWriteStream(path.join(__dirname, '../log/access.log'), {
      flags: 'a',
    });
    app.use(morgan('combined', { stream: accessLogStream }));
  } catch (err) {
    console.log(err);
  }
  app.use(morgan('combined'));

  //Home page
  app.get("/me", (req, res) => {
    res.send({
      slackUsername: "Jeremiah Patrick",
      backend: true,
      age: 23,
      bio: "A Computer Engineer(student @ FUTA). Love Coding to impact life. A software developer. Languages(.py, .ts, .js)"
    });
  })

  app.post("/operation", (req, res) => {
   

    if(req.body.operation_type === "addition"){
      let result = parseInt(req.body.x) + parseInt(req.body.y);
      res.send({
        slackUsername: "Jeremiah Patrick",
        operation_type: req.body.operation_type,
        result: result
      })
    }
    else if(req.body.operation_type === "subtraction"){
      let result = parseInt(req.body.x) - parseInt(req.body.y);
      res.send({
        slackUsername: "Jeremiah Patrick",
        operation_type: req.body.operation_type,
        result: result
      })
    }
    else if(req.body.operation_type === "multiplication"){
      let result = parseInt(req.body.x) * parseInt(req.body.y);
      res.send({
        slackUsername: "Jeremiah Patrick",
        operation_type: req.body.operation_type,
        result: result
      })
    }
    else{
      res.send({
        errorMessage:"Enter a proper operation type"
      })
    };
   
  })

  //Routers.
  app.use('/', router)
  // Handle unwanted routes.
  app.use('/*', (req, res)=>{
    res.status(404).json({
      message: 'Lol, you passed a wrong route',
      route: req.originalUrl,
    })
  })

  //Error handler
  app.use(errorHandler);

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

})();
