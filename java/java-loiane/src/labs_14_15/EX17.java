package labs_14_15;

import java.util.Scanner;

public class EX17 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Entre com um ano");
		
		int ano = scan.nextInt();
		
		if ((ano % 400 == 0) || (ano % 4 == 0 && ano % 100 != 0)) {
			System.out.println("Este é um ano bisexto");
		} else	System.out.println("Esse não é um ano bisexto");
		
		}
}
