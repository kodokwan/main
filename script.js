var signin_bool = false;
function log_in_user(){
    const id = document.getElementById("id").value;
    const pw = document.getElementById("pw").value;
    if ((localStorage.getItem(id) != null) && (localStorage.getItem(id)===pw)){
        sessionStorage.removeItem("id");
        sessionStorage.setItem("id", id);
        location.href = 'wow.html';
        
    }else{
        alert('존재하지 않는 아이디거나 비밀번호가 틀렸습니다.');
    }
}
function newUserCreate(){
    if (signin_bool){
        const id = localStorage.getItem(document.getElementById("id").value);
        if ((id) === null ){
            localStorage.setItem(document.getElementById("id").value,document.getElementById("pw").value);
            location.href = 'main.html';
        }else{
            alert('이미 존재하는 아이디입니다.');
        }
    }
}
function onsigninbutton(){
    if (document.getElementById("pw").value.length >= 8 && document.getElementById("id").value.length >= 4){
        document.getElementById("signin").style = 'position: absolute;left: 50%;top : 350px;transform: translate(-50%,0);background-color: dodgerblue;color: black;border: 0px;border-radius: 5px;font-size: larger;';
        signin_bool = true;
    }else{
        signin_bool = false;
        document.getElementById("signin").style = 'position: absolute;left: 50%;top : 350px;transform: translate(-50%,0);background-color: dodgerblue;color: rgb(107, 114, 125);border: 0px;border-radius: 5px;font-size: larger;';
    }
}
function onName(){
    document.getElementById("id").innerText = sessionStorage.getItem("id");
}