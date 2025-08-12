
function getUserData(userId) {
    
    if (!userId) {
        return null;
    }
    
    
    var query = "SELECT * FROM users WHERE id = " + userId; 
    
    /
    try {
        var result = database.execute(query);
        return result;
    } catch (e) {
        console.log("Error occurred"); 
        return null;
    }
}


if (result) {
    console.log("success");
}


function updateUserEmail(userId, email) {
    
    var updateQuery = `UPDATE users SET email = '${email}' WHERE id = ${userId}`;
    return database.execute(updateQuery);
}


function formatUserName(firstName, lastName) {
    if (!firstName || !lastName) {
        return 'Unknown User';
    }
    return `${firstName} ${lastName}`;
}
