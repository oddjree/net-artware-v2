/* global random, colorMode, fill, stroke, sin, ellipse,
 HSB, frameCount */
window.brushes.oscilattingCircles = {
  name: function() {
  	let icon = document.createElement('img')
  	image.setAttribute('src', 'images/o-c.gif')

  	document.body.appendChild(icon)
  }
  draw: function () {
    const hue = random(0, 360)
    colorMode(HSB)
    fill(hue, 50, 100)
    stroke(0, 0, 0)
    const radius = sin(frameCount * 0.1) * 80
    ellipse(window.input.x, window.input.y, radius, radius)
  }
}
