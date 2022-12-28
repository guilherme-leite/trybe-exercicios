package labs_14_15;

import java.util.Scanner;

public class EX21 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Qual o valor do saque?");
		
		int saque = scan.nextInt();
		
		int cem = 0;
		int cinquenta = 0;
		int vinte = 0;
		int dez = 0;
		int cinco = 0;
		int um = 0;
		
		if (saque > 100) {
			cem = saque / 100;
			saque = saque - cem * 100;
		} 
		
		if (saque > 50) {
			cinquenta = saque / 50;
			saque = saque - cinquenta * 50;
		}
		
		if (saque > 10) {
		    dez = saque / 10;
			saque = saque - dez * 10;
		}
		
		if (saque > 5) {
			cinco = saque / 5;
			saque = saque - cinco * 5;
		}
		
		if (saque >= 1) {
			um = saque;
			saque = saque - um;
		}
		
		System.out.println("Notas: " + cem + ", " + cinquenta + ", " + vinte + ", " + dez + ", " + cinco + ", " + um);
		
	}
}
