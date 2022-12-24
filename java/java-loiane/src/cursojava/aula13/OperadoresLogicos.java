package cursojava.aula13;

public class OperadoresLogicos {

	public static void main(String[] args) {
		int valor01 = 1;
		int valor02 = 2;
		
		boolean result = ((valor01 == 1) && (valor02 == 2));
		System.out.println("valor01 é 1 e valor02 é 2? " + result);
		
		boolean result02 = ((valor01 == 1) || (valor02 == 2));
		System.out.println("valor01 é 1 ou valor02 é 2? " + result02);
		
		boolean result03 = ((valor01 == 1) ^ (valor02 == 2));
		System.out.println("valor01 é 1 ou valor02 é 2? " + result02);
		
		boolean result04 = (!(valor01 == 1) && (valor02 == 2));
		System.out.println("valor01 é 1 ou valor02 é 2? " + result04);
	}

}
