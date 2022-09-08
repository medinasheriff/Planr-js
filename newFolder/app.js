const overlay = document.querySelector(".overlay");
const addCampaign = document.querySelector(".addCampaign");
const save = document.querySelector(".save");
const cancel = document.querySelector(".cancel");

addCampaign.addEventListener("click", () => {
    overlay.style.display = "flex"
})
cancel.addEventListener("click", () => {
    overlay.style.display = "none"
})
save.addEventListener("click", () => {
    overlay.style.display = "none"
})
//to replace the empty campaign record page with the entered values

const emptyCampaign = document.querySelector(".content");
save.addEventListener("click", () => {
	emptyCampaign.style.display = "none"
})


// addCampaign.addEventListener("click", () => {
//     console.log(addCampaign)
// })

function addData(){
    let table = document.querySelector(".tablePage");
	let campaignName=document.querySelector('.campaign_name').value;
	let campaignType=document.querySelector('.campaign_type').value;
	let duration=document.querySelector('.duration_start_date').value;

    table.style.display = "table"
    console.log({campaignName, campaignType, duration})
 
	if(campaignName =="" || campaignType =="" || duration==""){
		alert("Please fill all fields first!");
	}else{
		let html="";
 
		html="<tr><td><input type='radio'><a href='#'>"+campaignName+ ' Campaign '+ ' - '+duration+"</a></td><td>"+campaignType+"</td><td>"+'status'+"</td></tr>";

        console.log(html)
 
		console.log(document.getElementById('result').innerHTML+=html);
 
		document.querySelector('.campaign_name').value="";
		document.querySelector('.campaign_type').value="";
		document.querySelector('.duration_start_date').value="";
	}
}