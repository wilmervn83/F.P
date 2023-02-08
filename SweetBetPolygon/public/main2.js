const web3 = AlchemyWeb3.createAlchemyWeb3("https://polygon-mumbai.g.alchemy.com/v2/SVBO94uDed_atVZAvYzeexhzhKT6WCUf");
         

 if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
} else {
  console.log('Please install MetaMask!');
};
    






var userAccount;
var UserInterval = setInterval(async function () {
            await web3.eth.getAccounts(async function (err, result) {
              
               var isAddress = await web3.utils.isAddress(`${result}`);
                 document.getElementById("metamask").innerHTML = '';
                if (isAddress !== true) {
                    
                  document.getElementById("metamask").innerHTML = `<div class="alert warning">
   <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>  
  <strong>Please!</strong> Unlock your Metamask wallet. &nbsp; <img src="Images/zorro.png">
</div>`;              
                     $("#cuenta").hide();
					 $("#user").hide();
					 $(".enableEthereumButton").show();
                }else {
                    
                     $("#cuenta").show();
					  $("#user").show();
					  $(".enableEthereumButton").hide();
                     
                }
                
                if (result.length !== 0) { 
                
                
                
          // Comprobar si la cuenta ha sido cambiada
          if (result !== userAccount) {
              
            userAccount = result;
              
               document.getElementById("cuenta").innerHTML = `${userAccount.toString().substring(0,12)}...${userAccount.toString().substring(38,42)}`;
           await web3.eth.getBalance(`${userAccount}`,async function (err, result) {
                       
                
         $("#balance").text(result);
             var value = await web3.utils.fromWei($("#balance").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("balance").innerHTML = `Your balance is: <b>${valued3} MATIC<b>`;
                     
                     
     })    
              } 
                
               } else {
                   
                   clearInterval(UserInterval);
               }
                
                });
	
                
				async function chaID() {
					const chainId = await ethereum.request({ method: 'eth_chainId' });
				
							if(chainId == 0x89){
							 document.getElementById("network").innerHTML = `Network: <b style='color:green'>MainNet Polygon</b>`;  
							  
						  } else if(chainId == 0x13881){
							 document.getElementById("network").innerHTML = `Network: <b style='color:red'>Test net Mumbai</b>`;  
							  
						  } else {
							document.getElementById("network").innerHTML = `Network: <b style='color:orange'>Unknown network</b>`;  
							 
						 }
				}
							 
				chaID();



             }, 1000);
		 
		

	

		
	
			 var donutContract = new web3.eth.Contract([
				{
				  "constant": true,
				  "inputs": [],
				  "name": "getGameStates",
				  "outputs": [
					{
					  "name": "blockNumber",
					  "type": "uint64"
					},
					{
					  "name": "blockHash",
					  "type": "bytes32"
					},
					{
					  "name": "dep",
					  "type": "uint96[]"
					},
					{
					  "name": "slotsCount",
					  "type": "uint64[]"
					},
					{
					  "name": "resultsCount",
					  "type": "uint64[]"
					},
					{
					  "name": "currentCylinderIndex",
					  "type": "uint64[]"
					},
					{
					  "name": "jackpot",
					  "type": "uint96[]"
					}
				  ],
				  "payable": false,
				  "stateMutability": "view",
				  "type": "function"
				},
				{
				  "constant": true,
				  "inputs": [
					{
					  "name": "i",
					  "type": "uint256"
					}
				  ],
				  "name": "getUnfinished",
				  "outputs": [
					{
					  "name": "game",
					  "type": "uint256"
					},
					{
					  "name": "blockNumber",
					  "type": "uint256"
					},
					{
					  "name": "cylinder",
					  "type": "uint256"
					}
				  ],
				  "payable": false,
				  "stateMutability": "view",
				  "type": "function"
				},
				{
				  "constant": false,
				  "inputs": [],
				  "name": "withdraw",
				  "outputs": [],
				  "payable": false,
				  "stateMutability": "nonpayable",
				  "type": "function"
				},
				{
				  "constant": true,
				  "inputs": [],
				  "name": "getTotalCylindersCount",
				  "outputs": [
					{
					  "name": "",
					  "type": "uint256"
					}
				  ],
				  "payable": false,
				  "stateMutability": "view",
				  "type": "function"
				},
				{
				  "constant": true,
				  "inputs": [
					{
					  "name": "",
					  "type": "uint256"
					}
				  ],
				  "name": "BETS",
				  "outputs": [
					{
					  "name": "",
					  "type": "uint256"
					}
				  ],
				  "payable": false,
				  "stateMutability": "view",
				  "type": "function"
				},
				{
				  "constant": true,
				  "inputs": [],
				  "name": "getUnfinishedCount",
				  "outputs": [
					{
					  "name": "",
					  "type": "uint256"
					}
				  ],
				  "payable": false,
				  "stateMutability": "view",
				  "type": "function"
				},
				{
				  "constant": true,
				  "inputs": [
					{
					  "name": "game",
					  "type": "uint256"
					},
					{
					  "name": "idxFrom",
					  "type": "uint256"
					},
					{
					  "name": "idxTo",
					  "type": "uint256"
					}
				  ],
				  "name": "getCylinders",
				  "outputs": [
					{
					  "name": "blockNumber",
					  "type": "uint256"
					},
					{
					  "name": "blockHash",
					  "type": "bytes32"
					},
					{
					  "name": "dep",
					  "type": "uint96"
					},
					{
					  "name": "index",
					  "type": "uint64[]"
					},
					{
					  "name": "deps",
					  "type": "address[]"
					},
					{
					  "name": "unlucky",
					  "type": "uint8[]"
					},
					{
					  "name": "jackpot",
					  "type": "int96[]"
					},
					{
					  "name": "lastDepTime",
					  "type": "uint64[]"
					},
					{
					  "name": "status",
					  "type": "uint8[]"
					}
				  ],
				  "payable": false,
				  "stateMutability": "view",
				  "type": "function"
				},
				{
				  "constant": false,
				  "inputs": [
					{
					  "name": "game",
					  "type": "uint256"
					}
				  ],
				  "name": "withdrawFrom",
				  "outputs": [],
				  "payable": false,
				  "stateMutability": "nonpayable",
				  "type": "function"
				},
				{
				  "constant": true,
				  "inputs": [
					{
					  "name": "game",
					  "type": "uint256"
					},
					{
					  "name": "_idx",
					  "type": "int256"
					}
				  ],
				  "name": "getCylinder",
				  "outputs": [
					{
					  "name": "blockNumber",
					  "type": "uint64"
					},
					{
					  "name": "blockHash",
					  "type": "bytes32"
					},
					{
					  "name": "dep",
					  "type": "uint96"
					},
					{
					  "name": "index",
					  "type": "uint64"
					},
					{
					  "name": "deps",
					  "type": "address[]"
					},
					{
					  "name": "unlucky",
					  "type": "uint8"
					},
					{
					  "name": "jackpot",
					  "type": "int96"
					},
					{
					  "name": "lastDepTime",
					  "type": "uint64"
					},
					{
					  "name": "status",
					  "type": "uint8"
					}
				  ],
				  "payable": false,
				  "stateMutability": "view",
				  "type": "function"
				},
				{
				  "constant": true,
				  "inputs": [],
				  "name": "testRandom",
				  "outputs": [
					{
					  "name": "numbers",
					  "type": "uint256[]"
					}
				  ],
				  "payable": false,
				  "stateMutability": "view",
				  "type": "function"
				},
				{
				  "constant": true,
				  "inputs": [
					{
					  "name": "game",
					  "type": "uint256"
					}
				  ],
				  "name": "getGameState",
				  "outputs": [
					{
					  "name": "blockNumber",
					  "type": "uint64"
					},
					{
					  "name": "blockHash",
					  "type": "bytes32"
					},
					{
					  "name": "dep",
					  "type": "uint96"
					},
					{
					  "name": "slotsCount",
					  "type": "uint64"
					},
					{
					  "name": "resultsCount",
					  "type": "uint64"
					},
					{
					  "name": "currentCylinderIndex",
					  "type": "uint64"
					},
					{
					  "name": "jackpot",
					  "type": "uint96"
					}
				  ],
				  "payable": false,
				  "stateMutability": "view",
				  "type": "function"
				},
				{
				  "inputs": [],
				  "payable": false,
				  "stateMutability": "nonpayable",
				  "type": "constructor"
				},
				{
				  "payable": true,
				  "stateMutability": "payable",
				  "type": "fallback"
				}
			  ], '0x51FB6803aCF83b41ACdb2Ce578889045d2f71ca2');
			
			
		
		
			
			
			
				 var user;
				var accountInterval = setInterval(function() {
            
						
				
				
					 // getGameStates
				donutContract.methods.getGameStates().call(function (err, result) {
				
				
				
				
				
				
			
			
				
// getCylinder 0
				
			donutContract.methods.getCylinder(0,result[4][0]).call(function (err, result) {
			
				if (result[7] == 0) {
				document.getElementById('LastDepTime').value = '- -';
				} else { 
				document.getElementById('LastDepTime').value = '~' + timeago.format(result[7]+'000');
			}
				
				 web3.eth.getAccounts(function (err, UserCount) {
					 
					
				      user = UserCount;
					 
					 
						if (result[8] == 0) {//status 0 
					 $("#winner").hide();
					 $("#loser").hide();
					 $("#imagenM").hide();
					 $("#WinnerJackpot").hide();
							
							
				if (result[4][0] !== undefined && parseInt(result[4][0]) == parseInt(user[0])) {// COMIENZO CILINDRO 0
				
					
					$("#image0").hide();
					$("#image1").show();
			 document.getElementById('image1').style.animation = '2.5s rotate';
             document.getElementById('image1').style.transform="rotate(115deg)";
						 $("#button2").show();
					
					if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image1").hide();
					$("#image2").show();	
			 document.getElementById('image2').style.animation = '2.5s rotate5';
             document.getElementById('image2').style.transform="rotate(254deg)";
				 $("#button2").show();
						
						if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
				     $("#image2").hide();
					 $("#image16").show();	
			 document.getElementById('image16').style.animation = '2.5s rotate6';
             document.getElementById('image16').style.transform="rotate(360deg)";
				 $("#button2").show();
						
						
						
						
						
						} else  if (result[4][2] !== undefined) {   
					
					$("#image2").hide();
					 $("#image51").show();	
			 document.getElementById('image51').style.animation = '2.5s rotate6';
             document.getElementById('image51').style.transform="rotate(360deg)";
							
							
						
							
							
							
						}
						
			     
				} else if (result[4][1] !== undefined) {
					 $("#image1").hide();
					 $("#image38").show();
			 document.getElementById('image38').style.animation = '2.5s rotate5';
             document.getElementById('image38').style.transform="rotate(254deg)";
					
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38").hide();
					 $("#image3").show();	
			 document.getElementById('image3').style.animation = '2.5s rotate6';
             document.getElementById('image3').style.transform="rotate(360deg)";
				 $("#button2").show();
						
						
				

			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image38").hide();
					 $("#image44").show();	
			 document.getElementById('image44').style.animation = '2.5s rotate6';
             document.getElementById('image44').style.transform="rotate(360deg)";
					
					
				
					
					
					
				}
							
							
							
				}
						
					
					
					
					} else if (result[4][0] !== undefined) {
						$("#image0").hide();
						$("#image25").show();
			 document.getElementById('image25').style.animation = '2.5s rotate';
             document.getElementById('image25').style.transform="rotate(115deg)";
						
						if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image25").hide();
					$("#image6").show();	
			 document.getElementById('image6').style.animation = '2.5s rotate5';
             document.getElementById('image6').style.transform="rotate(254deg)";
			 $("#button2").show();			
							if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 
					$("#image6").hide();
					$("#image7").show();	
			 document.getElementById('image7').style.animation = '2.5s rotate6';
             document.getElementById('image7').style.transform="rotate(360deg)";
			 $("#button2").show();		
								
				
								
								
			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image6").hide();
					 $("#image40").show();	
			 document.getElementById('image40').style.animation = '2.5s rotate6';
             document.getElementById('image40').style.transform="rotate(360deg)";
				 
					
					
					
					}
							
						} else if (result[4][1] !== undefined) {
					 $("#image25").hide();
					 $("#image26").show();
			 document.getElementById('image26').style.animation = '2.5s rotate5';
             document.getElementById('image26').style.transform="rotate(254deg)";
							
							
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
						
						
						$("#image26").hide();
					$("#image10").show();
			 document.getElementById('image10').style.animation = '2.5s rotate6';
             document.getElementById('image10').style.transform="rotate(360deg)";
			 $("#button2").show();
						
				
						
						
						
						
					} else if (result[4][2] !== undefined) {
					 $("#image26").hide();
					 $("#image27").show();
			 document.getElementById('image27').style.animation = '2.5s rotate6';
             document.getElementById('image27').style.transform="rotate(360deg)";
						
						
							
						
						
					
									 }
					
							
							
							
				}
						
						
					}
					
				
							
							
				
							
						
							
			
							
							
							
							
				
						}
				
			
				
				if (result[8] == 1) {//status 1
					 $("#image0").hide();
					 $("#button2").hide();
					 $("#button0").hide();
					
					
					 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image6").hide();
					 $("#image40").show();
					
					 document.getElementById('image40').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					$("#image2").hide();
					 $("#image16").show();
					
					 document.getElementById('image16').style.animation = '0.7s rotate4 linear infinite';	
							
					}
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) { 
						
					 $("#image38").hide();	
					 $("#image44").show();
					 
					 document.getElementById('image44').style.animation = '0.7s rotate4 linear infinite';
							
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					 $("#image6").hide();	
					 $("#image7").show();
					 
					 document.getElementById('image7').style.animation = '0.7s rotate4 linear infinite';
							
					}
					
					  
					
				 
					 
					 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image2").hide();
					 $("#image51").show();
					
					 document.getElementById('image51').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image26").hide();
					 $("#image27").show();
					
					 document.getElementById('image27').style.animation = '0.7s rotate4 linear infinite';
					} 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image26").hide();
					 $("#image10").show();
					
					 document.getElementById('image10').style.animation = '0.7s rotate4 linear infinite';
					} 
					 
					
					
					
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38").hide();
					 $("#image3").show();
					
					 document.getElementById('image3').style.animation = '0.7s rotate4 linear infinite';
					}
					
					
					
					
					
					
					
					
					
					
					
				}
				if (result[8] == 2) {//status 2
					 $("#button0").hide();
					 $("#image0").hide();
					 $("#image3").hide();
					 $("#image27").hide();
					 $("#image40").hide();
					 $("#image16").hide();
					 $("#image44").hide();
					 $("#image7").hide();
					 $("#image51").hide();
					 $("#image10").hide();
					
					
					
					
					
				 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
					
				
					if (result[5] == 2 ){
						
						$("#image40").show();
						
					document.getElementById('image40').style.animation = 'rotate15 6s ease';
             document.getElementById('image40').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image40").show();
					 document.getElementById('image40').style.animation = 'rotate14 6s ease';
             document.getElementById('image40').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image40").show();
						document.getElementById('image40').style.animation = 'rotate16 6s ease';
             document.getElementById('image40').style.transform="rotate(360deg)";
			
					}
					$("#button1").show();	
						
						
						
					}
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image16").show();
						
					document.getElementById('image16').style.animation = 'rotate15 6s ease';
             document.getElementById('image16').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image16").show();
					 document.getElementById('image16').style.animation = 'rotate14 6s ease';
             document.getElementById('image16').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image16").show();
						 document.getElementById('image16').style.animation = 'rotate16 6s ease';
             document.getElementById('image16').style.transform="rotate(360deg)";
			
					}
					$("#button1").show();	
						
					}
					
						
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image44").show();
						
					document.getElementById('image44').style.animation = 'rotate15 6s ease';
             document.getElementById('image44').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image44").show();
					 document.getElementById('image44').style.animation = 'rotate14 6s ease';
             document.getElementById('image44').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image44").show();
						 document.getElementById('image44').style.animation = 'rotate16 6s ease';
             document.getElementById('image44').style.transform="rotate(360deg)";
			
					}
					$("#button1").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					
					if (result[5] == 2 ){
						
						$("#image7").show();
						
					document.getElementById('image7').style.animation = 'rotate15 6s ease';
             document.getElementById('image7').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image7").show();
					 document.getElementById('image7').style.animation = 'rotate14 6s ease';
             document.getElementById('image7').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image7").show();
						document.getElementById('image7').style.animation = 'rotate16 6s ease';
             document.getElementById('image7').style.transform="rotate(360deg)";
			
					}
					$("#button1").show();	
						
						
						
					}
					
					
		
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0]) ) {
						
					
					
					if (result[5] == 2 ){
						
						$("#image51").show();
						
					document.getElementById('image51').style.animation = 'rotate15 6s ease';
             document.getElementById('image51').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image51").show();
					 document.getElementById('image51').style.animation = 'rotate14 6s ease';
             document.getElementById('image51').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image51").show();
						document.getElementById('image51').style.animation = 'rotate16 6s ease';
             document.getElementById('image51').style.transform="rotate(360deg)";
			
					}
					$("#button1").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
			
					if (result[5] == 2 ){
						
						$("#image27").show();
						
					document.getElementById('image27').style.animation = 'rotate15 6s ease';
             document.getElementById('image27').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image27").show();
					 document.getElementById('image27').style.animation = 'rotate14 6s ease';
             document.getElementById('image27').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image27").show();
						 document.getElementById('image27').style.animation = 'rotate16 6s ease';
             document.getElementById('image27').style.transform="rotate(360deg)";
			
					}
					$("#button1").show();	
						
						
						
					}
					
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image10").show();
						
					document.getElementById('image10').style.animation = 'rotate15 6s ease';
             document.getElementById('image10').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image10").show();
					 document.getElementById('image10').style.animation = 'rotate14 6s ease';
             document.getElementById('image10').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image10").show();
						 document.getElementById('image10').style.animation = 'rotate16 6s ease';
             document.getElementById('image10').style.transform="rotate(360deg)";
			
					}
					$("#button1").show();	
						
						
						
					}
					
					
				
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image3").show();
						
					document.getElementById('image3').style.animation = 'rotate15 6s ease';
             document.getElementById('image3').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image3").show();
					 document.getElementById('image3').style.animation = 'rotate14 6s ease';
             document.getElementById('image3').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image3").show();
						document.getElementById('image3').style.animation = 'rotate16 6s ease';
             document.getElementById('image3').style.transform="rotate(360deg)";
			
					}
					$("#button1").show();	
						
						
						
					}
					
					
					
					
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y Ganador 
					if (!parseInt(user[0])) {


						setTimeout(function () { $("#imagenM").show() }, 6000);

					}
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0) {
						
						 setTimeout(function(){ $("#loser").show() }, 6000);
						 setTimeout(function () { $("#imagenM").show() }, 6000);
						
					} else if (result[5] == 0 && (parseInt(result[4][1]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
					setTimeout(function(){ $("#winner").show() }, 6000);
					setTimeout(function () { $("#imagenM").show() }, 6000);
					}
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1) {
						
						 setTimeout(function(){ $("#loser").show() }, 6000);
						 setTimeout(function () { $("#imagenM").show() }, 6000);
						
					} else if (result[5] == 1 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner").show() }, 6000);
						 setTimeout(function () { $("#imagenM").show() }, 6000);
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2) {
						
					 setTimeout(function(){ $("#loser").show() }, 6000);
					 setTimeout(function () { $("#imagenM").show() }, 6000);
						
					} else if (result[5] == 2 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][1]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner").show() }, 6000);
						 setTimeout(function () { $("#imagenM").show() }, 6000);
					}
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y ganador del Jackpot 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot").show() }, 6000);
						
					} 
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot").show() }, 6000);
						
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot").show() }, 6000);
						
					} 
					
					
					
					
					
					
					
					
					
					
					
					
					 
					
					
				}
					
					 
				    
					 
				if (result[8] == 0 && result[7] == 0) {//status 3
					 $("#button0").show();
                     $("#winner").hide();
					 $("#imagenM").hide();
					 $("#loser").hide();
					 $("#WinnerJackpot").hide();
					 $("#image0").hide();
					 $("#image3").hide();
					 $("#image10").hide();
					 $("#image27").hide();
					 $("#image51").hide();
					 $("#image44").hide();
					 $("#image7").hide();
					 $("#image40").hide();
					 $("#image16").hide();
					 $("#button1").hide();
					
					 $("#image0").show();
					
			 document.getElementById('image0').style.animation = '2.5s rotate4';
             document.getElementById('image0').style.transform="rotate(360deg)";
					
				}
					
				});	
			});	
		
// getCylinder 1
				
			donutContract.methods.getCylinder(1,result[4][1]).call(function (err, result) {
			
				if (result[7] == 0) {
				document.getElementById('LastDepTime1').value = '- -';
				} else { 
				document.getElementById('LastDepTime1').value = '~' + timeago.format(result[7]+'000');
			}
				
				 web3.eth.getAccounts(function (err, UserCount) {
					 
					
				      user = UserCount;
					 
					 
						if (result[8] == 0) {//status 0 
					 $("#winner1").hide();
					 $("#loser1").hide();
					 $("#WinnerJackpot1").hide();
							
							
				if (result[4][0] !== undefined && parseInt(result[4][0]) == parseInt(user[0])) {// COMIENZO CILINDRO 1
				
					
					$("#image0-1").hide();
					$("#image1-1").show();
			 document.getElementById('image1-1').style.animation = '2.5s rotate';
             document.getElementById('image1-1').style.transform="rotate(115deg)";
						 $("#button2-1").show();
					
					if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image1-1").hide();
					$("#image2-1").show();	
			 document.getElementById('image2-1').style.animation = '2.5s rotate5';
             document.getElementById('image2-1').style.transform="rotate(254deg)";
				 $("#button2-1").show();
						
						if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
				     $("#image2-1").hide();
					 $("#image16-1").show();	
			 document.getElementById('image16-1').style.animation = '2.5s rotate6';
             document.getElementById('image16-1').style.transform="rotate(360deg)";
				 $("#button2-1").show();
						
						
						
						
						
						} else  if (result[4][2] !== undefined) {   
					
					$("#image2-1").hide();
					 $("#image51-1").show();	
			 document.getElementById('image51-1').style.animation = '2.5s rotate6';
             document.getElementById('image51-1').style.transform="rotate(360deg)";
							
							
						
							
							
							
						}
						
			     
				} else if (result[4][1] !== undefined) {
					 $("#image1-1").hide();
					 $("#image38-1").show();
			 document.getElementById('image38-1').style.animation = '2.5s rotate5';
             document.getElementById('image38-1').style.transform="rotate(254deg)";
					
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-1").hide();
					 $("#image3-1").show();	
			 document.getElementById('image3-1').style.animation = '2.5s rotate6';
             document.getElementById('image3-1').style.transform="rotate(360deg)";
				 $("#button2-1").show();
						
						
				

			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image38-1").hide();
					 $("#image44-1").show();	
			 document.getElementById('image44-1').style.animation = '2.5s rotate6';
             document.getElementById('image44-1').style.transform="rotate(360deg)";
					
					
				
					
					
					
				}
							
							
							
				}
						
					
					
					
					} else if (result[4][0] !== undefined) {
						$("#image0-1").hide();
						$("#image25-1").show();
			 document.getElementById('image25-1').style.animation = '2.5s rotate';
             document.getElementById('image25-1').style.transform="rotate(115deg)";
						
						if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image25-1").hide();
					$("#image6-1").show();	
			 document.getElementById('image6-1').style.animation = '2.5s rotate5';
             document.getElementById('image6-1').style.transform="rotate(254deg)";
			 $("#button2-1").show();			
							if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 
					$("#image6-1").hide();
					$("#image7-1").show();	
			 document.getElementById('image7-1').style.animation = '2.5s rotate6';
             document.getElementById('image7-1').style.transform="rotate(360deg)";
			 $("#button2-1").show();		
								
				
								
								
			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image6-1").hide();
					 $("#image40-1").show();	
			 document.getElementById('image40-1').style.animation = '2.5s rotate6';
             document.getElementById('image40-1').style.transform="rotate(360deg)";
				 
					
					
					
					}
							
						} else if (result[4][1] !== undefined) {
					 $("#image25-1").hide();
					 $("#image26-1").show();
			 document.getElementById('image26-1').style.animation = '2.5s rotate5';
             document.getElementById('image26-1').style.transform="rotate(254deg)";
							
							
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
						
						
						$("#image26-1").hide();
					$("#image10-1").show();
			 document.getElementById('image10-1').style.animation = '2.5s rotate6';
             document.getElementById('image10-1').style.transform="rotate(360deg)";
			 $("#button2-1").show();
						
				
						
						
						
						
					} else if (result[4][2] !== undefined) {
					 $("#image26-1").hide();
					 $("#image27-1").show();
			 document.getElementById('image27-1').style.animation = '2.5s rotate6';
             document.getElementById('image27-1').style.transform="rotate(360deg)";
						
						
							
						
						
					
									 }
					
							
							
							
				}
						
						
					}
					
				
							
							
				
							
						
							
			
							
							
							
							
				
						}
				
			
				
				if (result[8] == 1) {//status 1
					 $("#image0-1").hide();
					 $("#button2-1").hide();
					 $("#button0-1").hide();
					
					
					 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image6-1").hide();
					 $("#image40-1").show();
					
					 document.getElementById('image40-1').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					$("#image2-1").hide();
					 $("#image16-1").show();
					
					 document.getElementById('image16-1').style.animation = '0.7s rotate4 linear infinite';	
							
					}
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) { 
						
					 $("#image38-1").hide();	
					 $("#image44-1").show();
					 
					 document.getElementById('image44-1').style.animation = '0.7s rotate4 linear infinite';
							
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					 $("#image6-1").hide();	
					 $("#image7-1").show();
					 
					 document.getElementById('image7-1').style.animation = '0.7s rotate4 linear infinite';
							
					}
					
					  
					
				 
					 
					 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image2-1").hide();
					 $("#image51-1").show();
					
					 document.getElementById('image51-1').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image26-1").hide();
					 $("#image27-1").show();
					
					 document.getElementById('image27-1').style.animation = '0.7s rotate4 linear infinite';
					} 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image26-1").hide();
					 $("#image10-1").show();
					
					 document.getElementById('image10-1').style.animation = '0.7s rotate4 linear infinite';
					} 
					 
					
					
					
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-1").hide();
					 $("#image3-1").show();
					
					 document.getElementById('image3-1').style.animation = '0.7s rotate4 linear infinite';
					}
					
					
					
					
					
					
					
					
					
					
					
				}
				if (result[8] == 2) {//status 2
					 $("#button0-1").hide();
					 $("#image0-1").hide();
					 $("#image3-1").hide();
					 $("#image27-1").hide();
					 $("#image40-1").hide();
					 $("#image16-1").hide();
					 $("#image44-1").hide();
					 $("#image7-1").hide();
					 $("#image51-1").hide();
					 $("#image10-1").hide();
					
					
					
					
					
				 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
					
				
					if (result[5] == 2 ){
						
						$("#image40-1").show();
						
					document.getElementById('image40-1').style.animation = 'rotate15 6s ease';
             document.getElementById('image40-1').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image40-1").show();
					 document.getElementById('image40-1').style.animation = 'rotate14 6s ease';
             document.getElementById('image40-1').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image40-1").show();
						document.getElementById('image40-1').style.animation = 'rotate16 6s ease';
             document.getElementById('image40-1').style.transform="rotate(360deg)";
			
					}
					$("#button1-1").show();	
						
						
						
					}
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image16-1").show();
						
					document.getElementById('image16-1').style.animation = 'rotate15 6s ease';
             document.getElementById('image16-1').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image16-1").show();
					 document.getElementById('image16-1').style.animation = 'rotate14 6s ease';
             document.getElementById('image16-1').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image16-1").show();
						 document.getElementById('image16-1').style.animation = 'rotate16 6s ease';
             document.getElementById('image16-1').style.transform="rotate(360deg)";
			
					}
					$("#button1-1").show();	
						
					}
					
						
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image44-1").show();
						
					document.getElementById('image44-1').style.animation = 'rotate15 6s ease';
             document.getElementById('image44-1').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image44-1").show();
					 document.getElementById('image44-1').style.animation = 'rotate14 6s ease';
             document.getElementById('image44-1').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image44-1").show();
						 document.getElementById('image44-1').style.animation = 'rotate16 6s ease';
             document.getElementById('image44-1').style.transform="rotate(360deg)";
			
					}
					$("#button1-1").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					
					if (result[5] == 2 ){
						
						$("#image7-1").show();
						
					document.getElementById('image7-1').style.animation = 'rotate15 6s ease';
             document.getElementById('image7-1').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image7-1").show();
					 document.getElementById('image7-1').style.animation = 'rotate14 6s ease';
             document.getElementById('image7-1').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image7-1").show();
						document.getElementById('image7-1').style.animation = 'rotate16 6s ease';
             document.getElementById('image7-1').style.transform="rotate(360deg)";
			
					}
					$("#button1-1").show();	
						
						
						
					}
					
					
		
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0]) ) {
						
					
					
					if (result[5] == 2 ){
						
						$("#image51-1").show();
						
					document.getElementById('image51-1').style.animation = 'rotate15 6s ease';
             document.getElementById('image51-1').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image51-1").show();
					 document.getElementById('image51-1').style.animation = 'rotate14 6s ease';
             document.getElementById('image51-1').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image51-1").show();
						document.getElementById('image51-1').style.animation = 'rotate16 6s ease';
             document.getElementById('image51-1').style.transform="rotate(360deg)";
			
					}
					$("#button1-1").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
			
					if (result[5] == 2 ){
						
						$("#image27-1").show();
						
					document.getElementById('image27-1').style.animation = 'rotate15 6s ease';
             document.getElementById('image27-1').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image27-1").show();
					 document.getElementById('image27-1').style.animation = 'rotate14 6s ease';
             document.getElementById('image27-1').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image27-1").show();
						 document.getElementById('image27-1').style.animation = 'rotate16 6s ease';
             document.getElementById('image27-1').style.transform="rotate(360deg)";
			
					}
					$("#button1-1").show();	
						
						
						
					}
					
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image10-1").show();
						
					document.getElementById('image10-1').style.animation = 'rotate15 6s ease';
             document.getElementById('image10-1').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image10-1").show();
					 document.getElementById('image10-1').style.animation = 'rotate14 6s ease';
             document.getElementById('image10-1').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image10-1").show();
						 document.getElementById('image10-1').style.animation = 'rotate16 6s ease';
             document.getElementById('image10-1').style.transform="rotate(360deg)";
			
					}
					$("#button1-1").show();	
						
						
						
					}
					
					
				
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image3-1").show();
						
					document.getElementById('image3-1').style.animation = 'rotate15 6s ease';
             document.getElementById('image3-1').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image3-1").show();
					 document.getElementById('image3-1').style.animation = 'rotate14 6s ease';
             document.getElementById('image3-1').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image3-1").show();
						document.getElementById('image3-1').style.animation = 'rotate16 6s ease';
             document.getElementById('image3-1').style.transform="rotate(360deg)";
			
					}
					$("#button1-1").show();	
						
						
						
					}
					
					
					
					
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y Ganador 
					if (!parseInt(user[0])) {


						setTimeout(function () { $("#imagenM1").show() }, 6000);

					}
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0) {
						
						 setTimeout(function(){ $("#loser1").show() }, 6000);
						 setTimeout(function () { $("#imagenM1").show() }, 6000);
						
					} else if (result[5] == 0 && (parseInt(result[4][1]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
					setTimeout(function(){ $("#winner1").show() }, 6000);
					setTimeout(function () { $("#imagenM1").show() }, 6000);
					}
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1) {
						
						 setTimeout(function(){ $("#loser1").show() }, 6000);
						 setTimeout(function () { $("#imagenM1").show() }, 6000);
						
					} else if (result[5] == 1 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner1").show() }, 6000);
						 setTimeout(function () { $("#imagenM1").show() }, 6000);
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2) {
						
					 setTimeout(function(){ $("#loser1").show() }, 6000);
					 setTimeout(function () { $("#imagenM1").show() }, 6000);
						
					} else if (result[5] == 2 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][1]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner1").show() }, 6000);
						 setTimeout(function () { $("#imagenM1").show() }, 6000);
					}
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y ganador del Jackpot 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot1").show() }, 6000);
						
					} 
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot1").show() }, 6000);
						
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot1").show() }, 6000);
						
					} 
					
				
				}
					
					 
				    
					 
				if (result[8] == 0 && result[7] == 0) {//status 3
					 $("#button0-1").show();
                     $("#winner1").hide();
					 $("imagenM1").hide();
					 $("#loser1").hide();
					 $("#WinnerJackpot1").hide();
					 $("#image0-1").hide();
					 $("#image3-1").hide();
					 $("#image10-1").hide();
					 $("#image27-1").hide();
					 $("#image51-1").hide();
					 $("#image44-1").hide();
					 $("#image7-1").hide();
					 $("#image40-1").hide();
					 $("#image16-1").hide();
					 $("#button1-1").hide();
					
					 $("#image0-1").show();
					
			 document.getElementById('image0-1').style.animation = '2.5s rotate4';
             document.getElementById('image0-1').style.transform="rotate(360deg)";
					
				}
					
				});	
			});	
				
