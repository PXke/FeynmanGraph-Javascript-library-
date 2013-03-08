function FGJL(ZoneToDraw) {
	var ListOfParticle = new Array();
	var heightArea = document.getElementById(ZoneToDraw).offsetHeight;
	var widthArea = document.getElementById(ZoneToDraw).offsetWidth;
	var widthChoice = document.getElementById("ChoiceZone").offsetWidth;
	var Particle = new Array("e-", "e+", "t", "b", "s", "c", "u", "d", "\u02e0");
	var quadrillageOn=1;
	var Lines = new Array();
	var	CaseToDraw= heightArea/widthChoice + 1 ;
	var IDStartCase=0;
	var IDEndCase=IDStartCase+CaseToDraw;
	var Case= new Array();
	var Chart;
	var ChoiceZone;
	var UpdateDrawZone=1;
	var UpdateChoiceZone=1;
	

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
	function line(numberP) {
		this.Number = numberP;
		
		return this;
	}
	
	//This object represents a case in the choicezone (left menu). Its main goal is to allow people to choose a particule.
	function CaseGUI(graphicRepresentationP) {
		this.graphicRepresentation = graphicRepresentationP;
		return this;
	}
	
	
	
	//####################################################################################################################
	// VIEW
	//####################################################################################################################
	
	//This function is here to draw what have to be drawn  !
	View = function(){
		
		var i = 0;
		
		if(UpdateDrawZone==1)
		{
		//If the quadrillage option is on we draw line ! else we don't !
			if(quadrillageOn==1)
			{
				var StepX=widthArea/(1+line.length);
				
				for(i=0;i<line.length;i++)
				{
					Chart.append("svg:line").attr("x1",StepX*(i+1)).attr("x2",StepX*(i+1)).attr("y1",0).attr("y2",heightArea).style("stroke","#CCCCCC");
				}
			}
			UpdateDrawZone=0;
		}
		if(UpdateChoiceZone==1)
		{
			
			for(i=0;i<CaseToDraw;i++)
			{
				ChoiceZone.append("svg:line").attr("x1",0).attr("x2",0).attr("y1",i*widthChoice).attr("y2",(i+1)*widthChoice-20).style("stroke","black");
				ChoiceZone.append("svg:line").attr("x1",StepX*(i+1)).attr("x2",StepX*(i+1)).attr("y1",0).attr("y2",0).style("stroke","black");
				ChoiceZone.append("svg:line").attr("x1",StepX*(i+1)).attr("x2",StepX*(i+1)).attr("y1",0).attr("y2",heightArea).style("stroke","#CCCCCC");
				ChoiceZone.append("svg:line").attr("x1",StepX*(i+1)).attr("x2",StepX*(i+1)).attr("y1",0).attr("y2",heightArea).style("stroke","#CCCCCC");	
			}
		}
	}
	
	
	Init = function(){
		Chart = d3.select("#" + ZoneToDraw).append("svg").attr("class", "chart").attr("width", widthArea).attr("height", heightArea);
		ChoiceZone = d3.select("#ChoiceZone").append("svg").attr("class", "choicezone").attr("width", widthChoice).attr("height", heightArea);
		Lines.push(new line(1));
		
	}
	
	Init();
	View();
		
}



function DrawPaleCircle(ChartParameter,CenterX,CenterY){
	return ChartParameter.append("circle").attr("cx", CenterX).attr("cy", CenterY).attr("r", 5).style("stroke", "#CCCCCC").style("stroke-opacity", 0.01).style("opacity", 0.1)	
}
