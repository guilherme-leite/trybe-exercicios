package jdbc;

public class DAOTest {

	public static void main(String[] args) {
		
		DAO dao = new DAO();
		
		String sql = "INSERT INTO pessoas (nome) VALUES (?)";
		
		System.out.println(dao.incluir(sql, "Luana"));
		System.out.println(dao.incluir(sql, "Leticia"));
		System.out.println(dao.incluir(sql, "Franklin"));
		
		dao.close();
	}

}
