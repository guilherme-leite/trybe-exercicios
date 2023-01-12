package labs_20;

public class EX01 {

	public static void main(String[] args) {
		
		int [][] M = new int[4][4];
		int iVal = 0;
		int jVal = 0;
		int max = 0;
		int perm = 0;
		
		for (int i = 0; i < M.length; i++) {
			for (int j = 0; j < M[i].length; j++) {
				M[i][j] = (int)Math.round(Math.random()*9);
			}
		}
		
		for (int i = 0; i < M.length; i++) {
			for (int j = 0; j < M[i].length; j++) {
				System.out.print(M[i][j] + " ");
			}
			System.out.println();
		}
		
		for (int i = 0; i < M.length; i++) {
			for (int j = 0; j < M[i].length; j++) {
				perm += 1;
				if (M[i][j] == 9 || max == 9) {
					max = 9;
					iVal = i;
					jVal = j;
					System.out.println("Saiu mais cedo");
					break;
				} else if (M[i][j] > max) {
					iVal = i;
					jVal = j;
					max = M[i][j];
				}
			}
		}
		System.out.println("max " + max);
		System.out.println("permutacoes " + perm);
		System.out.println(iVal + " " + jVal);
	}
}
