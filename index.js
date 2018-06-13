var verifyContent = function(content) {
	content.nextIndex = typeof content.nextIndex !== 'undefined' ? content.nextIndex : 0;
	content.listofResults = typeof content.listofResults !== 'undefined' ? content.listofResults : [];
	content.count = typeof content.count !== 'undefined' ? content.count : 10;	
	content.prohibitedItems = typeof content.prohibitedItems !== 'undefined' ? content.prohibitedItems : [];
	content.quit = typeof content.quit !== 'undefined' ? content.quit : true;
	content.clientName = typeof content.clientName !== 'undefined' ? content.clientName : client;
	content.callback = typeof content.callback !== 'undefined' ? content.callback : function(data){console.log(data)};
}

var scanAll = function(content) {

	verifyContent(content);
	content.clientName.SCAN(content.nextIndex, "COUNT", content.count,function(err,reply) {
		reply[1].forEach(function(item) {
			if((content.prohibitedItems).indexOf(item)!=0 && item!=""){
				content.listofResults.push(item);
			}
		});
				
		if(reply[0] != 0) {			
			content.nextIndex = reply[0];
			listofAccessTokens({listofResults:content.listofResults, nextIndex:content.nextIndex, count:content.count, prohibitedItems:content.prohibitedItems, quit:content.quit , callback:content.callback});
		}
		else {
			content.callback(content.listofResults);
			if(content.quit){			
				content.clientName.quit();
			}		
		}
	});
} 

module.exports = {
	scanAll: scanAll
};
