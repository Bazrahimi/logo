
//shape.js
//Circle class definitions
class Circle {
  //constructor take a color as argument and store the color.
  constructor(color) {
    this.color = color;
  }
  //method to create SVG contenet for cirle shape
  generateSVG(text, textColor) {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="30" fill="${this.color}" />
          <text x="150" y="105" font-family="Arial" font-size="24" fill="${textColor}" text-anchor="middle">${text}</text>
      </svg>
    `;
  }
}
// square class
class Square {
  constructor(color) {
    this.color = color;
  }

  generateSVG(text, textColor) {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect x="100" y="75" width="100" height="100" fill="${this.color}" />
          <text x="150" y="105" font-family="Arial" font-size="24" fill="${textColor}" text-anchor="middle">${text}</text>
      </svg>
    `;
  }
  
}


//Triangle class definition
class Triangle {
  constructor(color = 'black') { // Added default color in case no color is passed
    this.color = color;
  }

  setColor(color) { // Added setColor method
    this.color = color;
  }

  render() {  // Added render method to generate only the shape SVG
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }

  generateSVG(text, textColor) {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          ${this.render()}  // Use render() method here
          <text x="150" y="105" font-family="Arial" font-size="24" fill="${textColor}" text-anchor="middle">${text}</text>
      </svg>
    `;
  }
}


//Exporting the classes for external Use
module.exports = {
  Triangle,
  Circle,
  Square,
};
