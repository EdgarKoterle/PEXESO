var player=1;
var field=[[1,1,2,2],[3,3,4,4],[5,5,6,6],[7,7,8,8]];

function shuffle ()
{
	var i, temp;
	for (i=0; i<20; i++)
	{
		var r1=Math.floor(Math.random()*4);
		var c1=Math.floor(Math.random()*4);
		var r2=Math.floor(Math.random()*4);
		var c2=Math.floor(Math.random()*4);
		temp=field[r1][c1];
		field[r1][c1]=field[r2][c2];
		field[r2][c2]=temp;
	}
}

function clickImg (value)
{
	var row=Math.floor(value/10);
	var col=value%10;
	console.log("row: "+row+", col: "+col);

	if (field[row] [col]>0)
	{
		var source="img/img"+field[row] [col]+".png";
		var imageID="img"+row+col;
		console.log(imageID);
		document.getElementById(imageID).src=source;
	}
}