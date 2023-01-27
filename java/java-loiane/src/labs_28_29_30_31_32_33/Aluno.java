package labs_28_29_30_31_32_33;

import java.util.Scanner;

public class Aluno {
		private String nome;
		private String matricula;
		private String nomeCurso;
		private String[] nomesDisciplinas;
		private double[][] notasDisciplinas;

		public Aluno() { 
			nomesDisciplinas = new String[3];
			notasDisciplinas = new double[3][4];
		}
		
		public Aluno(String nome, String matricula, String nomeCurso, String[] nomesDisciplinas,
				double[][] notasDisciplinas) {
			super();
			this.nome = nome;
			this.matricula = matricula;
			this.nomeCurso = nomeCurso;
			this.nomesDisciplinas = nomesDisciplinas;
			this.notasDisciplinas = notasDisciplinas;
		}

		public String getNome() {
			return this.nome;
		}

		public void setNome(String nome) {
			this.nome = nome;
		}
		
		public String getMatricula() {
			return this.matricula;
		}
		
		public void setMatricula(String matricula) {
			this.matricula = matricula;
		}
		
		public String getNomeCurso() {
			return this.nomeCurso;
		}

		public void setNomeCurso(String nomeCurso) {
			this.nomeCurso = nomeCurso;
		}
		
		public String[] getNomesDisciplinas() {
			return this.nomesDisciplinas;
		}
		
		public String getNomeDisciplina(int pos) {
			return this.nomesDisciplinas[pos];
		}
		
		public void setNomesDisciplinas(String[] nomesDisciplinas) {
			this.nomesDisciplinas = nomesDisciplinas;
		}
		
		public void setNomeDisciplina(int pos, String nomesDisciplinas) {
			this.nomesDisciplinas[pos] = nomesDisciplinas;
		}

		public double[][] getNotasDisciplinas() {
			return this.notasDisciplinas;
		}
		
		public void setNotasDisciplinas(double[][] notasDisciplinas) {
			this.notasDisciplinas = notasDisciplinas;
		}
		

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
