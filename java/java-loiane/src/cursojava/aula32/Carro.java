package cursojava.aula32;

class Carro {

	private String marca;
	private String modelo;
	private int numPassageiros;
	private double capCombustivel;
	private double consumoCombustivel;
	
	
	public String getMarca() {
		return this.marca;
	}
	
	public void setMarca(String marca) {
		this.marca = marca;
	}
	
	public String getModelo() {
		return this.modelo;
	}
	
	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	
	public int getNumPassageiros() {
		return this.numPassageiros;
	}
	
	public void setNumPassageiros(int passageiros) {
		this.numPassageiros = passageiros;
	}
	
	public double getCapCombustivel() {
		return this.capCombustivel;
	}
	
	public void setCapCombustivel(double capacidade) {
		this.capCombustivel = capacidade;
	}
	
	public double getConsumoCombustivel() {
		return this.consumoCombustivel;
	}
	
	public void setConsumoCombustivel(double consumo) {
		this.consumoCombustivel = consumo;
	}
}
