package labs_37_38_39_40_41_42_43;

public class ContaEspecial extends ContaBancaria {
	
	private double limite;
	
	public double getLimite() {
		return limite;
	}

	public void setLimite(double limite) {
		this.limite = limite;
	}
	
	@Override
	public String toString() {
		String s = "Conta Especial";
		s += "Seu limite é de: " + this.getLimite() + "\n";
		s += super.toString();
		
		return s;	
	}

	public boolean sacar(double valor) {
		double saldoComLimite = this.getSaldo() + this.limite;
		
		if ((saldoComLimite - valor) >= 0) {
			this.setSaldo(this.getSaldo()-valor);
			return true;
		} return false;
	}
	
}
