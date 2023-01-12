package labs_20;

import java.util.Scanner;

public class EX04 {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		String [][] compromissos = new String[31][24];
		boolean sair = false;
		boolean diaValido = false;
		boolean horaValida = false;
				
		while (!sair) {
			System.out.println("Digite 1 para adicionar compromisso");
			System.out.println("Digite 2 para verificar compromisso");
			System.out.println("Digite 0 para sair");
			
			int opcao = scan.nextInt();
			
			if (opcao == 1) {
				int dia = 0;
				int hora = 0;
				diaValido = false;
				horaValida = false;
				
				while (!diaValido) {
					System.out.println("Entre com um dia válido do mês.");
					dia = scan.nextInt();
					if (dia >= 1 && dia <= 31) {
						diaValido = true;
					} else {
						System.out.println("Dia inválido, digite novamente.");
					}
				}
				
				while (!horaValida) {
					System.out.println("Entre com um horário válido");
					hora = scan.nextInt();
					if (hora >= 0 && hora <= 24) {
						horaValida = true;
					} else {
						System.out.println("Horário inválido, digite novamente.");
					}
				}
				
				System.out.println("Digite um compromisso");
				compromissos[--dia][hora] = scan.next();

			} else if (opcao == 2) {
				int dia = 0;
				int hora = 0;
				diaValido = false;
				horaValida = false;
				
				while (!diaValido) {
					System.out.println("Entre com um dia válido do mês.");
					dia = scan.nextInt();
					if (dia >= 1 && dia <= 31) {
						diaValido = true;
					} else {
						System.out.println("Dia inválido, digite novamente.");
					}
				}
				
				while (!horaValida) {
					System.out.println("Entre com um horário válido");
					hora = scan.nextInt();
					if (hora >= 0 && hora <= 24) {
						horaValida = true;
					} else {
						System.out.println("Horário inválido, digite novamente.");
					}
				}
				
				System.out.println("Seu compromisso é " + compromissos[--dia][hora]);

			} else if (opcao == 0) {
				System.out.println("Bye");
				sair = true;
			} else {
				System.out.println("Opcão inexistente, digite novamente");
			}
		}
		
	}
}
