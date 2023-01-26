package cursojava.aula29;

public class Carro {
	
	String marca;
	String modelo;
	int numPassageiros;
	double capCombustivel;
	double consumoCombustivel;
	
	
	Carro() {
		System.out.println("A classe foi instanceada");
		numPassageiros = 4;
	}
	
	Carro(String marca_) {
		marca = marca_;
	}
	
	Carro(String marca_, String modelo_, int numPassageiros_, double capCombustivel_, double consumoCombustivel_) {
		marca = marca_;
		modelo = modelo_;
		numPassageiros = numPassageiros_;
		capCombustivel = capCombustivel_;
		consumoCombustivel = consumoCombustivel_;
	}
	
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