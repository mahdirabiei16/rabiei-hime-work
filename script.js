var config="";
var type;
const res=document.getElementById("res")
function setres(a){
    res.innerHTML=a
}
function btn1() {
  
  
  config=config+1
  setres(config)
}

function btn2() {
    config=config+2
    setres(config)
}

function btn3() {
    config=config+3
    setres(config)
}

function btn4() {
    config=config+4
    setres(config)
}

function btn5() {
    config=config+5
    setres(config)
}

function btn6() {
    config=config+6
    setres(config)
}

function btn7() {
    config=config+7
    setres(config)
}

function btn8() {
    config=config+8
    setres(config)
}

function btn9() {
    config=config+9
    setres(config)
}



function btnres() {
    if(type == 1){
        config=Number(plusrep)+Number(config)
    }
    if(type ==2){
        config=Number(plusrep)-Number(config)  
    }
    if(type ==3){
        config=Number(plusrep)*Number(config)  
    }
    if(type ==4){
        config=Number(plusrep)/Number(config)  
    }
    setres(config)
}

var plusrep


function btnplus() {
    plusrep =config;
    type=1;
    config=""
    
    setres(config)
}

function btnmin() {
    plusrep =config;
    type=2;
    config=""
    
    setres(config)
}
function btnz() {
    plusrep =config;
    type=3;
    config=""
    
    setres(config)
}
function btntagh() {
    plusrep =config;
    type=4;
    config=""
    
    setres(config)

}
function btndot() {
    config=config+0;
    
    setres(config)
}
function btnc() {
    config=""
    setres(config)
}