
package labs_16_17;

import java.util.Scanner;

public class EX14 {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Forneca 10 números");
		
		int pares = 0;
		int impares = 0;
		
		int num1 = scan.nextInt();
		if (num1 % 2 == 0) {
			pares++;
		} else impares++;
		int num2 = scan.nextInt();
		if (num2 % 2 == 0) {
			pares++;
		} else impares++;
		int num3 = scan.nextInt();
		if (num3 % 2 == 0) {
			pares++;
		} else impares++;
		int num4 = scan.nextInt();
		if (num4 % 2 == 0) {
			pares++;
		} else impares++;
		int num5 = scan.nextInt();
		if (num5 % 2 == 0) {
			pares++;
		} else impares++;
		int num6 = scan.nextInt();
		if (num6 % 2 == 0) {
			pares++;
		} else impares++;
		int num7 = scan.nextInt();
		if (num7 % 2 == 0) {
			pares++;
		} else impares++;
		int num8 = scan.nextInt();
		if (num8 % 2 == 0) {
			pares++;
		} else impares++;
		int num9 = scan.nextInt();
		if (num9 % 2 == 0) {
			pares++;
		} else impares++;
		int num10 = scan.nextInt();
		if (num10 % 2 == 0) {
			pares++;
		} else impares++;
	
		System.out.println("Resultado é " + "pares: " + pares + "/" + "impares: " + impares);
	}

}
