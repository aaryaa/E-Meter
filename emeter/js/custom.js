
//============================================Bubl Start =================================================================


$(document).ready(function() {
          var blubImage = document.getElementById('myImage');
			$('#myonoffswitch').change(function() {
			   if($(this).is(":checked")) {
					blubImage.src = "img/off.jpg";
					$("#bulbstop").trigger("click");
				}
				else{
				   blubImage.src = "img/on.jpg";
				   $("#bulbstart").trigger("click");
				   }
			});
    
			 var blubh1 = document.getElementById('bulbtimer'),
			bulbButton_start = document.getElementById('bulbstart'),
			blubButton_stop = document.getElementById('bulbstop'),
			blubButton_clear = document.getElementById('bulbclear'),
			blubSeconds = 0, blubMinutes = 0, blubHours = 0,
			blubTotalSec = 0,
			blub_T;

function add() {
    blubSeconds++;
    blubTotalSec++;
    if (blubSeconds >= 60) {
        blubSeconds = 0;
        blubMinutes++;
        if (blubMinutes >= 60) {
            blubMinutes = 0;
            blubHours++;
        }
    }
    
    blubh1.textContent = (blubHours ? (blubHours > 9 ? blubHours : "0" + blubHours) : "00") + ":" + (blubMinutes ? (blubMinutes > 9 ? blubMinutes : "0" + blubMinutes) : "00") + ":" + (blubSeconds > 9 ? blubSeconds : "0" + blubSeconds);
    $("#bulbtotal").text(blubTotalSec);
    generatebill();
    timer();
}

function generatebill()
{
    var tsec =  blubTotalSec;
    var thours = tsec/3600;
    var unitrate = $("#blubunit").val();
	var walt = $("#blubwalt").val();
    var totalbill = thours*unitrate*(walt/1000);
    $("#bulbbill").text(totalbill.toFixed(3));
}

function timer() {
    blub_T = setTimeout(add, 1000);
}
//timer();


/* Start button */
bulbButton_start.onclick = timer;

/* Stop button */
blubButton_stop.onclick = function() {
    clearTimeout(blub_T);
}

/* Clear button */
blubButton_clear.onclick = function() {
    blubh1.textContent = "00:00:00";
    blubSeconds = 0; blubMinutes = 0; blubHours = 0;
}
});


//================================================Bulb end==============================================

//=========================================fan satrt ===================================================

	   
$(document).ready(function() {
   //alert("jawehiof");
    var fanImage = document.getElementById('fanImg');
    $('#myonoffswitchFan').change(function() {
      // alert($(this).is(":checked"));
        if($(this).is(":checked")) {
            fanImage.src = "img/fanoff.jpg";
            $("#fanstop").trigger("click");
        }
        else{
        fanImage.src = "img/fanon.gif";
        $("#fanstart").trigger("click");
    }
    });
    
     var fanh1 = document.getElementById('fantimer'),
    fanButton_start = document.getElementById('fanstart'),
    fanButton_stop = document.getElementById('fanstop'),
    fanButton_clear = document.getElementById('fanclear'),
    fanSeconds = 0, fanMinutes = 0, fanHours = 0,
    fanTotalSec = 0,
    fan_T;

function fanadd() {
    fanSeconds++;
    fanTotalSec++;
    if (fanSeconds >= 60) {
        fanSeconds = 0;
        fanMinutes++;
        if (fanMinutes >= 60) {
            fanMinutes = 0;
            fanHours++;
        }
    }
    
    fanh1.textContent = (fanHours ? (fanHours > 9 ? fanHours : "0" + fanHours) : "00") + ":" + (fanMinutes ? (fanMinutes > 9 ? fanMinutes : "0" + fanMinutes) : "00") + ":" + (fanSeconds > 9 ? fanSeconds : "0" + fanSeconds);
    $("#bulbtotal").text(fanTotalSec);
    generatefanbill();
    fantimer();
}

function generatefanbill()
{
    var tsec =  fanTotalSec;
    var thours = tsec/3600;
    var unitrate = $("#fanunit").val();
	var walt = $("#fanwatt").val();
    var totalbill = thours*unitrate*(walt/1000);
    $("#fanbill").text(totalbill.toFixed(3));
}

function fantimer() {
    fan_T = setTimeout(fanadd, 1000);
}
//fantimer();


/* Start button */
fanButton_start.onclick = fantimer;

/* Stop button */
fanButton_stop.onclick = function() {
    clearTimeout(fan_T);
}

/* Clear button */
fanButton_clear.onclick = function() {
    fanh1.textContent = "00:00:00";
    fanSeconds = 0; fanMinutes = 0; fanHours = 0;
}
});

