package lambdas;

public class CalculoTeste2 {

	public static void main(String[] args) {
		
		Calculo soma = (x, y) -> {
			return x + y;
		};
		
		Calculo multiplicacao = (x, y) -> x * y;
		
		System.out.println(soma.executar(2, 2));
		System.out.println(multiplicacao.executar(2, 2));
		
	}

}
