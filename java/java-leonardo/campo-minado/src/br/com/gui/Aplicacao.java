package br.com.gui;

import br.com.gui.modelo.Tabuleiro;
import br.com.gui.visao.TabuleiroConsole;

public class Aplicacao {

	public static void main(String[] args) {
		Tabuleiro tabuleiro = new Tabuleiro(6, 6, 3);
		
		new TabuleiroConsole(tabuleiro);
	}
}
