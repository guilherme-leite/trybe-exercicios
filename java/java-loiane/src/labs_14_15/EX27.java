package labs_14_15;

import java.util.Scanner;

public class EX27 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Quantos quilos você quer?");
		
		double peso = scan.nextInt();
	    
		System.out.println("maca ou morango?");
		
		String fruta = scan.next();
		
		double total = 0;
		
		if (peso < 5) {
			if (fruta.contentEquals("morango")) {
				total = 2.5 * peso;
			} else {
				total = 1.8 * peso;
			}
		} else if (peso > 5) {
			if (fruta.contentEquals("morango")) {
				total = 2.2 * peso;
			} else {
				total = 1.5 * peso;
			}
		}
		
		if (total > 25 || peso > 8) {
			total = total - (total * .10);
		} else {
			System.out.println(total);
		}
		
		
	
	}
}
