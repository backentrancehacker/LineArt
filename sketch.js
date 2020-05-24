const colors = [
	{
		r: 0,
		g: 0,
		b: 0
	},
	{
		r: 255,
		g: 255,
		b: 255
	}
]
function setup(){
	createCanvas(windowWidth, windowHeight)
	background('#fff')
  	frameRate(10)
}
function draw(){
	const shapes = [ellipse, rect]
	for(let y = 0; y < windowHeight; y += 100){
		for(let x = 0; x < windowWidth; x += 100){
			
			let color = colors[Math.floor(random(colors.length))]

			let chance = random(1),
				shape = shapes[Math.round(random(1))]
			fill(color.r, color.g, color.b)
			if(chance > 0.5){
				noStroke()
			}
			else{
				strokeWeight(4)
				noFill()
			}
			shape(x, y, 100, 100)
		}
	}
}
function windowResized() {
  	resizeCanvas(windowWidth, windowHeight)
}
