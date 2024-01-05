Here is a JavaScript console application that solves the problem:

```javascript
function countPrimes(n) {
    let isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i * i < n; i++) {
        if (!isPrime[i]) continue;
        for (let j = i * i; j < n; j += i) {
            isPrime[j] = false;
        }
    }
    return isPrime.filter(val => val).length;
}

console.log(countPrimes(10));
```

This script counts the number of prime numbers less than a given number. It uses the Sieve of Eratosthenes algorithm to find all primes less than the given number. The `countPrimes` function creates an array of boolean values, representing the numbers from 0 to `n - 1`. It then iterates over each number in the array, and if the number is prime, it marks its multiples as not prime. Finally, it counts and returns the number of primes in the array. The result is logged to the console.