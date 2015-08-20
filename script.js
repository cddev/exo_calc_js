prinktkeys();
printOpp();
var _GLOBAL = 0; 
function prinktkeys()
{
var j = 0;
	for(i = 0;i<10;i++){
		
		
		var para = document.createElement("button");
		var node = document.createTextNode(i);
		
		para.id = i;
		para.onclick = function(){getBtnId(this);};
		para.classList.add("myButton");
		
		para.appendChild(node);		
		
		
		
		document.getElementById("div1").style.width = "200px";
		document.getElementById("div1").style.display = "inline-block"
		var element = document.getElementById("div1");
		
		var child = document.getElementById("p1");
		
		element.insertBefore(para,child);
		
		
	}
		var virg = document.createElement("button");
		virg.id = ".";
		virg.classList.add("myButton");
		virg.onclick = function(){getBtnId(this);};
		var node1 = document.createTextNode(".")
		virg.appendChild(node1);
		var element = document.getElementById("div1");
		
		var child = document.getElementById("p1");
		
		element.insertBefore(virg,child);
}
function getBtnId(val1)
{
	if (document.querySelector('.selected') !== null)
	{
			var ope2 = document.querySelector('.selected').id;
			var cval = parseFloat(document.getElementById("output").value);
			
			_GLOBAL =  parseFloat(val1.id);
			
			// var res = 0;
			// switch(ope2)
			// {
				// case "+":
				// res = fAdd(cval,val2);
				// break;
				// case "-":
				// res = fSous(cval,val2);
				// break;
				// case "*":
				// res = fmult(cval,val2);
				// break;
				// case "/":
				// res = fdiv(cval,val2);
				// break;
				// default:
					// res = 0;
			// }
			// document.getElementById("output").value = res;
			//deselect();
	}
	else
	{
		document.getElementById("output").value += val1.id;
	}
}
function calculateRes()
{
	var res = 0;
	var ope2 = document.querySelector('.selected').id;
	var cval = parseFloat(document.getElementById("output").value);
	
			switch(ope2)
			{
				case "+":
				res = fAdd(cval,val2);
				break;
				case "-":
				res = fSous(cval,val2);
				break;
				case "*":
				res = fmult(cval,val2);
				break;
				case "/":
				res = fdiv(cval,val2);
				break;
				default:
					res = 0;
			}
			document.getElementById("output").value = res;
	
}
function getOpeBtnId(ope1)
{
	if (document.querySelector('.selected') !== null)
	{
		deselect();
	}
	else
	{
		document.getElementById(ope1.id).classList.add("selected");		
	}
	
}
function deselect()
{
	var x = document.querySelectorAll(".selected");
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].classList.remove("selected");
		}
}
function printOpp()
{
		var btn1 = document.createElement("button");
		var node1 = document.createTextNode("+");
		btn1.id = "+";
		btn1.onclick = function(){getOpeBtnId(this);};
		btn1.classList.add("myButton");
		btn1.appendChild(node1);
		
		var btn2 = document.createElement("button");
		var node2 = document.createTextNode("-");
		btn2.id = "-";
		btn2.onclick = function(){getOpeBtnId(this);};
		btn2.classList.add("myButton");
		btn2.appendChild(node2);
		
		var btn3 = document.createElement("button");
		var node3 = document.createTextNode("*");
		btn3.id = "*";
		btn3.onclick = function(){getOpeBtnId(this);};
		btn3.classList.add("myButton");
		btn3.appendChild(node3);
		
		var btn4 = document.createElement("button");
		var node4 = document.createTextNode("/");
		btn4.id = "/";
		btn4.onclick = function(){getOpeBtnId(this);};
		btn4.classList.add("myButton");
		btn4.appendChild(node4);
		
		var element = document.getElementById("div2");
		
		var child = document.getElementById("p2");
		
		element.insertBefore(btn1,child);
		element.insertBefore(btn2,child);
		element.insertBefore(btn3,child);
		element.insertBefore(btn4,child);
}
function fAdd(c1,c2){
return c1 + c2;
}
function fSous(c1,c2){
return c1 - c2;
}
function fmult(c1,c2){
return c1 * c2;
}
function fdiv(c1,c2){
return c1 / c2;
}
function ClearField()
{
	document.getElementById('output').value = '';
}