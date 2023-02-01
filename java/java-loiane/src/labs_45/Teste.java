package labs_45;

public class Teste {

	public static void main (String[] args) {
		
//		Aluno aluno = new Aluno();
//		Pessoa pessoaAluno = aluno;  //UpCasting;
//		
//		Pessoa aluno2 = (Pessoa) new Aluno();
//		
//		Pessoa aluno3 = new Pessoa();
//		Aluno aluno4 = (Aluno) aluno3;
		
		Pessoa pessoa = new Pessoa();
		Aluno aluno = new Aluno();
		Professor proff = new Professor();
		
		if (pessoa instanceof Pessoa) {
			System.out.println("é do tipo Pessoa");
		}
		
	}
}
