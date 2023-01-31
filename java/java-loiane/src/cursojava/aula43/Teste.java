package cursojava.aula43;

public class Teste {

	public static void main(String[] args) {
		
		Aluno aluno = new Aluno();
		
		aluno.setCurso("Ciência da Computacão");
		
		double[] notas = {1,2,3,4};
		aluno.setNotas(notas);
		
		System.out.println(aluno);
		
		String s1 = "hahaahahah";
		String s2 = "hahaahahaH";
	
		// compara somente referencia;
		System.out.println(s1 == s2);
		// compara os valores;
		System.out.println(s1.equals(s2));
		// compara valores ignorando o case;
		System.out.println(s1.equalsIgnoreCase(s2));
		
		Aluno aluno2 = new Aluno();
		
		aluno2.setCurso("Ciência da Computacão");
		
		double[] notas2 = {3,5,7,9};
		aluno2.setNotas(notas2);
		
//		System.out.println(aluno == aluno2);
	
		System.out.println(aluno.equals(aluno2));
	}
	
}
