package labs_36;

import java.util.Scanner;

public class testeAgenda {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		Agenda agenda = new Agenda();
		
		System.out.println("Por favor dê um nome para a agenda");
		agenda.setNome(scan.next());

		Contato cont1 = new Contato();
		
		System.out.println("Por favor adicione nome, email e telefone do primeiro contato");
		
		cont1.setNome(scan.next());
		cont1.setEmail(scan.next());
		cont1.setTelefone(scan.next());
		
		Contato cont2 = new Contato();
		System.out.println("Por favor adicione nome, email e telefone do segundo contato");
		cont2.setNome(scan.next());
		cont2.setEmail(scan.next());
		cont2.setTelefone(scan.next());
		
		Contato cont3 = new Contato();
		System.out.println("Por favor adicione nome, email e telefone do terceiro contato");
		cont3.setNome(scan.next());
		cont3.setEmail(scan.next());
		cont3.setTelefone(scan.next());

		Contato[] contatos = new Contato[3];
		
		contatos[0] = cont1;
		contatos[1] = cont2;
		contatos[2] = cont3;
		
		agenda.setContatos(contatos);
		
		System.out.println("Agenda do " + agenda.getNome());
		
		if (agenda != null && agenda.getContatos() != null) {
				System.out.println(agenda.obterInfo());
		}
		
	}
}
