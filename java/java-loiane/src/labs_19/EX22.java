	package labs_19;

public class EX22 {

	public static void main(String[] args) {
		
		int[] resultArr = new int[10];
		
		for (int i = 0; i < resultArr.length; i++) {
			resultArr[i] = (int)Math.round(Math.random()*10);
		}
		
		for (int i = 0; i < resultArr.length; i++) {
			System.out.print(resultArr[i]);
			if (i < resultArr.length - 1) {
				System.out.print(", ");
			} else {
				System.out.println(".");
			}
		}
		
		for (int i = 0;i < resultArr.length; i++) {
			if (resultArr[i] % 2 != 0) {
				System.out.println("Achou um ímpar!!");
				break;
			}
		}

	}

}
