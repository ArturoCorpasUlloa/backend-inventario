const mongoose = require('mongoose');

const mongoConn = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Successful connection with Mongo ✔');        
    }catch(e){
        console.log('Warning no connection with Mongo ❌', e);
        throw new Error('Warning no connection with Mongo ❌');
        
    }
    
}

module.exports = {mongoConn}