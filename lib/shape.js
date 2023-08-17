class Circle {
  constructor(color) {
    this.color = color;
  }

  generateSVG(text, textColor) {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="90" fill="${this.color}" />
          <text x="150" y="105" font-family="Arial" font-size="24" fill="${textColor}" text-anchor="middle">${text}</text>
      </svg>
    `;
  }
}

// Define the Square and Triangle classes similarly...

module.exports = {
  Triangle,
  Circle,
  Square,
};
