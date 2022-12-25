package labs;

import java.util.Scanner;

public class WorkingWages {

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);
		
		System.out.println("Quanto você ganha por hora?");
		
		double wage = scan.nextDouble();
		
		System.out.println("Quantas horas você trabalhou esse mês?");
		
		double hours = scan.nextDouble();
		
		double bruto = hours * wage;
		
		double ir = bruto * 0.11;
		
		double inss = bruto * 0.08;
		
		double sindicato = bruto * 0.05;
		
		double liquido = bruto - (ir + inss + sindicato);
		
		System.out.println("bruto: " + bruto + ", IR " + ir + ", INSS: " + inss + ", Sindicato: " + sindicato + ", Liquido:  " + liquido);

	}

}
