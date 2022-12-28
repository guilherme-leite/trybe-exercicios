package labs_14_15;

import java.util.Scanner;

public class EX25 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Você telefonou para a vítma?");
	    String pergunta1 = scan.next();
	    System.out.println("Você esteve no local do crime?");
	    String pergunta2 = scan.next();
	    System.out.println("Você mora perto da vítma?");
	    String pergunta3 = scan.next();
	    System.out.println("Você devia para a vítma?");
	    String pergunta4 = scan.next();
	    System.out.println("Você já trabalhou com a vítma?");
	    String pergunta5 = scan.next();
	    
	    int counter = 0;
	    
	    if (pergunta1.contentEquals("sim")) {
	    	counter += 1;
	    }
	    
	    if (pergunta2.contentEquals("sim")) {
	    	counter += 1;
	    }
	    
	    if (pergunta3.contentEquals("sim")) {
	    	counter += 1;
	    }
	    
	    if (pergunta4.contentEquals("sim")) {
	    	counter += 1;
	    }
	    
	    
	    if (pergunta5.contentEquals("sim")) {
	    	counter += 1;
	    }	
	
	    if (counter <= 2) {
	    	System.out.println("Essa pessoa é suspeita!");
	    } else if (counter >= 3 && counter < 5) {
	    	System.out.println("Essa pessaoa é uma cúmplice!");
	    } else if (counter == 5) {
	    	System.out.println("Esse é o assassino!");
	    } else System.out.println("Essa pessoa é inocente!");
	    
	}
	
	
}
