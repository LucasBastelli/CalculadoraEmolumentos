// JavaScript source code
function myFunction() {
	let quantidade=0;
	let valor2=0;
	let total =0;
	let resul='Total: R$';
	quantidade = document.getElementById("qnt").value;
	quantidade = parseFloat(quantidade);
	if(quantidade<99){
		quantidade=quantidade*100;
	}
	valor2 = document.getElementById("valor").value;
	valor2 = valor2.replace(/,/g, ".");
	valor2 = parseFloat(valor2);
	total=quantidade*valor2*0.00046438;
	total = Math.round(total*100)/100;
	total= total.toString();
	total = total.replace(".", ",");
	resul= resul.concat(total);
	document.getElementById("resultado").innerHTML=resul;

}
