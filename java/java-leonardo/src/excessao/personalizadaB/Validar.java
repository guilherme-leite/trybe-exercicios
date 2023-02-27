package excessao.personalizadaB;

import excessao.Aluno;

public class Validar {
	private Validar() {}
	
	public static void aluno(Aluno aluno) throws StringVaziaException, NumeroForaIntervalo {
		
		if(aluno == null) {
			throw new IllegalArgumentException("O aluno está nulo!");
		}
		
		if(aluno.nome == null || aluno.nome.trim().isEmpty()) {
			throw new StringVaziaException("nome");
		}
		
		if(aluno.nota < 0 || aluno.nota > 10) {
			throw new NumeroForaIntervalo("nota");
		}
		
	}
}
