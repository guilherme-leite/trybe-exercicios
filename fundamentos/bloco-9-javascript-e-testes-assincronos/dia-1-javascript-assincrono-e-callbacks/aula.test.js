test('Não deveria passar', () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria passar');
  }, 500);
});