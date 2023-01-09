	package labs_19;

public class EX14 {

	public static void main(String[] args) {
		
		int[] arrA = new int[10];
		int total = 0;
		
		for (int i = 0; i < 10; i++) {
			arrA[i] = i;
			if (i % 2 != 0) {
				total += i;
			}
		}
		
		
		for (int i = 0; i < arrA.length; i++) {
			System.out.print(arrA[i]);
			if (i < arrA.length - 1) {
				System.out.print(", ");
			} else {
				System.out.println(".");
			}		}
		
		System.out.print("A média aritmética simples dos elementos de A é: " + total / arrA.length);
	}

}
