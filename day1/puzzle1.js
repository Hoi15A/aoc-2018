/**
 * Advent of code day 1
 * https://adventofcode.com/2018/day/1
 * Author: Austin Albrecht
 */

const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString()
const freqChanges = input.split('\n')

let frequency = 0

for (var i = 0; i < freqChanges.length; i++) {
  let changeType = freqChanges[i].substring(0, 1)
  switch (changeType) {
    case '+':
      frequency += parseInt(freqChanges[i].substring(1, freqChanges[i].length))
      break
    case '-':
      frequency -= parseInt(freqChanges[i].substring(1, freqChanges[i].length))
      break
  }
}

console.log(frequency)
