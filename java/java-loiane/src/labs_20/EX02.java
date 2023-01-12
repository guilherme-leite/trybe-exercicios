package labs_20;

public class EX02 {

	public static void main(String[] args) {
		
		int [][] M = new int[10][10];
		int minL = 0;
		int maxL = 0;
		int minC = 0;
		int maxC = 0;
		int iPosL = 0;
		int jPosL = 0;
		int iPosC = 0;
		int jPosC = 0;
		
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
		
		minC = M[5][0];
		minL = M[0][7];
		
		for (int i = 0; i < M.length; i++) {
			for (int j = 0; j < M[i].length; j++) {
				if (i == 5 && M[i][j] < minL) {
					minL = M[i][j];
					iPosL = i;
					jPosL = j;
				} else if (i == 5 && M[i][j] > maxL) {
					maxL = M[i][j];
				} else if (j == 7 && M[i][j] < minC) {
					minC = M[i][j];
					iPosC = i;
					jPosC = j;
				} else if (j == 7 && M[i][j] > maxC) {
					maxC = M[i][j];
				}
			}
		}
		
		System.out.println("max line = " + maxL);
		System.out.println("min line = " + minL);
		System.out.println("max column = " + maxC);
		System.out.println("min columns = " + minC);
		System.out.println("line position = " + iPosL + " " + jPosL);
		System.out.println("column position = " + iPosC + " " + jPosC);
		
	}
}
