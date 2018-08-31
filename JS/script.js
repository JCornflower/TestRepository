var n =document.getElementById("date");
var p = document.getElementById("day");

function myFunction(){
	
	if (n.value ==''){
		p.value = "А дату выбрать, не?"
	}
	else{
		var k=new Date(n.value);
		var K = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][k.getDay()];
		p.value = K;
	}
	
	
}