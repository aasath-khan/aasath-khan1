var db=[
    {
    username:"vijayna",
    password:"trisha"
},
{
    username:"kk7024",
    password:"dumtha"
}
];
var new_feed=[
    {
    user_name:"nigga",
    timeline: "naan thaan da leo"
    },
    {
        username:"vijay_tvk",
        tineline:"keerthy is my wife"
    }
];

function isvalid(username,password){
    for(var i=0;i<db.length+1;i++){
        if(db[i].username===username && db[i].password===password){
            return true;
        }
        else{
            return false;
        }
    }
}
function signin(username,password){
     if(isvalid(username,password)){
        console.log(new_feed);
     }
     else{
        alert("restricted entry")
     }
    }
    var usernamePrompt=prompt("what's ur name");
var passwordPrompt=prompt("what's ur password");
signin(usernamePrompt,passwordPrompt);
