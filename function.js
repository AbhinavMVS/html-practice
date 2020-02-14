

function add(){
    var valueone = document.getElementById('one').value;
    var valueTwo = document.getElementById('two').value;
    var result =parseInt(valueone)+parseInt(valueTwo);
    document.getElementById('output').innerHTML=`the sum of two values is ${result}`;
}
function sub(){
    var valueone = document.getElementById('one').value;
    var valueTwo = document.getElementById('two').value;
    var result =parseInt(valueone)-parseInt(valueTwo);
    document.getElementById('output').innerHTML=`the sub of two values is ${result}`;
}
    function mul(){
        var valueone = document.getElementById('one').value;
        var valueTwo = document.getElementById('two').value;
        var result =parseInt(valueone)*parseInt(valueTwo);
        document.getElementById('output').innerHTML=`the mul of two values is ${result}`;
    }            
    
