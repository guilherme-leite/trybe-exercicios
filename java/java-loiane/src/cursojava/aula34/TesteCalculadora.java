package cursojava.aula34;

public class TesteCalculadora {

	public static void main(String[] args) {

		
		int[] vetorInteiros = new int[5];
		
		System.out.println(MinhaCalculadora.soma(1, 2));
		System.out.println(MinhaCalculadora.soma(0.5, 0.7));
		System.out.println(MinhaCalculadora.soma(1, 3, 44));
		System.out.println(MinhaCalculadora.soma(vetorInteiros));
	}


}
