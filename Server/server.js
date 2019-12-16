 const express = require('express');
       const app = express();
       const fs = require('fs');
   
       const PORT = 3212;
       const FILE = './feedbacks.json';
       
       async function writeToFile(body) {
           const comments = await readFromFile();
           comments.push(body);
           const error = fs.writeFileSync(FILE, JSON.stringify(comments));
           return error;
       }
       
       async function readFromFile() {
           const rawdata = await fs.readFileSync(FILE);
           const comments = JSON.parse(rawdata);
       
           return comments;
       }
       async function readFromFileUser(user) {
        const rawdata = await fs.readFileSync(FILE);
        const comments = JSON.parse(rawdata);
        const result = comments.filter(comment => comment.username == user);
        return result;
        }

        async function readFromFileMail(mail) {
        const rawdata = await fs.readFileSync(FILE);
        const comments = JSON.parse(rawdata);
        const result = comments.filter(comment => comment.mail == mail);

        return result;
        }

        async function readFromFileDate(date) {
            const rawdata = await fs.readFileSync(FILE);
            const comments = JSON.parse(rawdata);
            const result = comments.filter(comment => comment.date == date);
    
            return result;
            }
       
        app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            next();
        });
       app.use(express.json());
       app.use(express.urlencoded({ extended: true }));
       
       app.post('/feedbacks', async function(req, res) {
           await writeToFile(req.body);
               res.json({
                   success: true,
                   body: req.body
               });
       });

       app.get('/feedbacks', async function(req, res) {
           res.json({
               success: true,
               body: await readFromFile()
           });
       });

       app.get('/feedbacks/user', async function (req, res) {
        res.json({
            success: true,
            body: await readFromFileUser(req.query.username)
        });
      });
      
      app.get('/feedbacks/mail', async function (req, res) {
        res.json({
            success: true,
            body: await readFromFileMail(req.query.mail)
        });
      });

      app.get('/feedbacks/date', async function (req, res) {
        res.json({
            success: true,
            body: await readFromFileDate(req.query.date)
        });
      });
       
       app.listen(PORT, () => console.log(`Server app listening on port ${PORT}!`));