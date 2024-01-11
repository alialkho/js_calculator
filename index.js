let inp = document.getElementById('textBox');
let str = '';

document.getElementById('one').onclick = function(){
    str = inp.value
    str += 1;
    inp.value = str;
}

document.getElementById('two').onclick = function(){
    str = inp.value
    str += 2
    inp.value = str;
}

document.getElementById('three').onclick = function(){
    str = inp.value
    str += 3;
    inp.value = str;
}

document.getElementById('four').onclick = function(){
    str = inp.value
    str += 4;
    inp.value = str;
}

document.getElementById('five').onclick = function(){
    str = inp.value
    str += 5;
    inp.value = str;
}

document.getElementById('six').onclick = function(){
    str = inp.value
    str += 6;
    inp.value = str;
}

document.getElementById('seven').onclick = function(){
    str = inp.value
    str += 7;
    inp.value = str;
}

document.getElementById('eight').onclick = function(){
    str = inp.value
    str += 8;
    inp.value = str;
}

document.getElementById('nine').onclick = function(){
    str = inp.value
    str += 9;
    inp.value = str;
}

document.getElementById('zero').onclick = function(){
    str = inp.value
    str += 0;
    inp.value = str;
}

document.getElementById('clear').onclick = function(){
    str = inp.value
    str = '';
    inp.value = str;
}

document.getElementById('dot').onclick = function(){
    str = inp.value
    str += '.';
    inp.value = str;
}

document.getElementById('divide').onclick = function(){
    str = inp.value
    str += '÷';
    inp.value = str;
}

document.getElementById('mult').onclick = function(){
    str = inp.value
    str += 'x';
    inp.value = str;
}

document.getElementById('minus').onclick = function(){
    str = inp.value
    str += '-';
    inp.value = str;
}

document.getElementById('add').onclick = function(){
    str = inp.value
    str += '+';
    inp.value = str;
}

document.getElementById('calc').onclick = function(){
    expression = inp.value
    expression.replaceAll("x","*").replaceAll('÷','/').replaceAll('9','bro')
    inp.value = eval(expression.replaceAll("x","*").replaceAll('÷','/'))
    str = inp.value
}

