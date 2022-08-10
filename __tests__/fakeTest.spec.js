describe("Fake Tests", () => {
    const output = "hello world"
    const value = "hello world"
    test('runs successfully', ()=> {
        expect(value).toEqual(output)
    })
});