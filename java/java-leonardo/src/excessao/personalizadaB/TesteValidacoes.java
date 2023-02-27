package excessao.personalizadaB;

import excessao.Aluno;

public class TesteValidacoes {
	public static void main(String[] args) {
		
		try {
			Aluno aluno = new Aluno("Ana", -7);
			Validar.aluno(aluno);
		} catch (StringVaziaException e) {
			System.out.println(e.getMessage());
		} catch (NumeroForaIntervalo e) {
			System.out.println(e.getMessage());
		}
		
		try {
			Validar.aluno(null);
		} catch (StringVaziaException | NumeroForaIntervalo e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("fim");
	}
}
