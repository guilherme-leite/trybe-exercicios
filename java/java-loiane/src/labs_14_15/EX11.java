package labs_14_15;

import java.util.Scanner;

public class EX11 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Qual é o seu salário?");
		
		double salario = scan.nextInt();
		
		System.out.println("Seu salário antigo é: " + salario);
		
		if (salario < 280) {
			System.out.println("O aumento é de 20% equivalente a: " + (salario * .2));
			double total = salario + salario * .20;
			System.out.println("Totalizando " + total);
		} else if (salario >= 280 && salario >= 700) {
			System.out.println("O aumento é de 15% equivalente a: " + (salario * .15));
			double total = salario + salario * .15;
			System.out.println("Totalizando " + total);
		} else if (salario >= 700 && salario >= 1500) {
			System.out.println("O aumento é de 10% equivalente a: " + (salario * .1));
			double total = salario + salario * .10;
			System.out.println("Totalizando " + total);
		} else {
			System.out.println("O aumento é de 5% equivalente a: " + (salario * .05));
			double total = salario + salario * .05;
			System.out.println("Totalizando " + total);
		}
		
	}
}
