package labs_36;

public class Aluno {
	
	private String nome;
	private String matricula;
	private double[] notas;
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getMatricula() {
		return matricula;
	}
	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}
	public double[] getNotas() {
		return notas;
	}
	public void setNotas(double[] notas) {
		this.notas = notas;
	}
	
	public String obterInfo() {
		int soma = 0;
		
		String info = "Nome do aluno: " + this.nome;
		info += " Nº da matrícula: " + this.matricula;
		info += " Notas: ";
		
		for (double nota: notas) {
			soma += nota;
			info += nota + " ";
		}
		
		int media = soma / 4;
		
		if (media >= 7) {
			info += "Aluno aprovado com média " + media;
		} else {
			info += "Aluno reprovado com média " + media;
		}
		
		return info;
	}
	
	public double obterMedia() {
		double soma = 0;
		for (double nota: notas) {
				soma += nota;
		}
		
		return soma/4;
	}

}
