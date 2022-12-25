package labs;

import java.util.Scanner;

public class MeterToCentimeterConverter {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Digite o comprimento em metros.");
		
		double comprimento = scan.nextDouble();
		
		double result = comprimento * 100;
		
		System.out.println("O comprimento em metros é de " + result + "cm");

	}

}
