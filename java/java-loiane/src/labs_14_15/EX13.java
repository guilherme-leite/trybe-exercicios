package labs_14_15;

import java.util.Scanner;

public class EX13 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Digite um número para descobrir o dia da semana correspondente");
		
		int input = scan.nextInt();
		
		switch (input) {
		case 1: System.out.println("Domingo"); break;
		case 2:	System.out.println("Segunda Feira"); break;
		case 3:	System.out.println("Terca Feira"); break;
		case 4: System.out.println("Quarta Feira"); break;
		case 5:	System.out.println("Quinta Feira"); break;
		case 6:	System.out.println("Sexta Feira"); break;
		case 7:	System.out.println("Sábado"); break;
		default: System.out.println("Inválido"); break;
		}
		
	}
}
