// Importing the Triangle class from shape.js for testing
const { Triangle } = require('./shape');

describe('Triangle class', () => {
  it('should render SVG content correctly', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });
});
