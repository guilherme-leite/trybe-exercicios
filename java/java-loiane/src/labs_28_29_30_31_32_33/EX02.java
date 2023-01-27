package labs_28_29_30_31_32_33;

public class EX02 {

	public static void main(String[] args) {
		ContaCorrente conta = new ContaCorrente();
		
		conta.setNumero("123456");
		conta.setAgencia("1020");
		conta.setEspecial(true);
		conta.setLimiteEspecial(500.00);
		conta.setValorEspecialUsado(0);
		conta.setSaldo(-10);
		
		System.out.println("O saldo da conta " + conta.getNumero() + " é de " + conta.getSaldo() + ".");
		
		boolean saqueEfetuado = conta.saque(500);
		
		if(saqueEfetuado) {
			System.out.println("Saque efetuado!");
			System.out.println("O saldo atual conta " + conta.getNumero() + + conta.getSaldo());
		} else {
			System.out.println("Saldo insuficiente!");
		}

		conta.saldo();
		
		conta.deposito(10);
		
		conta.saque(500);
		
		if(saqueEfetuado) {
			System.out.println("Saque efetuado!");
			System.out.println("O saldo atual conta " + conta.getNumero() + conta.getSaldo());
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
