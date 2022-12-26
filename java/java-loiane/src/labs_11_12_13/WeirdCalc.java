package labs_11_12_13;

import java.util.Scanner;

public class WeirdCalc {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Digite um número inteiro");
		int first = scan.nextInt();
		System.out.println("Digite outro número inteiro");
		int second = scan.nextInt();
		System.out.println("Digite um número real");
		double third = scan.nextInt();
		
		double result01 = first * (second * 2);
		
		double result02 = (first * 3) + third;
		
		double result03 = Math.pow(third, 3);
		
		System.out.println("Digite um número real");
		
		System.out.println("" + first + ", " + second + ", " + third);
		
		System.out.println(result01);
		System.out.println(result02);
		System.out.println(result03);
	}

}
