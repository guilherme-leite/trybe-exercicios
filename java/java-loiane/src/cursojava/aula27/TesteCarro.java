package cursojava.aula27;

import cursojava.aula27.Carro;

public class TesteCarro {

	public static void main(String[] args) {
		Carro van = new Carro();
		
		van.marca = "Fiat";
		van.modelo = "Ducato";
		van.numPassageiros = 10;
		van.capCombustivel = 100;
		van.consumoCombustivel = 0.2;
		
		System.out.println(van.marca);
		System.out.println(van.modelo);
		
		van.exibirAutonomia();

		double autonomia = van.obterAutonomia();
		
		System.out.println(autonomia);
		
		double qtdCombustivel = van.calcularCombustivel(10);
		
		System.out.println(qtdCombustivel);
	}

}
