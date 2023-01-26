package labs_25_26_27;

public class ContaCorrente {
	
	String numero;
	String agencia;
	boolean especial;
	double limiteEspecial;
	double valorEspecialUsado;
	double saldo;

	boolean saque(double quantiaASacar) {
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
	
	void deposito(double valor) {
		saldo += valor;
	}
	
	void saldo() {
		System.out.println("O saldo atual da conta é de " + saldo);
	}
	
	void limite() {
		System.out.println("O saldo atual do seu limite de cheque especial é de " + limiteEspecial);
	}

	boolean verificarChequeEspecial() {
		return saldo < 0;
	}
	
}