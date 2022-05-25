window.cout_num=0
function count_remove(){
    cout_num=cout_num+1;
    if(cout_num==1)
    {
        document.getElementById('layer2').style.display='none';
        document.getElementById('layer1').style.display='block';
        }
    else if(cout_num==2)
    {
        document.getElementById('layer1').style.display='none';
        document.getElementById('layer0').style.display='block';
        }
    else{
        cout_num=0;
        document.getElementById('layer2').style.display='block';
        document.getElementById('layer0').style.display='none';
    }
}