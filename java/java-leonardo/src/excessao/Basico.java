package excessao;

public class Basico {

	public static void main(String[] args) {
		
		Aluno a1 = null;

		try {
			imprimir(a1);
		} catch(Exception e) {
			System.out.println("Ocorreu um erro");
			System.out.println(e);
		}
		
		try {
			System.out.println(7/0);
		} catch (ArithmeticException e) {
			System.out.println(e);
		}
		
		System.out.println("Fim");
		
	}
	
	public static void imprimir(Aluno aluno) {
		System.out.println(aluno.nome);
	}

}
