package labs;

import java.util.Scanner;

public class WorkedHoursPay {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Quanto você ganha por hora?");
		
		double wage = scan.nextDouble();
		
		System.out.println("Quantas horas você trabalhou esse mês?");
		
		double hours = scan.nextDouble();
		
		double result = hours * wage;
		
		System.out.println("Você vai receber " + result + "reais!");

	}

}
