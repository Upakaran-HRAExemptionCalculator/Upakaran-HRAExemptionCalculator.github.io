

	/* Coded by Upakaran Acharyya Chowdhury (upakaran.0407@gmail.com , 9163769466)- for desktop app HRA Exemption Calculator */
	/* Last modified on 09-JUNE-2020 by Upakaran Acharyya Chowdhury. */	

	function hideDispMsg() {
		
	 var dispMsgDiv = document.getElementById("dispMsg");
	 var disp = dispMsgDiv.style.display;
	 dispMsgDiv.style.display = 'none';
	 console.log("Calculated message is now hidden.");
	 return;
	}



	function showDispMsg() {
		
	 var dispMsgDiv = document.getElementById("dispMsg");
	 var disp = dispMsgDiv.style.display;
	 dispMsgDiv.style.display = 'block';
	 console.log("Calculated message is now displayed.");
	 if(checkAlertSoundInPdf != true){
		
		 document.getElementById("calculateMsgAudio").play();
	 }
	return;
	}
	
	var interval ;
	var interval1 ;
	
	function toggleColor(){
		clearInterval(interval);
		timesRun = 0;
		interval = setInterval( toggleMsgColor , 250);
	}
	
	
	
	function toggleMsgColor(){
		
		var dispMsgDiv = document.getElementById("dispMsg");
		console.log("toggleMsgColor");
			
		if(dispMsgDiv.style.color != "red"){
		dispMsgDiv.style.color = "red";
			console.log(dispMsgDiv.style.color);
			console.log(timesRun);
			timesRun += 1;
			
		}
		 else{
		dispMsgDiv.style.color = "black";
		console.log(dispMsgDiv.style.color);
			console.log(timesRun);
			timesRun += 1;
		}
			if(timesRun == 10){
				console.log("clearToggle");
				clearInterval(interval);
				interval = "";
				timesRun = 0;
				dispMsgDiv.style.color = "black";
			}
				
	} 
	
	var timesRun = 0;
	var timesRun1 = 0;
	
	
	function toggleAlertMsgColor(){
		var message = document.getElementById("warningMessageSpan");
		var messageOkay = document.getElementById("okayMessageSpan");
		console.log("toggleAlertMsgColor");
			
		if(message.style.color != "blue" && messageOkay.style.color != "blue"){
		message.style.color = "blue" ;
		messageOkay.style.color = "blue" ;
		console.log(messageOkay.style.color);
			console.log(timesRun1);
			timesRun1 += 1;
			
		}
		 else{
		message.style.color = "black" ;
		messageOkay.style.color = "black" ;
		console.log(messageOkay.style.color);
			console.log(timesRun1);
			timesRun1 += 1;
		}
			if(timesRun1 == 10){
				console.log("clearToggle1");
				clearInterval(interval1);
				interval1 = "";
				timesRun1 = 0;
			}
				
	} 
				
			

	function sleep(delay) {
		var start = new Date().getTime();
		while (new Date().getTime() < start + delay);
	}

	function checkInputsAndAlert(){
		
		console.log("inside check inputs and alert");
		
		
		var basic = document.getElementById("basic");
		var DA =  	document.getElementById("DA");
		var HRA = document.getElementById("HRA");
		var Rent = document.getElementById("Rent");
		var Metro = document.getElementById("Metro");
		var NMetro = document.getElementById("Non-Metro");
		
			
		if (basic.value.trim().length == 0){  // validation to check that no input is given
			basic.value="";		
			hideDispMsg();
			showAlertBox("Please enter value for Basic component of salary.");
			//alert("Please enter value for Basic component of salary."); 
			return;
		}
		
		else if (parseFloat(basic.value.trim()) <= 0){  // validation to check for negative value input
			basic.value="";								// clear the value in that case
			hideDispMsg();
			showAlertBox("Basic component of salary can not be negative or zero.");
			return;
		}
		
		else if (isNaN(basic.value.trim())){  // validation to check for non  numeric input
			basic.value="";						// clear the value in that case
			hideDispMsg();
			showAlertBox("Basic component of salary should only have numeric value.");
			return;
		}
		
		else if (DA.value.trim().length == 0){
			DA.value="";
			hideDispMsg();
			showAlertBox("Please enter value for Dearness Allowance component of salary. If you do not receive any Dearness Allowance, please enter 0.");
			return;
		}
		
		else if (parseFloat(DA.value.trim()) < 0){
			DA.value="";
			hideDispMsg();
			showAlertBox("Dearness Allowance component of salary can not be negative.");
			return;
		}
		
		else if (isNaN(DA.value.trim())){
			DA.value="";
			hideDispMsg();
			showAlertBox("Dearness Allowance component of salary should only have numeric value.");
			return;
		}
		
		else if (HRA.value.trim().length == 0){
			HRA.value="";
			hideDispMsg();
			showAlertBox("Please enter value for House Rent Allowance component of salary.");
			return;
		}
		
		else if (parseFloat(HRA.value.trim()) <= 0){
			HRA.value="";
			hideDispMsg();
			showAlertBox("House Rent Allowance component of salary can not be negative or zero.");
			return;
		}
		
		else if (isNaN(HRA.value.trim())){
			HRA.value="";
			hideDispMsg();
			showAlertBox("House Rent Allowance component of salary should only have numeric value.");
			return;
		}
		
		else if (Rent.value.trim().length == 0){
			Rent.value="";
			hideDispMsg();
			showAlertBox("Please enter the actual rent paid to landlord.");
			return;
		}
		
		else if (parseFloat(Rent.value.trim()) < 0){
			Rent.value="";
			hideDispMsg();
			showAlertBox("Actual rent paid to landlord can not be negative.");
			return;
		}
		
		else if (isNaN(Rent.value.trim())){
			Rent.value="";
			hideDispMsg();
			showAlertBox("Actual rent paid to landlord should only have numeric value.");
			return;
		}
		
		else if (Metro.checked == false && NMetro.checked == false){
			hideDispMsg();
			showAlertBox("Please select the city type as either Metro or Non-Metro.");
			return;
		}
		
		else if( parseFloat(HRA.value.trim()) > ( 0.6 * parseFloat(basic.value.trim()) ) ){
			basic.value="";
			HRA.value="";
			hideDispMsg();
			showAlertBox("House Rent Allowance component of salary can not be more than 60% of Basic salary.");
			return;
		}
		
		else{
			
				var comp1 = parseFloat(HRA.value.trim()) ;
				console.log("comp1 is " + comp1);
				
				var comp2 = parseFloat(Rent.value.trim()) - ( 0.1 * ( parseFloat(basic.value.trim())+ parseFloat(DA.value.trim()) ) );
				console.log("comp2 is " + comp2);
				
				var comp3;
				var FinalHRAExemptMonthly;
				var FinalHRAExemptYearly;
				
				if(Metro.checked == true){
					var comp3 = ( 0.5 * ( parseFloat(basic.value.trim())+ parseFloat(DA.value.trim()) ));
				}
				
				else if(NMetro.checked == true){
					var comp3 = ( 0.4 * ( parseFloat(basic.value.trim())+ parseFloat(DA.value.trim()) ));
				}
				
				console.log("comp3 is " + comp3);
				
				if(comp1<=comp2 && comp1<=comp3){
					FinalHRAExemptMonthly = comp1;
				}
					
				else if(comp2<=comp1 && comp2<=comp3){
					FinalHRAExemptMonthly = comp2;
				}
					
				else if (comp3<=comp2 && comp3<=comp1){
					FinalHRAExemptMonthly = comp3;
				}
					
					FinalHRAExemptYearly = 12 * FinalHRAExemptMonthly.toFixed(2);
				
					console.log("FinalHRAExemptMonthly is " + FinalHRAExemptMonthly);
					console.log("FinalHRAExemptYearly is " + FinalHRAExemptYearly);
					
					
					
					document.getElementById("HRAMonthly").innerText = FinalHRAExemptMonthly.toFixed(2);
					document.getElementById("HRAYearly").innerText = FinalHRAExemptYearly.toFixed(2);
			
				
				
					/**	if(FinalHRAExemptMonthly<0){
								hideDispMsg();
								document.getElementById("HRAForm").reset();
								showAlertBox("Calculated value is negative. You must have entered some incorrect value. Else your rent is too less to claim HRA Exemption.");
								return;
						} **/
						
						
					
								if( parseFloat(Rent.value.trim()) > 8333.33){
									document.getElementById("PANMessage").style.display = 'block';
									
								}
								
								else if(parseFloat(Rent.value.trim()) < 8333.33){
									document.getElementById("PANMessage").style.display = 'none';
								}
								
								if(FinalHRAExemptMonthly<=0){
								document.getElementById("ZeroMessage").style.display = 'block';
								document.getElementById("HRAMonthly").innerText = 0;
								document.getElementById("HRAYearly").innerText = 0;
								document.getElementById("PANMessage").style.display = 'none';

								}

								else if(FinalHRAExemptMonthly>0){
								document.getElementById("ZeroMessage").style.display = 'none';
								}
					
					showDispMsg();
					
					
			}
	}
	
	
	function showAlertBox(message){
		var height = window.innerHeight - 20 + "px";
		console.log("window height is "+ height);
		document.getElementById("borderTrick1").style.display = 'block';
		document.getElementById("borderTrick2").style.display = 'block';
		document.getElementById("borderTrick1").style.height = height;
		document.getElementById("borderTrick2").style.height = height;
		var alertContainer = document.getElementById("alertContainer");
		alertContainer.style.display = 'block';
		console.log("Alert box is now displayed.");
		var warningMessageSpan = document.getElementById("warningMessageSpan");
		warningMessageSpan.innerText = message;
		console.log("Alert message is set.");
		document.getElementById("bodyContainer").style.display = 'none';
		console.log("Rest body is now hidden.");
		document.getElementById("mainBody").style.border = '0px dotted maroon';
		document.body.style.backgroundImage  = "url('./Images/BgImgAlert.jpg')";
		if(pdfSave == true){
			document.getElementById("alertBody").style.backgroundImage = "url('./Images/alertSmileyPDF.jpg')";
			document.getElementById("pdfAlertAudio").play();
		}
			else{
				document.getElementById("alertBody").style.backgroundImage = "url('./Images/alert.png')";
				document.getElementById("alertAudio").play();
			}
				
		interval1 = setInterval( toggleAlertMsgColor , 250);
		return;
		
	}
	
	function hideAlertBox(){
		document.getElementById("mainBody").style.border = '2px dotted maroon';
		document.getElementById("borderTrick1").style.display = 'none';
		document.getElementById("borderTrick2").style.display = 'none';
		var alertContainer = document.getElementById("alertContainer");
		if(pdfSave == true){
			document.getElementById("alertBody").style.backgroundImage = "url('./Images/alert.png')";
			pdfSave = false;
		}
		alertContainer.style.display = 'none';
		console.log("Alert box is now hidden.");
		document.getElementById("bodyContainer").style.display = 'block';
		document.body.style.backgroundImage  = "url('./Images/BgImgFinal.jpg')";
		document.getElementById("okayAudio").play();
		return;	
	}
	
	
	
	function myResizeFunction(){
		console.log("resize function called");
		document.getElementById("borderTrick1").style.height = window.innerHeight - 20 + "px";
		document.getElementById("borderTrick2").style.height = window.innerHeight - 20 + "px";	
	}
	
	var pdfSave = "";
	var checkAlertSoundInPdf = "";
	
	function myPDFFunction(){
		

			console.log("inside download function");
			
			
	
			var dispMsgDiv = document.getElementById("dispMsg");
			
			var name = document.getElementById("YourName").value.trim();
			var FinancialYear = document.getElementById("FY").value.trim();
			
			var Basic = document.getElementById("basic").value.trim();
			var DA = document.getElementById("DA").value.trim();
			var HRA = document.getElementById("HRA").value.trim();
			var Rent = document.getElementById("Rent").value.trim();
			var Metro = document.getElementById("Metro");
			var NMetro = document.getElementById("Non-Metro");
			
			var cityType = "";
			
			if(Metro.checked == true){
				cityType = "Metro";
			}
				
			else if (NMetro.checked == true){
				cityType = "Non-Metro";
			}
			var monthlyHRA = document.getElementById("HRAMonthly").innerText.toString();
			var yearlyHRA = document.getElementById("HRAYearly").innerText.toString();
			
			
			if(Basic == "" || DA == "" || HRA == "" || Rent == "" || cityType == ""  ){
				console.log("checking  for all required details in download PDF");
				showAlertBox("Please enter all the details in the HRA calculator, then click Calculate to get HRA exemption. Then try to download PDF.");
				return;
			}
			
			
			if (dispMsgDiv.style.display != "block"){
				console.log("checking  for display message in download PDF");
				showAlertBox("Click on Calculate to get HRA exemption. Then try to download PDF.");
				return;
			}
	
			if(name == ""){
				console.log("checking  for name in download PDF");
				document.getElementById("YourName").value = "";
				showAlertBox("Please enter your name in the proper textbox. Then try to download PDF.");
				return;
			}
			
			var letters = /^[a-zA-Z ]+$/;
			
			if(!name.match(letters)){
				console.log("checking  for name to be alphabetic in download PDF");
				document.getElementById("YourName").value = "";
				showAlertBox("Your name can only contain alphabets and spaces in between.");
				return;
			}
			
			if(FinancialYear == ""){
				console.log("checking  for financial year in download PDF");
				document.getElementById("FY").value = "";
				showAlertBox("Please enter Financial Year in the proper textbox. Then try to download PDF.");
				return;
			}
			
			//var numbers = /^[0-9-]+$/;
			
			var numbers = /^[0-9]+-[0-9]+$/;
			
			if(!FinancialYear.match(numbers)){
				console.log("checking  for financial year to be hyphenated number in download PDF");
				document.getElementById("FY").value = "";
				showAlertBox("Financial year can only contain hyphenated (-) numbers for years with no spaces in between. \n For example 2019-2020 or 2019-20.");
				return;
			}
			
			
			var array = FinancialYear.split("-");
			
		
			console.log(array[0].length);
			console.log(array[1].length);
		
			if(array[0].length != 4 ){
				console.log("checking  for financial year to be hyphenated number in download PDF and with proper start year length");
				document.getElementById("FY").value = "";
				showAlertBox("Financial year can only contain hyphenated (-) numbers for years with no spaces in between. \n For example 2019-2020 or 2019-20.");
				return;
			}
			
			if(!( array[1].length == 4 ||  array[1].length == 2 )){
				console.log("checking  for financial year to be hyphenated number in download PDF and with proper end year length");
				document.getElementById("FY").value = "";
				showAlertBox("Financial year can only contain hyphenated (-) numbers for years with no spaces in between. \n For example 2019-2020 or 2019-20.");
				return;
			}
			
			
			
			
			if(array[1].length == 2 ){
				
					var year1 = array[0].substring(array[0].length - 2, array[0].length);
					var year2 = array[1].substring(array[1].length - 2, array[1].length);
					var yearDiff = parseInt(year2)  - parseInt(year1) ;
					
					if(!( yearDiff == 1 || yearDiff == -99 )){
						console.log("checking  for financial year to be hyphenated number in download PDF and with proper year difference when year length 4,2.");
						document.getElementById("FY").value = "";
						showAlertBox("Financial year is incorrect. Financial Year should be having consecutive years. \n Please enter proper Financial Year. \n For example 2019-2020 or 2019-20.");
						return;
					}
			}
			
			if(array[1].length == 4 ){
					var yearDiff = parseInt(array[1])  - parseInt(array[0]) ;
					
					if(!( yearDiff == 1  )){
						console.log("checking  for financial year to be hyphenated number in download PDF and with proper year difference when year length 4,4.");
						document.getElementById("FY").value = "";
						showAlertBox("Financial year is incorrect. Financial Year should be having consecutive years. \n Please enter proper Financial Year. \n For example 2019-2020 or 2019-20.");
						return;
					}
			}
			
			checkAlertSoundInPdf = true;
			
			checkInputsAndAlert();
			
			console.log("return after alert checked");
			
			checkAlertSoundInPdf = false;
		
		if(document.getElementById("bodyContainer").style.display != "none"){
			
			console.log("alert now not visible");
			
			var monthlyHRA = document.getElementById("HRAMonthly").innerText.toString();
			var yearlyHRA = document.getElementById("HRAYearly").innerText.toString();	
	
	
			console.log("creating pdf");
			//Create PDf
			var doc = new jsPDF();
			console.log("created pdf");
			
			 
			//Create Landscape PDF
			//var doc = new jsPDF('landscape');
			 
			 
			//Set PDF properities
			doc.setProperties({
				title: 'HRA Exemption Details',
				subject: 'Details for house rent exemption',     
				author: 'Upakaran Acharyya Chowdhury',
				keywords: 'pdf, javascript,geenerated',
				creator: 'Upakaran Acharyya Chowdhury'
			});
				
			 
			//Adding a page
			//doc.addPage();
			
			//Draw Rectangle
			doc.setDrawColor(0);
			doc.setFillColor(255,0,0);
			//doc.rect(X1, Y1, WIDTH, HEIGHT, 'F');  //F is for Fill
			doc.rect(5, 5, 200, 287, 'D');  //D is for Draw
			//doc.rect(X1, Y1, WIDTH, HEIGTH, 'FD');  //FD is for Fill and Draw  
			
			
			//Set Font type,size & details
			doc.setFont("Times");
			doc.setFontType("italic");
			doc.setFontSize(15);
			
			//Change Text color
			doc.setTextColor(0,0,0);
			
			//Add text to pdf
			doc.text(60,20, 'House Rent Allowance exemption details.'); //X,Y are the position
			
			
			doc.setFontSize(12);
			
			doc.line(59, 21, 148, 21); // horizontal line
			
			 //Adding a Line
			doc.setLineWidth(0.1);
			doc.line(15, 30, 195, 30); // horizontal line
			
			//Add text to pdf
			doc.text(15,40, 'Dear '+name+','); //X,Y are the position
			
			//Add text to pdf
			doc.text(15,50, 'Please find below the details of your HRA exemption for Financial Year '+FinancialYear+' : -'); //X,Y are the position
			
			doc.line(15, 55, 195, 55); // horizontal line
			
			doc.text(15,65, 'Basic component of Salary : Rs '+Basic); //X,Y are the position
			
			doc.text(15,75, 'Dearness Allowance (DA) component of salary : Rs '+DA); //X,Y are the position
			
			doc.text(15,85, 'House Rent Allowance component of salary : Rs '+HRA); //X,Y are the position
			
			doc.text(15,95, 'Actual rent paid to landlord : Rs '+Rent); //X,Y are the position
			
			doc.text(15,105, 'City/Town type Metro/Non-Metro : '+cityType); //X,Y are the position
			
			doc.line(15, 110, 195, 110); // horizontal line
			
			doc.text(15,120, 'Your monthly HRA exemption is : Rs '+monthlyHRA+'.'); //X,Y are the position
			
			doc.text(15,130, 'Your yearly HRA exemption is : Rs '+yearlyHRA+'.'); //X,Y are the position
			
			if(document.getElementById("PANMessage").style.display == 'none'  && document.getElementById("ZeroMessage").style.display == 'none'){
				
				doc.line(15, 135, 195, 135); // horizontal line
			
				doc.text(15,150, 'Regards,'); //X,Y are the position
				
				doc.text(15,158, 'Upakaran Acharyya Chowdhury.'); //X,Y are the position
				
				doc.text(15,166, 'upakaran.0407@gmail.com'); //X,Y are the position
				
				doc.text(15,174, '9163769466 / 8908823006'); //X,Y are the position
				
			}
			
			if(document.getElementById("PANMessage").style.display == 'block' && document.getElementById("ZeroMessage").style.display == 'none' ){
				
				doc.text(15,140, '** Your monthly rent is greater than Rupees 8333.33. **'); //X,Y are the position
				
				doc.text(15,150, '** You need to submit your Landlord\'s PAN number to your employer. **'); //X,Y are the position
				
				doc.line(15, 155, 195, 155); // horizontal line
			
				doc.text(15,170, 'Regards,'); //X,Y are the position
				
				doc.text(15,178, 'Upakaran Acharyya Chowdhury.'); //X,Y are the position
				
				doc.text(15,186, 'upakaran.0407@gmail.com'); //X,Y are the position
				
				doc.text(15,194, '9163769466 / 8908823006'); //X,Y are the position
				
			}
			
			if(document.getElementById("PANMessage").style.display == 'none' && document.getElementById("ZeroMessage").style.display == 'block' ){
				
				doc.text(15,140, '** Your actual rent is far too less to claim HRA exemption. **'); //X,Y are the position
				
				doc.text(15,150, '** To claim HRA exemption, please ensure that your actual rent is more than 10% of (Basic + DA). **'); //X,Y are the position
				
				doc.line(15, 155, 195, 155); // horizontal line
			
				doc.text(15,170, 'Regards,'); //X,Y are the position
				
				doc.text(15,178, 'Upakaran Acharyya Chowdhury.'); //X,Y are the position
				
				doc.text(15,186, 'upakaran.0407@gmail.com'); //X,Y are the position
				
				doc.text(15,194, '9163769466 / 8908823006'); //X,Y are the position
				
			}
			
			
			
			
			console.log("saving pdf");
			//Saving docment using data-uri
			doc.save('HRAExemption_'+name+'_'+FinancialYear+'.pdf');
				
			//get the PDF buffer
			doc.output(); 
			
			pdfSave = true;
			
			showAlertBox("Yipiee!! Your PDF is saved successfully!! \n Please check your browser's default downloads folder to view saved PDF.");
			
			pdfSave = false;
			 
			//Draw Triangle
			//doc.setLineWidth(1);
			//doc.setDrawColor(255,0,0);
			//doc.setFillColor(0,0,255);
			//doc.triangle(X1, Y1, X2, Y2, X3, Y3, 'FD');//FD is for Fill and Draw
		}
				
	}
	
	
	function ResetNameAndFY(){
		document.getElementById("YourName").value = "";
		document.getElementById("FY").value = "";
		 document.getElementById("resetBtnAudio").play();
	}
	
	// We listen to the resize event
	//	window.addEventListener('resize', () => {
		// We execute the same script as before
	//	let vh = window.innerHeight * 0.01;
	//	document.documentElement.style.setProperty('--vh', `${vh}px`);
	//	});
	
	
	//const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	//const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	
	function increaseBorder(x){
		x.style.border = "3px solid red";
	}
	
	function decreaseBorder(x){
		x.style.border = "2px solid blue";
	}
	
	
	function increaseBorderMetro(){	
		document.getElementById("metroSpan").style.border = "3px solid red";
	}
	
	function decreaseBorderMetro(){	
		document.getElementById("metroSpan").style.border = "2px solid blue";
	}
	
	function increaseBorderNonMetro(){
		document.getElementById("nonmetroSpan").style.border = "3px solid red";
	}
	

	function decreaseBorderNonMetro(){
		document.getElementById("nonmetroSpan").style.border = "2px solid blue";
	}
			
	function increaseLinkFont(){
		
		document.getElementById("click_here").style.color = "red";
	}
	
	function decreaseLinkFont(){
		
		document.getElementById("click_here").style.color = "blue";
	}
	
	function playWelcomeSound(){
		document.getElementById("welcomeAudio").play();
	//	sleep(2000);
	}
	
	 window.onload=function(){
      document.getElementById("welcomeAudio").play();
    } 
	
	function playClickSound(){
		document.getElementById("linkClickAudio").play();
		console.log("link clicked");
		sleep(1000);
	}
	