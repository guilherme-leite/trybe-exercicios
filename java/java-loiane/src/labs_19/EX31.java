	package labs_19;

public class EX31 {

	public static void main(String[] args) {
		
		int[] arrA = new int[5];
		
		for (int i = 0; i < arrA.length; i++) {
			arrA[i] = (int)Math.round(Math.random()*10);
 		}
		
		for (int i = 0; i < arrA.length; i++) {
			if (i == arrA.length - 1) {
				System.out.print(arrA[i]);
				System.out.println(".");
			} else {
				System.out.print(arrA[i]);
				System.out.print(",");
			}
		}

		for (int i = 0; i < 5; i++) {
			System.out.println("A tabuada de " + arrA[i] + " é: ");
			for (int j = 1; j <= 10; j++) {
				System.out.println(arrA[i] + " * " + j + "= " + arrA[i] * j);
			}
		}
		
		}

}
