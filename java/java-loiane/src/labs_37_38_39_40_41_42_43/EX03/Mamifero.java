package labs_37_38_39_40_41_42_43.EX03;

public class Mamifero extends Animal {
	
	private String alimento;
	
	public Mamifero() {
		
	}
	
	public Mamifero(String nome, int comprimento, String cor, String ambiente, double velocidade, String alimento) {
		super(nome, comprimento, cor, ambiente, velocidade);
		this.alimento = alimento;
	}
	 
	public String getAlimento() {
		return alimento;
	}

	public void setAlimento(String alimento) {
		this.alimento = alimento;
	}
	
	public String toString() {
		String s = super.toString();
		s += "Alimento: " +  this.getAlimento()  + "\n";
		
		return s;
	}
	
}