// getCylinder 2
				
			donutContract.methods.getCylinder(2,result[4][2]).call(function (err, result) {
			
				if (result[7] == 0) {
				document.getElementById('LastDepTime2').value = '- -';
				} else { 
				document.getElementById('LastDepTime2').value = '~' + timeago.format(result[7]+'000');
			}
				
				 web3.eth.getAccounts(function (err, UserCount) {
					 
					
				      user = UserCount;
					 
					 
						if (result[8] == 0) {//status 0 
					 $("#winner2").hide();
					 $("#loser2").hide();
					 $("#WinnerJackpot2").hide();
							
							
				if (result[4][0] !== undefined && parseInt(result[4][0]) == parseInt(user[0])) {// COMIENZO CILINDRO 2
				
					
					$("#image0-2").hide();
					$("#image1-2").show();
			 document.getElementById('image1-2').style.animation = '2.5s rotate';
             document.getElementById('image1-2').style.transform="rotate(115deg)";
						 $("#button2-2").show();
					
					if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image1-2").hide();
					$("#image2-2").show();	
			 document.getElementById('image2-2').style.animation = '2.5s rotate5';
             document.getElementById('image2-2').style.transform="rotate(254deg)";
				 $("#button2-2").show();
						
						if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
				     $("#image2-2").hide();
					 $("#image16-2").show();	
			 document.getElementById('image16-2').style.animation = '2.5s rotate6';
             document.getElementById('image16-2').style.transform="rotate(360deg)";
				 $("#button2-2").show();
						
						
						
						
						
						} else  if (result[4][2] !== undefined) {   
					
					$("#image2-2").hide();
					 $("#image51-2").show();	
			 document.getElementById('image51-2').style.animation = '2.5s rotate6';
             document.getElementById('image51-2').style.transform="rotate(360deg)";
							
							
						
							
							
							
						}
						
			     
				} else if (result[4][1] !== undefined) {
					 $("#image1-2").hide();
					 $("#image38-2").show();
			 document.getElementById('image38-2').style.animation = '2.5s rotate5';
             document.getElementById('image38-2').style.transform="rotate(254deg)";
					
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-2").hide();
					 $("#image3-2").show();	
			 document.getElementById('image3-2').style.animation = '2.5s rotate6';
             document.getElementById('image3-2').style.transform="rotate(360deg)";
				 $("#button2-2").show();
						
						
				

			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image38-2").hide();
					 $("#image44-2").show();	
			 document.getElementById('image44-2').style.animation = '2.5s rotate6';
             document.getElementById('image44-2').style.transform="rotate(360deg)";
					
					
				
					
					
					
				}
							
							
							
				}
						
					
					
					
					} else if (result[4][0] !== undefined) {
						$("#image0-2").hide();
						$("#image25-2").show();
			 document.getElementById('image25-2').style.animation = '2.5s rotate';
             document.getElementById('image25-2').style.transform="rotate(115deg)";
						
						if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image25-2").hide();
					$("#image6-2").show();	
			 document.getElementById('image6-2').style.animation = '2.5s rotate5';
             document.getElementById('image6-2').style.transform="rotate(254deg)";
			 $("#button2-2").show();			
							if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 
					$("#image6-2").hide();
					$("#image7-2").show();	
			 document.getElementById('image7-2').style.animation = '2.5s rotate6';
             document.getElementById('image7-2').style.transform="rotate(360deg)";
			 $("#button2-2").show();		
								
				
								
								
			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image6-2").hide();
					 $("#image40-2").show();	
			 document.getElementById('image40-2').style.animation = '2.5s rotate6';
             document.getElementById('image40-2').style.transform="rotate(360deg)";
				 
					
					
					
					}
							
						} else if (result[4][1] !== undefined) {
					 $("#image25-2").hide();
					 $("#image26-2").show();
			 document.getElementById('image26-2').style.animation = '2.5s rotate5';
             document.getElementById('image26-2').style.transform="rotate(254deg)";
							
							
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
						
						
						$("#image26-2").hide();
					$("#image10-2").show();
			 document.getElementById('image10-2').style.animation = '2.5s rotate6';
             document.getElementById('image10-2').style.transform="rotate(360deg)";
			 $("#button2-2").show();
						
				
						
						
						
						
					} else if (result[4][2] !== undefined) {
					 $("#image26-2").hide();
					 $("#image27-2").show();
			 document.getElementById('image27-2').style.animation = '2.5s rotate6';
             document.getElementById('image27-2').style.transform="rotate(360deg)";
						
						
							
						
						
					
									 }
					
							
							
							
				}
						
						
					}
					
				
							
							
				
							
						
							
			
							
							
							
							
				
						}
				
			
				
				if (result[8] == 1) {//status 1
					 $("#image0-2").hide();
					 $("#button2-2").hide();
					 $("#button0-2").hide();
					
					
					 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image6-2").hide();
					 $("#image40-2").show();
					
					 document.getElementById('image40-2').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					$("#image2-2").hide();
					 $("#image16-2").show();
					
					 document.getElementById('image16-2').style.animation = '0.7s rotate4 linear infinite';	
							
					}
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) { 
						
					 $("#image38-2").hide();	
					 $("#image44-2").show();
					 
					 document.getElementById('image44-2').style.animation = '0.7s rotate4 linear infinite';
							
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					 $("#image6-2").hide();	
					 $("#image7-2").show();
					 
					 document.getElementById('image7-2').style.animation = '0.7s rotate4 linear infinite';
							
					}
					
					  
					
				 
					 
					 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image2-2").hide();
					 $("#image51-2").show();
					
					 document.getElementById('image51-2').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image26-2").hide();
					 $("#image27-2").show();
					
					 document.getElementById('image27-2').style.animation = '0.7s rotate4 linear infinite';
					} 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image26-2").hide();
					 $("#image10-2").show();
					
					 document.getElementById('image10-2').style.animation = '0.7s rotate4 linear infinite';
					} 
					 
					
					
					
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-2").hide();
					 $("#image3-2").show();
					
					 document.getElementById('image3-2').style.animation = '0.7s rotate4 linear infinite';
					}
					
					
					
					
					
					
					
					
					
					
					
				}
				if (result[8] == 2) {//status 2
					 $("#button0-2").hide();
					 $("#image0-2").hide();
					 $("#image3-2").hide();
					 $("#image27-2").hide();
					 $("#image40-2").hide();
					 $("#image16-2").hide();
					 $("#image44-2").hide();
					 $("#image7-2").hide();
					 $("#image51-2").hide();
					 $("#image10-2").hide();
					
					
					
					
					
				 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
					
				
					if (result[5] == 2 ){
						
						$("#image40-2").show();
						
					document.getElementById('image40-2').style.animation = 'rotate15 6s ease';
             document.getElementById('image40-2').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image40-2").show();
					 document.getElementById('image40-2').style.animation = 'rotate14 6s ease';
             document.getElementById('image40-2').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image40-2").show();
						document.getElementById('image40-2').style.animation = 'rotate16 6s ease';
             document.getElementById('image40-2').style.transform="rotate(360deg)";
			
					}
					$("#button1-2").show();	
						
						
						
					}
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image16-2").show();
						
					document.getElementById('image16-2').style.animation = 'rotate15 6s ease';
             document.getElementById('image16-2').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image16-2").show();
					 document.getElementById('image16-2').style.animation = 'rotate14 6s ease';
             document.getElementById('image16-2').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image16-2").show();
						 document.getElementById('image16-2').style.animation = 'rotate16 6s ease';
             document.getElementById('image16-2').style.transform="rotate(360deg)";
			
					}
					$("#button1-2").show();	
						
					}
					
						
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image44-2").show();
						
					document.getElementById('image44-2').style.animation = 'rotate15 6s ease';
             document.getElementById('image44-2').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image44-2").show();
					 document.getElementById('image44-2').style.animation = 'rotate14 6s ease';
             document.getElementById('image44-2').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image44-2").show();
						 document.getElementById('image44-2').style.animation = 'rotate16 6s ease';
             document.getElementById('image44-2').style.transform="rotate(360deg)";
			
					}
					$("#button1-2").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					
					if (result[5] == 2 ){
						
						$("#image7-2").show();
						
					document.getElementById('image7-2').style.animation = 'rotate15 6s ease';
             document.getElementById('image7-2').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image7-2").show();
					 document.getElementById('image7-2').style.animation = 'rotate14 6s ease';
             document.getElementById('image7-2').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image7-2").show();
						document.getElementById('image7-2').style.animation = 'rotate16 6s ease';
             document.getElementById('image7-2').style.transform="rotate(360deg)";
			
					}
					$("#button1-2").show();	
						
						
						
					}
					
					
		
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0]) ) {
						
					
					
					if (result[5] == 2 ){
						
						$("#image51-2").show();
						
					document.getElementById('image51-2').style.animation = 'rotate15 6s ease';
             document.getElementById('image51-2').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image51-2").show();
					 document.getElementById('image51-2').style.animation = 'rotate14 6s ease';
             document.getElementById('image51-2').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image51-2").show();
						document.getElementById('image51-2').style.animation = 'rotate16 6s ease';
             document.getElementById('image51-2').style.transform="rotate(360deg)";
			
					}
					$("#button1-2").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
			
					if (result[5] == 2 ){
						
						$("#image27-2").show();
						
					document.getElementById('image27-2').style.animation = 'rotate15 6s ease';
             document.getElementById('image27-2').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image27-2").show();
					 document.getElementById('image27-2').style.animation = 'rotate14 6s ease';
             document.getElementById('image27-2').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image27-2").show();
						 document.getElementById('image27-2').style.animation = 'rotate16 6s ease';
             document.getElementById('image27-2').style.transform="rotate(360deg)";
			
					}
					$("#button1-2").show();	
						
						
						
					}
					
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image10-2").show();
						
					document.getElementById('image10-2').style.animation = 'rotate15 6s ease';
             document.getElementById('image10-2').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image10-2").show();
					 document.getElementById('image10-2').style.animation = 'rotate14 6s ease';
             document.getElementById('image10-2').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image10-2").show();
						 document.getElementById('image10-2').style.animation = 'rotate16 6s ease';
             document.getElementById('image10-2').style.transform="rotate(360deg)";
			
					}
					$("#button1-2").show();	
						
						
						
					}
					
					
				
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image3-2").show();
						
					document.getElementById('image3-2').style.animation = 'rotate15 6s ease';
             document.getElementById('image3-2').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image3-2").show();
					 document.getElementById('image3-2').style.animation = 'rotate14 6s ease';
             document.getElementById('image3-2').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image3-2").show();
						document.getElementById('image3-2').style.animation = 'rotate16 6s ease';
             document.getElementById('image3-2').style.transform="rotate(360deg)";
			
					}
					$("#button1-2").show();	
						
						
						
					}
					
					
					
					
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y Ganador 
					if (!parseInt(user[0])) {


						setTimeout(function () { $("#imagenM2").show() }, 6000);

					}
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0) {
						
						 setTimeout(function(){ $("#loser2").show() }, 6000);
						 setTimeout(function () { $("#imagenM2").show() }, 6000);
						
					} else if (result[5] == 0 && (parseInt(result[4][1]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
					setTimeout(function(){ $("#winner2").show() }, 6000);
					setTimeout(function () { $("#imagenM2").show() }, 6000);
					}
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1) {
						
						 setTimeout(function(){ $("#loser2").show() }, 6000);
						 setTimeout(function () { $("#imagenM2").show() }, 6000);
						
					} else if (result[5] == 1 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner2").show() }, 6000);
						 setTimeout(function () { $("#imagenM2").show() }, 6000);
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2) {
						
					 setTimeout(function(){ $("#loser2").show() }, 6000);
					 setTimeout(function () { $("#imagenM2").show() }, 6000);
						
					} else if (result[5] == 2 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][1]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner2").show() }, 6000);
						 setTimeout(function () { $("#imagenM2").show() }, 6000);
					}
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y ganador del Jackpot 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot2").show() }, 6000);
						
					} 
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot2").show() }, 6000);
						
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot2").show() }, 6000);
						
					} 
					
				
				}
					
					 
				    
					 
				if (result[8] == 0 && result[7] == 0) {//status 3
					 $("#button0-2").show();
                     $("#winner2").hide();
					 $("#imagenM2").hide();
					 $("#loser2").hide();
					 $("#WinnerJackpot2").hide();
					 $("#image0-2").hide();
					 $("#image3-2").hide();
					 $("#image10-2").hide();
					 $("#image27-2").hide();
					 $("#image51-2").hide();
					 $("#image44-2").hide();
					 $("#image7-2").hide();
					 $("#image40-2").hide();
					 $("#image16-2").hide();
					 $("#button1-2").hide();
					
					 $("#image0-2").show();
					
			 document.getElementById('image0-2').style.animation = '2.5s rotate4';
             document.getElementById('image0-2').style.transform="rotate(360deg)";
					
				}
					
				});	
			});	
											
// getCylinder 3
				
			donutContract.methods.getCylinder(3,result[4][3]).call(function (err, result) {
			
				if (result[7] == 0) {
				document.getElementById('LastDepTime3').value = '- -';
				} else { 
				document.getElementById('LastDepTime3').value = '~' + timeago.format(result[7]+'000');
			}
				
				 web3.eth.getAccounts(function (err, UserCount) {
					 
					
				      user = UserCount;
					 
					 
						if (result[8] == 0) {//status 0 
					 $("#winner3").hide();
					 $("#loser3").hide();
					 $("#WinnerJackpot3").hide();
							
							
				if (result[4][0] !== undefined && parseInt(result[4][0]) == parseInt(user[0])) {// COMIENZO CILINDRO 3
				
					
					$("#image0-3").hide();
					$("#image1-3").show();
			 document.getElementById('image1-3').style.animation = '2.5s rotate';
             document.getElementById('image1-3').style.transform="rotate(115deg)";
						 $("#button2-3").show();
					
					if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image1-3").hide();
					$("#image2-3").show();	
			 document.getElementById('image2-3').style.animation = '2.5s rotate5';
             document.getElementById('image2-3').style.transform="rotate(254deg)";
				 $("#button2-3").show();
						
						if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
				     $("#image2-3").hide();
					 $("#image16-3").show();	
			 document.getElementById('image16-3').style.animation = '2.5s rotate6';
             document.getElementById('image16-3').style.transform="rotate(360deg)";
				 $("#button2-3").show();
						
						
						
						
						
						} else  if (result[4][2] !== undefined) {   
					
					$("#image2-3").hide();
					 $("#image51-3").show();	
			 document.getElementById('image51-3').style.animation = '2.5s rotate6';
             document.getElementById('image51-3').style.transform="rotate(360deg)";
							
							
						
							
							
							
						}
						
			     
				} else if (result[4][1] !== undefined) {
					 $("#image1-3").hide();
					 $("#image38-3").show();
			 document.getElementById('image38-3').style.animation = '2.5s rotate5';
             document.getElementById('image38-3').style.transform="rotate(254deg)";
					
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-3").hide();
					 $("#image3-3").show();	
			 document.getElementById('image3-3').style.animation = '2.5s rotate6';
             document.getElementById('image3-3').style.transform="rotate(360deg)";
				 $("#button2-3").show();
						
						
				

			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image38-3").hide();
					 $("#image44-3").show();	
			 document.getElementById('image44-3').style.animation = '2.5s rotate6';
             document.getElementById('image44-3').style.transform="rotate(360deg)";
					
					
				
					
					
					
				}
							
							
							
				}
						
					
					
					
					} else if (result[4][0] !== undefined) {
						$("#image0-3").hide();
						$("#image25-3").show();
			 document.getElementById('image25-3').style.animation = '2.5s rotate';
             document.getElementById('image25-3').style.transform="rotate(115deg)";
						
						if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image25-3").hide();
					$("#image6-3").show();	
			 document.getElementById('image6-3').style.animation = '2.5s rotate5';
             document.getElementById('image6-3').style.transform="rotate(254deg)";
			 $("#button2-3").show();			
							if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 
					$("#image6-3").hide();
					$("#image7-3").show();	
			 document.getElementById('image7-3').style.animation = '2.5s rotate6';
             document.getElementById('image7-3').style.transform="rotate(360deg)";
			 $("#button2-3").show();		
								
				
								
								
			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image6-3").hide();
					 $("#image40-3").show();	
			 document.getElementById('image40-3').style.animation = '2.5s rotate6';
             document.getElementById('image40-3').style.transform="rotate(360deg)";
				 
					
					
					
					}
							
						} else if (result[4][1] !== undefined) {
					 $("#image25-3").hide();
					 $("#image26-3").show();
			 document.getElementById('image26-3').style.animation = '2.5s rotate5';
             document.getElementById('image26-3').style.transform="rotate(254deg)";
							
							
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
						
						
						$("#image26-3").hide();
					$("#image10-3").show();
			 document.getElementById('image10-3').style.animation = '2.5s rotate6';
             document.getElementById('image10-3').style.transform="rotate(360deg)";
			 $("#button2-3").show();
						
				
						
						
						
						
					} else if (result[4][2] !== undefined) {
					 $("#image26-3").hide();
					 $("#image27-3").show();
			 document.getElementById('image27-3').style.animation = '2.5s rotate6';
             document.getElementById('image27-3').style.transform="rotate(360deg)";
						
						
							
						
						
					
									 }
					
							
							
							
				}
						
						
					}
					
				
							
							
				
							
						
							
			
							
							
							
							
				
						}
				
			
				
				if (result[8] == 1) {//status 1
					 $("#image0-3").hide();
					 $("#button2-3").hide();
					 $("#button0-3").hide();
					
					
					 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image6-3").hide();
					 $("#image40-3").show();
					
					 document.getElementById('image40-3').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					$("#image2-3").hide();
					 $("#image16-3").show();
					
					 document.getElementById('image16-3').style.animation = '0.7s rotate4 linear infinite';	
							
					}
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) { 
						
					 $("#image38-3").hide();	
					 $("#image44-3").show();
					 
					 document.getElementById('image44-3').style.animation = '0.7s rotate4 linear infinite';
							
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					 $("#image6-3").hide();	
					 $("#image7-3").show();
					 
					 document.getElementById('image7-3').style.animation = '0.7s rotate4 linear infinite';
							
					}
					
					  
					
				 
					 
					 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image2-3").hide();
					 $("#image51-3").show();
					
					 document.getElementById('image51-3').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image26-3").hide();
					 $("#image27-3").show();
					
					 document.getElementById('image27-3').style.animation = '0.7s rotate4 linear infinite';
					} 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image26-3").hide();
					 $("#image10-3").show();
					
					 document.getElementById('image10-3').style.animation = '0.7s rotate4 linear infinite';
					} 
					 
					
					
					
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-3").hide();
					 $("#image3-3").show();
					
					 document.getElementById('image3-3').style.animation = '0.7s rotate4 linear infinite';
					}
					
					
					
					
					
					
					
					
					
					
					
				}
				if (result[8] == 2) {//status 2
					 $("#button0-3").hide();
					 $("#image0-3").hide();
					 $("#image3-3").hide();
					 $("#image27-3").hide();
					 $("#image40-3").hide();
					 $("#image16-3").hide();
					 $("#image44-3").hide();
					 $("#image7-3").hide();
					 $("#image51-3").hide();
					 $("#image10-3").hide();
					
					
					
					
					
				 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
					
				
					if (result[5] == 2 ){
						
						$("#image40-3").show();
						
					document.getElementById('image40-3').style.animation = 'rotate15 6s ease';
             document.getElementById('image40-3').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image40-3").show();
					 document.getElementById('image40-3').style.animation = 'rotate14 6s ease';
             document.getElementById('image40-3').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image40-3").show();
						document.getElementById('image40-3').style.animation = 'rotate16 6s ease';
             document.getElementById('image40-3').style.transform="rotate(360deg)";
			
					}
					$("#button1-3").show();	
						
						
						
					}
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image16-3").show();
						
					document.getElementById('image16-3').style.animation = 'rotate15 6s ease';
             document.getElementById('image16-3').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image16-3").show();
					 document.getElementById('image16-3').style.animation = 'rotate14 6s ease';
             document.getElementById('image16-3').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image16-3").show();
						 document.getElementById('image16-3').style.animation = 'rotate16 6s ease';
             document.getElementById('image16-3').style.transform="rotate(360deg)";
			
					}
					$("#button1-3").show();	
						
					}
					
						
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image44-3").show();
						
					document.getElementById('image44-3').style.animation = 'rotate15 6s ease';
             document.getElementById('image44-3').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image44-3").show();
					 document.getElementById('image44-3').style.animation = 'rotate14 6s ease';
             document.getElementById('image44-3').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image44-3").show();
						 document.getElementById('image44-3').style.animation = 'rotate16 6s ease';
             document.getElementById('image44-3').style.transform="rotate(360deg)";
			
					}
					$("#button1-3").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					
					if (result[5] == 2 ){
						
						$("#image7-3").show();
						
					document.getElementById('image7-3').style.animation = 'rotate15 6s ease';
             document.getElementById('image7-3').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image7-3").show();
					 document.getElementById('image7-3').style.animation = 'rotate14 6s ease';
             document.getElementById('image7-3').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image7-3").show();
						document.getElementById('image7-3').style.animation = 'rotate16 6s ease';
             document.getElementById('image7-3').style.transform="rotate(360deg)";
			
					}
					$("#button1-3").show();	
						
						
						
					}
					
					
		
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0]) ) {
						
					
					
					if (result[5] == 2 ){
						
						$("#image51-3").show();
						
					document.getElementById('image51-3').style.animation = 'rotate15 6s ease';
             document.getElementById('image51-3').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image51-3").show();
					 document.getElementById('image51-3').style.animation = 'rotate14 6s ease';
             document.getElementById('image51-3').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image51-3").show();
						document.getElementById('image51-3').style.animation = 'rotate16 6s ease';
             document.getElementById('image51-3').style.transform="rotate(360deg)";
			
					}
					$("#button1-3").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
			
					if (result[5] == 2 ){
						
						$("#image27-3").show();
						
					document.getElementById('image27-3').style.animation = 'rotate15 6s ease';
             document.getElementById('image27-3').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image27-3").show();
					 document.getElementById('image27-3').style.animation = 'rotate14 6s ease';
             document.getElementById('image27-3').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image27-3").show();
						 document.getElementById('image27-3').style.animation = 'rotate16 6s ease';
             document.getElementById('image27-3').style.transform="rotate(360deg)";
			
					}
					$("#button1-3").show();	
						
						
						
					}
					
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image10-3").show();
						
					document.getElementById('image10-3').style.animation = 'rotate15 6s ease';
             document.getElementById('image10-3').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image10-3").show();
					 document.getElementById('image10-3').style.animation = 'rotate14 6s ease';
             document.getElementById('image10-3').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image10-3").show();
						 document.getElementById('image10-3').style.animation = 'rotate16 6s ease';
             document.getElementById('image10-3').style.transform="rotate(360deg)";
			
					}
					$("#button1-3").show();	
						
						
						
					}
					
					
				
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image3-3").show();
						
					document.getElementById('image3-3').style.animation = 'rotate15 6s ease';
             document.getElementById('image3-3').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image3-3").show();
					 document.getElementById('image3-3').style.animation = 'rotate14 6s ease';
             document.getElementById('image3-3').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image3-3").show();
						document.getElementById('image3-3').style.animation = 'rotate16 6s ease';
             document.getElementById('image3-3').style.transform="rotate(360deg)";
			
					}
					$("#button1-3").show();	
						
						
						
					}
					
					
					
					
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y Ganador 
					if (!parseInt(user[0])) {


						setTimeout(function () { $("#imagenM3").show() }, 6000);

					}
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0) {
						
						 setTimeout(function(){ $("#loser3").show() }, 6000);
						 setTimeout(function () { $("#imagenM3").show() }, 6000);
						
					} else if (result[5] == 0 && (parseInt(result[4][1]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
					setTimeout(function(){ $("#winner3").show() }, 6000);
					setTimeout(function () { $("#imagenM3").show() }, 6000);
					}
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1) {
						
						 setTimeout(function(){ $("#loser3").show() }, 6000);
						 setTimeout(function () { $("#imagenM3").show() }, 6000);
						
					} else if (result[5] == 1 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner3").show() }, 6000);
						 setTimeout(function () { $("#imagenM3").show() }, 6000);
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2) {
						
					 setTimeout(function(){ $("#loser3").show() }, 6000);
					 setTimeout(function () { $("#imagenM3").show() }, 6000);
						
					} else if (result[5] == 2 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][1]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner3").show() }, 6000);
						 setTimeout(function () { $("#imagenM3").show() }, 6000);
					}
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y ganador del Jackpot 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot3").show() }, 6000);
						
					} 
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot3").show() }, 6000);
						
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpo3").show() }, 6000);
						
					} 
					
				
				}
					
					 
				    
					 
				if (result[8] == 0 && result[7] == 0) {//status 3
					 $("#button0-3").show();
                     $("#winner3").hide();
					 $("#imagenM3").hide();
					 $("#loser3").hide();
					 $("#WinnerJackpot3").hide();
					 $("#image0-3").hide();
					 $("#image3-3").hide();
					 $("#image10-3").hide();
					 $("#image27-3").hide();
					 $("#image51-3").hide();
					 $("#image44-3").hide();
					 $("#image7-3").hide();
					 $("#image40-3").hide();
					 $("#image16-3").hide();
					 $("#button1-3").hide();
					
					 $("#image0-3").show();
					
			 document.getElementById('image0-3').style.animation = '2.5s rotate4';
             document.getElementById('image0-3').style.transform="rotate(360deg)";
					
				}
					
				});	
			});	
					
