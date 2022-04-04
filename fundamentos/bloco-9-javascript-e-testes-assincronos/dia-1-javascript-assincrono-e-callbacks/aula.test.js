test('Não deveria passar', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria passar');
      done();
    } catch (error) {
      done(error);
    }
  }, 500);
});

const asyncSum = (a,b,callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
}

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(9,10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});

// cicles.test.js

// let cities = [];

// const addCity = (city) => {
//  cities.push(city);
// };

// const removeCity = (city) => {
//  cities = cities.filter((eachCity) => eachCity !== city);
// };