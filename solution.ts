Here is a TypeScript console application that solves the problem:

```typescript
function countPrimes(n: number): number {
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}

function isPrime(num: number): boolean {
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

let num = 10;
console.log(`Number of primes less than ${num} is ${countPrimes(num)}`);
```

This application defines two functions: `countPrimes` and `isPrime`. `countPrimes` iterates from 2 to the given number and increments a counter for each prime number it encounters. `isPrime` checks if a number is prime by trying to divide it by all numbers up to its square root. If any division results in a whole number, then the number is not prime. The application then uses these functions to count the number of primes less than a given number and logs the result to the console.