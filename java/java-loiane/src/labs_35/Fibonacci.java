package labs_35;

public class Fibonacci {
	public static int nthFibonacciNumber(int num) {
		if (num < 3) {
			return 1;
		}
		
		return nthFibonacciNumber(num - 1) + nthFibonacciNumber(num -2);
	}
}
