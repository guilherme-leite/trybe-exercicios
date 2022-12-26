package labs_11_12_13;

import java.util.Scanner;

public class PescariaDoBem {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Qual o peso total de peixes?");
		
		double peso = scan.nextDouble();
		double excesso = 0;
		double multa = 0;
		
		if (peso > 50) {
			excesso = peso - 50;
			multa = excesso * 4;
		}
		
		System.out.println("Você teve " + excesso + " de exesso");
		System.out.println("Você tem " + multa + " de multa");
		
	}

}
