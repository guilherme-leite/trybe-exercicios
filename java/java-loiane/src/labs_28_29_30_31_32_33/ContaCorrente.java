package labs_28_29_30_31_32_33;

public class ContaCorrente {
	
	private String numero;
	private String agencia;
	private boolean especial;
	private double limiteEspecial;
	
	public ContaCorrente(String numero, String agencia, boolean especial, double limiteEspecial,
			double valorEspecialUsado, double saldo) {
		this.numero = numero;
		this.agencia = agencia;
		this.especial = especial;
		this.limiteEspecial = limiteEspecial;
		this.valorEspecialUsado = valorEspecialUsado;
		this.saldo = saldo;
	}

	public ContaCorrente() { }

	private double valorEspecialUsado;
	private double saldo;
	
	public String getNumero() {
		return numero;
	}
	
	public void setNumero(String numero) {
		this.numero = numero;
	}
	
	public String getAgencia(String numero) {
		return agencia;
	}
	
	public void setAgencia(String agencia) {
		this.agencia = agencia;
	}
	
	public boolean isEspecial() {
		return especial;
	}
	
	public void setEspecial(boolean especial) {
		this.especial = especial;
	}
	
	public double getLimiteEspecial() {
		return limiteEspecial;
	}
	
	public void setLimiteEspecial(Double limiteEspecial) {
		this.limiteEspecial = limiteEspecial;
	}
	
	public double getValorEspecialUsado() {
		return valorEspecialUsado;
	}
	
	public void setValorEspecialUsado(double valorEspecialUsado) {
		this.valorEspecialUsado = valorEspecialUsado;
	}
	
	public double getSaldo() {
		return saldo;
	}
	
	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}

	public boolean saque(double quantiaASacar) {
		if (saldo >= quantiaASacar) {
			saldo -= quantiaASacar;
			return true;
		} else {
			if (especial) {
			  double limite = limiteEspecial + saldo;
			  
			  if (limite >= quantiaASacar) {
			  		saldo -= quantiaASacar;
			  		return true;
			  } else {
				  return false;
			  }
			} else {
				return false;
			}
		}
	}
	
	public void deposito(double valor) {
		saldo += valor;
	}
	
	public void saldo() {
		System.out.println("O saldo atual da conta é de " + saldo);
	}
	
	public void limite() {
		System.out.println("O saldo atual do seu limite de cheque especial é de " + limiteEspecial);
	}

	public boolean verificarChequeEspecial() {
		return saldo < 0;
	}
	
}