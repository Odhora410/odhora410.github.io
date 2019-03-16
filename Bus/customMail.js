function cusmail()
			{
				var inputField1, inputField2;

				inputField1=document.getElementById("FLN").value;
				inputField2=document.getElementById("EM").value;
		
				document.getElementById("p1").innerHTML=("Thank you" + " " + inputField1 + " for joining our mailing list. Per your request, you will be added to our mailing list. We have your email address as " + inputField2 + ".");
			}