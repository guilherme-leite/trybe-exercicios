package labs_11_12_13;

import java.util.Scanner;

public class ImcCalculator {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Qual é a sua altura fera?");
		
		double altura = scan.nextDouble();
		
		double result = (altura * 72.7) - 58;
		
		System.out.println("Seu peso ideal é isso: " + result);

	}

}
