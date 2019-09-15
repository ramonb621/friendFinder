var friendsArr = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendsArr);
    });
    app.post("/api/friends", function(req, res){
        var newMatch = req.body.scores;
        var scoresArr = [];
        // var friendScore = 0;
        var bestMatch = 0;
        
        for(let i = 0; i < friendsArr.length; i++){
            var diffScore = 0;
            for(let j = 0; j < newMatch.length; j++){
                diffScore += (Math.abs(parseInt(friendsArr[i].scores[j]) - parseInt(newMatch[j])));
            }

            scoresArr.push(diffScore);

        }

        for(let i = 0; i <= scoresArr.length; i++){
            if(scoresArr[i] <= scoresArr[bestMatch]){
                bestMatch = i;

            }

        }

        var bae = friendsArr[bestMatch];

        res.json(bae);

        friendsArr.push(req.body);
    });
};