// getCylinder 4
				
			donutContract.methods.getCylinder(4,result[4][4]).call(function (err, result) {
			
				if (result[7] == 0) {
				document.getElementById('LastDepTime4').value = '- -';
				} else { 
				document.getElementById('LastDepTime4').value = '~' + timeago.format(result[7]+'000');
			}
				
				 web3.eth.getAccounts(function (err, UserCount) {
					 
					
				      user = UserCount;
					 
					 
						if (result[8] == 0) {//status 0 
					 $("#winner4").hide();
					 $("#loser4").hide();
					 $("#WinnerJackpot4").hide();
							
							
				if (result[4][0] !== undefined && parseInt(result[4][0]) == parseInt(user[0])) {// COMIENZO CILINDRO 4
				
					
					$("#image0-4").hide();
					$("#image1-4").show();
			 document.getElementById('image1-4').style.animation = '2.5s rotate';
             document.getElementById('image1-4').style.transform="rotate(115deg)";
						 $("#button2-4").show();
					
					if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image1-4").hide();
					$("#image2-4").show();	
			 document.getElementById('image2-4').style.animation = '2.5s rotate5';
             document.getElementById('image2-4').style.transform="rotate(254deg)";
				 $("#button2-4").show();
						
						if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
				     $("#image2-4").hide();
					 $("#image16-4").show();	
			 document.getElementById('image16-4').style.animation = '2.5s rotate6';
             document.getElementById('image16-4').style.transform="rotate(360deg)";
				 $("#button2-4").show();
						
						
						
						
						
						} else  if (result[4][2] !== undefined) {   
					
					$("#image2-4").hide();
					 $("#image51-4").show();	
			 document.getElementById('image51-4').style.animation = '2.5s rotate6';
             document.getElementById('image51-4').style.transform="rotate(360deg)";
							
							
						
							
							
							
						}
						
			     
				} else if (result[4][1] !== undefined) {
					 $("#image1-4").hide();
					 $("#image38-4").show();
			 document.getElementById('image38-4').style.animation = '2.5s rotate5';
             document.getElementById('image38-4').style.transform="rotate(254deg)";
					
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-4").hide();
					 $("#image3-4").show();	
			 document.getElementById('image3-4').style.animation = '2.5s rotate6';
             document.getElementById('image3-4').style.transform="rotate(360deg)";
				 $("#button2-4").show();
						
						
				

			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image38-4").hide();
					 $("#image44-4").show();	
			 document.getElementById('image44-4').style.animation = '2.5s rotate6';
             document.getElementById('image44-4').style.transform="rotate(360deg)";
					
					
				
					
					
					
				}
							
							
							
				}
						
					
					
					
					} else if (result[4][0] !== undefined) {
						$("#image0-4").hide();
						$("#image25-4").show();
			 document.getElementById('image25-4').style.animation = '2.5s rotate';
             document.getElementById('image25-4').style.transform="rotate(115deg)";
						
						if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image25-4").hide();
					$("#image6-4").show();	
			 document.getElementById('image6-4').style.animation = '2.5s rotate5';
             document.getElementById('image6-4').style.transform="rotate(254deg)";
			 $("#button2-4").show();			
							if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 
					$("#image6-4").hide();
					$("#image7-4").show();	
			 document.getElementById('image7-4').style.animation = '2.5s rotate6';
             document.getElementById('image7-4').style.transform="rotate(360deg)";
			 $("#button2-4").show();		
								
				
								
								
			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image6-4").hide();
					 $("#image40-4").show();	
			 document.getElementById('image40-4').style.animation = '2.5s rotate6';
             document.getElementById('image40-4').style.transform="rotate(360deg)";
				 
					
					
					
					}
							
						} else if (result[4][1] !== undefined) {
					 $("#image25-4").hide();
					 $("#image26-4").show();
			 document.getElementById('image26-4').style.animation = '2.5s rotate5';
             document.getElementById('image26-4').style.transform="rotate(254deg)";
							
							
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
						
						
						$("#image26-4").hide();
					$("#image10-4").show();
			 document.getElementById('image10-4').style.animation = '2.5s rotate6';
             document.getElementById('image10-4').style.transform="rotate(360deg)";
			 $("#button2-4").show();
						
				
						
						
						
						
					} else if (result[4][2] !== undefined) {
					 $("#image26-4").hide();
					 $("#image27-4").show();
			 document.getElementById('image27-4').style.animation = '2.5s rotate6';
             document.getElementById('image27-4').style.transform="rotate(360deg)";
						
						
							
						
						
					
									 }
					
							
							
							
				}
						
						
					}
					
				
							
							
				
							
						
							
			
							
							
							
							
				
						}
				
			
				
				if (result[8] == 1) {//status 1
					 $("#image0-4").hide();
					 $("#button2-4").hide();
					 $("#button0-4").hide();
					
					
					 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image6-4").hide();
					 $("#image40-4").show();
					
					 document.getElementById('image40-4').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					$("#image2-4").hide();
					 $("#image16-4").show();
					
					 document.getElementById('image16-4').style.animation = '0.7s rotate4 linear infinite';	
							
					}
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) { 
						
					 $("#image38-4").hide();	
					 $("#image44-4").show();
					 
					 document.getElementById('image44-4').style.animation = '0.7s rotate4 linear infinite';
							
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					 $("#image6-4").hide();	
					 $("#image7-4").show();
					 
					 document.getElementById('image7-4').style.animation = '0.7s rotate4 linear infinite';
							
					}
					
					  
					
				 
					 
					 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image2-4").hide();
					 $("#image51-4").show();
					
					 document.getElementById('image51-4').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image26-4").hide();
					 $("#image27-4").show();
					
					 document.getElementById('image27-4').style.animation = '0.7s rotate4 linear infinite';
					} 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image26-4").hide();
					 $("#image10-4").show();
					
					 document.getElementById('image10-4').style.animation = '0.7s rotate4 linear infinite';
					} 
					 
					
					
					
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-4").hide();
					 $("#image3-4").show();
					
					 document.getElementById('image3-4').style.animation = '0.7s rotate4 linear infinite';
					}
					
					
					
					
					
					
					
					
					
					
					
				}
				if (result[8] == 2) {//status 2
					 $("#button0-4").hide();
					 $("#image0-4").hide();
					 $("#image3-4").hide();
					 $("#image27-4").hide();
					 $("#image40-4").hide();
					 $("#image16-4").hide();
					 $("#image44-4").hide();
					 $("#image7-4").hide();
					 $("#image51-4").hide();
					 $("#image10-4").hide();
					
					
					
					
					
				 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
					
				
					if (result[5] == 2 ){
						
						$("#image40-4").show();
						
					document.getElementById('image40-4').style.animation = 'rotate15 6s ease';
             document.getElementById('image40-4').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image40-4").show();
					 document.getElementById('image40-4').style.animation = 'rotate14 6s ease';
             document.getElementById('image40-4').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image40-4").show();
						document.getElementById('image40-4').style.animation = 'rotate16 6s ease';
             document.getElementById('image40-4').style.transform="rotate(360deg)";
			
					}
					$("#button1-4").show();	
						
						
						
					}
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image16-4").show();
						
					document.getElementById('image16-4').style.animation = 'rotate15 6s ease';
             document.getElementById('image16-4').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image16-4").show();
					 document.getElementById('image16-4').style.animation = 'rotate14 6s ease';
             document.getElementById('image16-4').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image16-4").show();
						 document.getElementById('image16-4').style.animation = 'rotate16 6s ease';
             document.getElementById('image16-4').style.transform="rotate(360deg)";
			
					}
					$("#button1-4").show();	
						
					}
					
						
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image44-4").show();
						
					document.getElementById('image44-4').style.animation = 'rotate15 6s ease';
             document.getElementById('image44-4').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image44-4").show();
					 document.getElementById('image44-4').style.animation = 'rotate14 6s ease';
             document.getElementById('image44-4').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image44-4").show();
						 document.getElementById('image44-4').style.animation = 'rotate16 6s ease';
             document.getElementById('image44-4').style.transform="rotate(360deg)";
			
					}
					$("#button1-4").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					
					if (result[5] == 2 ){
						
						$("#image7-4").show();
						
					document.getElementById('image7-4').style.animation = 'rotate15 6s ease';
             document.getElementById('image7-4').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image7-4").show();
					 document.getElementById('image7-4').style.animation = 'rotate14 6s ease';
             document.getElementById('image7-4').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image7-4").show();
						document.getElementById('image7-4').style.animation = 'rotate16 6s ease';
             document.getElementById('image7-4').style.transform="rotate(360deg)";
			
					}
					$("#button1-4").show();	
						
						
						
					}
					
					
		
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0]) ) {
						
					
					
					if (result[5] == 2 ){
						
						$("#image51-4").show();
						
					document.getElementById('image51-4').style.animation = 'rotate15 6s ease';
             document.getElementById('image51-4').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image51-4").show();
					 document.getElementById('image51-4').style.animation = 'rotate14 6s ease';
             document.getElementById('image51-4').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image51-4").show();
						document.getElementById('image51-4').style.animation = 'rotate16 6s ease';
             document.getElementById('image51-4').style.transform="rotate(360deg)";
			
					}
					$("#button1-4").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
			
					if (result[5] == 2 ){
						
						$("#image27-4").show();
						
					document.getElementById('image27-4').style.animation = 'rotate15 6s ease';
             document.getElementById('image27-4').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image27-4").show();
					 document.getElementById('image27-4').style.animation = 'rotate14 6s ease';
             document.getElementById('image27-4').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image27-4").show();
						 document.getElementById('image27-4').style.animation = 'rotate16 6s ease';
             document.getElementById('image27-4').style.transform="rotate(360deg)";
			
					}
					$("#button1-4").show();	
						
						
						
					}
					
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image10-4").show();
						
					document.getElementById('image10-4').style.animation = 'rotate15 6s ease';
             document.getElementById('image10-4').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image10-4").show();
					 document.getElementById('image10-4').style.animation = 'rotate14 6s ease';
             document.getElementById('image10-4').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image10-4").show();
						 document.getElementById('image10-4').style.animation = 'rotate16 6s ease';
             document.getElementById('image10-4').style.transform="rotate(360deg)";
			
					}
					$("#button1-4").show();	
						
						
						
					}
					
					
				
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image3-4").show();
						
					document.getElementById('image3-4').style.animation = 'rotate15 6s ease';
             document.getElementById('image3-4').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image3-4").show();
					 document.getElementById('image3-4').style.animation = 'rotate14 6s ease';
             document.getElementById('image3-4').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image3-4").show();
						document.getElementById('image3-4').style.animation = 'rotate16 6s ease';
             document.getElementById('image3-4').style.transform="rotate(360deg)";
			
					}
					$("#button1-4").show();	
						
						
						
					}
					
					
					
					
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y Ganador 
					if (!parseInt(user[0])) {


						setTimeout(function () { $("#imagenM4").show() }, 6000);

					}
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0) {
						
						 setTimeout(function(){ $("#loser4").show() }, 6000);
						 setTimeout(function () { $("#imagenM4").show() }, 6000);
						
					} else if (result[5] == 0 && (parseInt(result[4][1]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
					setTimeout(function(){ $("#winner4").show() }, 6000);
					setTimeout(function () { $("#imagenM4").show() }, 6000);
					}
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1) {
						
						 setTimeout(function(){ $("#loser4").show() }, 6000);
						 setTimeout(function () { $("#imagenM4").show() }, 6000);
						
					} else if (result[5] == 1 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner4").show() }, 6000);
						 setTimeout(function () { $("#imagenM4").show() }, 6000);
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2) {
						
					 setTimeout(function(){ $("#loser4").show() }, 6000);
					 setTimeout(function () { $("#imagenM4").show() }, 6000);
						
					} else if (result[5] == 2 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][1]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner4").show() }, 6000);
						 setTimeout(function () { $("#imagenM4").show() }, 6000);
					}
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y ganador del Jackpot 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot4").show() }, 6000);
						
					} 
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot4").show() }, 6000);
						
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpo4").show() }, 6000);
						
					} 
					
				
				}
					
					 
				    
					 
				if (result[8] == 0 && result[7] == 0) {//status 3
					 $("#button0-4").show();
                     $("#winner4").hide();
					 $("#imagenM4").hide();
					 $("#loser4").hide();
					 $("#WinnerJackpot4").hide();
					 $("#image0-4").hide();
					 $("#image3-4").hide();
					 $("#image10-4").hide();
					 $("#image27-4").hide();
					 $("#image51-4").hide();
					 $("#image44-4").hide();
					 $("#image7-4").hide();
					 $("#image40-4").hide();
					 $("#image16-4").hide();
					 $("#button1-4").hide();
					
					 $("#image0-4").show();
					
			 document.getElementById('image0-4').style.animation = '2.5s rotate4';
             document.getElementById('image0-4').style.transform="rotate(360deg)";
					
				}
					
				});	
			});			
					
