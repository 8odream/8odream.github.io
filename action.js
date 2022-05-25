var num=0;
function count_remove(){
    num=num+1;
    if(num==1){
        document.getElementById('layer2').style.display='none';
        document.getElementById('layer1').style.display='block';
    }
    else if(num==2){
        document.getElementById('layer1').style.display='none';
        document.getElementById('layer0').style.display='block';
    }
    else{
        num=0;
        document.getElementById('layer2').style.display='block';
        document.getElementById('layer0').style.display='none';
    }
}