package labs_36;

public class Curso {
	
	private String nome;
	private String horario;
	private Professor professor;
	private Aluno[] alunos;
	
	public Curso(String nome, String horario) {
		this.nome = nome;
		this.horario = horario;
	}

	public Curso( ) { }

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getHorario() {
		return horario;
	}

	public void setHorario(String horario) {
		this.horario = horario;
	}

	public Professor getProfessor() {
		return professor;
	}

	public void setProfessor(Professor professor) {
		this.professor = professor;
	}

	public Aluno[] getAlunos() {
		return alunos;
	}

	public void setAlunos(Aluno[] alunos) {
		this.alunos = alunos;
	}
	
	public String obterInfo() {
		String info = "Nome do curso " + this.nome + "\n";
		info += this.horario + "\n";
		
		if (professor != null) {
			info += this.professor.obterInfo();
		}
		
		if (alunos != null) {
			System.out.println("Alunos: ");
			
			for (Aluno aluno: alunos) {
				if (aluno != null) {
					info += aluno.obterInfo();
					info += "\n";
				}
			}
			info += "Média da turma: " + obterMediaDaTurma();
		}
		
		return info;
	}
	
	
	public double obterMediaDaTurma() {
		int soma = 0;
		for (Aluno aluno: alunos) {
			if (aluno != null) {
				soma += aluno.obterMedia();
			}
		}
		
		int media = soma / alunos.length;
		
		return media;
	}
}