// getCylinder 5
				
			donutContract.methods.getCylinder(5,result[4][5]).call(function (err, result) {
			
				if (result[7] == 0) {
				document.getElementById('LastDepTime5').value = '- -';
				} else { 
				document.getElementById('LastDepTime5').value = '~' + timeago.format(result[7]+'000');
			}
				
				 web3.eth.getAccounts(function (err, UserCount) {
					 
					
				      user = UserCount;
					 
					 
						if (result[8] == 0) {//status 0 
					 $("#winner5").hide();
					 $("#loser5").hide();
					 $("#WinnerJackpot5").hide();
							
							
				if (result[4][0] !== undefined && parseInt(result[4][0]) == parseInt(user[0])) {// COMIENZO CILINDRO 5
				
					
					$("#image0-5").hide();
					$("#image1-5").show();
			 document.getElementById('image1-5').style.animation = '2.5s rotate';
             document.getElementById('image1-5').style.transform="rotate(115deg)";
						 $("#button2-5").show();
					
					if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image1-5").hide();
					$("#image2-5").show();	
			 document.getElementById('image2-5').style.animation = '2.5s rotate5';
             document.getElementById('image2-5').style.transform="rotate(254deg)";
				 $("#button2-5").show();
						
						if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
				     $("#image2-5").hide();
					 $("#image16-5").show();	
			 document.getElementById('image16-5').style.animation = '2.5s rotate6';
             document.getElementById('image16-5').style.transform="rotate(360deg)";
				 $("#button2-5").show();
						
						
						
						
						
						} else  if (result[4][2] !== undefined) {   
					
					$("#image2-5").hide();
					 $("#image51-5").show();	
			 document.getElementById('image51-5').style.animation = '2.5s rotate6';
             document.getElementById('image51-5').style.transform="rotate(360deg)";
							
							
						
							
							
							
						}
						
			     
				} else if (result[4][1] !== undefined) {
					 $("#image1-5").hide();
					 $("#image38-5").show();
			 document.getElementById('image38-5').style.animation = '2.5s rotate5';
             document.getElementById('image38-5').style.transform="rotate(254deg)";
					
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-5").hide();
					 $("#image3-5").show();	
			 document.getElementById('image3-5').style.animation = '2.5s rotate6';
             document.getElementById('image3-5').style.transform="rotate(360deg)";
				 $("#button2-5").show();
						
						
				

			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image38-5").hide();
					 $("#image44-5").show();	
			 document.getElementById('image44-5').style.animation = '2.5s rotate6';
             document.getElementById('image44-5').style.transform="rotate(360deg)";
					
					
				
					
					
					
				}
							
							
							
				}
						
					
					
					
					} else if (result[4][0] !== undefined) {
						$("#image0-5").hide();
						$("#image25-5").show();
			 document.getElementById('image25-5').style.animation = '2.5s rotate';
             document.getElementById('image25-5').style.transform="rotate(115deg)";
						
						if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image25-5").hide();
					$("#image6-5").show();	
			 document.getElementById('image6-5').style.animation = '2.5s rotate5';
             document.getElementById('image6-5').style.transform="rotate(254deg)";
			 $("#button2-5").show();			
							if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 
					$("#image6-5").hide();
					$("#image7-5").show();	
			 document.getElementById('image7-5').style.animation = '2.5s rotate6';
             document.getElementById('image7-5').style.transform="rotate(360deg)";
			 $("#button2-5").show();		
								
				
								
								
			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image6-5").hide();
					 $("#image40-5").show();	
			 document.getElementById('image40-5').style.animation = '2.5s rotate6';
             document.getElementById('image40-5').style.transform="rotate(360deg)";
				 
					
					
					
					}
							
						} else if (result[4][1] !== undefined) {
					 $("#image25-5").hide();
					 $("#image26-5").show();
			 document.getElementById('image26-5').style.animation = '2.5s rotate5';
             document.getElementById('image26-5').style.transform="rotate(254deg)";
							
							
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
						
						
						$("#image26-5").hide();
					$("#image10-5").show();
			 document.getElementById('image10-5').style.animation = '2.5s rotate6';
             document.getElementById('image10-5').style.transform="rotate(360deg)";
			 $("#button2-5").show();
						
				
						
						
						
						
					} else if (result[4][2] !== undefined) {
					 $("#image26-5").hide();
					 $("#image27-5").show();
			 document.getElementById('image27-5').style.animation = '2.5s rotate6';
             document.getElementById('image27-5').style.transform="rotate(360deg)";
						
						
							
						
						
					
									 }
					
							
							
							
				}
						
						
					}
					
				
							
							
				
							
						
							
			
							
							
							
							
				
						}
				
			
				
				if (result[8] == 1) {//status 1
					 $("#image0-5").hide();
					 $("#button2-5").hide();
					 $("#button0-5").hide();
					
					
					 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image6-5").hide();
					 $("#image40-5").show();
					
					 document.getElementById('image40-5').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					$("#image2-5").hide();
					 $("#image16-5").show();
					
					 document.getElementById('image16-5').style.animation = '0.7s rotate4 linear infinite';	
							
					}
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) { 
						
					 $("#image38-5").hide();	
					 $("#image44-5").show();
					 
					 document.getElementById('image44-5').style.animation = '0.7s rotate4 linear infinite';
							
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					 $("#image6-5").hide();	
					 $("#image7-5").show();
					 
					 document.getElementById('image7-5').style.animation = '0.7s rotate4 linear infinite';
							
					}
					
					  
					
				 
					 
					 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image2-5").hide();
					 $("#image51-5").show();
					
					 document.getElementById('image51-5').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image26-5").hide();
					 $("#image27-5").show();
					
					 document.getElementById('image27-5').style.animation = '0.7s rotate4 linear infinite';
					} 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image26-5").hide();
					 $("#image10-5").show();
					
					 document.getElementById('image10-5').style.animation = '0.7s rotate4 linear infinite';
					} 
					 
					
					
					
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-5").hide();
					 $("#image3-5").show();
					
					 document.getElementById('image3-5').style.animation = '0.7s rotate4 linear infinite';
					}
					
					
					
					
					
					
					
					
					
					
					
				}
				if (result[8] == 2) {//status 2
					 $("#button0-5").hide();
					 $("#image0-5").hide();
					 $("#image3-5").hide();
					 $("#image27-5").hide();
					 $("#image40-5").hide();
					 $("#image16-5").hide();
					 $("#image44-5").hide();
					 $("#image7-5").hide();
					 $("#image51-5").hide();
					 $("#image10-5").hide();
					
					
					
					
					
				 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
					
				
					if (result[5] == 2 ){
						
						$("#image40-5").show();
						
					document.getElementById('image40-5').style.animation = 'rotate15 6s ease';
             document.getElementById('image40-5').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image40-5").show();
					 document.getElementById('image40-5').style.animation = 'rotate14 6s ease';
             document.getElementById('image40-5').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image40-5").show();
						document.getElementById('image40-5').style.animation = 'rotate16 6s ease';
             document.getElementById('image40-5').style.transform="rotate(360deg)";
			
					}
					$("#button1-5").show();	
						
						
						
					}
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image16-5").show();
						
					document.getElementById('image16-5').style.animation = 'rotate15 6s ease';
             document.getElementById('image16-5').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image16-5").show();
					 document.getElementById('image16-5').style.animation = 'rotate14 6s ease';
             document.getElementById('image16-5').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image16-5").show();
						 document.getElementById('image16-5').style.animation = 'rotate16 6s ease';
             document.getElementById('image16-5').style.transform="rotate(360deg)";
			
					}
					$("#button1-5").show();	
						
					}
					
						
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image44-5").show();
						
					document.getElementById('image44-5').style.animation = 'rotate15 6s ease';
             document.getElementById('image44-5').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image44-5").show();
					 document.getElementById('image44-5').style.animation = 'rotate14 6s ease';
             document.getElementById('image44-5').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image44-5").show();
						 document.getElementById('image44-5').style.animation = 'rotate16 6s ease';
             document.getElementById('image44-5').style.transform="rotate(360deg)";
			
					}
					$("#button1-5").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					
					if (result[5] == 2 ){
						
						$("#image7-5").show();
						
					document.getElementById('image7-5').style.animation = 'rotate15 6s ease';
             document.getElementById('image7-5').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image7-5").show();
					 document.getElementById('image7-5').style.animation = 'rotate14 6s ease';
             document.getElementById('image7-5').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image7-5").show();
						document.getElementById('image7-5').style.animation = 'rotate16 6s ease';
             document.getElementById('image7-5').style.transform="rotate(360deg)";
			
					}
					$("#button1-5").show();	
						
						
						
					}
					
					
		
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0]) ) {
						
					
					
					if (result[5] == 2 ){
						
						$("#image51-5").show();
						
					document.getElementById('image51-5').style.animation = 'rotate15 6s ease';
             document.getElementById('image51-5').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image51-5").show();
					 document.getElementById('image51-5').style.animation = 'rotate14 6s ease';
             document.getElementById('image51-5').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image51-5").show();
						document.getElementById('image51-5').style.animation = 'rotate16 6s ease';
             document.getElementById('image51-5').style.transform="rotate(360deg)";
			
					}
					$("#button1-5").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
			
					if (result[5] == 2 ){
						
						$("#image27-5").show();
						
					document.getElementById('image27-5').style.animation = 'rotate15 6s ease';
             document.getElementById('image27-5').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image27-5").show();
					 document.getElementById('image27-5').style.animation = 'rotate14 6s ease';
             document.getElementById('image27-5').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image27-5").show();
						 document.getElementById('image27-5').style.animation = 'rotate16 6s ease';
             document.getElementById('image27-5').style.transform="rotate(360deg)";
			
					}
					$("#button1-5").show();	
						
						
						
					}
					
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image10-5").show();
						
					document.getElementById('image10-5').style.animation = 'rotate15 6s ease';
             document.getElementById('image10-5').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image10-5").show();
					 document.getElementById('image10-5').style.animation = 'rotate14 6s ease';
             document.getElementById('image10-5').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image10-5").show();
						 document.getElementById('image10-5').style.animation = 'rotate16 6s ease';
             document.getElementById('image10-5').style.transform="rotate(360deg)";
			
					}
					$("#button1-5").show();	
						
						
						
					}
					
					
				
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image3-5").show();
						
					document.getElementById('image3-5').style.animation = 'rotate15 6s ease';
             document.getElementById('image3-5').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image3-5").show();
					 document.getElementById('image3-5').style.animation = 'rotate14 6s ease';
             document.getElementById('image3-5').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image3-5").show();
						document.getElementById('image3-5').style.animation = 'rotate16 6s ease';
             document.getElementById('image3-5').style.transform="rotate(360deg)";
			
					}
					$("#button1-5").show();	
						
						
						
					}
					
					
					
					
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y Ganador 
					if (!parseInt(user[0])) {


						setTimeout(function () { $("#imagenM5").show() }, 6000);

					}
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0) {
						
						 setTimeout(function(){ $("#loser5").show() }, 6000);
						 setTimeout(function () { $("#imagenM5").show() }, 6000);
						
					} else if (result[5] == 0 && (parseInt(result[4][1]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
					setTimeout(function(){ $("#winner5").show() }, 6000);
					setTimeout(function () { $("#imagenM5").show() }, 6000);
					}
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1) {
						
						 setTimeout(function(){ $("#loser5").show() }, 6000);
						 setTimeout(function () { $("#imagenM5").show() }, 6000);
						
					} else if (result[5] == 1 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner5").show() }, 6000);
						 setTimeout(function () { $("#imagenM5").show() }, 6000);
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2) {
						
					 setTimeout(function(){ $("#loser5").show() }, 6000);
					 setTimeout(function () { $("#imagenM5").show() }, 6000);
						
					} else if (result[5] == 2 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][1]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner5").show() }, 6000);
						 setTimeout(function () { $("#imagenM5").show() }, 6000);
					}
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y ganador del Jackpot 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot5").show() }, 6000);
						
					} 
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot5").show() }, 6000);
						
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpo5").show() }, 6000);
						
					} 
					
				
				}
					
					 
				    
					 
				if (result[8] == 0 && result[7] == 0) {//status 3
					 $("#button0-5").show();
                     $("#winner5").hide();
					 $("#imagenM5").hide();
					 $("#loser5").hide();
					 $("#WinnerJackpot5").hide();
					 $("#image0-5").hide();
					 $("#image3-5").hide();
					 $("#image10-5").hide();
					 $("#image27-5").hide();
					 $("#image51-5").hide();
					 $("#image44-5").hide();
					 $("#image7-5").hide();
					 $("#image40-5").hide();
					 $("#image16-5").hide();
					 $("#button1-5").hide();
					
					 $("#image0-5").show();
					
			 document.getElementById('image0-5').style.animation = '2.5s rotate4';
             document.getElementById('image0-5').style.transform="rotate(360deg)";
					
				}
					
				});	
			});				
					
	// getCylinder 6
				
			donutContract.methods.getCylinder(6,result[4][6]).call(function (err, result) {
			
				if (result[7] == 0) {
				document.getElementById('LastDepTime6').value = '- -';
				} else { 
				document.getElementById('LastDepTime6').value = '~' + timeago.format(result[7]+'000');
			}
				
				 web3.eth.getAccounts(function (err, UserCount) {
					 
					
				      user = UserCount;
					 
					 
						if (result[8] == 0) {//status 0 
					 $("#winner6").hide();
					 $("#loser6").hide();
					 $("#WinnerJackpot6").hide();
							
							
				if (result[4][0] !== undefined && parseInt(result[4][0]) == parseInt(user[0])) {// COMIENZO CILINDRO 6
				
					
					$("#image0-6").hide();
					$("#image1-6").show();
			 document.getElementById('image1-6').style.animation = '2.5s rotate';
             document.getElementById('image1-6').style.transform="rotate(115deg)";
						 $("#button2-6").show();
					
					if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image1-6").hide();
					$("#image2-6").show();	
			 document.getElementById('image2-6').style.animation = '2.5s rotate5';
             document.getElementById('image2-6').style.transform="rotate(254deg)";
				 $("#button2-6").show();
						
						if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
				     $("#image2-6").hide();
					 $("#image16-6").show();	
			 document.getElementById('image16-6').style.animation = '2.5s rotate6';
             document.getElementById('image16-6').style.transform="rotate(360deg)";
				 $("#button2-6").show();
						
						
						
						
						
						} else  if (result[4][2] !== undefined) {   
					
					$("#image2-6").hide();
					 $("#image51-6").show();	
			 document.getElementById('image51-6').style.animation = '2.5s rotate6';
             document.getElementById('image51-6').style.transform="rotate(360deg)";
							
							
						
							
							
							
						}
						
			     
				} else if (result[4][1] !== undefined) {
					 $("#image1-6").hide();
					 $("#image38-6").show();
			 document.getElementById('image38-6').style.animation = '2.5s rotate5';
             document.getElementById('image38-6').style.transform="rotate(254deg)";
					
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-6").hide();
					 $("#image3-6").show();	
			 document.getElementById('image3-6').style.animation = '2.5s rotate6';
             document.getElementById('image3-6').style.transform="rotate(360deg)";
				 $("#button2-6").show();
						
						
				

			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image38-6").hide();
					 $("#image44-6").show();	
			 document.getElementById('image44-6').style.animation = '2.5s rotate6';
             document.getElementById('image44-6').style.transform="rotate(360deg)";
					
					
				
					
					
					
				}
							
							
							
				}
						
					
					
					
					} else if (result[4][0] !== undefined) {
						$("#image0-6").hide();
						$("#image25-6").show();
			 document.getElementById('image25-6').style.animation = '2.5s rotate';
             document.getElementById('image25-6').style.transform="rotate(115deg)";
						
						if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image25-6").hide();
					$("#image6-6").show();	
			 document.getElementById('image6-6').style.animation = '2.5s rotate5';
             document.getElementById('image6-6').style.transform="rotate(254deg)";
			 $("#button2-6").show();			
							if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 
					$("#image6-6").hide();
					$("#image7-6").show();	
			 document.getElementById('image7-6').style.animation = '2.5s rotate6';
             document.getElementById('image7-6').style.transform="rotate(360deg)";
			 $("#button2-6").show();		
								
				
								
								
			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image6-6").hide();
					 $("#image40-6").show();	
			 document.getElementById('image40-6').style.animation = '2.5s rotate6';
             document.getElementById('image40-6').style.transform="rotate(360deg)";
				 
					
					
					
					}
							
						} else if (result[4][1] !== undefined) {
					 $("#image25-6").hide();
					 $("#image26-6").show();
			 document.getElementById('image26-6').style.animation = '2.5s rotate5';
             document.getElementById('image26-6').style.transform="rotate(254deg)";
							
							
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
						
						
						$("#image26-6").hide();
					$("#image10-6").show();
			 document.getElementById('image10-6').style.animation = '2.5s rotate6';
             document.getElementById('image10-6').style.transform="rotate(360deg)";
			 $("#button2-6").show();
						
				
						
						
						
						
					} else if (result[4][2] !== undefined) {
					 $("#image26-6").hide();
					 $("#image27-6").show();
			 document.getElementById('image27-6').style.animation = '2.5s rotate6';
             document.getElementById('image27-6').style.transform="rotate(360deg)";
						
						
							
						
						
					
									 }
					
							
							
							
				}
						
						
					}
					
				
							
							
				
							
						
							
			
							
							
							
							
				
						}
				
			
				
				if (result[8] == 1) {//status 1
					 $("#image0-6").hide();
					 $("#button2-6").hide();
					 $("#button0-6").hide();
					
					
					 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image6-6").hide();
					 $("#image40-6").show();
					
					 document.getElementById('image40-6').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					$("#image2-6").hide();
					 $("#image16-6").show();
					
					 document.getElementById('image16-6').style.animation = '0.7s rotate4 linear infinite';	
							
					}
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) { 
						
					 $("#image38-6").hide();	
					 $("#image44-6").show();
					 
					 document.getElementById('image44-6').style.animation = '0.7s rotate4 linear infinite';
							
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					 $("#image6-6").hide();	
					 $("#image7-6").show();
					 
					 document.getElementById('image7-6').style.animation = '0.7s rotate4 linear infinite';
							
					}
					
					  
					
				 
					 
					 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image2-6").hide();
					 $("#image51-6").show();
					
					 document.getElementById('image51-6').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image26-6").hide();
					 $("#image27-6").show();
					
					 document.getElementById('image27-6').style.animation = '0.7s rotate4 linear infinite';
					} 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image26-6").hide();
					 $("#image10-6").show();
					
					 document.getElementById('image10-6').style.animation = '0.7s rotate4 linear infinite';
					} 
					 
					
					
					
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-6").hide();
					 $("#image3-6").show();
					
					 document.getElementById('image3-6').style.animation = '0.7s rotate4 linear infinite';
					}
					
					
					
					
					
					
					
					
					
					
					
				}
				if (result[8] == 2) {//status 2
					 $("#button0-6").hide();
					 $("#image0-6").hide();
					 $("#image3-6").hide();
					 $("#image27-6").hide();
					 $("#image40-6").hide();
					 $("#image16-6").hide();
					 $("#image44-6").hide();
					 $("#image7-6").hide();
					 $("#image51-6").hide();
					 $("#image10-6").hide();
					
					
					
					
					
				 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
					
				
					if (result[5] == 2 ){
						
						$("#image40-6").show();
						
					document.getElementById('image40-6').style.animation = 'rotate15 6s ease';
             document.getElementById('image40-6').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image40-6").show();
					 document.getElementById('image40-6').style.animation = 'rotate14 6s ease';
             document.getElementById('image40-6').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image40-6").show();
						document.getElementById('image40-6').style.animation = 'rotate16 6s ease';
             document.getElementById('image40-6').style.transform="rotate(360deg)";
			
					}
					$("#button1-6").show();	
						
						
						
					}
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image16-6").show();
						
					document.getElementById('image16-6').style.animation = 'rotate15 6s ease';
             document.getElementById('image16-6').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image16-6").show();
					 document.getElementById('image16-6').style.animation = 'rotate14 6s ease';
             document.getElementById('image16-6').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image16-6").show();
						 document.getElementById('image16-6').style.animation = 'rotate16 6s ease';
             document.getElementById('image16-6').style.transform="rotate(360deg)";
			
					}
					$("#button1-6").show();	
						
					}
					
						
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image44-6").show();
						
					document.getElementById('image44-6').style.animation = 'rotate15 6s ease';
             document.getElementById('image44-6').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image44-6").show();
					 document.getElementById('image44-6').style.animation = 'rotate14 6s ease';
             document.getElementById('image44-6').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image44-6").show();
						 document.getElementById('image44-6').style.animation = 'rotate16 6s ease';
             document.getElementById('image44-6').style.transform="rotate(360deg)";
			
					}
					$("#button1-6").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					
					if (result[5] == 2 ){
						
						$("#image7-6").show();
						
					document.getElementById('image7-6').style.animation = 'rotate15 6s ease';
             document.getElementById('image7-6').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image7-6").show();
					 document.getElementById('image7-6').style.animation = 'rotate14 6s ease';
             document.getElementById('image7-6').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image7-6").show();
						document.getElementById('image7-6').style.animation = 'rotate16 6s ease';
             document.getElementById('image7-6').style.transform="rotate(360deg)";
			
					}
					$("#button1-6").show();	
						
						
						
					}
					
					
		
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0]) ) {
						
					
					
					if (result[5] == 2 ){
						
						$("#image51-6").show();
						
					document.getElementById('image51-6').style.animation = 'rotate15 6s ease';
             document.getElementById('image51-6').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image51-6").show();
					 document.getElementById('image51-6').style.animation = 'rotate14 6s ease';
             document.getElementById('image51-6').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image51-6").show();
						document.getElementById('image51-6').style.animation = 'rotate16 6s ease';
             document.getElementById('image51-6').style.transform="rotate(360deg)";
			
					}
					$("#button1-6").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
			
					if (result[5] == 2 ){
						
						$("#image27-6").show();
						
					document.getElementById('image27-6').style.animation = 'rotate15 6s ease';
             document.getElementById('image27-6').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image27-6").show();
					 document.getElementById('image27-6').style.animation = 'rotate14 6s ease';
             document.getElementById('image27-6').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image27-6").show();
						 document.getElementById('image27-6').style.animation = 'rotate16 6s ease';
             document.getElementById('image27-6').style.transform="rotate(360deg)";
			
					}
					$("#button1-6").show();	
						
						
						
					}
					
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image10-6").show();
						
					document.getElementById('image10-6').style.animation = 'rotate15 6s ease';
             document.getElementById('image10-6').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image10-6").show();
					 document.getElementById('image10-6').style.animation = 'rotate14 6s ease';
             document.getElementById('image10-6').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image10-6").show();
						 document.getElementById('image10-6').style.animation = 'rotate16 6s ease';
             document.getElementById('image10-6').style.transform="rotate(360deg)";
			
					}
					$("#button1-6").show();	
						
						
						
					}
					
					
				
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image3-6").show();
						
					document.getElementById('image3-6').style.animation = 'rotate15 6s ease';
             document.getElementById('image3-6').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image3-6").show();
					 document.getElementById('image3-6').style.animation = 'rotate14 6s ease';
             document.getElementById('image3-6').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image3-6").show();
						document.getElementById('image3-6').style.animation = 'rotate16 6s ease';
             document.getElementById('image3-6').style.transform="rotate(360deg)";
			
					}
					$("#button1-6").show();	
						
						
						
					}
					
					
					
					
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y Ganador 
					if (!parseInt(user[0])) {


						setTimeout(function () { $("#imagenM6").show() }, 6000);

					}
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0) {
						
						 setTimeout(function(){ $("#loser6").show() }, 6000);
						 setTimeout(function () { $("#imagenM6").show() }, 6000);
						
					} else if (result[5] == 0 && (parseInt(result[4][1]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
					setTimeout(function(){ $("#winner6").show() }, 6000);
					setTimeout(function () { $("#imagenM6").show() }, 6000);
					}
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1) {
						
						 setTimeout(function(){ $("#loser6").show() }, 6000);
						 setTimeout(function () { $("#imagenM6").show() }, 6000);
						
					} else if (result[5] == 1 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner6").show() }, 6000);
						 setTimeout(function () { $("#imagenM6").show() }, 6000);
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2) {
						
					 setTimeout(function(){ $("#loser6").show() }, 6000);
					 setTimeout(function () { $("#imagenM6").show() }, 6000);
						
					} else if (result[5] == 2 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][1]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner6").show() }, 6000);
						 setTimeout(function () { $("#imagenM6").show() }, 6000);
					}
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y ganador del Jackpot 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot6").show() }, 6000);
						
					} 
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot6").show() }, 6000);
						
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpo6").show() }, 6000);
						
					} 
					
				
				}
					
					 
				    
					 
				if (result[8] == 0 && result[7] == 0) {//status 3
					 $("#button0-6").show();
                     $("#winner6").hide();
					 $("#imagenM6").hide();
					 $("#loser6").hide();
					 $("#WinnerJackpot6").hide();
					 $("#image0-6").hide();
					 $("#image3-6").hide();
					 $("#image10-6").hide();
					 $("#image27-6").hide();
					 $("#image51-6").hide();
					 $("#image44-6").hide();
					 $("#image7-6").hide();
					 $("#image40-6").hide();
					 $("#image16-6").hide();
					 $("#button1-6").hide();
					
					 $("#image0-6").show();
					
			 document.getElementById('image0-6').style.animation = '2.5s rotate4';
             document.getElementById('image0-6').style.transform="rotate(360deg)";
					
				}
					
				});	
			});			
					
// getCylinder 7
				
			donutContract.methods.getCylinder(7,result[4][7]).call(function (err, result) {
			
				if (result[7] == 0) {
				document.getElementById('LastDepTime7').value = '- -';
				} else { 
				document.getElementById('LastDepTime7').value = '~' + timeago.format(result[7]+'000');
			}
				
				 web3.eth.getAccounts(function (err, UserCount) {
					 
					
				      user = UserCount;
					 
					 
						if (result[8] == 0) {//status 0 
					 $("#winner7").hide();
					 $("#loser7").hide();
					 $("#WinnerJackpot7").hide();
							
							
				if (result[4][0] !== undefined && parseInt(result[4][0]) == parseInt(user[0])) {// COMIENZO CILINDRO 7
				
					
					$("#image0-7").hide();
					$("#image1-7").show();
			 document.getElementById('image1-7').style.animation = '2.5s rotate';
             document.getElementById('image1-7').style.transform="rotate(115deg)";
						 $("#button2-7").show();
					
					if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image1-7").hide();
					$("#image2-7").show();	
			 document.getElementById('image2-7').style.animation = '2.5s rotate5';
             document.getElementById('image2-7').style.transform="rotate(254deg)";
				 $("#button2-7").show();
						
						if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
				     $("#image2-7").hide();
					 $("#image16-7").show();	
			 document.getElementById('image16-7').style.animation = '2.5s rotate6';
             document.getElementById('image16-7').style.transform="rotate(360deg)";
				 $("#button2-7").show();
						
						
						
						
						
						} else  if (result[4][2] !== undefined) {   
					
					$("#image2-7").hide();
					 $("#image51-7").show();	
			 document.getElementById('image51-7').style.animation = '2.5s rotate6';
             document.getElementById('image51-7').style.transform="rotate(360deg)";
							
							
						
							
							
							
						}
						
			     
				} else if (result[4][1] !== undefined) {
					 $("#image1-7").hide();
					 $("#image38-7").show();
			 document.getElementById('image38-7').style.animation = '2.5s rotate5';
             document.getElementById('image38-7').style.transform="rotate(254deg)";
					
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-7").hide();
					 $("#image3-7").show();	
			 document.getElementById('image3-7').style.animation = '2.5s rotate6';
             document.getElementById('image3-7').style.transform="rotate(360deg)";
				 $("#button2-7").show();
						
						
				

			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image38-7").hide();
					 $("#image44-7").show();	
			 document.getElementById('image44-7').style.animation = '2.5s rotate6';
             document.getElementById('image44-7').style.transform="rotate(360deg)";
					
					
				
					
					
					
				}
							
							
							
				}
						
					
					
					
					} else if (result[4][0] !== undefined) {
						$("#image0-7").hide();
						$("#image25-7").show();
			 document.getElementById('image25-7').style.animation = '2.5s rotate';
             document.getElementById('image25-7').style.transform="rotate(115deg)";
						
						if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image25-7").hide();
					$("#image6-7").show();	
			 document.getElementById('image6-7').style.animation = '2.5s rotate5';
             document.getElementById('image6-7').style.transform="rotate(254deg)";
			 $("#button2-7").show();			
							if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 
					$("#image6-7").hide();
					$("#image7-7").show();	
			 document.getElementById('image7-7').style.animation = '2.5s rotate6';
             document.getElementById('image7-7').style.transform="rotate(360deg)";
			 $("#button2-7").show();		
								
				
								
								
			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image6-7").hide();
					 $("#image40-7").show();	
			 document.getElementById('image40-7').style.animation = '2.5s rotate6';
             document.getElementById('image40-7').style.transform="rotate(360deg)";
				 
					
					
					
					}
							
						} else if (result[4][1] !== undefined) {
					 $("#image25-7").hide();
					 $("#image26-7").show();
			 document.getElementById('image26-7').style.animation = '2.5s rotate5';
             document.getElementById('image26-7').style.transform="rotate(254deg)";
							
							
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
						
						
						$("#image26-7").hide();
					$("#image10-7").show();
			 document.getElementById('image10-7').style.animation = '2.5s rotate6';
             document.getElementById('image10-7').style.transform="rotate(360deg)";
			 $("#button2-7").show();
						
				
						
						
						
						
					} else if (result[4][2] !== undefined) {
					 $("#image26-7").hide();
					 $("#image27-7").show();
			 document.getElementById('image27-7').style.animation = '2.5s rotate6';
             document.getElementById('image27-7').style.transform="rotate(360deg)";
						
						
							
						
						
					
									 }
					
							
							
							
				}
						
						
					}
					
				
							
							
				
							
						
							
			
							
							
							
							
				
						}
				
			
				
				if (result[8] == 1) {//status 1
					 $("#image0-7").hide();
					 $("#button2-7").hide();
					 $("#button0-7").hide();
					
					
					 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image6-7").hide();
					 $("#image40-7").show();
					
					 document.getElementById('image40-7').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					$("#image2-7").hide();
					 $("#image16-7").show();
					
					 document.getElementById('image16-7').style.animation = '0.7s rotate4 linear infinite';	
							
					}
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) { 
						
					 $("#image38-7").hide();	
					 $("#image44-7").show();
					 
					 document.getElementById('image44-7').style.animation = '0.7s rotate4 linear infinite';
							
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					 $("#image6-7").hide();	
					 $("#image7-7").show();
					 
					 document.getElementById('image7-7').style.animation = '0.7s rotate4 linear infinite';
							
					}
					
					  
					
				 
					 
					 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image2-7").hide();
					 $("#image51-7").show();
					
					 document.getElementById('image51-7').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image26-7").hide();
					 $("#image27-7").show();
					
					 document.getElementById('image27-7').style.animation = '0.7s rotate4 linear infinite';
					} 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image26-7").hide();
					 $("#image10-7").show();
					
					 document.getElementById('image10-7').style.animation = '0.7s rotate4 linear infinite';
					} 
					 
					
					
					
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-7").hide();
					 $("#image3-7").show();
					
					 document.getElementById('image3-7').style.animation = '0.7s rotate4 linear infinite';
					}
					
					
					
					
					
					
					
					
					
					
					
				}
				if (result[8] == 2) {//status 2
					 $("#button0-7").hide();
					 $("#image0-7").hide();
					 $("#image3-7").hide();
					 $("#image27-7").hide();
					 $("#image40-7").hide();
					 $("#image16-7").hide();
					 $("#image44-7").hide();
					 $("#image7-7").hide();
					 $("#image51-7").hide();
					 $("#image10-7").hide();
					
					
					
					
					
				 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
					
				
					if (result[5] == 2 ){
						
						$("#image40-7").show();
						
					document.getElementById('image40-7').style.animation = 'rotate15 6s ease';
             document.getElementById('image40-7').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image40-7").show();
					 document.getElementById('image40-7').style.animation = 'rotate14 6s ease';
             document.getElementById('image40-7').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image40-7").show();
						document.getElementById('image40-7').style.animation = 'rotate16 6s ease';
             document.getElementById('image40-7').style.transform="rotate(360deg)";
			
					}
					$("#button1-7").show();	
						
						
						
					}
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image16-7").show();
						
					document.getElementById('image16-7').style.animation = 'rotate15 6s ease';
             document.getElementById('image16-7').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image16-7").show();
					 document.getElementById('image16-7').style.animation = 'rotate14 6s ease';
             document.getElementById('image16-7').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image16-7").show();
						 document.getElementById('image16-7').style.animation = 'rotate16 6s ease';
             document.getElementById('image16-7').style.transform="rotate(360deg)";
			
					}
					$("#button1-7").show();	
						
					}
					
						
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image44-7").show();
						
					document.getElementById('image44-7').style.animation = 'rotate15 6s ease';
             document.getElementById('image44-7').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image44-7").show();
					 document.getElementById('image44-7').style.animation = 'rotate14 6s ease';
             document.getElementById('image44-7').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image44-7").show();
						 document.getElementById('image44-7').style.animation = 'rotate16 6s ease';
             document.getElementById('image44-7').style.transform="rotate(360deg)";
			
					}
					$("#button1-7").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					
					if (result[5] == 2 ){
						
						$("#image7-7").show();
						
					document.getElementById('image7-7').style.animation = 'rotate15 6s ease';
             document.getElementById('image7-7').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image7-7").show();
					 document.getElementById('image7-7').style.animation = 'rotate14 6s ease';
             document.getElementById('image7-7').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image7-7").show();
						document.getElementById('image7-7').style.animation = 'rotate16 6s ease';
             document.getElementById('image7-7').style.transform="rotate(360deg)";
			
					}
					$("#button1-7").show();	
						
						
						
					}
					
					
		
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0]) ) {
						
					
					
					if (result[5] == 2 ){
						
						$("#image51-7").show();
						
					document.getElementById('image51-7').style.animation = 'rotate15 6s ease';
             document.getElementById('image51-7').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image51-7").show();
					 document.getElementById('image51-7').style.animation = 'rotate14 6s ease';
             document.getElementById('image51-7').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image51-7").show();
						document.getElementById('image51-7').style.animation = 'rotate16 6s ease';
             document.getElementById('image51-7').style.transform="rotate(360deg)";
			
					}
					$("#button1-7").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
			
					if (result[5] == 2 ){
						
						$("#image27-7").show();
						
					document.getElementById('image27-7').style.animation = 'rotate15 6s ease';
             document.getElementById('image27-7').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image27-7").show();
					 document.getElementById('image27-7').style.animation = 'rotate14 6s ease';
             document.getElementById('image27-7').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image27-7").show();
						 document.getElementById('image27-7').style.animation = 'rotate16 6s ease';
             document.getElementById('image27-7').style.transform="rotate(360deg)";
			
					}
					$("#button1-7").show();	
						
						
						
					}
					
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image10-7").show();
						
					document.getElementById('image10-7').style.animation = 'rotate15 6s ease';
             document.getElementById('image10-7').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image10-7").show();
					 document.getElementById('image10-7').style.animation = 'rotate14 6s ease';
             document.getElementById('image10-7').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image10-7").show();
						 document.getElementById('image10-7').style.animation = 'rotate16 6s ease';
             document.getElementById('image10-7').style.transform="rotate(360deg)";
			
					}
					$("#button1-7").show();	
						
						
						
					}
					
					
				
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image3-7").show();
						
					document.getElementById('image3-7').style.animation = 'rotate15 6s ease';
             document.getElementById('image3-7').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image3-7").show();
					 document.getElementById('image3-7').style.animation = 'rotate14 6s ease';
             document.getElementById('image3-7').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image3-7").show();
						document.getElementById('image3-7').style.animation = 'rotate16 6s ease';
             document.getElementById('image3-7').style.transform="rotate(360deg)";
			
					}
					$("#button1-7").show();	
						
						
						
					}
					
					
					
					
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y Ganador 
					if (!parseInt(user[0])) {


						setTimeout(function () { $("#imagenM7").show() }, 6000);

					}
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0) {
						
						 setTimeout(function(){ $("#loser7").show() }, 6000);
						 setTimeout(function () { $("#imagenM7").show() }, 6000);
						
					} else if (result[5] == 0 && (parseInt(result[4][1]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
					setTimeout(function(){ $("#winner7").show() }, 6000);
					setTimeout(function () { $("#imagenM7").show() }, 6000);
					}
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1) {
						
						 setTimeout(function(){ $("#loser7").show() }, 6000);
						 setTimeout(function () { $("#imagenM7").show() }, 6000);
						
					} else if (result[5] == 1 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner7").show() }, 6000);
						 setTimeout(function () { $("#imagenM7").show() }, 6000);
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2) {
						
					 setTimeout(function(){ $("#loser7").show() }, 6000);
					 setTimeout(function () { $("#imagenM7").show() }, 6000);
						
					} else if (result[5] == 2 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][1]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner7").show() }, 6000);
						 setTimeout(function () { $("#imagenM7").show() }, 6000);
					}
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y ganador del Jackpot 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot7").show() }, 6000);
						
					} 
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot7").show() }, 6000);
						
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpo7").show() }, 6000);
						
					} 
					
				
				}
					
					 
				    
					 
				if (result[8] == 0 && result[7] == 0) {//status 3
					 $("#button0-7").show();
                     $("#winner7").hide();
					 $("#imagenM7").hide();
					 $("#loser7").hide();
					 $("#WinnerJackpot7").hide();
					 $("#image0-7").hide();
					 $("#image3-7").hide();
					 $("#image10-7").hide();
					 $("#image27-7").hide();
					 $("#image51-7").hide();
					 $("#image44-7").hide();
					 $("#image7-7").hide();
					 $("#image40-7").hide();
					 $("#image16-7").hide();
					 $("#button1-7").hide();
					
					 $("#image0-7").show();
					
			 document.getElementById('image0-7').style.animation = '2.5s rotate4';
             document.getElementById('image0-7').style.transform="rotate(360deg)";
					
				}
					
				});	
			});		
					
					
