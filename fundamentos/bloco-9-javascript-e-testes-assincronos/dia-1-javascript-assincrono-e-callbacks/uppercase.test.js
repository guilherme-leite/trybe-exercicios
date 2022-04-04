const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('uppercase("test") to equal "TEST".', (done) => {
  uppercase('test', (str) => {
    try {
      expect(str).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});

// test('Não deveria passar', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria passar');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }, 500);
// });