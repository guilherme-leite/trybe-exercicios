package labs_14_15;

import java.util.Scanner;

public class EX12 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Qual é o seu valor hora e quantidade de horas trabalhadas no mês?");
		
		double valorHora = scan.nextDouble();
		double horas = scan.nextDouble();
		
		double salario = valorHora * horas;
		double inss = salario * .10;
		double fgts = salario * .11;
		double ir = 0;
		
		System.out.println("Seu salário é de: " + salario);
		
		if (salario <= 900) {
			ir = 0;
		} else if (salario > 900 && salario >= 1500) {
			ir = salario * .05;
		} else if (salario > 1500 && salario >= 2500) {
			ir = salario * .10;
		} else {
			ir = salario * .20;
		}
		
		double descontos = inss + ir;
		double liquido = salario - descontos;
		
		System.out.println("Salário bruto: " + salario);
		System.out.println(" - IR : " + ir);
		System.out.println(" - INSS: " + inss);
		System.out.println(" FGTS: " + fgts);
		System.out.println("Total descontos: " + descontos);
		System.out.println("Total liquido: " + liquido);
	}
}