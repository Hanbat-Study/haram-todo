package study.ToDoList;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

@SpringBootTest
class ToDoListApplicationTests {

	@Test
	void contextLoads() throws Exception {
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection conn = DriverManager.getConnection("spring.datasource.url", "spring.datasource.username", "spring.datasource.password");

		String sql = "";
		PreparedStatement pstmt = conn.prepareStatement(sql);
	}

}
