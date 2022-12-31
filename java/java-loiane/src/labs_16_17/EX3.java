package labs_16_17;

import java.util.Scanner;

public class EX3 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Forneça o seu nome.");
		String nome = scan.next();
		
		while (nome.length() < 3) {
			System.out.println("Seu nome deve ter pelo menos três letras.");
			nome = scan.next();
		}

		System.out.println("Forneça a sua idade.");
		double idade = scan.nextInt();
		while (idade < 0 || idade > 150) {
			System.out.println("Sua idade deve ser entre 0 e 150 anos");
			idade = scan.nextInt();
		}
		
		
		System.out.println("Forneça o seu salário.");
		double salario = scan.nextInt();
		while (salario < 0) {
			System.out.println("Por favor, forneça um valor acima de 0.");
			salario = scan.nextInt();
		}

		
		System.out.println("Forneça o seu genero.");
		String genero = scan.next();
		while (!(genero.contentEquals("f") || genero.contentEquals("m"))) {
			System.out.println("Por favor forneça o seu genero");
			genero = scan.next();
		}
		
		
		System.out.println("Forneça o seu estado civil.");
		String estadoCivil = scan.next();
		while (!(estadoCivil.contentEquals("s") || estadoCivil.contentEquals("c") || estadoCivil.contentEquals("v") || estadoCivil.contentEquals("d"))) {
			System.out.println("Por favor forneça o seu estado civil");
			estadoCivil = scan.next();
		}
		
		System.out.println("Obrigado");
	
	}

}