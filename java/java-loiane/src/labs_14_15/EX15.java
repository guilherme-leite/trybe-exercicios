package labs_14_15;

import java.util.Scanner;

public class EX15 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Digite o comprimento dos 3 lados de um triângulo.");
		
		double l1 = scan.nextDouble();
		double l2 = scan.nextDouble();
		double l3 = scan.nextDouble();
		
		
		if (l1+l2 > l3 && l1+l3 > l2 && l2+l3 > l1) {
			if (l1 == l2 && l1 == l3) {
				System.out.println("Triângulo equilátero");
			} else if (l1 == l2 || l1 == l3) {
				System.out.println("Triângulo isósceles");
			} else if (l1 != l2 && l1 != l3) {
				System.out.println("Triângulo escaleno");
			}
		} else {
			System.out.println("Não é um triângulo");
		}
		
			}
}
