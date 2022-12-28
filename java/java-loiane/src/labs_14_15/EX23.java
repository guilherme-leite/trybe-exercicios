package labs_14_15;

import java.util.Scanner;

public class EX23 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Digite um número para saber se o número contem um decimal ou não");
		
		double input = scan.nextDouble();
	
		if (Math.round(input) == input) {
			System.out.println("Não é um número com decimal");
		} else {
			System.out.println("É um número com decimal");
		}
	}
}
