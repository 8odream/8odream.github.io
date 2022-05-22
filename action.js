var num=0;
var fun2=document.getElementById('layer2');
var fun1=document.getElementById('layer1');
var fun0=document.getElementById('layer0');
function count(){
    num+=1;
    remove_layer1();
    remove_layer2();
}
function remove_layer2(){
    if(num==1){
        fun2.style.display='none';
        fun1.style.display='block';
    }
}
function remove_layer1(){
    if(num==2){
        fun1.style.display='none';
        fun0.style.display='block';
    }
}