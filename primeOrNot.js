var a = [3, 4, 5, 6, 7, 8];

function test_prime(num) {
  if (num <= 1) {
    console.log(num, "Not a Prime Number");
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log(num, "Not a Prime Number");
    }
  }
  console.log(num, "Is Prime Number");
}

console.log(test_prime(a[0]));
