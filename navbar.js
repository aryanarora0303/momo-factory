// function to return list of prime numbers between two numbers
function getPrimes(a, b) {
    var primes = [];
    for (var i = a; i <= b; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}