#Recursive functions ![Travis-ci](https://travis-ci.org/rbrtsmith/javascript-recursive-functions.svg?branch=master)

I created these functions along with their relevant unit tests to help cement my understanding of recursion in JavaScript.  They are built with simplicity in mind.  If I were looking to improve the performance of these I would look into techniques like Memoization which could in some cases drastically reduce the quantity of function calls for a given algorithm.

It's also worth noting that some of problems are better solved iteratively, however none of these are ever intended to be used in production code and the purpose here was to see how they can be solved via recursion.

* [Factorial](https://github.com/rbrtsmith/javascript-recursive-functions/tree/master/functions/factorial)
* [Fibonacci](https://github.com/rbrtsmith/javascript-recursive-functions/tree/master/functions/fibonacci)
* [Filter](https://github.com/rbrtsmith/javascript-recursive-functions/tree/master/functions/filter)
* [Map](https://github.com/rbrtsmith/javascript-recursive-functions/tree/master/functions/map)
* [Fizzbuzz](https://github.com/rbrtsmith/javascript-recursive-functions/tree/master/functions/fizzbuzz)
* [Reverse Array](https://github.com/rbrtsmith/javascript-recursive-functions/tree/master/functions/reverseArray)
* [Reverse String](https://github.com/rbrtsmith/javascript-recursive-functions/tree/master/functions/reverseString)
* [Merge Sort](https://github.com/rbrtsmith/javascript-recursive-functions/tree/master/functions/mergeSort)

Uses [Jest](https://facebook.github.io/jest/) for unit tests.

* Pull down dependencies

  ```
  yarn
  ```
* Linting

  ```
  yarn lint
  ```
* Unit tests

  ```
  yarn unit
  ```
* Unit tests with coverage

  ```
  yarn unit:coverage
  ```
* Unit tests in watch mode

  ```
  yarn unit:watch
  ```
* Linting + unit tests

  ```
  yarn test
  ```
