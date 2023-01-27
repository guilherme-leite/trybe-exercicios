package labs_28_29_30_31_32_33;

import java.util.Random;
import java.util.Scanner;

public class EX03 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		Random rand = new Random();
		
		Aluno aluno = new Aluno();
		
		System.out.println("Digite o nome do aluno");
		aluno.setNome(scan.next());
		
		System.out.println("Digite o nome do matricula");
		aluno.setMatricula(scan.next()); 
		
		System.out.println("Digite o nome do curso");
		aluno.setNomeCurso(scan.next());

		for (int i = 0; i < aluno.getNomesDisciplinas().length; i++) {
			System.out.println("Digite os nomes da " + (i+1) + "ª" + " disciplina");
			aluno.setNomeDisciplina(i, scan.next());
		}

		for (int i = 0; i < aluno.getNomesDisciplinas().length; i++) {
			for (int j = 0; j < aluno.getNotasDisciplinas()[i].length; j++) {
				System.out.println("Digite a " + (j+1) + "ª" + " nota do aluno " + (i+1));
				aluno.getNotasDisciplinas()[i][j] = rand.nextInt(11);
			}
		}
		
		for (int i = 0; i < aluno.getNomesDisciplinas().length; i++) {
			System.out.println("As disciplinas são " + aluno.getNomeDisciplina(i));
		}
		
		for (int i = 0; i < aluno.getNotasDisciplinas().length; i++) {
			for (int j = 0; j < aluno.getNotasDisciplinas()[i].length; j++) {
				System.out.println("As notas do aluno " + aluno.getNome() + " na disciplina " + aluno.getNomeDisciplina(i) + " é " + aluno.getNotasDisciplinas()[i][j]);
			}
		}
		
		aluno.mediaDisciplina();
	}
}
