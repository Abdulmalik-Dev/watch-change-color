function updateDate(){
    let date = new Date();
    let setTime = document.getElementById("time");
    let AnnualDate = document.getElementById("AnnualDate");
    setTime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    AnnualDate.innerHTML = date.getDate() + "-" + Number(date.getMonth()+1) + "-" + date.getFullYear();
};

function wallColor(){
    let wall = document.getElementById("inputColor").value;
    localStorage.setItem("wallColor",wall);

    document.body.style.background = localStorage.getItem("wallColor");
    document.getElementById("yungMain").style.background = localStorage.getItem("wallColor");

};

function wallColorAfterReload(){
    localStorage.getItem("wallColor");

    document.body.style.background = localStorage.getItem("wallColor");
    document.getElementById("yungMain").style.background = localStorage.getItem("wallColor");
};

onload = ()=>{
    updateDate();
    wallColorAfterReload();
    setInterval(updateDate,1000);
};