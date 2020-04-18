package db;

import java.util.Properties;

public class DB {

    public static final String url = "jdbc:postgresql://ec2-54-75-231-215.eu-west-1.compute.amazonaws.com:5432/d48jomv2c27d2r";
    public static final Properties props = new Properties(){{
        setProperty("user","wrmtdxybynbyoc");
        setProperty("password","1f6cc39127558e2480e75e35e8cf459f4b1ae5ede393af6dd12e82df027b4449");
    }};
}
