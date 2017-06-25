// Return all prime numbers from 2 to n
let sieveOfEratosthenes = (n, nextPrime = 2, sieve = [0, 0], primes = []) => {
  if (nextPrime > n) {
    return primes;
  }

  primes.push(nextPrime);
  for (let i = nextPrime; i <= n; i += nextPrime) {
    sieve[i] = i;
  }

  for (let i = nextPrime; i <= n; i++) {
    if (!sieve[i]) {
      sieveOfEratosthenes(n, i, sieve, primes);
      break;
    }
  }
  return primes;
}

let result = sieveOfEratosthenes(100);
console.log(result);