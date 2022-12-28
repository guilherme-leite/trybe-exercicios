package labs_14_15;

import java.util.Scanner;

public class EX24 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Digite dois números");
		
		int input1 = scan.nextInt();
		int input2 = scan.nextInt();
		
		System.out.println("Qual operacao deseja realizar?");

		System.out.println("1: Soma");
		System.out.println("2: Subtracão");
		
		int operacao = scan.nextInt();
		
		int produto = 0;

		if (operacao == 1) {
			produto = input1 + input2;
		} else if (operacao == 2) {
				produto = input1 - input2;
		}
		
		System.out.println("O produto é " + produto);
		
		if (produto % 2 == 0) {
			System.out.println("O produto é pár");	
		} else System.out.println("O produto é ímpar");
	
		if (produto >= 0) {
			System.out.println("O produto é positivo");	
		} else System.out.println("O produto é negativo");
		
		if (Math.round(produto) == produto) {
			System.out.println("O produto inteiro");	
		} else System.out.println("O produto é uma fracão");
	}
}
