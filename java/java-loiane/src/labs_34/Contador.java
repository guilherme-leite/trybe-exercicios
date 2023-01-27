package labs_34;

public class Contador {

	private static int contador;

	public Contador(int contador) {
		Contador.contador = contador;
	}
	
	public Contador() {
		contador += 1;
	}
	
	public void getContador() {
		System.out.println(contador);
	}
	
	public static void setContador(int num) {
		Contador.contador = num;
	}
	
	public static void incrementarContador() {
		Contador.contador += 1;
	}
	
	public static void decrementarContador() {
		Contador.contador -= 1;
	}
	
	public static void exibirContador() {
		System.out.println("O contador marca: " + Contador.contador);
	}
	
}
