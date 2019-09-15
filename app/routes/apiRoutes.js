var friendsArr = require("../data/friends.js");

module.exports = function(app){
    app.get("api/friends", function(req, res){
        res.json(friendsArr);
    });
    app.post("api/friends", function(req, res){
        var newMatch = req.body;
        
        for(let i = 0; i < newMatch.scores.length; i++){
            if(newMatch.scores[i] == "1 (yes)"){
                newMatch.scores[i] = 1;
            } else if(newMatch.scores[i] == "3 (no)"){
                newMatch.scores[i] = 3;
            } else {
                newMatch.scores[i] = parseInt(newMatch.scores[i]);
            }
        }
    });
};
