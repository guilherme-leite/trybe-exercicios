package jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ConsultarPessoas2 {

	public static void main(String[] args) throws SQLException {
		
		Connection conexao = FabricaConexao.getConexao();
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Insira o filtro");
		String filtro = scan.next();
		
		String sql = "SELECT * FROM pessoas WHERE nome like ?";
		
		PreparedStatement stmt = conexao.prepareStatement(sql);
		stmt.setString(1, "%" + filtro + "%");

		ResultSet result = stmt.executeQuery();
		
		List<Pessoa> pessoas = new ArrayList<>();
		
		while(result.next()) {
			int codigo = result.getInt("codigo");
			String nome = result.getString("nome");
			pessoas.add(new Pessoa(codigo, nome));
		}
		
		for (Pessoa p: pessoas) { 
			System.out.println(p.getCodigo() + "---->" + p.getNome());
		}
		
		stmt.close();
		result.close();
		scan.close();
	}

}
