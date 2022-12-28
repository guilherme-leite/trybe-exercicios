package labs_14_15;

import java.util.Scanner;

public class EX20 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Por favor forneca as 3 notas parciais.");
		
		double nota1 = scan.nextDouble();
		double nota2 = scan.nextDouble();
		double nota3 = scan.nextDouble();
		
		double media = (nota1 + nota2 + nota3) / 3;
		
		if (media == 10) {
			System.out.println("Aprovado com distincão");
		} else if (media >= 7) {
			System.out.println("Aprovado");
		} else if (media < 7) {
			System.out.println("Reprovado");
		}
		
	}	
}
