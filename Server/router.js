const express = require('express')
const router = express.Router();
const infoRouter  = require("./Models/infoSchema");


//create
router.post ('/', async (req, res) => {
     console.log(req.body);
    var data = new infoRouter ({
        image: req.body.image,
        name : req.body.name,
        name2: req.body.name2,
        link :  req.body.link
    });
    await data.save();
    res.json(data);
})

//get all
router.get('/',async (req,res) =>{
    var findData =await infoRouter.find();
    res.json(findData);
})


//update
router.put("/update",async(req ,res)=>{  
   var update = await  infoRouter.update({_id:req.body._id},{
    $set:{
        image: req.body.image,
        name : req.body.name,
        name2: req.body.name2,
        link :  req.body.link
    }
   });
   res.json(update);
})


//delete 
router.delete('/del/:id',async (req ,res)=> {

    var delData = await infoRouter.findByIdAndRemove (req.params.id).then (e =>{
        res.json({message:"Deleted success"});
    })
})



router.get ( '/', (req, res) => {   
    res.json('iam a router file')
})

module.exports=router;  //exporting the module so it can be used in other files