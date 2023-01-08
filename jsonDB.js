fetch("DB.json")
function RegProtocol()
{
    var reglog = document.getElementById('reglog').value;
    var passlog = document.getElementById('passlog').value;

    var newuser = new Array();

    newuser.login=reglog;
    newuser.password=passlog;

    var stringnewuser = JSON.stringify(newuser);

}