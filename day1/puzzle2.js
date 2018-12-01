/**
 * Advent of code day 1 part 2
 * https://adventofcode.com/2018/day/1
 * Author: Austin Albrecht
 */

const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString()
let freqChanges = input.split('\n')
if (freqChanges[freqChanges.length - 1] === '') {
  freqChanges.pop()
}

let frequency = 0

let frequenciesSeen = [0]

while (true) {
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

    if (frequenciesSeen.indexOf(frequency) !== -1) {
      console.log('Duplicate found: ', frequency)
      process.exit()
    }

    frequenciesSeen.push(frequency)
  }
}
