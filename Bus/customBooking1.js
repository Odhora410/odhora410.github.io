function cusbook()
			{
				var inputField1, inputField2, nOt, nOd, totBookingcost;

				inputField1=document.getElementById("FN").value;
				inputField2=document.getElementById("LN").value;
				
				var wifi = 0;
				var recseat = 0;
				var totup = 0;
				var miL = 0;
				var deT = 0;
				var stL = 0;
				var aC = 0;
				var hC = 0;
				var eC = 0;
				var sT = 0;
				var uP = 0;
				var mC = 0;
				var nO = 0;
				var sN = 0;
				var fM = 0;
			
				nOt=document.getElementById("num_trav").value;
				nOd=document.getElementById("num_days").value;
					nOt = parseFloat(nOt);
					nOd = parseFloat(nOd);
			
			
				if (document.getElementById("chkMil").checked)
				{
				miL = document.getElementById("chkMil").value;
				miL = parseFloat(miL)
				}
				
				else if (document.getElementById("chkDet").checked)
				{
				deT = document.getElementById("chkDet").value;
				deT = parseFloat(deT)
				}
				
				else if (document.getElementById("chkStL").checked)
				{
				stL = document.getElementById("chkStL").value;
				stL = parseFloat(stL)
				}
				aC = aC + miL + deT + stL
				
				if (document.getElementById("chkec").checked)
				{
				eC = document.getElementById("chkec").value;
				eC = parseFloat(eC)
				}
				
				else if (document.getElementById("chkst").checked)
				{
				sT = document.getElementById("chkst").value;
				sT = parseFloat(sT)
				}
				
				else if (document.getElementById("chkup").checked)
				{
				uP = document.getElementById("chkup").value;
				uP = parseFloat(uP)
				}
				hC = hC + eC + sT + uP
				
				if ( document.getElementById("chkwifi").checked)
				wifi = wifi + document.getElementById("chkwifi").value;
				wifi = parseFloat(wifi)
				if ( document.getElementById("chkfrs").checked)
				recseat = recseat + document.getElementById("chkfrs").value;
				recseat = parseFloat(recseat)
				
				totup = totup + wifi + recseat;
				
				if (document.getElementById("chkno").checked)
				{
				nO = document.getElementById("chkno").value;
				nO = parseFloat(nO)
				}
				
				else if (document.getElementById("chksn").checked)
				{
				sN = document.getElementById("chksn").value;
				sN = parseFloat(sN)
				}
				
				else if (document.getElementById("chkfm").checked)
				{
				fM = document.getElementById("chkfm").value;
				fM = parseFloat(fM)
				}
				mC = mC + nO + sN + fM
				
				totBookingcost = ((nOt * aC) + (nOt * totup) + (nOt * mC)) + (nOd * hC)
				
				var cusComments;
		
				cusComments=document.getElementById("rOc").value;
					
	
		
				document.getElementById("p1").innerHTML=("Thank you " + inputField1 + " " + inputField2 + " for booking your trip through Dhorajiwala Express.  Your total cost for the trip is $" + totBookingcost + ".")
				
				document.getElementById("p2").innerHTML=("Your requests or comments are: " + cusComments);
			}