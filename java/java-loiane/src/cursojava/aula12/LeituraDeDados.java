package cursojava.aula12;

import java.util.Scanner;

public class LeituraDeDados {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
//		System.out.println("Digite o seu nome completo:");
//		String nomeCompleto = scan.nextLine();
//		System.out.println("Seu nome completo é " + nomeCompleto);
//		
//		System.out.println("Digite o seu primeiro nome");
//		String primeiroNome = scan.next();
//		System.out.println("Seu primeiro nome é " + primeiroNome);
//		
//		System.out.println("Digite a sua idade");
//		int idade = scan.nextInt();
//		System.out.println("Sua idade é " + idade);
//		
//		System.out.println("Digite a sua altura");
//		double altura = scan.nextDouble();
//		System.out.println("Sua altura é " + altura);
		
		System.out.println("Digite o seu primeiro nome, idade, quantidade de filhos, altura e se tem bicho de estimacao");
		String primeiroNome = scan.next();
		int idade = scan.nextInt();
		byte filhos = scan.nextByte();
		double altura = scan.nextDouble();
		boolean pets = scan.hasNext();
		System.out.println("Você digitou os seguintes valores:");
		System.out.println("Nome: " + primeiroNome);
		System.out.println("Idade: " + idade);
		System.out.println("Filhos: " + filhos);
		System.out.println("Altura : " + altura);
		System.out.println("Pets : " + pets);
}
	}

