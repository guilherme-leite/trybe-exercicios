package labs_45;

public class Aluno extends Pessoa {
	
	private String curso;
	
	public Aluno() {
		super();
	}
	

	public Aluno(String nome, String endereco, String telefone) {
		super(nome, endereco, telefone);

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
		super.setCpf("111111");
	}
	
	public String obterEtiquetaEndereco() {
		String info = "O endereco do aluno é: ";
		info += super.getEndereco();
		return info;
	}
}
