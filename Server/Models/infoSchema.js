const mongoose = require('mongoose');

const infoSchema  = mongoose.Schema({
    image: { 
        type: String,
        filepath: String,
        required: true
     },
    name: {
         type:String,
          required: true,
          trim:true
         }, 
    name2: { 
        type:String, 
        required: true
     } , 
    link: {
         type:String, 
         required: true
         },
}); 

module.exports= mongoose.model("Info",infoSchema);
        

