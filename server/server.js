import app from "./App.js";
import chalk from "chalk"
import mongoose from "mongoose";

const PORT =  process.env.PORT || 3001;

const DB_URL = 'mongodb+srv://admin:lera1989@cluster0.uox40k6.mongodb.net/App-instagram?retryWrites=true&w=majority'

mongoose.connect(DB_URL, (err) => {
    if(err) {
        throw err;
    }

        console.log(chalk.cyan('-------------------------------------------------'));
        console.log(chalk.magenta(`Server is connected to DB`));
        console.log(chalk.cyan('-------------------------------------------------'));

        app.listen(PORT,()=>{
          console.log(chalk.cyan('-------------------------------------------'))
          console.log(chalk.magenta(`Server is listening on http://localhost:${PORT}`))
 })


})



  