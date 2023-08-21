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
      <svg width="150" height="70" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
          <text x="150" y="105" font-family="Arial" font-size="24" fill="${textColor}" text-anchor="middle">${text}</text>
      </svg>
    `;
  }
}


//Triangle class definition
class Triangle {
  constructor(color) {
    this.color = color;
  }

  generateSVG(text, textColor) {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="70,30 140,170 20,80" fill="${this.color}" />
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
