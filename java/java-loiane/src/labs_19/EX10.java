	package labs_19;

public class EX10 {

	public static void main(String[] args) {
		
		int[] arrA = new int[10];
		int[] arrB = new int[10];
		
		for (int i = 0; i < 10; i++) {
			arrA[i] = i;
			arrB[i] = arrA[i] % 2;
		}
		
		
		System.out.print("O vetor C contém os elementos de A ao quadrado: ");

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
