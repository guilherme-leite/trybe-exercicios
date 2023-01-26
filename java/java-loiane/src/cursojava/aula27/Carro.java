package cursojava.aula27;

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
	
	double calcularCombustivel(double km) {
		double qtdCombustivel = km / consumoCombustivel;

		return qtdCombustivel;
	}
}