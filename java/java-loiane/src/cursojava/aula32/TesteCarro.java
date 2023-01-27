package cursojava.aula32;

public class TesteCarro {

	public static void main(String[] args) {
		
		Carro van = new Carro();
		
		van.setMarca("Fiat");
		van.setModelo("Estrada");
		van.setNumPassageiros(2);
		van.setCapCombustivel(50);
		van.setConsumoCombustivel(0.13);
		
		System.out.println(van.getMarca());
		System.out.println(van.getModelo());
		System.out.println(van.getNumPassageiros());
		System.out.println(van.getCapCombustivel());
		System.out.println(van.getConsumoCombustivel());

	}

}
