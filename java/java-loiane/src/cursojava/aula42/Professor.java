package cursojava.aula42;

public class Professor {

	private String curso;
	private double salario;
	private String nomeCurso;
	
	public String getCurso() {
		return curso;
	}
	public void setCurso(String curso) {
		this.curso = curso;
	}
	public double getSalario() {
		return salario;
	}
	public void setSalario(double salario) {
		this.salario = salario;
	}
	public String getNomeCurso() {
		return nomeCurso;
	}
	public void setNomeCurso(String nomeCurso) {
		this.nomeCurso = nomeCurso;
	}
	
	public double calcularSalarioLiquido() {
		return 0;
	}
	
	public String obterEtiquetaEndereco() {
		String info = "O endereco do professor é: ";
//		info += super.getEndereco();
		return info;
	}
	
	public void imprimirEtiquetaEndereco() {
		
		System.out.println("Imprimindo o endereco do professor.");
		System.out.println(this.obterEtiquetaEndereco());
		
	}
	
}
