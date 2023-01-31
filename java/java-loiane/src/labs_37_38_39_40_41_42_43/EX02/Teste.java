package labs_37_38_39_40_41_42_43.EX02;

public class Teste {

	public static void main(String[] args) {
		
		PessoaFisica p1 = new PessoaFisica("guilherme", 1000, "12522077796");
		
		PessoaJuridica p2 = new PessoaJuridica("Luana", 5000, "Non101010101");
		
		PessoaFisica p3 = new PessoaFisica("Bruna", 2000, "1252554654654");
		
		PessoaJuridica p4 = new PessoaJuridica("Fernanda", 5000, "agadsfasd1121");

		PessoaFisica p5 = new PessoaFisica("Fabio", 3700, "a98a981981891891");
		
		PessoaJuridica p6 = new PessoaJuridica("Marcos", 4000, "Aiuhiduh12312");
		
		Contribuinte[] contribuintes = new Contribuinte[6];
		
		contribuintes[0] = p1;
		contribuintes[1] = p2;
		contribuintes[2] = p3;
		contribuintes[3] = p4;
		contribuintes[4] = p5;
		contribuintes[5] = p6;
		
		for (Contribuinte c: contribuintes) {
			System.out.println(c.toString());
		}
	}

}
