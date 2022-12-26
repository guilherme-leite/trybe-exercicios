package labs_11_12_13;

import java.util.Scanner;

public class CToFConverter {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Qual a temperatura em graus C");
		
		double celsius = scan.nextDouble();
		
		double result = ((celsius*9)/5)+32;
		
		System.out.println("A temperatura em F é: " + result);

	}

}
