import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

document.getElementById('date-input').valueAsDate = new Date();

const username = new MDCTextField(document.querySelector('.username'));
const mail = new MDCTextField(document.querySelector('.mail'));
const date = new MDCTextField(document.querySelector('.date'));
const comment = document.getElementById('comment-input');

const btnCancel = document.getElementById('cancel');
btnCancel.onclick = function(){
    mail.value="";
    username.value="";
    date.value="";
    comment.value="";
};


const usernameSearch = new MDCTextField(document.querySelector('.usernameSearch'));
const mailSearch = new MDCTextField(document.querySelector('.mailSearch'));
const dateSearch = new MDCTextField(document.querySelector('.dateSearch'));
const btnSearch = document.getElementById('search');

var url = "";
btnSearch.onclick = function(){
    console.log("help me");
    if(usernameSearch.value != "")
        url = "http://localhost:3212/feedbacks" + "/user?username=" + usernameSearch.value;
    if(mailSearch.value != "")
        url = "http://localhost:3212/feedbacks" + "/mail?mail=" + mailSearch.value;
    if(dateSearch.value != "")
        url = "http://localhost:3212/feedbacks" + "/date?date=" + dateSearch.value;
    updateList(url);
}

new MDCRipple(document.querySelector('.cancel'));
new MDCRipple(document.querySelector('.submit'));
