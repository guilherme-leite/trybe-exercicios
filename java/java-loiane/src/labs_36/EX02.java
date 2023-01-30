package labs_36;

import java.util.Random;
import java.util.Scanner;

public class EX02 {

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);
		Random rand = new Random();
		
		System.out.println("Entre com o nome do curso.");
		String nome = scan.nextLine();
		
		System.out.println("Entre com o horário do curso.");
		String horario = scan.next();
		
		System.out.println("Entre com o nome do professor.");
		String nomeProff = scan.next();
	
		System.out.println("Entre com o departamento do professor.");
		String depProff = scan.next();
		
		System.out.println("Entre com o email do professor.");
		String emailProff = scan.next();
		
		Curso curso = new Curso();
		
		curso.setNome(nome);
		curso.setHorario(horario);
		
		
		Professor professor = new Professor();
		
		professor.setNome(nomeProff);
		professor.setDepartamento(depProff);
		professor.setEmail(emailProff);
		
		Aluno[] alunos = new Aluno[5];
		
		for (int i = 0; i < 5; i++) {
			
			System.out.println("Entre com o nome do aluno " + (i+1));
			String nomeAluno = scan.next();
			
			System.out.println("Entre com a matricula do aluno " + (i+1));
			String matriculaAluno = scan.next();

			double[] notas = new double[alunos.length];
			
			for (int j = 0; j < 4; j++) {
				double nota = rand.nextInt(11);
				notas[j] = nota;
			}
			
			Aluno aluno = new Aluno();
			
			aluno.setNome(nomeAluno);
			aluno.setMatricula(matriculaAluno);
			aluno.setNotas(notas);
			
			alunos[i] = aluno;
			
		}
		
		curso.setAlunos(alunos);
		
		System.out.println(curso.obterInfo());
		
	}

}
