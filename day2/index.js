/**
 * Advent of code day 2
 * https://adventofcode.com/2018/day/2
 * Author: Austin Albrecht
 */

const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString()
let lines = input.split('\n')
if (lines[lines.length - 1] === '') {
  lines.pop()
}

let doubles = 0
let triples = 0

function checkLine (line) {
  let charCount = {}
  for (let i = 0; i < line.length; i++) {
    let char = line[i]
    if (charCount[char]) {
      charCount[char]++
    } else {
      charCount[char] = 1
    }
  }
  return charCount
}

function checkForDuplicateAndTriple (cc) {
  let hadDouble = false
  let hadTriple = false
  for (var char in cc) {
    if (cc.hasOwnProperty(char)) {
      switch (cc[char]) {
        case 2:
          if (!hadDouble) {
            doubles++
            hadDouble = true
          }
          break
        case 3:
          if (!hadTriple) {
            triples++
            hadTriple = true
          }
          break
      }
    }
  }
}

for (let i = 0; i < lines.length; i++) {
  let cc = checkLine(lines[i])
  checkForDuplicateAndTriple(cc)
}

console.log('Doubles:', doubles)
console.log('Triples:', triples)
console.log('Checksum:', doubles * triples)
