package labs_20;

import java.util.Scanner;

public class EX05 {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		String [][][] compromissos = new String[12][31][8];
		boolean sair = false;
		boolean diaValido = false;
		boolean horaValida = false;
		boolean mesValido = false;
		int mes = 0;
		int dia = 0;
		int hora = 0;
				
		while (!sair) {
			System.out.println("Digite 1 para adicionar compromisso");
			System.out.println("Digite 2 para verificar compromisso");
			System.out.println("Digite 0 para sair");
			
			int opcao = scan.nextInt();
			
			if (opcao == 1) {
				mes = 0;
				dia = 0;
				hora = 0;
				diaValido = false;
				horaValida = false;
				mesValido = false;
				
				while (!mesValido) {
					System.out.println("Entre com um mês válido");
					mes = scan.nextInt();
					if (mes >= 1 && mes <= 12) {
						mesValido = true;
					} else {
						System.out.println("Mês inválido, digite novamente.");
					}
				}

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
				compromissos[--mes][--dia][hora] = scan.next();

			} else if (opcao == 2) {
				mes = 0;
				dia = 0;
				hora = 0;
				diaValido = false;
				horaValida = false;
				mesValido = false;
				
				while (!mesValido) {
					System.out.println("Entre com um mês válido");
					mes = scan.nextInt();
					if (mes >= 1 && mes <= 12) {
						mesValido = true;
					} else {
						System.out.println("Mês inválido, digite novamente.");
					}
				}

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
					if (hora >= 9 && hora <= 18) {
						horaValida = true;
					} else {
						System.out.println("Horário inválido, digite novamente.");
					}
				}
				
				System.out.println("Seu compromisso é " + compromissos[--mes][--dia][hora]);

			} else if (opcao == 0) {
				System.out.println("Bye");
				sair = true;
			} else {
				System.out.println("Opcão inexistente, digite novamente");
			}
		}
		
	}
}
