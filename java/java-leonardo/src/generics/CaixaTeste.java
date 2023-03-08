package generics;

public class CaixaTeste {
	public static void main(String[] args) {
		
		Caixa<String> caixaA = new Caixa<>();
		caixaA.guardar("Oi String");
		System.out.println(caixaA.abrir());
		
		Caixa<Double> caixaB = new Caixa<>();
		caixaB.guardar(1.1);
		System.out.println(caixaB.abrir());
	}
}