//==========================================fan end =====================================================


//=========================================Ac Start =======================================================

	   
$(document).ready(function() {
   //alert("jawehiof");
    var acImage = document.getElementById('myAC');
    $('#myonoffswitchAC').change(function() {
      // alert($(this).is(":checked"));
        if($(this).is(":checked")) {
            acImage.src = "img/acoff.png";
            $("#acstop").trigger("click");
        }
        else{
        acImage.src = "img/acon.gif";
        $("#acstart").trigger("click");
    }
    });
    
     var ach1 = document.getElementById('actimer'),
    acButton_start = document.getElementById('acstart'),
    acButton_stop = document.getElementById('acstop'),
    acButton_clear = document.getElementById('acclear'),
    acSeconds = 0, acMinutes = 0, acHours = 0,
    acTotalSec = 0,
    ac_T;

function acadd() {
    acSeconds++;
    acTotalSec++;
    if (acSeconds >= 60) {
        acSeconds = 0;
        acMinutes++;
        if (acMinutes >= 60) {
            acMinutes = 0;
            acHours++;
        }
    }
    
    ach1.textContent = (acHours ? (acHours > 9 ? acHours : "0" + acHours) : "00") + ":" + (acMinutes ? (acMinutes > 9 ? acMinutes : "0" + acMinutes) : "00") + ":" + (acSeconds > 9 ? acSeconds : "0" + acSeconds);
    $("#bulbtotal").text(acTotalSec);
    generateacbill();
    actimer();
}

function generateacbill()
{
    var tsec =  acTotalSec;
    var thours = tsec/3600;
    var unitrate = $("#unicac").val();
	var walt = $("#unitwatt").val();
    var totalbill = thours*unitrate*(walt/1000);
    $("#acbill").text(totalbill.toFixed(3));
}

function actimer() {
    ac_T = setTimeout(acadd, 1000);
}
//timer();


/* Start button */
acButton_start.onclick = actimer;

/* Stop button */
acButton_stop.onclick = function() {
    clearTimeout(ac_T);
}

/* Clear button */
acButton_clear.onclick = function() {
    ach1.textContent = "00:00:00";
    acSeconds = 0; acMinutes = 0; acHours = 0;
}
});

//=========================================Ac End ======================================================

 

$(document).ready(function(){

     

       
	   
	   function updatetable()
	   {
	      var blubUnit = $("#blubunit").val();
		  var blubwatt = $("#blubwalt").val();
		  var blubtimer = $("#bulbtimer").text();
		  var blubbill = $("#bulbbill").text();
		    $("#blub_table_unit").text(blubUnit);
			$("#blub_table_watt").text(blubwatt);
			$("#blub_table_time").text(blubtimer);
			$("#blub_table_bill").text(blubbill);
			
			
			var fanUnit = $("#fanunit").val();
		  var fanwatt = $("#fanwatt").val();
		  var fantimer = $("#fantimer").text();
		  var fanbill = $("#fanbill").text();
		    $("#fan_table_unit").text(fanUnit);
			$("#fan_table_watt").text(fanwatt);
			$("#fan_table_time").text(fantimer);
			$("#fan_table_bill").text(fanbill);
			
			
			var acUnit = $("#unicac").val();
		  var acwatt = $("#unitwatt").val();
		  var actimer = $("#actimer").text();
		  var acbill = $("#acbill").text();
		    $("#ac_table_unit").text(acUnit);
			$("#ac_table_watt").text(acwatt);
			$("#ac_table_time").text(actimer);
			$("#ac_table_bill").text(acbill);
		  
		  var alltotal = parseFloat($("#blub_table_bill").text()) + parseFloat($("#fan_table_bill").text()) + parseFloat($("#ac_table_bill").text());
	        $("#alltotalval").text(alltotal.toFixed(3));
	   }
	   
	   
	   setInterval(function(){ updatetable(); }, 100);
	   
	   
	   
	   $("#show_hide").click(function(){
        $("#billtable").slideToggle(100);
    });
	   
	   
	
    });
	
	
