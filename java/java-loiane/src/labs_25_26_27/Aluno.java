package labs_25_26_27;

import java.util.Scanner;

public class Aluno {
		String nome;
		String matricula;
		String nomeCurso;
		String[] nomesDisciplinas;
		double[][] notasDisciplinas;
		
		Scanner scan = new Scanner(System.in);
		
		void mediaDisciplina() {
			System.out.println("digite o númemero correspondente para obter a média.");
			int opcao = scan.nextInt();
			int contador = 0;

			for (int i = 0; i < notasDisciplinas.length; i++) {
				contador += notasDisciplinas[opcao][i];
			}
			
			double media = contador / 4;
			
			if (media >= 7) {
				System.out.println("Aprovado");
				System.out.println("Sua média foi de " + media);
			} else {
				System.out.println("Reprovado");
				System.out.println("Sua média foi de " + media);
			}
		}
	}
