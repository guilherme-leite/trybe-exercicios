package labs_37_38_39_40_41_42_43.EX03;

public class Teste {

	public static void main(String[] args) {
		
		Animal camelo = new Animal("Camelo", 150, "Amarelo", "Terra", 2);
		
		Peixe tubarao = new Peixe("Tubarão", 300, "Cinzento", "Mar", 1.5, "Barbatanas e cauda.");
		
		Mamifero urso = new Mamifero("Urso-do-Canadá", 180, "terra", "Vermelho", 0.5, "mel");
//		
//		System.out.println(camelo.toString());
//		System.out.println(tubarao.toString());
//		System.out.println(urso.toString());

		Animal[] animais = new Animal[3];
		animais[0] = camelo;
		animais[1] = tubarao;
		animais[2] = urso;
		
		System.out.println("Zoo");
		
		System.out.println("--------------------------");
		
		for (Animal a: animais) {
			System.out.println(a);
			System.out.println("--------------------------");
		}
		
	}
	
}