// getCylinder 8
				
			donutContract.methods.getCylinder(8,result[4][8]).call(function (err, result) {
			
				if (result[7] == 0) {
				document.getElementById('LastDepTime8').value = '- -';
				} else { 
				document.getElementById('LastDepTime8').value = '~' + timeago.format(result[7]+'000');
			}
				
				 web3.eth.getAccounts(function (err, UserCount) {
					 
					
				      user = UserCount;
					 
					 
						if (result[8] == 0) {//status 0 
					 $("#winner8").hide();
					 $("#loser8").hide();
					 $("#WinnerJackpot8").hide();
							
							
				if (result[4][0] !== undefined && parseInt(result[4][0]) == parseInt(user[0])) {// COMIENZO CILINDRO 8
				
					
					$("#image0-8").hide();
					$("#image1-8").show();
			 document.getElementById('image1-8').style.animation = '2.5s rotate';
             document.getElementById('image1-8').style.transform="rotate(115deg)";
						 $("#button2-8").show();
					
					if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image1-8").hide();
					$("#image2-8").show();	
			 document.getElementById('image2-8').style.animation = '2.5s rotate5';
             document.getElementById('image2-8').style.transform="rotate(254deg)";
				 $("#button2-8").show();
						
						if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
				     $("#image2-8").hide();
					 $("#image16-8").show();	
			 document.getElementById('image16-8').style.animation = '2.5s rotate6';
             document.getElementById('image16-8').style.transform="rotate(360deg)";
				 $("#button2-8").show();
						
						
						
						
						
						} else  if (result[4][2] !== undefined) {   
					
					$("#image2-8").hide();
					 $("#image51-8").show();	
			 document.getElementById('image51-8').style.animation = '2.5s rotate6';
             document.getElementById('image51-8').style.transform="rotate(360deg)";
							
							
						
							
							
							
						}
						
			     
				} else if (result[4][1] !== undefined) {
					 $("#image1-8").hide();
					 $("#image38-8").show();
			 document.getElementById('image38-8').style.animation = '2.5s rotate5';
             document.getElementById('image38-8').style.transform="rotate(254deg)";
					
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-8").hide();
					 $("#image3-8").show();	
			 document.getElementById('image3-8').style.animation = '2.5s rotate6';
             document.getElementById('image3-8').style.transform="rotate(360deg)";
				 $("#button2-8").show();
						
						
				

			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image38-8").hide();
					 $("#image44-8").show();	
			 document.getElementById('image44-8').style.animation = '2.5s rotate6';
             document.getElementById('image44-8').style.transform="rotate(360deg)";
					
					
				
					
					
					
				}
							
							
							
				}
						
					
					
					
					} else if (result[4][0] !== undefined) {
						$("#image0-8").hide();
						$("#image25-8").show();
			 document.getElementById('image25-8').style.animation = '2.5s rotate';
             document.getElementById('image25-8').style.transform="rotate(115deg)";
						
						if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image25-8").hide();
					$("#image6-8").show();	
			 document.getElementById('image6-8').style.animation = '2.5s rotate5';
             document.getElementById('image6-8').style.transform="rotate(254deg)";
			 $("#button2-8").show();			
							if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 
					$("#image6-8").hide();
					$("#image7-8").show();	
			 document.getElementById('image7-8').style.animation = '2.5s rotate6';
             document.getElementById('image7-8').style.transform="rotate(360deg)";
			 $("#button2-8").show();		
								
				
								
								
			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image6-8").hide();
					 $("#image40-8").show();	
			 document.getElementById('image40-8').style.animation = '2.5s rotate6';
             document.getElementById('image40-8').style.transform="rotate(360deg)";
				 
					
					
					
					}
							
						} else if (result[4][1] !== undefined) {
					 $("#image25-8").hide();
					 $("#image26-8").show();
			 document.getElementById('image26-8').style.animation = '2.5s rotate5';
             document.getElementById('image26-8').style.transform="rotate(254deg)";
							
							
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
						
						
						$("#image26-8").hide();
					$("#image10-8").show();
			 document.getElementById('image10-8').style.animation = '2.5s rotate6';
             document.getElementById('image10-8').style.transform="rotate(360deg)";
			 $("#button2-8").show();
						
				
						
						
						
						
					} else if (result[4][2] !== undefined) {
					 $("#image26-8").hide();
					 $("#image27-8").show();
			 document.getElementById('image27-8').style.animation = '2.5s rotate6';
             document.getElementById('image27-8').style.transform="rotate(360deg)";
						
						
							
						
						
					
									 }
					
							
							
							
				}
						
						
					}
					
				
							
							
				
							
						
							
			
							
							
							
							
				
						}
				
			
				
				if (result[8] == 1) {//status 1
					 $("#image0-8").hide();
					 $("#button2-8").hide();
					 $("#button0-8").hide();
					
					
					 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image6-8").hide();
					 $("#image40-8").show();
					
					 document.getElementById('image40-8').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					$("#image2-8").hide();
					 $("#image16-8").show();
					
					 document.getElementById('image16-8').style.animation = '0.7s rotate4 linear infinite';	
							
					}
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) { 
						
					 $("#image38-8").hide();	
					 $("#image44-8").show();
					 
					 document.getElementById('image44-8').style.animation = '0.7s rotate4 linear infinite';
							
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					 $("#image6-8").hide();	
					 $("#image7-8").show();
					 
					 document.getElementById('image7-8').style.animation = '0.7s rotate4 linear infinite';
							
					}
					
					  
					
				 
					 
					 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image2-8").hide();
					 $("#image51-8").show();
					
					 document.getElementById('image51-8').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image26-8").hide();
					 $("#image27-8").show();
					
					 document.getElementById('image27-8').style.animation = '0.7s rotate4 linear infinite';
					} 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image26-8").hide();
					 $("#image10-8").show();
					
					 document.getElementById('image10-8').style.animation = '0.7s rotate4 linear infinite';
					} 
					 
					
					
					
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-8").hide();
					 $("#image3-8").show();
					
					 document.getElementById('image3-8').style.animation = '0.7s rotate4 linear infinite';
					}
					
					
					
					
					
					
					
					
					
					
					
				}
				if (result[8] == 2) {//status 2
					 $("#button0-8").hide();
					 $("#image0-8").hide();
					 $("#image3-8").hide();
					 $("#image27-8").hide();
					 $("#image40-8").hide();
					 $("#image16-8").hide();
					 $("#image44-8").hide();
					 $("#image7-8").hide();
					 $("#image51-8").hide();
					 $("#image10-8").hide();
					
					
					
					
					
				 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
					
				
					if (result[5] == 2 ){
						
						$("#image40-8").show();
						
					document.getElementById('image40-8').style.animation = 'rotate15 6s ease';
             document.getElementById('image40-8').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image40-8").show();
					 document.getElementById('image40-8').style.animation = 'rotate14 6s ease';
             document.getElementById('image40-8').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image40-8").show();
						document.getElementById('image40-8').style.animation = 'rotate16 6s ease';
             document.getElementById('image40-8').style.transform="rotate(360deg)";
			
					}
					$("#button1-8").show();	
						
						
						
					}
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image16-8").show();
						
					document.getElementById('image16-8').style.animation = 'rotate15 6s ease';
             document.getElementById('image16-8').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image16-8").show();
					 document.getElementById('image16-8').style.animation = 'rotate14 6s ease';
             document.getElementById('image16-8').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image16-8").show();
						 document.getElementById('image16-8').style.animation = 'rotate16 6s ease';
             document.getElementById('image16-8').style.transform="rotate(360deg)";
			
					}
					$("#button1-8").show();	
						
					}
					
						
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image44-8").show();
						
					document.getElementById('image44-8').style.animation = 'rotate15 6s ease';
             document.getElementById('image44-8').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image44-8").show();
					 document.getElementById('image44-8').style.animation = 'rotate14 6s ease';
             document.getElementById('image44-8').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image44-8").show();
						 document.getElementById('image44-8').style.animation = 'rotate16 6s ease';
             document.getElementById('image44-8').style.transform="rotate(360deg)";
			
					}
					$("#button1-8").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					
					if (result[5] == 2 ){
						
						$("#image7-8").show();
						
					document.getElementById('image7-8').style.animation = 'rotate15 6s ease';
             document.getElementById('image7-8').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image7-8").show();
					 document.getElementById('image7-8').style.animation = 'rotate14 6s ease';
             document.getElementById('image7-8').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image7-8").show();
						document.getElementById('image7-8').style.animation = 'rotate16 6s ease';
             document.getElementById('image7-8').style.transform="rotate(360deg)";
			
					}
					$("#button1-8").show();	
						
						
						
					}
					
					
		
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0]) ) {
						
					
					
					if (result[5] == 2 ){
						
						$("#image51-8").show();
						
					document.getElementById('image51-8').style.animation = 'rotate15 6s ease';
             document.getElementById('image51-8').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image51-8").show();
					 document.getElementById('image51-8').style.animation = 'rotate14 6s ease';
             document.getElementById('image51-8').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image51-8").show();
						document.getElementById('image51-8').style.animation = 'rotate16 6s ease';
             document.getElementById('image51-8').style.transform="rotate(360deg)";
			
					}
					$("#button1-8").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
			
					if (result[5] == 2 ){
						
						$("#image27-8").show();
						
					document.getElementById('image27-8').style.animation = 'rotate15 6s ease';
             document.getElementById('image27-8').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image27-8").show();
					 document.getElementById('image27-8').style.animation = 'rotate14 6s ease';
             document.getElementById('image27-8').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image27-8").show();
						 document.getElementById('image27-8').style.animation = 'rotate16 6s ease';
             document.getElementById('image27-8').style.transform="rotate(360deg)";
			
					}
					$("#button1-8").show();	
						
						
						
					}
					
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image10-8").show();
						
					document.getElementById('image10-8').style.animation = 'rotate15 6s ease';
             document.getElementById('image10-8').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image10-8").show();
					 document.getElementById('image10-8').style.animation = 'rotate14 6s ease';
             document.getElementById('image10-8').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image10-8").show();
						 document.getElementById('image10-8').style.animation = 'rotate16 6s ease';
             document.getElementById('image10-8').style.transform="rotate(360deg)";
			
					}
					$("#button1-8").show();	
						
						
						
					}
					
					
				
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image3-8").show();
						
					document.getElementById('image3-8').style.animation = 'rotate15 6s ease';
             document.getElementById('image3-8').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image3-8").show();
					 document.getElementById('image3-8').style.animation = 'rotate14 6s ease';
             document.getElementById('image3-8').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image3-8").show();
						document.getElementById('image3-8').style.animation = 'rotate16 6s ease';
             document.getElementById('image3-8').style.transform="rotate(360deg)";
			
					}
					$("#button1-8").show();	
						
						
						
					}
					
					
					
					
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y Ganador 
					if (!parseInt(user[0])) {


						setTimeout(function () { $("#imagenM8").show() }, 6000);

					}
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0) {
						
						 setTimeout(function(){ $("#loser8").show() }, 6000);
						 setTimeout(function () { $("#imagenM8").show() }, 6000);
						
					} else if (result[5] == 0 && (parseInt(result[4][1]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
					setTimeout(function(){ $("#winner8").show() }, 6000);
					setTimeout(function () { $("#imagenM8").show() }, 6000);
					}
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1) {
						
						 setTimeout(function(){ $("#loser8").show() }, 6000);
						 setTimeout(function () { $("#imagenM8").show() }, 6000);
						
					} else if (result[5] == 1 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner8").show() }, 6000);
						 setTimeout(function () { $("#imagenM8").show() }, 6000);
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2) {
						
					 setTimeout(function(){ $("#loser8").show() }, 6000);
					 setTimeout(function () { $("#imagenM8").show() }, 6000);
						
					} else if (result[5] == 2 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][1]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner8").show() }, 6000);
						 setTimeout(function () { $("#imagenM8").show() }, 6000);
					}
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y ganador del Jackpot 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot8").show() }, 6000);
						
					} 
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot8").show() }, 6000);
						
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpo8").show() }, 6000);
						
					} 
					
				
				}
					
					 
				    
					 
				if (result[8] == 0 && result[7] == 0) {//status 3
					 $("#button0-8").show();
                     $("#winner8").hide();
					 $("#imagenM8").hide();
					 $("#loser8").hide();
					 $("#WinnerJackpot8").hide();
					 $("#image0-8").hide();
					 $("#image3-8").hide();
					 $("#image10-8").hide();
					 $("#image27-8").hide();
					 $("#image51-8").hide();
					 $("#image44-8").hide();
					 $("#image7-8").hide();
					 $("#image40-8").hide();
					 $("#image16-8").hide();
					 $("#button1-8").hide();
					
					 $("#image0-8").show();
					
			 document.getElementById('image0-8').style.animation = '2.5s rotate4';
             document.getElementById('image0-8').style.transform="rotate(360deg)";
					
				}
					
				});	
			});	
					
// getCylinder 9
				
			donutContract.methods.getCylinder(9,result[4][9]).call(function (err, result) {
			
				if (result[7] == 0) {
				document.getElementById('LastDepTime9').value = '- -';
				} else { 
				document.getElementById('LastDepTime9').value = '~' + timeago.format(result[7]+'000');
			}
				
				 web3.eth.getAccounts(function (err, UserCount) {
					 
					
				      user = UserCount;
					 
					 
						if (result[8] == 0) {//status 0 
					 $("#winner9").hide();
					 $("#loser9").hide();
					 $("#WinnerJackpot9").hide();
							
							
				if (result[4][0] !== undefined && parseInt(result[4][0]) == parseInt(user[0])) {// COMIENZO CILINDRO 9
				
					
					$("#image0-9").hide();
					$("#image1-9").show();
			 document.getElementById('image1-9').style.animation = '2.5s rotate';
             document.getElementById('image1-9').style.transform="rotate(115deg)";
						 $("#button2-9").show();
					
					if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image1-9").hide();
					$("#image2-9").show();	
			 document.getElementById('image2-9').style.animation = '2.5s rotate5';
             document.getElementById('image2-9').style.transform="rotate(254deg)";
				 $("#button2-9").show();
						
						if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
				     $("#image2-9").hide();
					 $("#image16-9").show();	
			 document.getElementById('image16-9').style.animation = '2.5s rotate6';
             document.getElementById('image16-9').style.transform="rotate(360deg)";
				 $("#button2-9").show();
						
						
						
						
						
						} else  if (result[4][2] !== undefined) {   
					
					$("#image2-9").hide();
					 $("#image51-9").show();	
			 document.getElementById('image51-9').style.animation = '2.5s rotate6';
             document.getElementById('image51-9').style.transform="rotate(360deg)";
							
							
						
							
							
							
						}
						
			     
				} else if (result[4][1] !== undefined) {
					 $("#image1-9").hide();
					 $("#image38-9").show();
			 document.getElementById('image38-9').style.animation = '2.5s rotate5';
             document.getElementById('image38-9').style.transform="rotate(254deg)";
					
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-9").hide();
					 $("#image3-9").show();	
			 document.getElementById('image3-9').style.animation = '2.5s rotate6';
             document.getElementById('image3-9').style.transform="rotate(360deg)";
				 $("#button2-9").show();
						
						
				

			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image38-9").hide();
					 $("#image44-9").show();	
			 document.getElementById('image44-9').style.animation = '2.5s rotate6';
             document.getElementById('image44-9').style.transform="rotate(360deg)";
					
					
				
					
					
					
				}
							
							
							
				}
						
					
					
					
					} else if (result[4][0] !== undefined) {
						$("#image0-9").hide();
						$("#image25-9").show();
			 document.getElementById('image25-9').style.animation = '2.5s rotate';
             document.getElementById('image25-9').style.transform="rotate(115deg)";
						
						if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image25-9").hide();
					$("#image6-9").show();	
			 document.getElementById('image6-9').style.animation = '2.5s rotate5';
             document.getElementById('image6-9').style.transform="rotate(254deg)";
			 $("#button2-9").show();			
							if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 
					$("#image6-9").hide();
					$("#image7-9").show();	
			 document.getElementById('image7-9').style.animation = '2.5s rotate6';
             document.getElementById('image7-9').style.transform="rotate(360deg)";
			 $("#button2-9").show();		
								
				
								
								
			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image6-9").hide();
					 $("#image40-9").show();	
			 document.getElementById('image40-9').style.animation = '2.5s rotate6';
             document.getElementById('image40-9').style.transform="rotate(360deg)";
				 
					
					
					
					}
							
						} else if (result[4][1] !== undefined) {
					 $("#image25-9").hide();
					 $("#image26-9").show();
			 document.getElementById('image26-9').style.animation = '2.5s rotate5';
             document.getElementById('image26-9').style.transform="rotate(254deg)";
							
							
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
						
						
						$("#image26-9").hide();
					$("#image10-9").show();
			 document.getElementById('image10-9').style.animation = '2.5s rotate6';
             document.getElementById('image10-9').style.transform="rotate(360deg)";
			 $("#button2-9").show();
						
				
						
						
						
						
					} else if (result[4][2] !== undefined) {
					 $("#image26-9").hide();
					 $("#image27-9").show();
			 document.getElementById('image27-9').style.animation = '2.5s rotate6';
             document.getElementById('image27-9').style.transform="rotate(360deg)";
						
						
							
						
						
					
									 }
					
							
							
							
				}
						
						
					}
					
				
							
							
				
							
						
							
			
							
							
							
							
				
						}
				
			
				
				if (result[8] == 1) {//status 1
					 $("#image0-9").hide();
					 $("#button2-9").hide();
					 $("#button0-9").hide();
					
					
					 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image6-9").hide();
					 $("#image40-9").show();
					
					 document.getElementById('image40-9').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					$("#image2-9").hide();
					 $("#image16-9").show();
					
					 document.getElementById('image16-9').style.animation = '0.7s rotate4 linear infinite';	
							
					}
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) { 
						
					 $("#image38-9").hide();	
					 $("#image44-9").show();
					 
					 document.getElementById('image44-9').style.animation = '0.7s rotate4 linear infinite';
							
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					 $("#image6-9").hide();	
					 $("#image7-9").show();
					 
					 document.getElementById('image7-9').style.animation = '0.7s rotate4 linear infinite';
							
					}
					
					  
					
				 
					 
					 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image2-9").hide();
					 $("#image51-9").show();
					
					 document.getElementById('image51-9').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image26-9").hide();
					 $("#image27-9").show();
					
					 document.getElementById('image27-9').style.animation = '0.7s rotate4 linear infinite';
					} 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image26-9").hide();
					 $("#image10-9").show();
					
					 document.getElementById('image10-9').style.animation = '0.7s rotate4 linear infinite';
					} 
					 
					
					
					
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-9").hide();
					 $("#image3-9").show();
					
					 document.getElementById('image3-9').style.animation = '0.7s rotate4 linear infinite';
					}
					
					
					
					
					
					
					
					
					
					
					
				}
				if (result[8] == 2) {//status 2
					 $("#button0-9").hide();
					 $("#image0-9").hide();
					 $("#image3-9").hide();
					 $("#image27-9").hide();
					 $("#image40-9").hide();
					 $("#image16-9").hide();
					 $("#image44-9").hide();
					 $("#image7-9").hide();
					 $("#image51-9").hide();
					 $("#image10-9").hide();
					
					
					
					
					
				 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
					
				
					if (result[5] == 2 ){
						
						$("#image40-9").show();
						
					document.getElementById('image40-9').style.animation = 'rotate15 6s ease';
             document.getElementById('image40-9').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image40-9").show();
					 document.getElementById('image40-9').style.animation = 'rotate14 6s ease';
             document.getElementById('image40-9').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image40-9").show();
						document.getElementById('image40-9').style.animation = 'rotate16 6s ease';
             document.getElementById('image40-9').style.transform="rotate(360deg)";
			
					}
					$("#button1-9").show();	
						
						
						
					}
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image16-9").show();
						
					document.getElementById('image16-9').style.animation = 'rotate15 6s ease';
             document.getElementById('image16-9').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image16-9").show();
					 document.getElementById('image16-9').style.animation = 'rotate14 6s ease';
             document.getElementById('image16-9').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image16-9").show();
						 document.getElementById('image16-9').style.animation = 'rotate16 6s ease';
             document.getElementById('image16-9').style.transform="rotate(360deg)";
			
					}
					$("#button1-9").show();	
						
					}
					
						
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image44-9").show();
						
					document.getElementById('image44-9').style.animation = 'rotate15 6s ease';
             document.getElementById('image44-9').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image44-9").show();
					 document.getElementById('image44-9').style.animation = 'rotate14 6s ease';
             document.getElementById('image44-9').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image44-9").show();
						 document.getElementById('image44-9').style.animation = 'rotate16 6s ease';
             document.getElementById('image44-9').style.transform="rotate(360deg)";
			
					}
					$("#button1-9").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					
					if (result[5] == 2 ){
						
						$("#image7-9").show();
						
					document.getElementById('image7-9').style.animation = 'rotate15 6s ease';
             document.getElementById('image7-9').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image7-9").show();
					 document.getElementById('image7-9').style.animation = 'rotate14 6s ease';
             document.getElementById('image7-9').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image7-9").show();
						document.getElementById('image7-9').style.animation = 'rotate16 6s ease';
             document.getElementById('image7-9').style.transform="rotate(360deg)";
			
					}
					$("#button1-9").show();	
						
						
						
					}
					
					
		
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0]) ) {
						
					
					
					if (result[5] == 2 ){
						
						$("#image51-9").show();
						
					document.getElementById('image51-9').style.animation = 'rotate15 6s ease';
             document.getElementById('image51-9').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image51-9").show();
					 document.getElementById('image51-9').style.animation = 'rotate14 6s ease';
             document.getElementById('image51-9').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image51-9").show();
						document.getElementById('image51-9').style.animation = 'rotate16 6s ease';
             document.getElementById('image51-9').style.transform="rotate(360deg)";
			
					}
					$("#button1-9").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
			
					if (result[5] == 2 ){
						
						$("#image27-9").show();
						
					document.getElementById('image27-9').style.animation = 'rotate15 6s ease';
             document.getElementById('image27-9').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image27-9").show();
					 document.getElementById('image27-9').style.animation = 'rotate14 6s ease';
             document.getElementById('image27-9').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image27-9").show();
						 document.getElementById('image27-9').style.animation = 'rotate16 6s ease';
             document.getElementById('image27-9').style.transform="rotate(360deg)";
			
					}
					$("#button1-9").show();	
						
						
						
					}
					
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image10-9").show();
						
					document.getElementById('image10-9').style.animation = 'rotate15 6s ease';
             document.getElementById('image10-9').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image10-9").show();
					 document.getElementById('image10-9').style.animation = 'rotate14 6s ease';
             document.getElementById('image10-9').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image10-9").show();
						 document.getElementById('image10-9').style.animation = 'rotate16 6s ease';
             document.getElementById('image10-9').style.transform="rotate(360deg)";
			
					}
					$("#button1-9").show();	
						
						
						
					}
					
					
				
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image3-9").show();
						
					document.getElementById('image3-9').style.animation = 'rotate15 6s ease';
             document.getElementById('image3-9').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image3-9").show();
					 document.getElementById('image3-9').style.animation = 'rotate14 6s ease';
             document.getElementById('image3-9').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image3-9").show();
						document.getElementById('image3-9').style.animation = 'rotate16 6s ease';
             document.getElementById('image3-9').style.transform="rotate(360deg)";
			
					}
					$("#button1-9").show();	
						
						
						
					}
					
					
					
					
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y Ganador 
					if (!parseInt(user[0])) {


						setTimeout(function () { $("#imagenM9").show() }, 6000);

					}
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0) {
						
						 setTimeout(function(){ $("#loser9").show() }, 6000);
						 setTimeout(function () { $("#imagenM9").show() }, 6000);
						
					} else if (result[5] == 0 && (parseInt(result[4][1]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
					setTimeout(function(){ $("#winner9").show() }, 6000);
					setTimeout(function () { $("#imagenM9").show() }, 6000);
					}
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1) {
						
						 setTimeout(function(){ $("#loser9").show() }, 6000);
						 setTimeout(function () { $("#imagenM9").show() }, 6000);
						
					} else if (result[5] == 1 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner9").show() }, 6000);
						 setTimeout(function () { $("#imagenM9").show() }, 6000);
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2) {
						
					 setTimeout(function(){ $("#loser9").show() }, 6000);
					 setTimeout(function () { $("#imagenM9").show() }, 6000);
						
					} else if (result[5] == 2 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][1]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner9").show() }, 6000);
						 setTimeout(function () { $("#imagenM9").show() }, 6000);
					}
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y ganador del Jackpot 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot9").show() }, 6000);
						
					} 
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot9").show() }, 6000);
						
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpo9").show() }, 6000);
						
					} 
					
				
				}
					
					 
				    
					 
				if (result[8] == 0 && result[7] == 0) {//status 3
					 $("#button0-9").show();
                     $("#winner9").hide();
					 $("#imagenM9").hide();
					 $("#loser9").hide();
					 $("#WinnerJackpot9").hide();
					 $("#image0-9").hide();
					 $("#image3-9").hide();
					 $("#image10-9").hide();
					 $("#image27-9").hide();
					 $("#image51-9").hide();
					 $("#image44-9").hide();
					 $("#image7-9").hide();
					 $("#image40-9").hide();
					 $("#image16-9").hide();
					 $("#button1-9").hide();
					
					 $("#image0-9").show();
					
			 document.getElementById('image0-9').style.animation = '2.5s rotate4';
             document.getElementById('image0-9').style.transform="rotate(360deg)";
					
				}
					
				});	
			});			
					
