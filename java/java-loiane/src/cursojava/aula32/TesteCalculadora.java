package cursojava.aula32;

public class TesteCalculadora {

	public static void main(String[] args) {

		MinhaCalculadora calc = new MinhaCalculadora();
		
		int[] vetorInteiros = new int[5];
		vetorInteiros = [1,3,4,5,6];
		
		System.out.println(calc.soma(1, 2));
		System.out.println(calc.soma(0.5, 0.7));
		System.out.println(calc.soma(1, 3, 44));
		System.out.println(calc.soma(vetorInteiros));
	}

}
