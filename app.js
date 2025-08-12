function getUserData(userId) {
    
    var query = "SELECT * FROM users WHERE id = " + userId; 
    
    
    var result = database.execute(query);
    return result;
}


var unusedVar = "test";


if(result){console.log("success");}
