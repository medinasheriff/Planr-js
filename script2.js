function addData(){
	var campaignName=document.querySelector('.campaign_name').value;
	var campaignType=document.querySelector('.campaign_type').value;
	var duration=document.querySelector('.duration_start_date').value;

    console.log({campaignName, campaignType, duration})
 
	if(campaignName =="" || campaignType =="" || duration==""){
		alert("Please enter something first!");
	}else{
		var html="";
 
		html="<tr><td>"+campaignName+'-'+duration+"</td><td>"+campaignType+"</td><td>"+'status'+"</td></tr>";

        console.log(html)
 
		console.log(document.getElementById('result').innerHTML+=html);
 
		document.querySelector('.campaign_name').value="";
		document.querySelector('.campaign_type').value="";
		document.querySelector('.duration_start_date').value="";
	}
}