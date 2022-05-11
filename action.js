var count=0
function count(){
    count+=1;
    remove_layer1()
    remove_layer2()
}
function remove_layer2(){
    if(count==1){
        var fun1=document.getElementById(layer2);
        fun1.style.cssText='color:rgba(255, 255, 255, 0)';
    }
}
function remove_layer1(){
    if(count==2){
        var fun2=document.getElementById(layer1);
        fun2.style.cssText='color:rgba(255, 255, 255, 0)';

    }
}