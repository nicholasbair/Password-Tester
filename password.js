var startTime = +new Date(),
    userPassword = prompt('Enter the password you wish to test.'),
    brokenPassword = [],
    strPassword = '',
    message = 'Your password is ',
    message2 = 'It took ',
    message3 = ' sec to crack!',
    endTime,
    elapsedTime,
    allChar = ['1','2','3','4','5','6','7','8','9','0','q','w','e','r','t','y',
'u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m',
'Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z',
'X','C','V','B','N','M'];

function writeToPage(id) {
    document.getElementById(id).innerHTML = message;
}

//TODO add support for special characters
/*
var specChar = ["'",'!','@','#','$','%','^','&','*','(',')','-','_',
'+','=','[',']','\\',';',"'",'.','/','{','}','|',':','<','>','?','"'];
*/

for(var i = 0; i < userPassword.length; i++){
    for(var j = 0; j < allChar.length; j++) {
        if(userPassword[i] === allChar[j]){
            brokenPassword.push(allChar[j]);
        }
    }
}

strPassword = brokenPassword.join('');
endTime = +new Date();
elapsedTime = (endTime - startTime)/1000;
message = message + strPassword + '<br>' + message2 + elapsedTime + message3;
writeToPage('div');
