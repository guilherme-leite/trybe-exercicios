package cursojava.aula13;

public class CurtoCircuito {

	public static void main(String[] args) {

		boolean verdadeiro = true;
		boolean falso = false;
		
		boolean result1 = falso & verdadeiro;
		boolean result2 = falso && verdadeiro;
		
		System.out.println(result1);
		System.out.println(result2);
	}

}
