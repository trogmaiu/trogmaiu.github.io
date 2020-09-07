function iniciaJogo(){

tempo_segundos = 120;
document.getElementById('cronometro').innerHTML = tempo_segundos;
	contagem_tempo(tempo_segundos + 1)
}



function contagem_tempo(segundos){

	segundos = segundos - 1;

	if(segundos == -1){
		clearTimeout(timerId); //para a execução da função do settimeout
		return false;
	}

	document.getElementById('cronometro').innerHTML = segundos;

	timerId = setTimeout("contagem_tempo("+segundos+")", 1000);
}
