//console.log("this is script file")
//
//const toggleSidebar = () => {
//
//	if($('.sidebar').is(":visible"))
//	{
//		//true
//		$(".sidebar").css("display","none");
//		$(".content").css("margin-left","0%");
//		
//	}else{
//		//false
//		$(".sidebar").css("display","block");
//		$(".content").css("margin-left","20%");
//
//	}
//
//};
//
//const searchLocation=()=>{
//
//	//console.log("searching..");
//	let query= $("#search-input").val();
//
//	if(query==""){
//		$(".search-result").hide();
//	}else{
//		//search
//		//console.log(query);
//
//		//Sending request to server
//		let url=`http://localhost:8080/search/${query}`;
//
//		fetch(url)
//			.then((response) => {
//				return response.json();
//			})
//			.then((data) => {
//				 //console.log(data);
//
//				 let text=`<div class='list-group'>`;
//					/*data.forEach(contact => {
//						text+=`<a href='/user/${contact.cid}/contact' class='list-group-item list-group-item-action'> ${contact.name} </a>`;
//						
//					});*/
//					if(data.length == 0){
//						text+='Bloodbank not found for this location..';
//					}
//					data.forEach(user => {
//						text+=`<a href='/bloodrequestor/location_wise_result/${user.location}/0' class='list-group-item list-group-item-action'> ${user.location} </a>`;
//						
//					});
//
//				 text+=`</div>`;
//
//				 $(".search-result").html(text);
//				 $(".search-result").show();
//			});
//		
//	}
//
//}