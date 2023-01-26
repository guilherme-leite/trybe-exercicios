package labs_25_26_27;

import java.util.Random;
import java.util.Scanner;

public class EX03 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		Random rand = new Random();
		
		Aluno aluno = new Aluno();
		
		System.out.println("Digite o nome do aluno");
		aluno.nome = scan.next();
		
		System.out.println("Digite o nome do matricula");
		aluno.matricula = scan.next();
		
		System.out.println("Digite o nome do curso");
		aluno.nomeCurso = scan.next();

		aluno.nomesDisciplinas = new String[3];
		aluno.notasDisciplinas = new double[3][4];
		
		for (int i = 0; i < aluno.nomesDisciplinas.length; i++) {
			System.out.println("Digite os nomes da " + (i+1) + "ª" + " disciplina");
			aluno.nomesDisciplinas[i] = scan.next();
		}

		for (int i = 0; i < aluno.notasDisciplinas.length; i++) {
			for (int j = 0; j < aluno.notasDisciplinas[i].length; j++) {
				System.out.println("Digite a " + (j+1) + "ª" + " nota do aluno " + (i+1));
				aluno.notasDisciplinas[i][j] = rand.nextInt(11);
			}
		}
		
		for (int i = 0; i < aluno.nomesDisciplinas.length; i++) {
			System.out.println("As disciplinas são " + aluno.nomesDisciplinas[i]);
		}
		
		for (int i = 0; i < aluno.notasDisciplinas.length; i++) {
			for (int j = 0; j < aluno.notasDisciplinas[i].length; j++) {
				System.out.println("As notas do aluno " + aluno.nome + " na disciplina " + aluno.nomesDisciplinas[i] + " é " + aluno.notasDisciplinas[i][j]);
			}
		}
		
		aluno.mediaDisciplina();
	}
}
