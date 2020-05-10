package db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

public class DB {

    private static final String url = "jdbc:postgresql://ec2-54-75-231-215.eu-west-1.compute.amazonaws.com:5432/d48jomv2c27d2r";
    private static final Properties props = new Properties(){{
        setProperty("user","wrmtdxybynbyoc");
        setProperty("password","1f6cc39127558e2480e75e35e8cf459f4b1ae5ede393af6dd12e82df027b4449");
    }};

    public static Connection getConnection(){
        try {
            Class.forName("org.postgresql.Driver");
            String dbUrl = System.getenv("JDBC_DATABASE_URL");
            if((dbUrl!=null)&&(!dbUrl.isEmpty())){
                return DriverManager.getConnection(dbUrl);
            }
            else{
                return DriverManager.getConnection(DB.url, DB.props);
            }
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
