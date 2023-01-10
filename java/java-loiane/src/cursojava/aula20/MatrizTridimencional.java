package cursojava.aula20;

public class MatrizTridimencional {

	public MatrizTridimencional() {
		// TODO Auto-generated constructor stub
	}

	public static void main(String[] args) {
		
		int[][][] matrizTridimencional = new int[3][3][3];
		
		for (int i = 0; i < matrizTridimencional.length; i++) {
			for (int j = 0; j < matrizTridimencional[i].length; j++) {
				for (int k = 0; k < matrizTridimencional[i][j].length; k++) {
					matrizTridimencional[i][j][k] = i + j + k;
					System.out.print(matrizTridimencional[i][j][k] + " ");
				}
			}
			System.out.println();
		}
	}

}
