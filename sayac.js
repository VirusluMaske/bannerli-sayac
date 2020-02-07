// Developer : https://github.com/VirusluMaske
// Copyright © 2020 Kutay Keskin


// Sayac Baslangic
    var endDate = new Date("Feb 21, 2020 23:59:00").getTime();
    var timer = setInterval(function() {
 
        let now = new Date().getTime(); 
        let t = endDate - now;
        
        if (t >= 0) {
 
            let gunler = Math.floor(t / (1000 * 60 * 60 * 24));
            let saatler = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let dakikalar = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            let saniyeler = Math.floor((t % (1000 * 60)) / 1000);
			  
			// Sonucu id = "sayacxx" olan elemanda goster
			document.getElementById("sayac1").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac2").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac3").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac4").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac5").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac6").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac7").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac8").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac9").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac10").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac11").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac12").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac13").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac14").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac15").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac16").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac17").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac18").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac19").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac20").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac21").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac22").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac23").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac24").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac25").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac26").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac27").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac28").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac29").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac30").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac31").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac32").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac33").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			document.getElementById("sayac34").innerHTML = ("0" + gunler).slice(-2) + "g " + ("0" + saatler).slice(-2) + "s " + ("0" + dakikalar).slice(-2) + "dk " + ("0" + saniyeler).slice(-2) + "sn ";
			
        }
        else { 
            document.getElementById("timer").innerHTML = "Zaman bitti!"; 
        }
        
    }, 1000);
// Sayac Bitis
