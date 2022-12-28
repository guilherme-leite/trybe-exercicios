package labs_14_15;

import java.util.Scanner;

public class EX09 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Digite 3 números");
		
		int num01 = scan.nextInt();
		int num02 = scan.nextInt();
		int num03 = scan.nextInt();
		
		if (num01 < num02 && num01 < num03) {
			if(num02 < num03) {
				System.out.println("Os números em ordem são " + num01 + ", " + num02 + ", " + num03 + ", ");				
			} else {
				System.out.println("Os números em ordem são " + num01 + ", " + num03 + ", " + num02 + ", ");	
			}
		} else if (num02 < num01 && num02 < num03) {
			if(num01 < num03) {
				System.out.println("Os números em ordem são " + num02 + ", " + num01 + ", " + num03 + ", ");				
			} else {
				System.out.println("Os números em ordem são " + num02 + ", " + num03 + ", " + num01 + ", ");	
			} 
		} else {
			if(num01 < num02) {
				System.out.println("Os números em ordem são " + num03 + ", " + num01 + ", " + num02 + ", ");				
			} else {
				System.out.println("Os números em ordem são " + num03 + ", " + num02 + ", " + num01 + ", ");	
			}
		}
	}
}
