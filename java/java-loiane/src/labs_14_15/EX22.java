package labs_14_15;

import java.util.Scanner;

public class EX22 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Digite um número para saber se é par ou ímpar?");
		
		int input = scan.nextInt();
		
		if (input % 2 == 0) {
			System.out.println("Par!");
		} else System.out.println("Impar!");
	}
}
