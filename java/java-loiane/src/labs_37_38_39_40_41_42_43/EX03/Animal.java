package labs_37_38_39_40_41_42_43.EX03;

public class Animal {

	private String nome;
	private int comprimento;
	private int numeroDePatas = 4;
	private String cor;
	private String ambiente;
	private double velocidade;
	
	public Animal() {

	}

	public Animal(String nome, int comprimento, String cor, String ambiente, double velocidade) {
		super();
		this.nome = nome;
		this.comprimento = comprimento;
		this.cor = cor;
		this.ambiente = ambiente;
		this.velocidade = velocidade;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public int getComprimento() {
		return comprimento;
	}
	public void setComprimento(int comprimento) {
		this.comprimento = comprimento;
	}
	public int getNumeroDePatas() {
		return numeroDePatas;
	}
	public void setNumeroDePatas(int numeroDePatas) {
		this.numeroDePatas = numeroDePatas;
	}
	public String getCor() {
		return cor;
	}
	public void setCor(String cor) {
		this.cor = cor;
	}
	public String getAmbiente() {
		return ambiente;
	}
	public void setAmbiente(String ambiente) {
		this.ambiente = ambiente;
	}
	public double getVelocidade() {
		return velocidade;
	}
	public void setVelocidade(double velocidade) {
		this.velocidade = velocidade;
	}
	
	@Override
	public String toString() {
		String s = "Animal: " + this.getNome() + "\n";
		s +=  "Comprimento: " + this.getComprimento() + "cm" + "\n";
		s +=  "Número de patas: " + this.getNumeroDePatas()  + "\n";
		s +=  "Cor: " + this.getCor()  + "\n";
		s +=  "Ambiente: " + this.getAmbiente()  + "\n";
		s +=  "Velocidade: " + this.getVelocidade()  + "m/s²" + "\n";
		
		return s;
	}

}
