$(document).ready(function() {
	e = new Date();
	a = 0;
    $("button").click(function(){
		a++;
		d = new Date();		
		if (a==1) { 
			$('#uno').text(d.format("HH:MM"));	
			$('#dos').text('');
			$('#tres').text('');
			ant = d;
		}
		if (a==2) { 
			miDif = d.getTime() - ant.getTime();
			e.setTime(miDif);
			$('#dos').text(d.format("HH:MM")); 
			$('#tres').text(e.format("UTC:HH:MM")); 
			ant = d;
			$("#uno").css("color","green");
		}
		if (a==2) { 
			a = 0;
		}
    });
});