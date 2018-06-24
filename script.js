var partesSalvas=0;
	var partesDaForca=0;
var digitada=new Array();
	var botao;
var mensagemText;
	var Respostas;
var joguim;
	var Lcorreta=0;
var NumLetras;
	var segredo=["chinelo","camisa","bermuda"];
window.onload = init;

function init(){
			var c = Math.floor((Math.random()*segredo.length));
				joguim=segredo[c];
			console.log(joguim);
				NumLetras=joguim.length
	
		for(var i=0;i<(NumLetras);i++){
		digitada[i]="__";
	}
			document.getElementById('escolhaDaLetra').innerHTML=digitada;
				Respostas
		=NumLetras+(NumLetras-1);
			botao=document.getElementById('enviar');
			botao.addEventListener('click',busca);
	}

function busca(event)
	{
		if(digitada.length!=partesSalvas)
	{
		if(partesDaForca<=6)
	{
		letra=document.getElementById("letra").value;
		
		for(var i=0;i<NumLetras;i++)
	{
		if(letra==joguim[i])
	{
				digitada[i]=letra;
				Lcorreta=1;
	}
	}
		if(Lcorreta!=1)
	{
			partesDaForca=partesDaForca+1;
			document.getElementById("corpoBoneco").src="boneco/"+partesDaForca+".png";
	}
		else
	{
			document.getElementById('escolhaDaLetra').innerHTML=digitada;
			partesSalvas=partesSalvas+1;
	}
			Lcorreta=0;
	}
		if(partesDaForca==6){
			document.getElementById("mensagemFinal").innerHTML="Errou";
	}
	}
		if(partesSalvas==digitada.length)
	{
			document.getElementById("mensagemFinal").innerHTML="Está e a peça";
	}
	}