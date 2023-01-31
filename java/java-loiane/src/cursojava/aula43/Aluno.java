package cursojava.aula43;

import java.util.Arrays;
import java.util.Objects;

public class Aluno {
	
	private String curso;
	
	public Aluno() {
		super();
	}
	

	public Aluno(String nome, String endereco, String telefone) {
//		super(nome, endereco, telefone);

	}


	private double[] notas;
	
	public String getCurso() {
		return curso;
	}
	public void setCurso(String curso) {
		this.curso = curso;
	}
	public double[] getNotas() {
		return notas;
	}
	public void setNotas(double[] notas) {
		this.notas = notas;
	}
	
	public double calcularMedia() {
		return 0;
	}
	
	public boolean verificarAprovacao() {
		return true;
	}
	
	public void metodoQualquer() {
//		super.setCpf("111111");
	}
	
	public String obterEtiquetaEndereco() {
		String info = "O endereco do aluno é: ";
//		info += super.getEndereco();
		return info;
	}

	public void imprimirEtiquetaEndereco() {
		
		System.out.println(this.obterEtiquetaEndereco());
		
	}
	
	public String toString() {
		String s =  curso + "\n";
		
		for (double nota: notas) {
			s += nota + " ";
		}
		
		return s;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		Aluno other = (Aluno) obj;
		
		if (curso.equalsIgnoreCase(other.getCurso())) {
			return true;
		}
		
		return false;
		
	}
	
}
