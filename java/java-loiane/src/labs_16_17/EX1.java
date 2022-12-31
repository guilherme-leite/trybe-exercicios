package labs_16_17;

import java.util.Scanner;

public class EX1 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Forneça uma nota de 0 a 10");
		
		int grade = scan.nextInt();
		
		while (grade < 0 || grade > 10) {
			System.out.println("Por favor forneça um número válido.");
			grade = scan.nextInt();
		}
		
		System.out.println("Obrigado");
	
	}

}
