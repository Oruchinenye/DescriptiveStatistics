class Rectangle {
  static length = 250
  static breadth = 150

  static calculateArea() {
      console.log(`The area of a rectangle of length: ${Rectangle.length}m and breadth: ${Rectangle.breadth}m is: ${Rectangle.length * Rectangle.breadth} metre squared.`,)
  }
}

//accessing static properties
console.log(`Length: ${Rectangle.length}m`)
console.log(`Breadth: ${Rectangle.breadth}m`)

//accessing of static method.
Rectangle.calculateArea()






class Statistics {
  constructor(array) {
      this.array = array
  }

  mean() {
      let sMean = 0
      for (let i = 0; i < this.array.length; i++) {
          sMean = sMean + this.array[i]
      }
      sMean = sMean / this.array.length
      return sMean

  }

  median() {
      let arr = this.array.sort(function (a, b) {
          return a - b
      })
      let sMedian

      if (arr.length % 2 === 0) {
          let index = arr.length / 2
          let f = arr[index]
          let s = arr[index - 1]
          sMedian = (f + s) / 2
      } else {
          let index = (arr.length - 1) / 2
          sMedian = arr[index]
      }
      return sMedian
  }

  mode() {
      const counter = {}
      for (let item of this.array) {
          counter[item] = ++counter[item] ? ++counter[item] : 1
      }
      let max = Math.max(...Object.values(counter))
      let sMode
      for (let item in counter) {
          if (counter[item] === max)
              sMode = item
      }
      return sMode
  }


  range() {
      let arr = this.array.sort(function (a, b) {
          return a - b
      })
      let lastIndex = arr.length - 1
      let firstIndex = 0
      let sRange = arr[lastIndex] - arr[firstIndex]


      return sRange
  }

  variance() {
      let sVariance
      let total = 0
      let mean = this.mean()
      let n = this.array.length

      for (let item of this.array) {
          total += (item - mean) ** 2
      }

      sVariance = (total / (n - 1)).toFixed(2)

      return sVariance

  }
  standardDeviation() {
      let variance = this.variance()
      let sDeviation = Math.sqrt(variance).toFixed(2)

      return sDeviation
  }

  meanDeviation() {
      let mDeviation
      let total = 0
      let mean = this.mean()
      let n = this.array.length

      for (let item of this.array) {
          total += Math.abs((item - mean))
      }
      mDeviation = (total / n).toFixed(2)

      return mDeviation
  }

  quartileDeviation() {
      let q1 = ((this.array.length + 1) / 4).toFixed(2)
      let q3 = ((3 / 4) * (this.array.length + 1)).toFixed(2)
      let qDeviation = ((q3 - q1) / 2).toFixed(2)

      return qDeviation
  }

}

const dstat = new Statistics([1, 2, 3, 4, 5, 2, 3, 3, 3, 3])

console.log(`mean: `, dstat.mean())
console.log(`median: `, dstat.median())
console.log(`mode: `, dstat.mode())
console.log(`range: `, dstat.range())
console.log(`variance: `, dstat.variance())
console.log(`mean deviation: `, dstat.meanDeviation())
console.log(`standard deviation: `, dstat.standardDeviation())
console.log(`quartile deviation: `, dstat.quartileDeviation())
