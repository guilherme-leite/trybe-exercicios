package cursojava.aula31;

public class Carro {
	
	public String marca;
	String modelo;
	int numPassageiros;
	double capCombustivel;
	private double consumoCombustivel;
	
	public void exibirAutonomia() {
		System.out.println("A autonomia do carro é de " + this.capCombustivel * this.consumoCombustivel + "km");
	}

	double obterAutonomia() {
		System.out.println("metodo obterAutonomia chamado");
		return this.capCombustivel * this.consumoCombustivel;
	}
	
	private double divideKmPorCombustivel(double km) {
		return km / this.consumoCombustivel;
	}
	
	public double calcularCombustivel(double km) {

		return this.divideKmPorCombustivel(km);
	}

}
