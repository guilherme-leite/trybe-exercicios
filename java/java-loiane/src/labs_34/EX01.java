package labs_34;

public class EX01 {

	public static void main(String[] args) {

		Contador cont = new Contador();
		
		cont.getContador();
		
		Contador cont2 = new Contador();
		
		cont2.getContador();

		Contador cont3 = new Contador();
		
		cont3.getContador();
		
		Contador.decrementarContador();
		
		Contador.exibirContador();
		
		Contador.incrementarContador();
		
		Contador.setContador(66);
		
		Contador.exibirContador();
	}

}
