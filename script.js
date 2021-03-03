function randColor() {
/*СОЗДАЕМ ПЕРЕМЕННЫЕ
elem - элемент которому будем менять задний фон
code_color - получаем элемент в который будет выводить код цвета
r,g,b - отвечают за кодировку и вместе выводят цвет
color - в нее записываем полную строку значения цвета
*/
            var element = document.getElementById("display"),
                code_color = document.querySelector('.code_color'),
                r = Math.floor(Math.random() * (256)),
                g = Math.floor(Math.random() * (256)),
                b = Math.floor(Math.random() * (256)),
                color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

            element.style.background = color;
            code_color.innerText = color;
        }

function test1()
{
var request = new XMLHttpRequest();
    var url = "https://pokeapi.co/api/v2/pokemon/";
 
    console.log(url + document.getElementById("aaaa").value + "/");
    
    request.open('GET', url + document.getElementById("aaaa").value + "/");
    request.responseType = 'json';
    request.send();


    request.onload = function()
    {

    	console.log(request.response); 

    	var otvet = request.response;
    	document.getElementById("image1").src = otvet.sprites.front_default;
    	document.getElementById("image2").src = otvet.sprites.back_default;
        document.getElementById("name").innerHTML = otvet.name;
        document.getElementById("height").innerHTML = otvet.height/10;
        document.getElementById("weight").innerHTML = otvet.weight/10;
        randColor();
   
    }

document.getElementById("display").style.display = "inline";
document.getElementById("hello").style.display = "inline";
}