package labs_19;

public class EX04 {

	public static void main(String[] args) {
		
		int[] arrA = new int[15];
		double[] arrB = new double[15];
		
		for (int i = 0; i < 15; i++) {
			arrA[i] = i;
			arrB[i] = Math.sqrt(arrA[i]);
		}
		
		
		System.out.print("O vetor B contém os elementos de A ao quadrado: ");

		for (int i = 0; i < arrB.length; i++) {
			System.out.print(arrB[i]);
			if (i < arrB.length - 1) {
				System.out.print(", ");
			} else {
				System.out.println(".");
			}
		}
		
	}

}
