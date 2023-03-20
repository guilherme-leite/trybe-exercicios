package jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class ExcluirPessoa {

	public static void main(String[] args) throws SQLException {
		Scanner scan = new Scanner(System.in);
		Connection conexao = FabricaConexao.getConexao();
		
		String sql = "DELETE FROM pessoas WHERE codigo = ?";
		
		System.out.println("Informe o código:");
		int codigo = scan.nextInt();
		
		PreparedStatement stmt = conexao.prepareStatement(sql);
		stmt.setInt(1, codigo);
		
		if (stmt.executeUpdate() > 0) {
			System.out.println("Pessoa excluída com sucesso!");
		} else {
			System.out.println("Aconteceu algo de errado");
		}
		
		scan.close();
		conexao.close();
	}

}
