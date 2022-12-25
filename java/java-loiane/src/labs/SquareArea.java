package labs;

import java.util.Scanner;

public class SquareArea {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Digite a base do quadrado");
		
		double lado = scan.nextDouble();
		
		double result = Math.pow(lado, 2);
		
		System.out.println("Essa é a área do quadrado: " + result);

	}

}
