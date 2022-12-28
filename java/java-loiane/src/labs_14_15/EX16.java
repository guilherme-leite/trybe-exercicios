package labs_14_15;

import java.util.Scanner;

public class EX16 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Entre com os valores de a,b e c.");
		
		double a = scan.nextDouble();
		
		if (a == 0) {
			System.out.println("A não pode ser igual a 0");
		} else {
		
		double b = scan.nextDouble();
		double c = scan.nextDouble();
		
		double delta = Math.pow(b, 2) - (4 * a * c); 
		
		if (delta < 0) {
			System.out.println("Delta é negativo, não existem raizes reais.");
		} else {
			
			System.out.println("O valor de Delta é de:  " + delta);
			
			double x1 = (((-b) + Math.sqrt(delta)) /(2*a));
			double x2 = (((-b) - Math.sqrt(delta)) /(2*a));
			
			System.out.println("X1 = " + x1);
			System.out.println("X2 = " + x2);
		}
		
		}
		
			}
}
