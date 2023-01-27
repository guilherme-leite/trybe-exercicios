package labs_34;

public class Calculadora {
	
	private static double result;
	
	Calculadora(int result) {
		Calculadora.result = result;
	}
	
	Calculadora() { }
	
	public static int somar(int num1, int num2) {
		return num1 + num2;
	}
	
	public static int subtrair(int num1, int num2) {
		return num1 - num2;
	}
	
	public static int multiplicar(int num1, int num2) {
		return num1 * num2;
	}
	
	public static int dividir(int num1, int num2) {
		return num1 / num2;
	}
	
	public static int elevarNumeroANezimaPotencia(int num1, int num2) {
		int result = 0;
		
		for (int i = 0; i < num1; i++) {
			result = num1 * num1;
		}
		
		return result;
	}
	
	public static int fatorial(int num) {
		if (num == 0) {
			return 1;
		}
		
		if (num < 0) {
			return 0;
		}

		int result = num;
		
		for (int i = (num - 1); i > 1; i--) {
			result *= i;
		}
		
		return result;
	}
}
