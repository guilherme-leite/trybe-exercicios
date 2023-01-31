package labs_37_38_39_40_41_42_43.EX03;

public class Peixe extends Animal {
	
	private String caracteristicas;
	
	
	public Peixe() {
		super();
	}

	public Peixe(String nome, int comprimento, String cor, String ambiente, double velocidade, String caracteristicas) {
		super(nome, comprimento, cor, ambiente, velocidade);
		this.caracteristicas = caracteristicas;
	}

	public String getCaracteristicas() {
		return caracteristicas;
	}

	public void setCaracteristicas(String caracteristicas) {
		this.caracteristicas = caracteristicas;
	}
	
	@Override
	public String toString() {
		String s = super.toString();
		s += "Caracteristica: " + this.getCaracteristicas()  + "\n";
		
		return s;
	}

}
