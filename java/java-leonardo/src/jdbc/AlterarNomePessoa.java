package jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class AlterarNomePessoa {

	public static void main(String[] args) throws SQLException {
		Connection conexao = FabricaConexao.getConexao();
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Informe o código da pessoa:");
		int entrada = scan.nextInt();
		
		String select = "SELECT codigo,nome FROM pessoas WHERE codigo = ?";
		String update = "UPDATE pessoas SET nome = ? WHERE codigo = ?";
		
		PreparedStatement stmt = conexao.prepareStatement(select);
		stmt.setInt(1, entrada);

		ResultSet result = stmt.executeQuery();
		
		if(result.next()) {
			Pessoa p = new Pessoa(result.getInt(1), result.getString(2));
			System.out.println("O nome da pessoa é: " + p.getNome());
			scan.nextLine();
			
			System.out.println("Informe o novo nome");
			String novoNome = scan.nextLine();
			
			stmt.close();

			stmt = conexao.prepareStatement(update);
			stmt.setString(1, novoNome);
			stmt.setInt(2, entrada);
			stmt.execute();
			
			System.out.println("Pessoa alterada com sucesso!");
		} else {
			System.out.println("Pessoa não encontrada");
		}
			conexao.close();
			scan.close();
			stmt.close();
	}
}
