package labs_37_38_39_40_41_42_43;

public class Teste {

	public static void main(String[] args) {

		System.out.println("Teste conta bancaria");
		ContaBancaria contaSimples = new ContaBancaria();
		
		contaSimples.setNomeCliente("Cliente Conta Simples");
		contaSimples.setNumConta("77771");

		System.out.println(contaSimples);
		
		contaSimples.depositar(100);
		
		Teste.realizarSaque(contaSimples, 50);
		
		Teste.realizarSaque(contaSimples, 70);
		
		System.out.println("Teste conta poupanca");
		ContaPoupanca contaPoupanca = new ContaPoupanca();
		
		contaPoupanca.setNomeCliente("Cliente Conta Poupanca");
		contaPoupanca.setNumConta("77772");
		contaPoupanca.setDiaRendimento(31);

		System.out.println(contaPoupanca);
		
		contaPoupanca.depositar(100);
		
		Teste.realizarSaque(contaPoupanca, 50);
		
		Teste.realizarSaque(contaPoupanca, 70);
		
		if (contaPoupanca.calcularNovoSaldo(0.5)) {
			System.out.println("Rendimento aplicado, novo saldo é de: " + contaPoupanca.getSaldo());
		} else {
			System.out.println("Hoje não é o dia de rendimento.");
		}
		
		System.out.println("Teste conta Especial");
		ContaEspecial contaEspecial = new ContaEspecial();
		
		contaEspecial.setNomeCliente("Cliente Conta Especial");
		contaEspecial.setNumConta("77773");
		contaEspecial.setLimite(500);

		System.out.println(contaEspecial);
		
		contaEspecial.depositar(100);
		
		Teste.realizarSaque(contaEspecial, 50);
		
		Teste.realizarSaque(contaEspecial, 70);
		
		Teste.realizarSaque(contaEspecial, 490);
		
	}
	
	private static void realizarSaque(ContaBancaria conta, double valor) {
		if (conta.sacar(valor)) {
			System.out.println("Saque realizado. Saldo: " + conta.getSaldo());
		} else {
			System.out.println("Sem saldo. Seu saldo é de: " + conta.getSaldo());
		}
	}

}
