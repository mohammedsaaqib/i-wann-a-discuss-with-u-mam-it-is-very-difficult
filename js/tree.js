class tree
{
	constructor(x,y)
	{

	var options = {

		isStatic : true,
		density :2.0

	}		
	    this.x=x;
		this.y=y;
		this.width=10;
		this.height=20;
		this.image=loadImage("images/tree.png")
		this.body = Bodies.rectangle(this.x,this.y,10,20,options)
		World.add(world,this.body);
		
		
		

	}
	display()
	{
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y);
			imageMode(CENTER);
			image(this.image, 0,0,500, 700)
			pop()
			
	}

}