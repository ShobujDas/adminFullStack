const AgentPointModel  = require('../model/agentPointModel');



exports.addAgentPointController = async(req,res)=>{
    try {
        const { agentId,contactNum,agentName,date,points } = req.body;
      
        //validation
        switch (true) {
          case !agentId:
            return res.status(500).send({ error: "agentId is Require" });
          case !contactNum:
            return res.status(500).send({ error: "contactNum is Require" });
          case !agentName:
            return res.status(500).send({ error: "agentName is Require" });
          case !date:
            return res.status(500).send({ error: "date is Require" });
          case !points:
            return res.status(500).send({ points: "role is Require" });
          
        
        }
    
        const agentPoint = await new AgentPointModel({
            agentId,
            contactNum,
            agentName,
            date,
            points,
        }).save();
      
        res.status(200).send({
          success: true,
          message: "Agent Points Added Successfully",
          agentPoint,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: "Error in Createing Agent Point",
        });
    }
}



exports.getAgentPointController = async(req,res)=>{
try {
    const getAgentPoint = await AgentPointModel.find({})
        .limit(12)
        .sort({creatdAt:-1});

        res.status(200).send({
            success:true,
            message:"Get All Agent User",
            total_count:getUser.length,
            getAgentPoint,
        })
} catch (error) {
    console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: "Error in Getting Agent Points",
        });
    
}
}








