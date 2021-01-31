
const {mean,median,mode} = require('./equations');



describe("find mean", () => {
  test("get the average of #'s in an array", () => {
    expect(mean[1,2,3]).toBe(2);
    expect(mean[1, 2, 3, 4]).toBe(5);
  })
})
describe("find median", () => {
  test("get the middle number", () => {
    expect(median[1,2,3]).toBe(2);
    expect(median([])).toBe(0);
    expect(median[1,2,3,4].toBe(2.5))  
  })
})
describe("find mode", () => {
  test("get the number that appears the most in an array", () => {
    expect(mean[1,1,2,3]).toBe(1);
    
  })
})
