$("h2").css("font-size", "20px");
	$(document).ready(function(){
		$.backstretch([
    "background1.jpg"
  , "background2.jpg"
  , "background4.jpg"
], {duration: 5000, fade: 750});
		$("#makan").click(function(){
			$("h1").css( "color", "white");
		 });
		$("#tombol_sebelum").click(function() {     
      		$("#gambar1").show();
          $("#gambar").hide();
          $("#gambar1").css("width" , "400px")
   		 });
		$( "#tombol_show" ).click(function() {     
     		    $("h1").show();
     		    $("h1").css("font-size","30px");
   		 });
		$( "#tombol_small" ).click(function() {     
      		$("#gambar").show();
          $("#gambar1").hide();
    		 });
		$( "#tombol_red" ).click(function() {     
      		$("h1").css( "color", "red" );
   		 });
		$( "#paragraf1" ).mouseover(function() {    
     $( "#paragraf1" ).css( "background-color", "silver" );
   });

   $( "#paragraf1" ).mouseout(function() {    
     $( "#paragraf1" ).css( "background-color", "pink" );
   });

   $( "#paragraf1" ).dblclick(function() {    
     $( "#paragraf1" ).css( "border", "solid 2px black" );
   });
   $("#tombol").click(function() {
     var nilai = $("#nama").val();
     alert(nilai);
   });
	});
var nomor = 0;

    function berubah(angka){
      nomor  = angka;
      var total = "novel/" + angka + ".jpg";
      document.getElementById("gambar").src = total;
    }

    function sebelum(){
      nomor = nomor - 1;
      if(nomor < 0){
        nomor = 4;
      }
      var total = "novel/" + nomor + ".jpg";
      document.getElementById("gambar").src = total;
      
    } 

    function sesudah(){
      nomor = nomor + 1;
      if(nomor > 4){
        nomor = 0;
      }
      var total = "novel/" + nomor + ".jpg";
      document.getElementById("gambar").src = total;
    } 