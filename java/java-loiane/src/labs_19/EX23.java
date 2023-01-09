	package labs_19;

public class EX23 {

	public static void main(String[] args) {
		
		int[] intArr = new int[3];
		boolean isPalindrome = true;
		
		for (int i = 0; i < intArr.length; i++) {
			intArr[i] = (int)Math.round(Math.random()*10);
		}
		
		for (int i = 0; i < intArr.length; i++) {
			System.out.print(intArr[i]);
			if (i < intArr.length - 1) {
				System.out.print(", ");
			} else {
				System.out.println(".");
			}
		}
		
		for (int i = 0; i < (intArr.length) / 2; i++) {
			if (intArr[i] != intArr[intArr.length - i - 1]) {
				isPalindrome = false;
				break;
			}
		}
		
		if (isPalindrome) {
			System.out.println("Palíndrome!");
		} else {
			System.out.println("Not a palíndrome!");
		}
		
	}

}
