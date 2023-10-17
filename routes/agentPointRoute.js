const express = require("express");
const { addAgentPointController, getAgentPointController } = require("../controller/agentPointController");

//router object
const router = express.Router();

//ADD USER || METHOD POST
router.post('/addagentpoint',addAgentPointController);


//GET USER || METHOD GET
router.get('/getagentpoint',getAgentPointController);



module.exports = router;