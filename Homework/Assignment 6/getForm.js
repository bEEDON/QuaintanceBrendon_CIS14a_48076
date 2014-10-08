//Function which retrieves the information
//in a form
function getForm(url) {
	var info=url.split("?");
	var nameValuePairs=info[1].split("&");
	var $_GET = new Object;
	for(var i=0;i<nameValuePairs.length-1;i++){
		var map=nameValuePairs[i].split("=");
		var name=map[0];
		var value=map[1];
		$_GET[name] = value;

		var taxRate = .10;//unit = percentage tax per dollar
		var payRate = 10;
		var doubleTime = 20;
		var triTime = 40;
		var str = "";

	    //Declare the table
		var payTable = [];
		var cols = 6;
		for (var col = 0; col < cols; col++) {
		    payTable[col] = [];
		}

	    //Initialize the first element
		payTable[0][0] = 0;//Hours column
		payTable[1][0] = 0;//Display Pay rate
		payTable[2][0] = 0;//Gross pay column
		payTable[3][0] = 0;//taxes column
		payTable[4][0] = 0;//Net pay column
		payTable[5][0] = 0;//Pay rate column

	    //Populate the arrays
		for (var hours = 0; hours <= 72; ++hours) {
		    //Initializing hours and taxes
		    payTable[0][hours] = hours;
		    payTable[5][hours] = 10;

		    //============= Calculations =============================
		    //Straight time
		    if (hours < 20) {
		        payTable[2][hours] = hours * payTable[5][hours];
		        payTable[3][hours] = payTable[2][hours] * .10;
		        payTable[4][hours] = payTable[2][hours] - payTable[3][hours];
		        payTable[1][hours] = 10;
		    }
		    //Double Time
		    if (hours >= 20) {
		        payTable[2][hours] = hours * payTable[5][hours] + (hours - doubleTime) * (payTable[5][hours]);
		        payTable[3][hours] = payTable[2][hours] * .10;
		        payTable[4][hours] = payTable[2][hours] - payTable[3][hours];
		        payTable[1][hours] = 20;
		    }
		    //Triple Time
		    if (hours >= 40) {
		        payTable[2][hours] = hours * payTable[5][hours] + (hours - doubleTime) * (payTable[5][hours])
		        payTable[2][hours] += (hours - triTime) * payTable[5][hours];
		        payTable[3][hours] = payTable[2][hours] * .10;
		        payTable[4][hours] = payTable[2][hours] - payTable[3][hours];
		        payTable[1][hours] = 30;
		    }
		}
	}
	return $_GET;
}