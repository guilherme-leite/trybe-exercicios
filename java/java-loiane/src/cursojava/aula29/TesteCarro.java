package cursojava.aula29;

public class TesteCarro {

	public static void main(String[] args) {
		
		Carro van = new Carro();
		van.marca = "Fiat";
		van.modelo = "Ducato";
//		van.numPassageiros = 10;
		van.capCombustivel = 100;
		van.consumoCombustivel = 0.2;
		
		System.out.println(van.numPassageiros);
		
		Carro pickUp = new Carro("pampa");
		
		System.out.println(pickUp.marca);
		
		Carro gol = new Carro("Wolks", "Gol", 4, 40, 0.13);
		
		System.out.println(gol.marca);
	}
}