// getCylinder 10
				
			donutContract.methods.getCylinder(10,result[4][10]).call(function (err, result) {
			
				if (result[7] == 0) {
				document.getElementById('LastDepTime10').value = '- -';
				} else { 
				document.getElementById('LastDepTime10').value = '~' + timeago.format(result[7]+'000');
			}
				
				 web3.eth.getAccounts(function (err, UserCount) {
					 
					
				      user = UserCount;
					 
					 
						if (result[8] == 0) {//status 0 
					 $("#winner10").hide();
					 $("#loser10").hide();
					 $("#WinnerJackpot10").hide();
							
							
				if (result[4][0] !== undefined && parseInt(result[4][0]) == parseInt(user[0])) {// COMIENZO CILINDRO 10
				
					
					$("#image0-10").hide();
					$("#image1-10").show();
			 document.getElementById('image1-10').style.animation = '2.5s rotate';
             document.getElementById('image1-10').style.transform="rotate(115deg)";
						 $("#button2-10").show();
					
					if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image1-10").hide();
					$("#image2-10").show();	
			 document.getElementById('image2-10').style.animation = '2.5s rotate5';
             document.getElementById('image2-10').style.transform="rotate(254deg)";
				 $("#button2-10").show();
						
						if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
				     $("#image2-10").hide();
					 $("#image16-10").show();	
			 document.getElementById('image16-10').style.animation = '2.5s rotate6';
             document.getElementById('image16-10').style.transform="rotate(360deg)";
				 $("#button2-10").show();
						
						
						
						
						
						} else  if (result[4][2] !== undefined) {   
					
					$("#image2-10").hide();
					 $("#image51-10").show();	
			 document.getElementById('image51-10').style.animation = '2.5s rotate6';
             document.getElementById('image51-10').style.transform="rotate(360deg)";
							
							
						
							
							
							
						}
						
			     
				} else if (result[4][1] !== undefined) {
					 $("#image1-10").hide();
					 $("#image38-10").show();
			 document.getElementById('image38-10').style.animation = '2.5s rotate5';
             document.getElementById('image38-10').style.transform="rotate(254deg)";
					
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-10").hide();
					 $("#image3-10").show();	
			 document.getElementById('image3-10').style.animation = '2.5s rotate6';
             document.getElementById('image3-10').style.transform="rotate(360deg)";
				 $("#button2-10").show();
						
						
				

			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image38-10").hide();
					 $("#image44-10").show();	
			 document.getElementById('image44-10').style.animation = '2.5s rotate6';
             document.getElementById('image44-10').style.transform="rotate(360deg)";
					
					
				
					
					
					
				}
							
							
							
				}
						
					
					
					
					} else if (result[4][0] !== undefined) {
						$("#image0-10").hide();
						$("#image25-10").show();
			 document.getElementById('image25-10').style.animation = '2.5s rotate';
             document.getElementById('image25-10').style.transform="rotate(115deg)";
						
						if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image25-10").hide();
					$("#image6-10").show();	
			 document.getElementById('image6-10').style.animation = '2.5s rotate5';
             document.getElementById('image6-10').style.transform="rotate(254deg)";
			 $("#button2-10").show();			
							if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 
					$("#image6-10").hide();
					$("#image7-10").show();	
			 document.getElementById('image7-10').style.animation = '2.5s rotate6';
             document.getElementById('image7-10').style.transform="rotate(360deg)";
			 $("#button2-10").show();		
								
				
								
								
			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image6-10").hide();
					 $("#image40-10").show();	
			 document.getElementById('image40-10').style.animation = '2.5s rotate6';
             document.getElementById('image40-10').style.transform="rotate(360deg)";
				 
					
					
					
					}
							
						} else if (result[4][1] !== undefined) {
					 $("#image25-10").hide();
					 $("#image26-10").show();
			 document.getElementById('image26-10').style.animation = '2.5s rotate5';
             document.getElementById('image26-10').style.transform="rotate(254deg)";
							
							
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
						
						
						$("#image26-10").hide();
					$("#image10-10").show();
			 document.getElementById('image10-10').style.animation = '2.5s rotate6';
             document.getElementById('image10-10').style.transform="rotate(360deg)";
			 $("#button2-10").show();
						
				
						
						
						
						
					} else if (result[4][2] !== undefined) {
					 $("#image26-10").hide();
					 $("#image27-10").show();
			 document.getElementById('image27-10').style.animation = '2.5s rotate6';
             document.getElementById('image27-10').style.transform="rotate(360deg)";
						
						
							
						
						
					
									 }
					
							
							
							
				}
						
						
					}
					
				
							
							
				
							
						
							
			
							
							
							
							
				
						}
				
			
				
				if (result[8] == 1) {//status 1
					 $("#image0-10").hide();
					 $("#button2-10").hide();
					 $("#button0-10").hide();
					
					
					 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image6-10").hide();
					 $("#image40-10").show();
					
					 document.getElementById('image40-10').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					$("#image2-10").hide();
					 $("#image16-10").show();
					
					 document.getElementById('image16-10').style.animation = '0.7s rotate4 linear infinite';	
							
					}
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) { 
						
					 $("#image38-10").hide();	
					 $("#image44-10").show();
					 
					 document.getElementById('image44-10').style.animation = '0.7s rotate4 linear infinite';
							
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					 $("#image6-10").hide();	
					 $("#image7-10").show();
					 
					 document.getElementById('image7-10').style.animation = '0.7s rotate4 linear infinite';
							
					}
					
					  
					
				 
					 
					 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image2-10").hide();
					 $("#image51-10").show();
					
					 document.getElementById('image51-10').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image26-10").hide();
					 $("#image27-10").show();
					
					 document.getElementById('image27-10').style.animation = '0.7s rotate4 linear infinite';
					} 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image26-10").hide();
					 $("#image10-10").show();
					
					 document.getElementById('image10-10').style.animation = '0.7s rotate4 linear infinite';
					} 
					 
					
					
					
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-10").hide();
					 $("#image3-10").show();
					
					 document.getElementById('image3-10').style.animation = '0.7s rotate4 linear infinite';
					}
					
					
					
					
					
					
					
					
					
					
					
				}
				if (result[8] == 2) {//status 2
					 $("#button0-10").hide();
					 $("#image0-10").hide();
					 $("#image3-10").hide();
					 $("#image27-10").hide();
					 $("#image40-10").hide();
					 $("#image16-10").hide();
					 $("#image44-10").hide();
					 $("#image7-10").hide();
					 $("#image51-10").hide();
					 $("#image10-10").hide();
					
					
					
					
					
				 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
					
				
					if (result[5] == 2 ){
						
						$("#image40-10").show();
						
					document.getElementById('image40-10').style.animation = 'rotate15 6s ease';
             document.getElementById('image40-10').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image40-10").show();
					 document.getElementById('image40-10').style.animation = 'rotate14 6s ease';
             document.getElementById('image40-10').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image40-10").show();
						document.getElementById('image40-10').style.animation = 'rotate16 6s ease';
             document.getElementById('image40-10').style.transform="rotate(360deg)";
			
					}
					$("#button1-10").show();	
						
						
						
					}
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image16-10").show();
						
					document.getElementById('image16-10').style.animation = 'rotate15 6s ease';
             document.getElementById('image16-10').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image16-10").show();
					 document.getElementById('image16-10').style.animation = 'rotate14 6s ease';
             document.getElementById('image16-10').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image16-10").show();
						 document.getElementById('image16-10').style.animation = 'rotate16 6s ease';
             document.getElementById('image16-10').style.transform="rotate(360deg)";
			
					}
					$("#button1-10").show();	
						
					}
					
						
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image44-10").show();
						
					document.getElementById('image44-10').style.animation = 'rotate15 6s ease';
             document.getElementById('image44-10').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image44-10").show();
					 document.getElementById('image44-10').style.animation = 'rotate14 6s ease';
             document.getElementById('image44-10').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image44-10").show();
						 document.getElementById('image44-10').style.animation = 'rotate16 6s ease';
             document.getElementById('image44-10').style.transform="rotate(360deg)";
			
					}
					$("#button1-10").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					
					if (result[5] == 2 ){
						
						$("#image7-10").show();
						
					document.getElementById('image7-10').style.animation = 'rotate15 6s ease';
             document.getElementById('image7-10').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image7-10").show();
					 document.getElementById('image7-10').style.animation = 'rotate14 6s ease';
             document.getElementById('image7-10').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image7-10").show();
						document.getElementById('image7-10').style.animation = 'rotate16 6s ease';
             document.getElementById('image7-10').style.transform="rotate(360deg)";
			
					}
					$("#button1-10").show();	
						
						
						
					}
					
					
		
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0]) ) {
						
					
					
					if (result[5] == 2 ){
						
						$("#image51-10").show();
						
					document.getElementById('image51-10').style.animation = 'rotate15 6s ease';
             document.getElementById('image51-10').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image51-10").show();
					 document.getElementById('image51-10').style.animation = 'rotate14 6s ease';
             document.getElementById('image51-10').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image51-10").show();
						document.getElementById('image51-10').style.animation = 'rotate16 6s ease';
             document.getElementById('image51-10').style.transform="rotate(360deg)";
			
					}
					$("#button1-10").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
			
					if (result[5] == 2 ){
						
						$("#image27-10").show();
						
					document.getElementById('image27-10').style.animation = 'rotate15 6s ease';
             document.getElementById('image27-10').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image27-10").show();
					 document.getElementById('image27-10').style.animation = 'rotate14 6s ease';
             document.getElementById('image27-10').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image27-10").show();
						 document.getElementById('image27-10').style.animation = 'rotate16 6s ease';
             document.getElementById('image27-10').style.transform="rotate(360deg)";
			
					}
					$("#button1-10").show();	
						
						
						
					}
					
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image10-10").show();
						
					document.getElementById('image10-10').style.animation = 'rotate15 6s ease';
             document.getElementById('image10-10').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image10-10").show();
					 document.getElementById('image10-10').style.animation = 'rotate14 6s ease';
             document.getElementById('image10-10').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image10-10").show();
						 document.getElementById('image10-10').style.animation = 'rotate16 6s ease';
             document.getElementById('image10-10').style.transform="rotate(360deg)";
			
					}
					$("#button1-10").show();	
						
						
						
					}
					
					
				
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image3-10").show();
						
					document.getElementById('image3-10').style.animation = 'rotate15 6s ease';
             document.getElementById('image3-10').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image3-10").show();
					 document.getElementById('image3-10').style.animation = 'rotate14 6s ease';
             document.getElementById('image3-10').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image3-10").show();
						document.getElementById('image3-10').style.animation = 'rotate16 6s ease';
             document.getElementById('image3-10').style.transform="rotate(360deg)";
			
					}
					$("#button1-10").show();	
						
						
						
					}
					
					
					
					
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y Ganador 
					if (!parseInt(user[0])) {


						setTimeout(function () { $("#imagenM10").show() }, 6000);

					}
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0) {
						
						 setTimeout(function(){ $("#loser10").show() }, 6000);
						 setTimeout(function () { $("#imagenM10").show() }, 6000);
						
					} else if (result[5] == 0 && (parseInt(result[4][1]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
					setTimeout(function(){ $("#winner10").show() }, 6000);
					setTimeout(function () { $("#imagenM10").show() }, 6000);
					}
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1) {
						
						 setTimeout(function(){ $("#loser10").show() }, 6000);
						 setTimeout(function () { $("#imagenM10").show() }, 6000);
						
					} else if (result[5] == 1 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner10").show() }, 6000);
						 setTimeout(function () { $("#imagenM10").show() }, 6000);
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2) {
						
					 setTimeout(function(){ $("#loser10").show() }, 6000);
					 setTimeout(function () { $("#imagenM10").show() }, 6000);
						
					} else if (result[5] == 2 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][1]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner10").show() }, 6000);
						 setTimeout(function () { $("#imagenM10").show() }, 6000);
					}
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y ganador del Jackpot 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot10").show() }, 6000);
						
					} 
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot10").show() }, 6000);
						
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpo10").show() }, 6000);
						
					} 
					
				
				}
					
					 
				    
					 
				if (result[8] == 0 && result[7] == 0) {//status 3
					 $("#button0-10").show();
                     $("#winner10").hide();
					 $("#imagenM10").hide();
					 $("#loser10").hide();
					 $("#WinnerJackpot10").hide();
					 $("#image0-10").hide();
					 $("#image3-10").hide();
					 $("#image10-10").hide();
					 $("#image27-10").hide();
					 $("#image51-10").hide();
					 $("#image44-10").hide();
					 $("#image7-10").hide();
					 $("#image40-10").hide();
					 $("#image16-10").hide();
					 $("#button1-10").hide();
					
					 $("#image0-10").show();
					
			 document.getElementById('image0-10').style.animation = '2.5s rotate4';
             document.getElementById('image0-10').style.transform="rotate(360deg)";
					
				}
					
				});	
			});			
					
// getCylinder 11
				
			donutContract.methods.getCylinder(11,result[4][11]).call(function (err, result) {
			
				if (result[7] == 0) {
				document.getElementById('LastDepTime11').value = '- -';
				} else { 
				document.getElementById('LastDepTime11').value = '~' + timeago.format(result[7]+'000');
			}
				
				 web3.eth.getAccounts(function (err, UserCount) {
					 
					
				      user = UserCount;
					 
					 
						if (result[8] == 0) {//status 0 
					 $("#winner11").hide();
					 $("#loser11").hide();
					 $("#WinnerJackpot11").hide();
							
							
				if (result[4][0] !== undefined && parseInt(result[4][0]) == parseInt(user[0])) {// COMIENZO CILINDRO 11
				
					
					$("#image0-11").hide();
					$("#image1-11").show();
			 document.getElementById('image1-11').style.animation = '2.5s rotate';
             document.getElementById('image1-11').style.transform="rotate(115deg)";
						 $("#button2-11").show();
					
					if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image1-11").hide();
					$("#image2-11").show();	
			 document.getElementById('image2-11').style.animation = '2.5s rotate5';
             document.getElementById('image2-11').style.transform="rotate(254deg)";
				 $("#button2-11").show();
						
						if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
				     $("#image2-11").hide();
					 $("#image16-11").show();	
			 document.getElementById('image16-11').style.animation = '2.5s rotate6';
             document.getElementById('image16-11').style.transform="rotate(360deg)";
				 $("#button2-11").show();
						
						
						
						
						
						} else  if (result[4][2] !== undefined) {   
					
					$("#image2-11").hide();
					 $("#image51-11").show();	
			 document.getElementById('image51-11').style.animation = '2.5s rotate6';
             document.getElementById('image51-11').style.transform="rotate(360deg)";
							
							
						
							
							
							
						}
						
			     
				} else if (result[4][1] !== undefined) {
					 $("#image1-11").hide();
					 $("#image38-11").show();
			 document.getElementById('image38-11').style.animation = '2.5s rotate5';
             document.getElementById('image38-11').style.transform="rotate(254deg)";
					
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-11").hide();
					 $("#image3-11").show();	
			 document.getElementById('image3-11').style.animation = '2.5s rotate6';
             document.getElementById('image3-11').style.transform="rotate(360deg)";
				 $("#button2-11").show();
						
						
				

			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image38-11").hide();
					 $("#image44-11").show();	
			 document.getElementById('image44-11').style.animation = '2.5s rotate6';
             document.getElementById('image44-11').style.transform="rotate(360deg)";
					
					
				
					
					
					
				}
							
							
							
				}
						
					
					
					
					} else if (result[4][0] !== undefined) {
						$("#image0-11").hide();
						$("#image25-11").show();
			 document.getElementById('image25-11').style.animation = '2.5s rotate';
             document.getElementById('image25-11').style.transform="rotate(115deg)";
						
						if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image25-11").hide();
					$("#image6-11").show();	
			 document.getElementById('image6-11').style.animation = '2.5s rotate5';
             document.getElementById('image6-11').style.transform="rotate(254deg)";
			 $("#button2-11").show();			
							if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 
					$("#image6-11").hide();
					$("#image7-11").show();	
			 document.getElementById('image7-11').style.animation = '2.5s rotate6';
             document.getElementById('image7-11').style.transform="rotate(360deg)";
			 $("#button2-11").show();		
								
				
								
								
			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image6-11").hide();
					 $("#image40-11").show();	
			 document.getElementById('image40-11').style.animation = '2.5s rotate6';
             document.getElementById('image40-11').style.transform="rotate(360deg)";
				 
					
					
					
					}
							
						} else if (result[4][1] !== undefined) {
					 $("#image25-11").hide();
					 $("#image26-11").show();
			 document.getElementById('image26-11').style.animation = '2.5s rotate5';
             document.getElementById('image26-11').style.transform="rotate(254deg)";
							
							
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
						
						
						$("#image26-11").hide();
					$("#image10-11").show();
			 document.getElementById('image10-11').style.animation = '2.5s rotate6';
             document.getElementById('image10-11').style.transform="rotate(360deg)";
			 $("#button2-11").show();
						
				
						
						
						
						
					} else if (result[4][2] !== undefined) {
					 $("#image26-11").hide();
					 $("#image27-11").show();
			 document.getElementById('image27-11').style.animation = '2.5s rotate6';
             document.getElementById('image27-11').style.transform="rotate(360deg)";
						
						
							
						
						
					
									 }
					
							
							
							
				}
						
						
					}
					
				
							
							
				
							
						
							
			
							
							
							
							
				
						}
				
			
				
				if (result[8] == 1) {//status 1
					 $("#image0-11").hide();
					 $("#button2-11").hide();
					 $("#button0-11").hide();
					
					
					 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image6-11").hide();
					 $("#image40-11").show();
					
					 document.getElementById('image40-11').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					$("#image2-11").hide();
					 $("#image16-11").show();
					
					 document.getElementById('image16-11').style.animation = '0.7s rotate4 linear infinite';	
							
					}
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) { 
						
					 $("#image38-11").hide();	
					 $("#image44-11").show();
					 
					 document.getElementById('image44-11').style.animation = '0.7s rotate4 linear infinite';
							
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					 $("#image6-11").hide();	
					 $("#image7-11").show();
					 
					 document.getElementById('image7-11').style.animation = '0.7s rotate4 linear infinite';
							
					}
					
					  
					
				 
					 
					 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image2-11").hide();
					 $("#image51-11").show();
					
					 document.getElementById('image51-11').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image26-11").hide();
					 $("#image27-11").show();
					
					 document.getElementById('image27-11').style.animation = '0.7s rotate4 linear infinite';
					} 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image26-11").hide();
					 $("#image10-11").show();
					
					 document.getElementById('image10-11').style.animation = '0.7s rotate4 linear infinite';
					} 
					 
					
					
					
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-11").hide();
					 $("#image3-11").show();
					
					 document.getElementById('image3-11').style.animation = '0.7s rotate4 linear infinite';
					}
					
					
					
					
					
					
					
					
					
					
					
				}
				if (result[8] == 2) {//status 2
					 $("#button0-11").hide();
					 $("#image0-11").hide();
					 $("#image3-11").hide();
					 $("#image27-11").hide();
					 $("#image40-11").hide();
					 $("#image16-11").hide();
					 $("#image44-11").hide();
					 $("#image7-11").hide();
					 $("#image51-11").hide();
					 $("#image10-11").hide();
					
					
					
					
					
				 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
					
				
					if (result[5] == 2 ){
						
						$("#image40-11").show();
						
					document.getElementById('image40-11').style.animation = 'rotate15 6s ease';
             document.getElementById('image40-11').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image40-11").show();
					 document.getElementById('image40-11').style.animation = 'rotate14 6s ease';
             document.getElementById('image40-11').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image40-11").show();
						document.getElementById('image40-11').style.animation = 'rotate16 6s ease';
             document.getElementById('image40-11').style.transform="rotate(360deg)";
			
					}
					$("#button1-11").show();	
						
						
						
					}
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image16-11").show();
						
					document.getElementById('image16-11').style.animation = 'rotate15 6s ease';
             document.getElementById('image16-11').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image16-11").show();
					 document.getElementById('image16-11').style.animation = 'rotate14 6s ease';
             document.getElementById('image16-11').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image16-11").show();
						 document.getElementById('image16-11').style.animation = 'rotate16 6s ease';
             document.getElementById('image16-11').style.transform="rotate(360deg)";
			
					}
					$("#button1-11").show();	
						
					}
					
						
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image44-11").show();
						
					document.getElementById('image44-11').style.animation = 'rotate15 6s ease';
             document.getElementById('image44-11').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image44-11").show();
					 document.getElementById('image44-11').style.animation = 'rotate14 6s ease';
             document.getElementById('image44-11').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image44-11").show();
						 document.getElementById('image44-11').style.animation = 'rotate16 6s ease';
             document.getElementById('image44-11').style.transform="rotate(360deg)";
			
					}
					$("#button1-11").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					
					if (result[5] == 2 ){
						
						$("#image7-11").show();
						
					document.getElementById('image7-11').style.animation = 'rotate15 6s ease';
             document.getElementById('image7-11').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image7-11").show();
					 document.getElementById('image7-11').style.animation = 'rotate14 6s ease';
             document.getElementById('image7-11').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image7-11").show();
						document.getElementById('image7-11').style.animation = 'rotate16 6s ease';
             document.getElementById('image7-11').style.transform="rotate(360deg)";
			
					}
					$("#button1-11").show();	
						
						
						
					}
					
					
		
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0]) ) {
						
					
					
					if (result[5] == 2 ){
						
						$("#image51-11").show();
						
					document.getElementById('image51-11').style.animation = 'rotate15 6s ease';
             document.getElementById('image51-11').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image51-11").show();
					 document.getElementById('image51-11').style.animation = 'rotate14 6s ease';
             document.getElementById('image51-11').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image51-11").show();
						document.getElementById('image51-11').style.animation = 'rotate16 6s ease';
             document.getElementById('image51-11').style.transform="rotate(360deg)";
			
					}
					$("#button1-11").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
			
					if (result[5] == 2 ){
						
						$("#image27-11").show();
						
					document.getElementById('image27-11').style.animation = 'rotate15 6s ease';
             document.getElementById('image27-11').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image27-11").show();
					 document.getElementById('image27-11').style.animation = 'rotate14 6s ease';
             document.getElementById('image27-11').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image27-11").show();
						 document.getElementById('image27-11').style.animation = 'rotate16 6s ease';
             document.getElementById('image27-11').style.transform="rotate(360deg)";
			
					}
					$("#button1-11").show();	
						
						
						
					}
					
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image10-11").show();
						
					document.getElementById('image10-11').style.animation = 'rotate15 6s ease';
             document.getElementById('image10-11').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image10-11").show();
					 document.getElementById('image10-11').style.animation = 'rotate14 6s ease';
             document.getElementById('image10-11').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image10-11").show();
						 document.getElementById('image10-11').style.animation = 'rotate16 6s ease';
             document.getElementById('image10-11').style.transform="rotate(360deg)";
			
					}
					$("#button1-11").show();	
						
						
						
					}
					
					
				
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image3-11").show();
						
					document.getElementById('image3-11').style.animation = 'rotate15 6s ease';
             document.getElementById('image3-11').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image3-11").show();
					 document.getElementById('image3-11').style.animation = 'rotate14 6s ease';
             document.getElementById('image3-11').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image3-11").show();
						document.getElementById('image3-11').style.animation = 'rotate16 6s ease';
             document.getElementById('image3-11').style.transform="rotate(360deg)";
			
					}
					$("#button1-11").show();	
						
						
						
					}
					
					
					
					
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y Ganador 
					if (!parseInt(user[0])) {


						setTimeout(function () { $("#imagenM11").show() }, 6000);

					}
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0) {
						
						 setTimeout(function(){ $("#loser11").show() }, 6000);
						 setTimeout(function () { $("#imagenM11").show() }, 6000);
						
					} else if (result[5] == 0 && (parseInt(result[4][1]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
					setTimeout(function(){ $("#winner11").show() }, 6000);
					setTimeout(function () { $("#imagenM11").show() }, 6000);
					}
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1) {
						
						 setTimeout(function(){ $("#loser11").show() }, 6000);
						 setTimeout(function () { $("#imagenM11").show() }, 6000);
						
					} else if (result[5] == 1 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner11").show() }, 6000);
						 setTimeout(function () { $("#imagenM11").show() }, 6000);
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2) {
						
					 setTimeout(function(){ $("#loser11").show() }, 6000);
					 setTimeout(function () { $("#imagenM11").show() }, 6000);
						
					} else if (result[5] == 2 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][1]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner11").show() }, 6000);
						 setTimeout(function () { $("#imagenM11").show() }, 6000);
					}
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y ganador del Jackpot 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot11").show() }, 6000);
						
					} 
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot11").show() }, 6000);
						
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpo11").show() }, 6000);
						
					} 
					
				
				}
					
					 
				    
					 
				if (result[8] == 0 && result[7] == 0) {//status 3
					 $("#button0-11").show();
                     $("#winner11").hide();
					 $("#imagenM11").hide();
					 $("#loser11").hide();
					 $("#WinnerJackpot11").hide();
					 $("#image0-11").hide();
					 $("#image3-11").hide();
					 $("#image10-11").hide();
					 $("#image27-11").hide();
					 $("#image51-11").hide();
					 $("#image44-11").hide();
					 $("#image7-11").hide();
					 $("#image40-11").hide();
					 $("#image16-11").hide();
					 $("#button1-11").hide();
					
					 $("#image0-11").show();
					
			 document.getElementById('image0-11').style.animation = '2.5s rotate4';
             document.getElementById('image0-11').style.transform="rotate(360deg)";
					
				}
					
				});	
			});
					
