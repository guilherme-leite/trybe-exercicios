package labs_35;

public class EX01 {

	public static void main(String[] args) {

		imprimir(Fibonacci.nthFibonacciNumber(1));
		imprimir(Fibonacci.nthFibonacciNumber(2));
		imprimir(Fibonacci.nthFibonacciNumber(3));
	}

	private static void imprimir(int num) {
		System.out.println(num);
	}
	
}
