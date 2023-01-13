package cursojava.aula21;

public class ForEach {

	public ForEach() {
		// TODO Auto-generated constructor stub
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int[] notasArr = new int[10];
		int[][] notasAlunosArr = new int[3][4];
		
		for (int i = 0; i < notasArr.length; i++) {
			notasArr[i] = (int)Math.round((Math.random()*9) + 1);
		}
		
		for (int i = 0; i < notasAlunosArr.length; i++) {
			for (int j = 0; j < notasAlunosArr[i].length; j++) {
				notasAlunosArr[i][j] = (int)Math.round((Math.random()*9) + 1);
			}
		}
		
		for (int nota : notasArr) {
			System.out.print(nota + " ");
		}
		
		for (int[] notasAluno : notasAlunosArr) {
			for (int notaAluno : notasAluno) {
				System.out.println(notaAluno + " ");
			}
			System.out.println();
		}
		
		
	}

}