// getCylinder 12
				
			donutContract.methods.getCylinder(12,result[4][12]).call(function (err, result) {
			
				if (result[7] == 0) {
				document.getElementById('LastDepTime12').value = '- -';
				} else { 
				document.getElementById('LastDepTime12').value = '~' + timeago.format(result[7]+'000');
			}
				
				 web3.eth.getAccounts(function (err, UserCount) {
					 
					
				      user = UserCount;
					 
					 
						if (result[8] == 0) {//status 0 
					 $("#winner12").hide();
					 $("#loser12").hide();
					 $("#WinnerJackpot12").hide();
							
							
				if (result[4][0] !== undefined && parseInt(result[4][0]) == parseInt(user[0])) {// COMIENZO CILINDRO 12
				
					
					$("#image0-12").hide();
					$("#image1-12").show();
			 document.getElementById('image1-12').style.animation = '2.5s rotate';
             document.getElementById('image1-12').style.transform="rotate(115deg)";
						 $("#button2-12").show();
					
					if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image1-12").hide();
					$("#image2-12").show();	
			 document.getElementById('image2-12').style.animation = '2.5s rotate5';
             document.getElementById('image2-12').style.transform="rotate(254deg)";
				 $("#button2-12").show();
						
						if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
				     $("#image2-12").hide();
					 $("#image16-12").show();	
			 document.getElementById('image16-12').style.animation = '2.5s rotate6';
             document.getElementById('image16-12').style.transform="rotate(360deg)";
				 $("#button2-12").show();
						
						
						
						
						
						} else  if (result[4][2] !== undefined) {   
					
					$("#image2-12").hide();
					 $("#image51-12").show();	
			 document.getElementById('image51-12').style.animation = '2.5s rotate6';
             document.getElementById('image51-12').style.transform="rotate(360deg)";
							
							
						
							
							
							
						}
						
			     
				} else if (result[4][1] !== undefined) {
					 $("#image1-12").hide();
					 $("#image38-12").show();
			 document.getElementById('image38-12').style.animation = '2.5s rotate5';
             document.getElementById('image38-12').style.transform="rotate(254deg)";
					
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-12").hide();
					 $("#image3-12").show();	
			 document.getElementById('image3-12').style.animation = '2.5s rotate6';
             document.getElementById('image3-12').style.transform="rotate(360deg)";
				 $("#button2-12").show();
						
						
				

			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image38-12").hide();
					 $("#image44-12").show();	
			 document.getElementById('image44-12').style.animation = '2.5s rotate6';
             document.getElementById('image44-12').style.transform="rotate(360deg)";
					
					
				
					
					
					
				}
							
							
							
				}
						
					
					
					
					} else if (result[4][0] !== undefined) {
						$("#image0-12").hide();
						$("#image25-12").show();
			 document.getElementById('image25-12').style.animation = '2.5s rotate';
             document.getElementById('image25-12').style.transform="rotate(115deg)";
						
						if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image25-12").hide();
					$("#image6-12").show();	
			 document.getElementById('image6-12').style.animation = '2.5s rotate5';
             document.getElementById('image6-12').style.transform="rotate(254deg)";
			 $("#button2-12").show();			
							if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 
					$("#image6-12").hide();
					$("#image7-12").show();	
			 document.getElementById('image7-12').style.animation = '2.5s rotate6';
             document.getElementById('image7-12').style.transform="rotate(360deg)";
			 $("#button2-12").show();		
								
				
								
								
			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image6-12").hide();
					 $("#image40-12").show();	
			 document.getElementById('image40-12').style.animation = '2.5s rotate6';
             document.getElementById('image40-12').style.transform="rotate(360deg)";
				 
					
					
					
					}
							
						} else if (result[4][1] !== undefined) {
					 $("#image25-12").hide();
					 $("#image26-12").show();
			 document.getElementById('image26-12').style.animation = '2.5s rotate5';
             document.getElementById('image26-12').style.transform="rotate(254deg)";
							
							
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
						
						
						$("#image26-12").hide();
					$("#image10-12").show();
			 document.getElementById('image10-12').style.animation = '2.5s rotate6';
             document.getElementById('image10-12').style.transform="rotate(360deg)";
			 $("#button2-12").show();
						
				
						
						
						
						
					} else if (result[4][2] !== undefined) {
					 $("#image26-12").hide();
					 $("#image27-12").show();
			 document.getElementById('image27-12').style.animation = '2.5s rotate6';
             document.getElementById('image27-12').style.transform="rotate(360deg)";
						
						
							
						
						
					
									 }
					
							
							
							
				}
						
						
					}
					
				
							
							
				
							
						
							
			
							
							
							
							
				
						}
				
			
				
				if (result[8] == 1) {//status 1
					 $("#image0-12").hide();
					 $("#button2-12").hide();
					 $("#button0-12").hide();
					
					
					 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image6-12").hide();
					 $("#image40-12").show();
					
					 document.getElementById('image40-12').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					$("#image2-12").hide();
					 $("#image16-12").show();
					
					 document.getElementById('image16-12').style.animation = '0.7s rotate4 linear infinite';	
							
					}
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) { 
						
					 $("#image38-12").hide();	
					 $("#image44-12").show();
					 
					 document.getElementById('image44-12').style.animation = '0.7s rotate4 linear infinite';
							
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					 $("#image6-12").hide();	
					 $("#image7-12").show();
					 
					 document.getElementById('image7-12').style.animation = '0.7s rotate4 linear infinite';
							
					}
					
					  
					
				 
					 
					 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image2-12").hide();
					 $("#image51-12").show();
					
					 document.getElementById('image51-12').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image26-12").hide();
					 $("#image27-12").show();
					
					 document.getElementById('image27-12').style.animation = '0.7s rotate4 linear infinite';
					} 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image26-12").hide();
					 $("#image10-12").show();
					
					 document.getElementById('image10-12').style.animation = '0.7s rotate4 linear infinite';
					} 
					 
					
					
					
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-12").hide();
					 $("#image3-12").show();
					
					 document.getElementById('image3-12').style.animation = '0.7s rotate4 linear infinite';
					}
					
					
					
					
					
					
					
					
					
					
					
				}
				if (result[8] == 2) {//status 2
					 $("#button0-12").hide();
					 $("#image0-12").hide();
					 $("#image3-12").hide();
					 $("#image27-12").hide();
					 $("#image40-12").hide();
					 $("#image16-12").hide();
					 $("#image44-12").hide();
					 $("#image7-12").hide();
					 $("#image51-12").hide();
					 $("#image10-12").hide();
					
					
					
					
					
				 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
					
				
					if (result[5] == 2 ){
						
						$("#image40-12").show();
						
					document.getElementById('image40-12').style.animation = 'rotate15 6s ease';
             document.getElementById('image40-12').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image40-12").show();
					 document.getElementById('image40-12').style.animation = 'rotate14 6s ease';
             document.getElementById('image40-12').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image40-12").show();
						document.getElementById('image40-12').style.animation = 'rotate16 6s ease';
             document.getElementById('image40-12').style.transform="rotate(360deg)";
			
					}
					$("#button1-12").show();	
						
						
						
					}
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image16-12").show();
						
					document.getElementById('image16-12').style.animation = 'rotate15 6s ease';
             document.getElementById('image16-12').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image16-12").show();
					 document.getElementById('image16-12').style.animation = 'rotate14 6s ease';
             document.getElementById('image16-12').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image16-12").show();
						 document.getElementById('image16-12').style.animation = 'rotate16 6s ease';
             document.getElementById('image16-12').style.transform="rotate(360deg)";
			
					}
					$("#button1-12").show();	
						
					}
					
						
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image44-12").show();
						
					document.getElementById('image44-12').style.animation = 'rotate15 6s ease';
             document.getElementById('image44-12').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image44-12").show();
					 document.getElementById('image44-12').style.animation = 'rotate14 6s ease';
             document.getElementById('image44-12').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image44-12").show();
						 document.getElementById('image44-12').style.animation = 'rotate16 6s ease';
             document.getElementById('image44-12').style.transform="rotate(360deg)";
			
					}
					$("#button1-12").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					
					if (result[5] == 2 ){
						
						$("#image7-12").show();
						
					document.getElementById('image7-12').style.animation = 'rotate15 6s ease';
             document.getElementById('image7-12').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image7-12").show();
					 document.getElementById('image7-12').style.animation = 'rotate14 6s ease';
             document.getElementById('image7-12').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image7-12").show();
						document.getElementById('image7-12').style.animation = 'rotate16 6s ease';
             document.getElementById('image7-12').style.transform="rotate(360deg)";
			
					}
					$("#button1-12").show();	
						
						
						
					}
					
					
		
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0]) ) {
						
					
					
					if (result[5] == 2 ){
						
						$("#image51-12").show();
						
					document.getElementById('image51-12').style.animation = 'rotate15 6s ease';
             document.getElementById('image51-12').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image51-12").show();
					 document.getElementById('image51-12').style.animation = 'rotate14 6s ease';
             document.getElementById('image51-12').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image51-12").show();
						document.getElementById('image51-12').style.animation = 'rotate16 6s ease';
             document.getElementById('image51-12').style.transform="rotate(360deg)";
			
					}
					$("#button1-12").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
			
					if (result[5] == 2 ){
						
						$("#image27-12").show();
						
					document.getElementById('image27-12').style.animation = 'rotate15 6s ease';
             document.getElementById('image27-12').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image27-12").show();
					 document.getElementById('image27-12').style.animation = 'rotate14 6s ease';
             document.getElementById('image27-12').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image27-12").show();
						 document.getElementById('image27-12').style.animation = 'rotate16 6s ease';
             document.getElementById('image27-12').style.transform="rotate(360deg)";
			
					}
					$("#button1-12").show();	
						
						
						
					}
					
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image10-12").show();
						
					document.getElementById('image10-12').style.animation = 'rotate15 6s ease';
             document.getElementById('image10-12').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image10-12").show();
					 document.getElementById('image10-12').style.animation = 'rotate14 6s ease';
             document.getElementById('image10-12').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image10-12").show();
						 document.getElementById('image10-12').style.animation = 'rotate16 6s ease';
             document.getElementById('image10-12').style.transform="rotate(360deg)";
			
					}
					$("#button1-12").show();	
						
						
						
					}
					
					
				
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image3-12").show();
						
					document.getElementById('image3-12').style.animation = 'rotate15 6s ease';
             document.getElementById('image3-12').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image3-12").show();
					 document.getElementById('image3-12').style.animation = 'rotate14 6s ease';
             document.getElementById('image3-12').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image3-12").show();
						document.getElementById('image3-12').style.animation = 'rotate16 6s ease';
             document.getElementById('image3-12').style.transform="rotate(360deg)";
			
					}
					$("#button1-12").show();	
						
						
						
					}
					
					
					
					
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y Ganador 
					if (!parseInt(user[0])) {


						setTimeout(function () { $("#imagenM12").show() }, 6000);

					}
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0) {
						
						 setTimeout(function(){ $("#loser12").show() }, 6000);
						 setTimeout(function () { $("#imagenM12").show() }, 6000);
						
					} else if (result[5] == 0 && (parseInt(result[4][1]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
					setTimeout(function(){ $("#winner12").show() }, 6000);
					setTimeout(function () { $("#imagenM12").show() }, 6000);
					}
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1) {
						
						 setTimeout(function(){ $("#loser12").show() }, 6000);
						 setTimeout(function () { $("#imagenM12").show() }, 6000);
						
					} else if (result[5] == 1 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner12").show() }, 6000);
						 setTimeout(function () { $("#imagenM12").show() }, 6000);
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2) {
						
					 setTimeout(function(){ $("#loser12").show() }, 6000);
					 setTimeout(function () { $("#imagenM12").show() }, 6000);
						
					} else if (result[5] == 2 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][1]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner12").show() }, 6000);
						 setTimeout(function () { $("#imagenM12").show() }, 6000);
					}
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y ganador del Jackpot 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot12").show() }, 6000);
						
					} 
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot12").show() }, 6000);
						
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpo12").show() }, 6000);
						
					} 
					
				
				}
					
					 
				    
					 
				if (result[8] == 0 && result[7] == 0) {//status 3
					 $("#button0-12").show();
                     $("#winner12").hide();
					 $("#imagenM12").hide();
					 $("#loser12").hide();
					 $("#WinnerJackpot12").hide();
					 $("#image0-12").hide();
					 $("#image3-12").hide();
					 $("#image10-12").hide();
					 $("#image27-12").hide();
					 $("#image51-12").hide();
					 $("#image44-12").hide();
					 $("#image7-12").hide();
					 $("#image40-12").hide();
					 $("#image16-12").hide();
					 $("#button1-12").hide();
					
					 $("#image0-12").show();
					
			 document.getElementById('image0-12').style.animation = '2.5s rotate4';
             document.getElementById('image0-12').style.transform="rotate(360deg)";
					
				}
					
				});	
			});		
				
// getCylinder 13
				
			donutContract.methods.getCylinder(13,result[4][13]).call(function (err, result) {
			
				if (result[7] == 0) {
				document.getElementById('LastDepTime13').value = '- -';
				} else { 
				document.getElementById('LastDepTime13').value = '~' + timeago.format(result[7]+'000');
			}
				
				 web3.eth.getAccounts(function (err, UserCount) {
					 
					
				      user = UserCount;
					 
					 
						if (result[8] == 0) {//status 0 
					 $("#winner13").hide();
					 $("#loser13").hide();
					 $("#WinnerJackpot13").hide();
							
							
				if (result[4][0] !== undefined && parseInt(result[4][0]) == parseInt(user[0])) {// COMIENZO CILINDRO 13
				
					
					$("#image0-13").hide();
					$("#image1-13").show();
			 document.getElementById('image1-13').style.animation = '2.5s rotate';
             document.getElementById('image1-13').style.transform="rotate(115deg)";
						 $("#button2-13").show();
					
					if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image1-13").hide();
					$("#image2-13").show();	
			 document.getElementById('image2-13').style.animation = '2.5s rotate5';
             document.getElementById('image2-13').style.transform="rotate(254deg)";
				 $("#button2-13").show();
						
						if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
				     $("#image2-13").hide();
					 $("#image16-13").show();	
			 document.getElementById('image16-13').style.animation = '2.5s rotate6';
             document.getElementById('image16-13').style.transform="rotate(360deg)";
				 $("#button2-13").show();
						
						
						
						
						
						} else  if (result[4][2] !== undefined) {   
					
					$("#image2-13").hide();
					 $("#image51-13").show();	
			 document.getElementById('image51-13').style.animation = '2.5s rotate6';
             document.getElementById('image51-13').style.transform="rotate(360deg)";
							
							
						
							
							
							
						}
						
			     
				} else if (result[4][1] !== undefined) {
					 $("#image1-13").hide();
					 $("#image38-13").show();
			 document.getElementById('image38-13').style.animation = '2.5s rotate5';
             document.getElementById('image38-13').style.transform="rotate(254deg)";
					
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-13").hide();
					 $("#image3-13").show();	
			 document.getElementById('image3-13').style.animation = '2.5s rotate6';
             document.getElementById('image3-13').style.transform="rotate(360deg)";
				 $("#button2-13").show();
						
						
				

			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image38-13").hide();
					 $("#image44-13").show();	
			 document.getElementById('image44-13').style.animation = '2.5s rotate6';
             document.getElementById('image44-13').style.transform="rotate(360deg)";
					
					
				
					
					
					
				}
							
							
							
				}
						
					
					
					
					} else if (result[4][0] !== undefined) {
						$("#image0-13").hide();
						$("#image25-13").show();
			 document.getElementById('image25-13').style.animation = '2.5s rotate';
             document.getElementById('image25-13').style.transform="rotate(115deg)";
						
						if (result[4][1] !== undefined && parseInt(result[4][1]) == parseInt(user[0])) {
					$("#image25-13").hide();
					$("#image6-13").show();	
			 document.getElementById('image6-13').style.animation = '2.5s rotate5';
             document.getElementById('image6-13').style.transform="rotate(254deg)";
			 $("#button2-13").show();			
							if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
					 
					$("#image6-13").hide();
					$("#image7-13").show();	
			 document.getElementById('image7-13').style.animation = '2.5s rotate6';
             document.getElementById('image7-13').style.transform="rotate(360deg)";
			 $("#button2-13").show();		
								
				
								
								
			    	
				} else  if (result[4][2] !== undefined) {   
					
					$("#image6-13").hide();
					 $("#image40-13").show();	
			 document.getElementById('image40-13').style.animation = '2.5s rotate6';
             document.getElementById('image40-13').style.transform="rotate(360deg)";
				 
					
					
					
					}
							
						} else if (result[4][1] !== undefined) {
					 $("#image25-13").hide();
					 $("#image26-13").show();
			 document.getElementById('image26-13').style.animation = '2.5s rotate5';
             document.getElementById('image26-13').style.transform="rotate(254deg)";
							
							
					if (result[4][2] !== undefined && parseInt(result[4][2]) == parseInt(user[0])) {
						
						
						$("#image26-13").hide();
					$("#image10-13").show();
			 document.getElementById('image10-13').style.animation = '2.5s rotate6';
             document.getElementById('image10-13').style.transform="rotate(360deg)";
			 $("#button2-13").show();
						
				
						
						
						
						
					} else if (result[4][2] !== undefined) {
					 $("#image26-13").hide();
					 $("#image27-13").show();
			 document.getElementById('image27-13').style.animation = '2.5s rotate6';
             document.getElementById('image27-13').style.transform="rotate(360deg)";
						
						
							
						
						
					
									 }
					
							
							
							
				}
						
						
					}
					
				
							
							
				
							
						
							
			
							
							
							
							
				
						}
				
			
				
				if (result[8] == 1) {//status 1
					 $("#image0-13").hide();
					 $("#button2-13").hide();
					 $("#button0-13").hide();
					
					
					 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image6-13").hide();
					 $("#image40-13").show();
					
					 document.getElementById('image40-13').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					$("#image2-13").hide();
					 $("#image16-13").show();
					
					 document.getElementById('image16-13').style.animation = '0.7s rotate4 linear infinite';	
							
					}
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) { 
						
					 $("#image38-13").hide();	
					 $("#image44-13").show();
					 
					 document.getElementById('image44-13').style.animation = '0.7s rotate4 linear infinite';
							
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) { 
						
					 $("#image6-13").hide();	
					 $("#image7-13").show();
					 
					 document.getElementById('image7-13').style.animation = '0.7s rotate4 linear infinite';
							
					}
					
					  
					
				 
					 
					 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image2-13").hide();
					 $("#image51-13").show();
					
					 document.getElementById('image51-13').style.animation = '0.7s rotate4 linear infinite';
					} 
					
					 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
					 $("#image26-13").hide();
					 $("#image27-13").show();
					
					 document.getElementById('image27-13').style.animation = '0.7s rotate4 linear infinite';
					} 
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image26-13").hide();
					 $("#image10-13").show();
					
					 document.getElementById('image10-13').style.animation = '0.7s rotate4 linear infinite';
					} 
					 
					
					
					
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
					 $("#image38-13").hide();
					 $("#image3-13").show();
					
					 document.getElementById('image3-13').style.animation = '0.7s rotate4 linear infinite';
					}
					
					
					
					
					
					
					
					
					
					
					
				}
				if (result[8] == 2) {//status 2
					 $("#button0-13").hide();
					 $("#image0-13").hide();
					 $("#image3-13").hide();
					 $("#image27-13").hide();
					 $("#image40-13").hide();
					 $("#image16-13").hide();
					 $("#image44-13").hide();
					 $("#image7-13").hide();
					 $("#image51-13").hide();
					 $("#image10-13").hide();
					
					
					
					
					
				 
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
					
				
					if (result[5] == 2 ){
						
						$("#image40-13").show();
						
					document.getElementById('image40-13').style.animation = 'rotate15 6s ease';
             document.getElementById('image40-13').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image40-13").show();
					 document.getElementById('image40-13').style.animation = 'rotate14 6s ease';
             document.getElementById('image40-13').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image40-13").show();
						document.getElementById('image40-13').style.animation = 'rotate16 6s ease';
             document.getElementById('image40-13').style.transform="rotate(360deg)";
			
					}
					$("#button1-13").show();	
						
						
						
					}
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image16-13").show();
						
					document.getElementById('image16-13').style.animation = 'rotate15 6s ease';
             document.getElementById('image16-13').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image16-13").show();
					 document.getElementById('image16-13').style.animation = 'rotate14 6s ease';
             document.getElementById('image16-13').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image16-13").show();
						 document.getElementById('image16-13').style.animation = 'rotate16 6s ease';
             document.getElementById('image16-13').style.transform="rotate(360deg)";
			
					}
					$("#button1-13").show();	
						
					}
					
						
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
				
				
					if (result[5] == 2 ){
						
						$("#image44-13").show();
						
					document.getElementById('image44-13').style.animation = 'rotate15 6s ease';
             document.getElementById('image44-13').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image44-13").show();
					 document.getElementById('image44-13').style.animation = 'rotate14 6s ease';
             document.getElementById('image44-13').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image44-13").show();
						 document.getElementById('image44-13').style.animation = 'rotate16 6s ease';
             document.getElementById('image44-13').style.transform="rotate(360deg)";
			
					}
					$("#button1-13").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					
					if (result[5] == 2 ){
						
						$("#image7-13").show();
						
					document.getElementById('image7-13').style.animation = 'rotate15 6s ease';
             document.getElementById('image7-13').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image7-13").show();
					 document.getElementById('image7-13').style.animation = 'rotate14 6s ease';
             document.getElementById('image7-13').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image7-13").show();
						document.getElementById('image7-13').style.animation = 'rotate16 6s ease';
             document.getElementById('image7-13').style.transform="rotate(360deg)";
			
					}
					$("#button1-13").show();	
						
						
						
					}
					
					
		
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) == parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0]) ) {
						
					
					
					if (result[5] == 2 ){
						
						$("#image51-13").show();
						
					document.getElementById('image51-13').style.animation = 'rotate15 6s ease';
             document.getElementById('image51-13').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image51-13").show();
					 document.getElementById('image51-13').style.animation = 'rotate14 6s ease';
             document.getElementById('image51-13').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image51-13").show();
						document.getElementById('image51-13').style.animation = 'rotate16 6s ease';
             document.getElementById('image51-13').style.transform="rotate(360deg)";
			
					}
					$("#button1-13").show();	
						
						
						
					}
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) !== parseInt(user[0])) {
						
			
					if (result[5] == 2 ){
						
						$("#image27-13").show();
						
					document.getElementById('image27-13').style.animation = 'rotate15 6s ease';
             document.getElementById('image27-13').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image27-13").show();
					 document.getElementById('image27-13').style.animation = 'rotate14 6s ease';
             document.getElementById('image27-13').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image27-13").show();
						 document.getElementById('image27-13').style.animation = 'rotate16 6s ease';
             document.getElementById('image27-13').style.transform="rotate(360deg)";
			
					}
					$("#button1-13").show();	
						
						
						
					}
					
					
					if(parseInt(result[4][0]) !== parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image10-13").show();
						
					document.getElementById('image10-13').style.animation = 'rotate15 6s ease';
             document.getElementById('image10-13').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image10-13").show();
					 document.getElementById('image10-13').style.animation = 'rotate14 6s ease';
             document.getElementById('image10-13').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image10-13").show();
						 document.getElementById('image10-13').style.animation = 'rotate16 6s ease';
             document.getElementById('image10-13').style.transform="rotate(360deg)";
			
					}
					$("#button1-13").show();	
						
						
						
					}
					
					
				
					
					
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && parseInt(result[4][1]) !== parseInt(user[0]) && parseInt(result[4][2]) == parseInt(user[0])) {
						
				
					if (result[5] == 2 ){
						
						$("#image3-13").show();
						
					document.getElementById('image3-13').style.animation = 'rotate15 6s ease';
             document.getElementById('image3-13').style.transform="rotate(254deg)";
					}
					if (result[5] == 1 ){
						
						$("#image3-13").show();
					 document.getElementById('image3-13').style.animation = 'rotate14 6s ease';
             document.getElementById('image3-13').style.transform="rotate(115deg)";
					}
					if (result[5] == 0 ){
						
						$("#image3-13").show();
						document.getElementById('image3-13').style.animation = 'rotate16 6s ease';
             document.getElementById('image3-13').style.transform="rotate(360deg)";
			
					}
					$("#button1-13").show();	
						
						
						
					}
					
					
					
					
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y Ganador 
					if (!parseInt(user[0])) {


						setTimeout(function () { $("#imagenM13").show() }, 6000);

					}
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0) {
						
						 setTimeout(function(){ $("#loser13").show() }, 6000);
						 setTimeout(function () { $("#imagenM13").show() }, 6000);
						
					} else if (result[5] == 0 && (parseInt(result[4][1]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
					setTimeout(function(){ $("#winner13").show() }, 6000);
					setTimeout(function () { $("#imagenM13").show() }, 6000);
					}
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1) {
						
						 setTimeout(function(){ $("#loser13").show() }, 6000);
						 setTimeout(function () { $("#imagenM13").show() }, 6000);
						
					} else if (result[5] == 1 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][2]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner13").show() }, 6000);
						 setTimeout(function () { $("#imagenM13").show() }, 6000);
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2) {
						
					 setTimeout(function(){ $("#loser13").show() }, 6000);
					 setTimeout(function () { $("#imagenM13").show() }, 6000);
						
					} else if (result[5] == 2 && (parseInt(result[4][0]) == parseInt(user[0])  || parseInt(result[4][1]) == parseInt(user[0])  ) ) {
						
						 setTimeout(function(){ $("#winner13").show() }, 6000);
						 setTimeout(function () { $("#imagenM13").show() }, 6000);
					}
					
					
					
					
					
					
					
					
					// Mensaje Perdedor y ganador del Jackpot 
					
					if(parseInt(result[4][0]) == parseInt(user[0]) && result[5] == 0 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot13").show() }, 6000);
						
					} 
					if(parseInt(result[4][1]) == parseInt(user[0]) && result[5] == 1 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpot13").show() }, 6000);
						
					} 
					
					
					if(parseInt(result[4][2]) == parseInt(user[0]) && result[5] == 2 && parseInt(result[6]) !== 0) {
						
						setTimeout(function(){ $("#WinnerJackpo13").show() }, 6000);
						
					} 
					
				
				}
					
					 
				    
					 
				if (result[8] == 0 && result[7] == 0) {//status 3
					 $("#button0-13").show();
                     $("#winner13").hide();
					 $("#imagenM13").hide();
					 $("#loser13").hide();
					 $("#WinnerJackpot13").hide();
					 $("#image0-13").hide();
					 $("#image3-13").hide();
					 $("#image10-13").hide();
					 $("#image27-13").hide();
					 $("#image51-13").hide();
					 $("#image44-13").hide();
					 $("#image7-13").hide();
					 $("#image40-13").hide();
					 $("#image16-13").hide();
					 $("#button1-13").hide();
					
					 $("#image0-13").show();
					
			 document.getElementById('image0-13').style.animation = '2.5s rotate4';
             document.getElementById('image0-13').style.transform="rotate(360deg)";
					
				}
					
				});	
			});		
					
			document.getElementById('JackPot0').value = `${parseFloat(web3.utils.fromWei(result[6][0],'ether')).toFixed(3)} MATIC`;
			document.getElementById('JackPot1').value = `${parseFloat(web3.utils.fromWei(result[6][1],'ether')).toFixed(3)} MATIC`;
			document.getElementById('JackPot2').value = `${parseFloat(web3.utils.fromWei(result[6][2],'ether')).toFixed(3)} MATIC`;
			document.getElementById('JackPot3').value = `${parseFloat(web3.utils.fromWei(result[6][3],'ether')).toFixed(3)} MATIC`;	
			document.getElementById('JackPot4').value = `${parseFloat(web3.utils.fromWei(result[6][4],'ether')).toFixed(3)} MATIC`;
			document.getElementById('JackPot5').value = `${parseFloat(web3.utils.fromWei(result[6][5],'ether')).toFixed(3)} MATIC`;
			document.getElementById('JackPot6').value = `${parseFloat(web3.utils.fromWei(result[6][6],'ether')).toFixed(3)} MATIC`;
			document.getElementById('JackPot7').value = `${parseFloat(web3.utils.fromWei(result[6][7],'ether')).toFixed(3)} MATIC`;
			document.getElementById('JackPot8').value = `${parseFloat(web3.utils.fromWei(result[6][8],'ether')).toFixed(3)} MATIC`;
			document.getElementById('JackPot9').value = `${parseFloat(web3.utils.fromWei(result[6][9],'ether')).toFixed(3)} MATIC`;
			document.getElementById('JackPot10').value = `${parseFloat(web3.utils.fromWei(result[6][10],'ether')).toFixed(3)} MATIC`;	
			document.getElementById('JackPot11').value = `${parseFloat(web3.utils.fromWei(result[6][11],'ether')).toFixed(3)} MATIC`;
			document.getElementById('JackPot12').value = `${parseFloat(web3.utils.fromWei(result[6][12],'ether')).toFixed(3)} MATIC`;	
			document.getElementById('JackPot13').value = `${parseFloat(web3.utils.fromWei(result[6][13],'ether')).toFixed(3)} MATIC`;			
		});	
				 
				
                
               	// getTotalCylindersCount
		
		 (function DonutPlayed () { 
		 
		donutContract.methods.getTotalCylindersCount().call(function (err, result) {
			document.getElementById('DonutPlayed').value = `${result}`;
		});
			
		})();	
                
             }, 2000);
		 
		 
		 
		 // Last Winner and Jackpot 0
		 
		 
         var Lastwin;
		 var Lastwin1;
		 var Lastwin2;
		 var Lastwin3;
		 var Lastwin4;
		 var Lastwin5;
		 var Lastwin6;
		 var Lastwin7;
		 var Lastwin8;
		 var Lastwin9;
		 var Lastwin10;
		 var Lastwin11;
		 var Lastwin12;
		 var Lastwin13;
						  var WinnerInterval = setInterval(function() {
		 
		 donutContract.methods.getGameStates().call(function (err, result) {
		 
	           if (((result[4][0])-1) !== Lastwin) {
							  
							  Lastwin = ((result[4][0])-1);
		 
		           // Last Winner Cylinder 0
					donutContract.methods.getCylinder(0,Lastwin).call(function (err, result) {
						
						
						if (Lastwin1!== -1) { 
						
							  
						if(result[5] == 0) {
						
					    var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.0144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.01 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.0144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.01 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.0144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.01 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.0144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.01 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
															 
					if(result[5] == 1) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.0144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.01 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.0144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.01 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.0144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.01 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.0144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.01 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
					
					
					if(result[5] == 2) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.0144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.01 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.0144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.01 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp;  <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.0144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.01 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.0144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.01 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
						
						 
												
					} 
					
					
					
					
						
						
				}
						
						
					
					
						 
							  
							});	
		 
		  }

			 
			 if (((result[4][1])-1) !== Lastwin1) {
							  
							  Lastwin1 = ((result[4][1])-1);
		 
		           // Last Winner Cylinder 1
					donutContract.methods.getCylinder(1,Lastwin1).call(function (err, result) {
						
						
						if (Lastwin1!== -1) { 
						
							  
						if(result[5] == 0) {
						
					    var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.0288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.02 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.0288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.02 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.0288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.02 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.0288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.02 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
															 
					if(result[5] == 1) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.0288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.02 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.0288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.02 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.0288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.02 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.0288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.02 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
					
					
					if(result[5] == 2) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.0288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.02 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.0288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.02 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp;  <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.0288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.02 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.0288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.02 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
						
						 
												
					} 
					
					
					
					
						
				}
						
						
						
						 
							  
							});	
		 
		  }
			  if (((result[4][2])-1) !== Lastwin2) {
							  
							  Lastwin2 = ((result[4][2])-1);
		 
		           // Last Winner Cylinder 2
					donutContract.methods.getCylinder(2,Lastwin2).call(function (err, result) {
						
						
						if (Lastwin1!== -1) { 
						
							  
						if(result[5] == 0) {
						
					    var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.0576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.04 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.0576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.04 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.0576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.04 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.0576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.04 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
															 
					if(result[5] == 1) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.0576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.04 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.0576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.04 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.0576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.04 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.0576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.04 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
					
					
					if(result[5] == 2) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.0576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.04 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.0576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.04 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp;  <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.0576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.04 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.0576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.04 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
						
						 
												
					} 
					
					
					
					
						
				}
						
						
						 
						 
							  
							});	
		 
		  }
			  if (((result[4][3])-1) !== Lastwin3) {
							  
							  Lastwin3 = ((result[4][3])-1);
		 
		           // Last Winner Cylinder 3
					donutContract.methods.getCylinder(3,Lastwin3).call(function (err, result) {
						
						
						if (Lastwin1!== -1) { 
						
							  
						if(result[5] == 0) {
						
					    var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.072 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.05 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.072 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.05 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.072 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.05 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.072 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.05 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
															 
					if(result[5] == 1) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.072 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.05 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.072 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.05 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.072 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.05 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.072 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.05 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
					
					
					if(result[5] == 2) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.072 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.05 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.072 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.05 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp;  <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.072 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.05 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.072 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.05 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
						
						 
												
					} 
					
					
					
					
						
				}
						
						
						 
						 
							  
							});	
		 
		  }
			  if (((result[4][4])-1) !== Lastwin4) {
							  
							  Lastwin4 = ((result[4][4])-1);
		 
		           // Last Winner Cylinder 4
					donutContract.methods.getCylinder(4,Lastwin4).call(function (err, result) {
						
						
						if (Lastwin1!== -1) { 
						
							  
						if(result[5] == 0) {
						
					    var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.1008 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.07 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.1008 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.07 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.1008 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.07 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.1008 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.07 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
															 
					if(result[5] == 1) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.1008 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.07 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.1008 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.07 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.1008 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.07 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.1008 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.07 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
					
					
					if(result[5] == 2) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.1008 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.07 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.1008 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.07 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp;  <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.1008 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.07 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.1008 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.07 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
						
						 
												
					} 
					
					
					
						
				}
						
						
						 
						 
							  
							});	
		 
		  }
			  if (((result[4][5])-1) !== Lastwin5) {
							  
							  Lastwin5 = ((result[4][5])-1);
		 
		           // Last Winner Cylinder 5
					donutContract.methods.getCylinder(5,Lastwin5).call(function (err, result) {
						
						
						if (Lastwin1!== -1) { 
						
							  
						if(result[5] == 0) {
						
					    var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.1152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.08 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.1152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.08 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.1152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.08 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.1152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.08 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
															 
					if(result[5] == 1) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.1152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.08 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.1152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.08 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.1152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.08 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.1152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.08 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
					
					
					if(result[5] == 2) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.1152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.08 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.1152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.08 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp;  <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.1152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.08 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.1152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.08 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
						
						 
												
					} 
					
					
					
					
				}
						
						
						
						
						 
							  
							});	
		 
		  }
			 if (((result[4][6])-1) !== Lastwin6) {
							  
							  Lastwin6 = ((result[4][6])-1);
		 
		           // Last Winner Cylinder 6
					donutContract.methods.getCylinder(6,Lastwin6).call(function (err, result) {
						
						
						if (Lastwin1!== -1) { 
						
							  
						if(result[5] == 0) {
						
					    var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
															 
					if(result[5] == 1) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
					
					
					if(result[5] == 2) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp;  <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.144 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
						
						 
												
					} 
					
					
					
						
						
				}
						 
						 
							  
							});	
		 
		  }
			  if (((result[4][7])-1) !== Lastwin7) {
							  
							  Lastwin7 = ((result[4][7])-1);
		 
		           // Last Winner Cylinder 7
					donutContract.methods.getCylinder(7,Lastwin7).call(function (err, result) {
						
						if (Lastwin1!== -1) { 
						
						
							  
						if(result[5] == 0) {
						
					    var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.216 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.15 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.216 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.15 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.216 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.15 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.216 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.15 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
															 
					if(result[5] == 1) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.216 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.15 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.216 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.15 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.216 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.15 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.216 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.15 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
					
					
					if(result[5] == 2) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.216 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.15 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.216 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.15 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp;  <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.216 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.15 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.216 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.15 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
						
						 
												
					} 
					
					
					
						
				}
						
						
						
						 
							  
							});	
		 
		  }
			  if (((result[4][8])-1) !== Lastwin8) {
							  
							  Lastwin8 = ((result[4][8])-1);
		 
		           // Last Winner Cylinder 8
					donutContract.methods.getCylinder(8,Lastwin8).call(function (err, result) {
						
						
						
						if (Lastwin1!== -1) { 
							  
						if(result[5] == 0) {
						
					    var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.2 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.2 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.2 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.2 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
															 
					if(result[5] == 1) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.2 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.2 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.2 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.2 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
					
					
					if(result[5] == 2) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.2 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.2 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp;  <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.2 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.288 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.2 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
						
						 
												
					} 
					
					
					
						
						
				}
						
						 
						 
							  
							});	
		 
		  }
			 if (((result[4][9])-1) !== Lastwin9) {
							  
							  Lastwin9 = ((result[4][9])-1);
		 
		           // Last Winner Cylinder 9
					donutContract.methods.getCylinder(9,Lastwin9).call(function (err, result) {
						
						
						
						if (Lastwin1!== -1) { 
							  
						if(result[5] == 0) {
						
					    var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.432 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.3 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.432 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.3 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.432 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.3 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.432 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.3 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
															 
					if(result[5] == 1) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.432 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.3 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.432 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.3 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.432 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.3 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.432 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.3 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
					
					
					if(result[5] == 2) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.432 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.3 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.432 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.3 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp;  <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.432 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.3 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.432 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.3 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
						
						 
												
					} 
					
					
					
					
						
				}
						
						
						
						 
							  
							});	
		 
		  }
			  if (((result[4][10])-1) !== Lastwin10) {
							  
							  Lastwin10 = ((result[4][10])-1);
		 
		           // Last Winner Cylinder 10
					donutContract.methods.getCylinder(10,Lastwin10).call(function (err, result) {
						
						
						if (Lastwin1!== -1) { 
						
							  
						if(result[5] == 0) {
						
					    var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.4 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.4 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.4 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.4 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
															 
					if(result[5] == 1) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.4 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.4 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.4 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.4 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
					
					
					if(result[5] == 2) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.4 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.4 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp;  <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.4 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.576 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.4 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
						
						 
												
					} 
					
					
					
				}	
						
						
						
						 
						 
							  
							});	
		 
		  }
			 if (((result[4][11])-1) !== Lastwin11) {
							  
							  Lastwin11 = ((result[4][11])-1);
		 
		           // Last Winner Cylinder 11
					donutContract.methods.getCylinder(11,Lastwin11).call(function (err, result) {
						
						
						if (Lastwin1!== -1) { 
						
							  
						if(result[5] == 0) {
						
					    var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.72 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.5 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.72 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.5 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.72 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.5 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.72 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.5 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
															 
					if(result[5] == 1) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.72 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.5 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.72 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.5 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.72 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.5 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.72 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.5 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
					
					
					if(result[5] == 2) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>0.72 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.5 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>0.72 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.5 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp;  <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>0.72 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.5 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>0.72 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.5 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
						
						 
												
					} 
					
					
					
					
						
				}
						
						
						 
						 
							  
							});	
		 
		  }
			 if (((result[4][12])-1) !== Lastwin12) {
							  
							  Lastwin12 = ((result[4][12])-1);
		 
		           // Last Winner Cylinder 12
					donutContract.methods.getCylinder(12,Lastwin12).call(function (err, result) {
						
						if (Lastwin1!== -1) { 
						
						
							  
						if(result[5] == 0) {
						
					    var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>1.152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.8 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>1.152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.8 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>1.152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.8 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>1.152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.8 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
															 
					if(result[5] == 1) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>1.152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.8 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>1.152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.8 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>1.152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.8 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>1.152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.8 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
					
					
					if(result[5] == 2) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>1.152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.8 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>1.152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.8 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp;  <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>1.152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.8 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>1.152 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>0.8 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
						
						 
												
					} 
					
					
					
					
						
				}
						
						
						 
						 
							  
							});	
		 
		  }
			  if (((result[4][13])-1) !== Lastwin13) {
							  
							  Lastwin13 = ((result[4][13])-1);
		 
		           // Last Winner Cylinder 13
					donutContract.methods.getCylinder(13,Lastwin13).call(function (err, result) {
						
						
						if (Lastwin1!== -1) { 
						
							  
						if(result[5] == 0) {
						
					    var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>1.44 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>1.44 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>1.44 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>1.44 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
															 
					if(result[5] == 1) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>1.44 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>1.44 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>1.44 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>1.44 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
					} 
					
					
					if(result[5] == 2) {
						
						 var last = document.createElement("div");
						last.innerHTML = `<b style='color:green'>1.44 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last);
						 var last1 = document.createElement("div");
						last1.innerHTML = `<b style='color:green'>1.44 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp;  <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last1);
						 var last2 = document.createElement("div");
						last2.innerHTML = `<b style='color:green'>1.44 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][3]}"><b style='color:blue'>${result[4][3].substring(0,12)}...${result[4][3].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last2);
						 var last3 = document.createElement("div");
						last3.innerHTML = `<b style='color:green'>1.44 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='color:mediumpurple'>1 MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][4]}"><b style='color:blue'>${result[4][4].substring(0,12)}...${result[4][4].substring(38,42)}</b></a> &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
					    document.getElementById('LastWinner').prepend(last3);
						
						
						 
												
					} 
					
					
					
				}
						
						
						
						 
						 
							  
							});	
		 
		  }
			 
		 });	
		 
		  }, 100);


