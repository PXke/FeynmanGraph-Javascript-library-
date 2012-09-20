function DrawLine(chart,x1,x2,y1,y2,color,Sigle){
	
	
	chart.append("line").on("mouseover", function(){alert("lol");}).transition().duration(1000).attr("x1", x1).attr("x2", x2).attr("y1", y1).attr("y2", y2).style("stroke", color);
   	
}

function DrawSquiglyLine(){
	
	
}

function DrawCoilLine(){
	
	
	
}


