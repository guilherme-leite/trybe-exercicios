package labs_47;

public class Excecao {

	public static void main(String[] args) {
		
		int[] vetor = new int[4];
		
		System.out.println("Antes da exception");
		
//		try {
//			vetor[4] = 1;
//		} catch (Exception e) {
//			System.out.println(e);
//		}
		
		try {
			vetor[4] = 1;
			
			System.out.println("Esse texto não sera impresso");
		} catch (ArrayIndexOutOfBoundsException exception) {
			System.out.println("Excecao ao acessar um indice que não existe dentro de um array");
		}
		
		System.out.println("Depois da exception");
		
	}

}
