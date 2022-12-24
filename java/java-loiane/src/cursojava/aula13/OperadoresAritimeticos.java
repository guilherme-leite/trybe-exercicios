package cursojava.aula13;

public class OperadoresAritimeticos {

	public static void main(String[] args) {
		int resultado = 1 + 2;
		
		resultado = resultado - 1;
		System.out.println(resultado);
		
		resultado = resultado / 2;
		System.out.println(resultado);
		
		resultado = resultado * 4;
		System.out.println(resultado);
		
		resultado = resultado % 3;
		System.out.println(resultado);
		
		String primeiraParte = "Esta é a ";
		String segundaParte = "String completa!";
		String completa = primeiraParte + segundaParte;
		System.out.println(completa);
		
		resultado += 11;
		System.out.println(resultado);
		
		System.out.println(resultado--);
		System.out.println(resultado);
		System.out.println(--resultado);
		System.out.println(resultado);
	}

}
