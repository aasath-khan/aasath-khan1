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
        username:"mommy",
        tineline:"ahh mommy"
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
        alert("the fuck are you doing nigga")
     }
    }
    var usernamePrompt=prompt("what's ur name");
var passwordPrompt=prompt("what's ur password");
signin(usernamePrompt,passwordPrompt);