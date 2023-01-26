package labs_25_26_27;

public class EX02 {

	public static void main(String[] args) {
		ContaCorrente conta = new ContaCorrente();
		
		conta.numero = "123456";
		conta.agencia = "1234";
		conta.especial = true;
		conta.limiteEspecial = 500;
		conta.valorEspecialUsado = 0;
		conta.saldo = -10;
		
		System.out.println("O saldo da conta " + conta.numero + " é de " + conta.saldo + ".");
		
		boolean saqueEfetuado = conta.saque(500);
		
		if(saqueEfetuado) {
			System.out.println("Saque efetuado!");
			System.out.println("O saldo atual conta " + conta.saldo);
		} else {
			System.out.println("Saldo insuficiente!");
		}

		conta.saldo();
		
		conta.deposito(10);
		
		conta.saque(500);
		
		if(saqueEfetuado) {
			System.out.println("Saque efetuado!");
			System.out.println("O saldo atual conta " + conta.saldo);
		} else {
			System.out.println("Saldo insuficiente!");
		}
		
		conta.saldo();
		
		if (conta.verificarChequeEspecial()) {
			conta.limite();
		} else {
			System.out.println("você ainda não utilizou o limite.");
		}
		
	}
}
