package cursojava.aula26;

public class Carro {
	
	String marca;
	String modelo;
	int numPassageiros;
	double capCombustivel;
	double consumoCombustivel;
	
	void exibirAutonomia() {
		System.out.println("A autonomia do carro é de " + capCombustivel * consumoCombustivel + "km");
	}
	
	double obterAutonomia() {
		System.out.println("metodo obterAutonomia chamado");
		return capCombustivel * consumoCombustivel;
	}
}
