function FGJL(ZoneToDraw) {
	var ListOfParticle = new Array();
	var heightArea = document.getElementById(ZoneToDraw).offsetHeight;
	var widthArea = document.getElementById(ZoneToDraw).offsetWidth;
	var widthChoice = document.getElementById("ChoiceZone").offsetWidth;
	var Particle = new Array("e-", "e+", "t", "b", "s", "c", "u", "d", "\u02e0");
	var quadrillageOn=1;
	var	MaxChoicePrint= heightArea/widthChoice + 1 ;
	var Case= new Array();

	//This Object represents a particle. It contains Typical information about this on and its graphic representation
	function particle(ID,LineIdP, OrderP,graphicRepresentationP) {
		this.charge
		this.spin
		this.name
		this.LineId = LineIdP;
		this.Order = OrderP;
		this.graphicRepresentation = graphicRepresentationP;
		return this;
	}
	
	
	//This Object represents a line of a the GUI.The idea is to be able to know on which line we wish to print our particle(Vertice).
	function line(numberP, graphicRepresentationP) {
		this.Number = numberP;
		this.graphicRepresentation = graphicRepresentationP;
		return this;
	}
	
	//This object represents a case in the choicezone (left menu). Its main goal is to allow people to choose a particule.
	function CaseGUI(graphicRepresentationP) {
		this.graphicRepresentation = graphicRepresentationP;
		return this;
	}
	
	
	
	var Chart = d3.select("#" + ZoneToDraw).append("svg").attr("class", "chart").attr("width", widthArea).attr("height", heightArea);
	var ChoiceZone = d3.select("#ChoiceZone").append("svg").attr("class", "choicezone").attr("width", widthChoice).attr("height", heightArea);
	
}



function DrawPaleCircle(ChartParameter,CenterX,CenterY){
	return ChartParameter.append("circle").attr("cx", CenterX).attr("cy", CenterY).attr("r", 5).style("stroke", "#CCCCCC").style("stroke-opacity", 0.01).style("opacity", 0.1)	
}