//Last Jackpot

 donutContract.methods.getGameStates().call(function (err, result) {
		 
		var i;
for (i = 0; i < result[4][0]; i++) {
donutContract.methods.getCylinder(0,i).call(function (err, result) {
	
if(result[5] == 0 && parseInt(result[6]) !== 0) {
							
						    var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					if(result[5] == 1 && parseInt(result[6]) !== 0) {
						
					         var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
					if(result[5] == 2 && parseInt(result[6]) !== 0) {
						
					        var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
	
 
	});	
	
	
	donutContract.methods.getCylinder(1,i).call(function (err, result) {
	
if(result[5] == 0 && parseInt(result[6]) !== 0) {
							
						    var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					if(result[5] == 1 && parseInt(result[6]) !== 0) {
						
					         var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
					if(result[5] == 2 && parseInt(result[6]) !== 0) {
						
					        var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
	
 
	});
	donutContract.methods.getCylinder(2,i).call(function (err, result) {
	
if(result[5] == 0 && parseInt(result[6]) !== 0) {
							
						    var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					if(result[5] == 1 && parseInt(result[6]) !== 0) {
						
					         var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
					if(result[5] == 2 && parseInt(result[6]) !== 0) {
						
					        var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
	
 
	});
	donutContract.methods.getCylinder(3,i).call(function (err, result) {
	
if(result[5] == 0 && parseInt(result[6]) !== 0) {
							
						    var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					if(result[5] == 1 && parseInt(result[6]) !== 0) {
						
					         var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
					if(result[5] == 2 && parseInt(result[6]) !== 0) {
						
					        var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
	
 
	});
	donutContract.methods.getCylinder(4,i).call(function (err, result) {
	
if(result[5] == 0 && parseInt(result[6]) !== 0) {
							
						    var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					if(result[5] == 1 && parseInt(result[6]) !== 0) {
						
					         var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
					if(result[5] == 2 && parseInt(result[6]) !== 0) {
						
					        var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
	
 
	});
	donutContract.methods.getCylinder(5,i).call(function (err, result) {
	
if(result[5] == 0 && parseInt(result[6]) !== 0) {
							
						    var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					if(result[5] == 1 && parseInt(result[6]) !== 0) {
						
					         var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
					if(result[5] == 2 && parseInt(result[6]) !== 0) {
						
					        var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
	
 
	});
	donutContract.methods.getCylinder(6,i).call(function (err, result) {
	
if(result[5] == 0 && parseInt(result[6]) !== 0) {
							
						    var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					if(result[5] == 1 && parseInt(result[6]) !== 0) {
						
					         var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
					if(result[5] == 2 && parseInt(result[6]) !== 0) {
						
					        var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
				
	
 
	});
	donutContract.methods.getCylinder(7,i).call(function (err, result) {
	
if(result[5] == 0 && parseInt(result[6]) !== 0) {
							
						    var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					if(result[5] == 1 && parseInt(result[6]) !== 0) {
						
					         var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
					if(result[5] == 2 && parseInt(result[6]) !== 0) {
						
					        var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
	
 
	});
	donutContract.methods.getCylinder(8,i).call(function (err, result) {
	
if(result[5] == 0 && parseInt(result[6]) !== 0) {
							
						    var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					if(result[5] == 1 && parseInt(result[6]) !== 0) {
						
					         var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
					if(result[5] == 2 && parseInt(result[6]) !== 0) {
						
					        var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
	
 
	});
	donutContract.methods.getCylinder(9,i).call(function (err, result) {
	
if(result[5] == 0 && parseInt(result[6]) !== 0) {
							
						    var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					if(result[5] == 1 && parseInt(result[6]) !== 0) {
						
					         var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
					if(result[5] == 2 && parseInt(result[6]) !== 0) {
						
					        var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
	
 
	});
	donutContract.methods.getCylinder(10,i).call(function (err, result) {
	
if(result[5] == 0 && parseInt(result[6]) !== 0) {
							
						    var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					if(result[5] == 1 && parseInt(result[6]) !== 0) {
						
					         var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
					if(result[5] == 2 && parseInt(result[6]) !== 0) {
						
					        var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
	
 
	});
	donutContract.methods.getCylinder(11,i).call(function (err, result) {
	
if(result[5] == 0 && parseInt(result[6]) !== 0) {
							
						    var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					if(result[5] == 1 && parseInt(result[6]) !== 0) {
						
					         var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
					if(result[5] == 2 && parseInt(result[6]) !== 0) {
						
					        var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
	
 
	});
	donutContract.methods.getCylinder(12,i).call(function (err, result) {
	
if(result[5] == 0 && parseInt(result[6]) !== 0) {
							
						    var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					if(result[5] == 1 && parseInt(result[6]) !== 0) {
						
					         var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
					if(result[5] == 2 && parseInt(result[6]) !== 0) {
						
					        var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
	
 
	});
	donutContract.methods.getCylinder(13,i).call(function (err, result) {
	
if(result[5] == 0 && parseInt(result[6]) !== 0) {
							
						    var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][0]}"><b style='color:blue'>${result[4][0].substring(0,12)}...${result[4][0].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					if(result[5] == 1 && parseInt(result[6]) !== 0) {
						
					         var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][1]}"><b style='color:blue'>${result[4][1].substring(0,12)}...${result[4][1].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
					if(result[5] == 2 && parseInt(result[6]) !== 0) {
						
					        var lastj = document.createElement("div");
							lastj.innerHTML = ` <b style='color:orange'>${web3.utils.fromWei(result[6])} MATIC</b> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://mumbai.polygonscan.com/address/${result[4][2]}"><b style='color:blue'>${result[4][2].substring(0,12)}...${result[4][2].substring(38,42)}</b></a>  &nbsp;&nbsp;&nbsp;&nbsp; ${ '~' + timeago.format(result[7]+'000')} `;
							document.getElementById('LastJackpot').prepend(lastj);
							
						
					} 
					
					
	
 
	});
}
					
});
		 
			
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();







function PlayGame0() {
	   
   
   signer.sendTransaction({to: '0x51FB6803aCF83b41ACdb2Ce578889045d2f71ca2', value: ethers.utils.parseEther("0.01")}, function (err, result) { 

   
	   });	
   
   }
function PlayGame1() {
	   
   
	signer.sendTransaction({to: '0x51FB6803aCF83b41ACdb2Ce578889045d2f71ca2', value: ethers.utils.parseEther("0.02")}, function (err, result) { 
	   });	
}
   
	 function PlayGame2() {
	   
   
	signer.sendTransaction({to: '0x51FB6803aCF83b41ACdb2Ce578889045d2f71ca2', value: ethers.utils.parseEther("0.04")}, function (err, result) { 
	   });	
   
   }
function PlayGame3() {
	   
   
	signer.sendTransaction({to: '0x51FB6803aCF83b41ACdb2Ce578889045d2f71ca2', value: ethers.utils.parseEther("0.05")}, function (err, result) { 
	   });		
   
   }
 function PlayGame4() {
	   
   
	signer.sendTransaction({to: '0x51FB6803aCF83b41ACdb2Ce578889045d2f71ca2', value: ethers.utils.parseEther("0.07")}, function (err, result) { 
	   });	
   
   }
function PlayGame5() {
	   
   
	signer.sendTransaction({to: '0x51FB6803aCF83b41ACdb2Ce578889045d2f71ca2', value: ethers.utils.parseEther("0.08")}, function (err, result) { 
	   });		
   
   }
 function PlayGame6() {
	   
   
	signer.sendTransaction({to: '0x51FB6803aCF83b41ACdb2Ce578889045d2f71ca2', value: ethers.utils.parseEther("0.1")}, function (err, result) { 
	   });	
   
   }
function PlayGame7() {
	   
   
	signer.sendTransaction({to: '0x51FB6803aCF83b41ACdb2Ce578889045d2f71ca2', value: ethers.utils.parseEther("0.15")}, function (err, result) { 
	   });	
   
   }
	function PlayGame8() {
	   
   
	signer.sendTransaction({to: '0x51FB6803aCF83b41ACdb2Ce578889045d2f71ca2', value: ethers.utils.parseEther("0.2")}, function (err, result) { 
	   });		
   
   }
function PlayGame9() {
	   
   
	signer.sendTransaction({to: '0x51FB6803aCF83b41ACdb2Ce578889045d2f71ca2', value: ethers.utils.parseEther("0.3")}, function (err, result) { 
	   });	
   
   }
function PlayGame10() {
	   
   
	signer.sendTransaction({to: '0x51FB6803aCF83b41ACdb2Ce578889045d2f71ca2', value: ethers.utils.parseEther("0.4")}, function (err, result) { 
	   });		
   
   }
function PlayGame11() {
	   
   
	 signer.sendTransaction({to: '0x51FB6803aCF83b41ACdb2Ce578889045d2f71ca2', value: ethers.utils.parseEther("0.5")}, function (err, result) { 
	   });	
   
   }
function PlayGame12() {
	   
   
	signer.sendTransaction({to: '0x51FB6803aCF83b41ACdb2Ce578889045d2f71ca2', value: ethers.utils.parseEther("0.8")}, function (err, result) { 
	   });	
   
   }
function PlayGame13() {
	   
   
	signer.sendTransaction({to: '0x51FB6803aCF83b41ACdb2Ce578889045d2f71ca2', value: ethers.utils.parseEther("1.0")}, function (err, result) { 
	   });	
   
   }
   function ReclamaPremio0() {
	   
   
	signer.sendTransaction({to: '0x51FB6803aCF83b41ACdb2Ce578889045d2f71ca2', value: ethers.utils.parseEther("0.0")}, function (err, result) { 
	   });	
   
   }
	
function CancelBet0() {
	   
   
		signer.sendTransaction({to: '0x51FB6803aCF83b41ACdb2Ce578889045d2f71ca2', value: ethers.utils.parseEther("0.00000112")}, function (err, result) { 
	   });	
   
   }
   
const donutContractt = new ethers.Contract('0x51FB6803aCF83b41ACdb2Ce578889045d2f71ca2',[
    {
      "constant": true,
      "inputs": [],
      "name": "getGameStates",
      "outputs": [
        {
          "name": "blockNumber",
          "type": "uint64"
        },
        {
          "name": "blockHash",
          "type": "bytes32"
        },
        {
          "name": "dep",
          "type": "uint96[]"
        },
        {
          "name": "slotsCount",
          "type": "uint64[]"
        },
        {
          "name": "resultsCount",
          "type": "uint64[]"
        },
        {
          "name": "currentCylinderIndex",
          "type": "uint64[]"
        },
        {
          "name": "jackpot",
          "type": "uint96[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "i",
          "type": "uint256"
        }
      ],
      "name": "getUnfinished",
      "outputs": [
        {
          "name": "game",
          "type": "uint256"
        },
        {
          "name": "blockNumber",
          "type": "uint256"
        },
        {
          "name": "cylinder",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getTotalCylindersCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "BETS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getUnfinishedCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "game",
          "type": "uint256"
        },
        {
          "name": "idxFrom",
          "type": "uint256"
        },
        {
          "name": "idxTo",
          "type": "uint256"
        }
      ],
      "name": "getCylinders",
      "outputs": [
        {
          "name": "blockNumber",
          "type": "uint256"
        },
        {
          "name": "blockHash",
          "type": "bytes32"
        },
        {
          "name": "dep",
          "type": "uint96"
        },
        {
          "name": "index",
          "type": "uint64[]"
        },
        {
          "name": "deps",
          "type": "address[]"
        },
        {
          "name": "unlucky",
          "type": "uint8[]"
        },
        {
          "name": "jackpot",
          "type": "int96[]"
        },
        {
          "name": "lastDepTime",
          "type": "uint64[]"
        },
        {
          "name": "status",
          "type": "uint8[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "game",
          "type": "uint256"
        }
      ],
      "name": "withdrawFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "game",
          "type": "uint256"
        },
        {
          "name": "_idx",
          "type": "int256"
        }
      ],
      "name": "getCylinder",
      "outputs": [
        {
          "name": "blockNumber",
          "type": "uint64"
        },
        {
          "name": "blockHash",
          "type": "bytes32"
        },
        {
          "name": "dep",
          "type": "uint96"
        },
        {
          "name": "index",
          "type": "uint64"
        },
        {
          "name": "deps",
          "type": "address[]"
        },
        {
          "name": "unlucky",
          "type": "uint8"
        },
        {
          "name": "jackpot",
          "type": "int96"
        },
        {
          "name": "lastDepTime",
          "type": "uint64"
        },
        {
          "name": "status",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "testRandom",
      "outputs": [
        {
          "name": "numbers",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "game",
          "type": "uint256"
        }
      ],
      "name": "getGameState",
      "outputs": [
        {
          "name": "blockNumber",
          "type": "uint64"
        },
        {
          "name": "blockHash",
          "type": "bytes32"
        },
        {
          "name": "dep",
          "type": "uint96"
        },
        {
          "name": "slotsCount",
          "type": "uint64"
        },
        {
          "name": "resultsCount",
          "type": "uint64"
        },
        {
          "name": "currentCylinderIndex",
          "type": "uint64"
        },
        {
          "name": "jackpot",
          "type": "uint96"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    }
  ], signer);




async function Withdraw() {
const tx = await ddonutContractt.withdraw();
   }


async function WithdrawFrom0() {
	
const tx = await donutContractt.withdrawFrom(0);
const receipt = await tx.wait();
window.location.reload();

   }
async function WithdrawFrom1() {
const tx = await donutContractt.withdrawFrom(1);
const receipt = await tx.wait();
window.location.reload();
   }
	 async function WithdrawFrom2() {
const tx = await donutContractt.withdrawFrom(2);
const receipt = await tx.wait();
window.location.reload();
   }
 async function WithdrawFrom3() {
const tx = await donutContractt.withdrawFrom(3);
const receipt = await tx.wait();
window.location.reload();
   }
 async function WithdrawFrom4() {
const tx = await donutContractt.withdrawFrom(4);
const receipt = await tx.wait();
window.location.reload();
   }
 async function WithdrawFrom5() {
const tx = await donutContractt.withdrawFrom(5);
const receipt = await tx.wait();
window.location.reload();
   }
async function WithdrawFrom6() {
const tx = await donutContractt.withdrawFrom(6);
const receipt = await tx.wait();
window.location.reload();
}
 async function WithdrawFrom7() {
const tx = await donutContractt.withdrawFrom(7);
const receipt = await tx.wait();
window.location.reload();
   }
  async function WithdrawFrom8() {
const tx = await donutContractt.withdrawFrom(8);
const receipt = await tx.wait();
window.location.reload();
   }
 async function WithdrawFrom9() {
const tx = await donutContractt.withdrawFrom(9);
const receipt = await tx.wait();
window.location.reload();
   }
 async function WithdrawFrom10() {
const tx = await donutContractt.withdrawFrom(10);
const receipt = await tx.wait();
window.location.reload();
   }
 async function WithdrawFrom11() {
const tx = await donutContractt.withdrawFrom(11);
const receipt = await tx.wait();
window.location.reload();
   }
 async function WithdrawFrom12() {
const tx = await donutContractt.withdrawFrom(12);
const receipt = await tx.wait();
window.location.reload();
   }
async function WithdrawFrom13() {
const tx = await donutContractt.withdrawFrom(13);
const receipt = await tx.wait();
window.location.reload();
   }