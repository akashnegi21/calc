var input=document.getElementById('input');
var temp;
function change(){
    var ele=document.querySelector('input').value;
    console.log(ele)
    ele1=ele.split('')
    var b=ele1.every((e)=>{
        if(e=='1' || e=='0' ){
            return true;
        }
    })
    if(b==false){
        alert('need to enter only 1 or 0')
        temp=""
        input.value=temp;
    }
    else{
        temp=ele1.join('')
    }
    input.value=temp;
    console.log(temp)
}
function clearAll(){
    input.value="";
    console.log('clear')
}
function del(){
    
   temp=temp.slice(0, -1);
    input.value=temp;
}
function changezero(){
    temp=input.value+='0';
}
function changeone(){
    temp=input.value+='1';
}
function binaryToDecimal(){
    var bina = parseInt(temp, 2);
    temp="";
    input.value=bina;
    
}
function binaryToHexa(){
    var hexa = parseInt(temp, 2).toString(16).toUpperCase();
    temp="";
    input.value=hexa;
}
function binaryToOctal(){
    var octa = parseInt(temp, 2).toString(8).toUpperCase();
    temp="";
    console.log(octa)
    input.value=octa;
}
function operation(e){
    if(e=='add'){
        temp=input.value+'+'
        input.value=temp;
        var a=document.getElementById('equals');
        a.onclick=()=>
            {
        var num = temp.split("+"); 
        var x = parseInt(num[0], 2); 
        var y = parseInt(num[1], 2); 
        
        var sum = x + y;
        
        input.value=(sum.toString(2));
                  }
    }
    else if(e=='sub'){
        temp=input.value+'-'
        input.value=temp;
        var a=document.getElementById('equals');
        a.onclick=()=>
            {
        var num = temp.split("-"); 
        var x = parseInt(num[0], 2); 
        var y = parseInt(num[1], 2); 
        
        var sub = x - y;
        
        input.value=(sub.toString(2));
                
    }
        
    }
    else if(e=='mul'){
        temp=input.value+'*'
        input.value=temp;
        var a=document.getElementById('equals');
        a.onclick=()=>
            {
        var num = temp.split("*"); 
        var x = parseInt(num[0], 2); 
        var y = parseInt(num[1], 2); 
        
        var mul = x * y;
        
        input.value=(mul.toString(2));
                
    }
        
    }
    else if(e=='div'){
        temp=input.value+'/'
        input.value=temp;
        var a=document.getElementById('equals');
        a.onclick=()=>
            {
        var num = temp.split("/"); 
        var x = parseInt(num[0], 2); 
        var y = parseInt(num[1], 2); 
        
        var div = x / y;
        
        input.value=(div.toString(2));
                
    }
        
    }
}