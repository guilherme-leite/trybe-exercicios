	package labs_19;

public class EX21 {

public static void main(String[] args) {
		
		int[] resultArr = new int[20];
		int zeros = 0;
		
		for (int i = 0; i < 20; i++) {
			resultArr[i] = (int)Math.round(Math.random()*1);
		}
		
		for (int i = 0; i < resultArr.length; i++) {
			System.out.print(resultArr[i]);
			if (i < resultArr.length - 1) {
				System.out.print(", ");
			} else {
				System.out.println(".");
			}
		}

		for (int i = 0; i < resultArr.length; i++) {
			if (resultArr[i] == 0) {
				zeros ++;
			}
		}
		
		System.out.println("A porcentagem elementos = 0 é de " + (100 / resultArr.length) * zeros + "%.");
		
	}

}

