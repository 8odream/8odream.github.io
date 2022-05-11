from os import write


a=input('输入文件名：')
with open(a,'r') as psg:
    par=psg.readlines()
with open(a,'w') as psg:
    write('')
with open(a,'r+') as psg:
    for i in par:
        par[i]=par[i].replace('\n','')
        a.write('<p>'+par[i]+'</p>')