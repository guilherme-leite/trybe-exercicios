package labs_16_17;

import java.util.Scanner;

public class EX2 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Forneça um nome e uma senha");
		
		String nome = scan.next();
		String senha = scan.next();
		
		while (nome.contentEquals(senha)) {
			System.out.println("Sua senha não pode ser igual ao seu nome de usuário");
			nome = scan.next();
			senha = scan.next();
		}
		
		System.out.println("Obrigado");
	
	}

}
