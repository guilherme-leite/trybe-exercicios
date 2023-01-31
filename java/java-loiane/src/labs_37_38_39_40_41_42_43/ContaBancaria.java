package labs_37_38_39_40_41_42_43;

public class ContaBancaria {
	
	private String nomeCliente;
	private String numConta;
	private double saldo;
	
	public String getNumConta() {
		return numConta;
	}

	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}

	public void setNumConta(String numConta) {
		this.numConta = numConta;
	}
	
	public String getNomeCliente() {
		return nomeCliente;
	}

	public void setNomeCliente(String nomeCliente) {
		this.nomeCliente = nomeCliente;
	}

	public void depositar(double valor) {
		saldo += valor;
	}
	
	public boolean sacar(double valor) {
		if ((saldo - valor) >= 0) {
			saldo -= valor;
			return true;
		} else {
			System.out.println("Saldo insuficiente.");
			return false;
		}
	}
	
	@Override
	public String toString() {
		String s = "Conta Bancaria Simples";
		s += "Nome do cliente: " + this.getNomeCliente() + "\n";
		s += "Nº da conta: " + this.getNumConta() + "\n";
		s += "Saldo: " + this.getSaldo() + "\n";
		
		return s;
	}
}
