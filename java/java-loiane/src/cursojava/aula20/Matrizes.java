package cursojava.aula20;

public class Matrizes {

	public Matrizes() {
		// TODO Auto-generated constructor stub
	}

	public static void main(String[] args) {
//		double[][] notasAlunos = new double[3][4];
		
//		notasAlunos[0][0] = 10;
//		notasAlunos[0][1] = 7;
//		notasAlunos[0][2] = 9;
//		notasAlunos[0][3] = 9.5;
//		
//		notasAlunos[1][0] = 9;
//		notasAlunos[1][1] = 8;
//		notasAlunos[1][2] = 7;
//		notasAlunos[1][3] = 9;
//		
//		notasAlunos[2][0] = 8;
//		notasAlunos[2][1] = 9;
//		notasAlunos[2][2] = 10;
//		notasAlunos[2][3] = 7;
		
		double[][] notasAlunos = {{10,7,9,9.5},{9,8,7,9},{8,9,10,7}};
		
		for (int i = 0; i < notasAlunos.length; i++) {
			for (int j = 0; j < notasAlunos[i].length; j++) {
				System.out.print(notasAlunos[i][j] + " ");
			}
			System.out.println();
		}
		
		double media = 0;
		
		for (int i = 0; i < notasAlunos.length; i++) {
			media = 0;
			for (int j = 0; j < notasAlunos[i].length; j++) {
				media += notasAlunos[i][j];
			}
			System.out.println("A média do aluno " + (i + 1) + " é " + media / 4);
		}
	}

}
