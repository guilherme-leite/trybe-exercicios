package labs_20;

public class EX03 {

	public static void main(String[] args) {
		
		int [][] M = new int[3][3];
		int pares = 0;
		int impares = 0;
		
		for (int i = 0; i < M.length; i++) {
			for (int j = 0; j < M[i].length; j++) {
				M[i][j] = (int)Math.round((Math.random()*9) + 1);
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
				if (M[i][j] % 2 == 0) {
					pares +=1 ;
				} else {
					impares += 1;
				}
			}
		}
		System.out.println("pares " + pares + " impares " + impares);
	}
}
