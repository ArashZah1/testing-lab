const { test } = require('@jest/globals') //Jest is accessed once and just sits in the file. Have to specify globals
const { returnTwo, greeting, add } = require('./function') 

test('Returns two', function() {
    expect(returnTwo()).toBe(2)
})
test('Says a greeting', function() {
expect(greeting('James')).toEqual('Hello, James')
})
test('add something', function() {
    expect(add(1, 2)).toBe(3)
    expect(add(5, 9)).toBe(14)
})