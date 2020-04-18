package endpoints;

import db.DB;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@WebServlet(name = "register", urlPatterns = {"/api/register"})
public class Register extends HttpServlet {
    public void processRequest(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("RegisterEndpoint");
        try{
            String name = request.getParameter("name");
            String password = request.getParameter("password");
            System.out.println("name: " + name);
            System.out.println("pass: " + password);
            Class.forName("org.postgresql.Driver");
//            String url = "jdbc:postgresql://ec2-54-75-231-215.eu-west-1.compute.amazonaws.com:5432/d48jomv2c27d2r";
//            String url = "jdbc:postgresql://localhost:5432/instakill";
//            Properties props = new Properties();
//            props.setProperty("user","postgres");
//            props.setProperty("password","klaskKLASK");
//            props.setProperty("user","wrmtdxybynbyoc");
//            props.setProperty("password","1f6cc39127558e2480e75e35e8cf459f4b1ae5ede393af6dd12e82df027b4449");
//            props.setProperty("ssl","require");
//            Connection conn = DriverManager.getConnection(url, props);
            Connection c = DriverManager
                    .getConnection(DB.url, DB.props);
//            DB db = DB.getInstance();
//            Connection c = db.getC();
            c.setAutoCommit(false);
            System.out.println("Opened database successfully");

            PreparedStatement stmt = c.prepareStatement("SELECT * FROM public.user");
//            stmt.setString(1, name);
            ResultSet rs = stmt.executeQuery();
            c.commit();
            if (!rs.next()) {
                System.out.println(rs.getString(1));
                response.getWriter().println("Name already exists!");
            }
            else{
                stmt = c.prepareStatement("INSERT INTO public.user (name, password) "
                        + "VALUES ( ?, ? );");
                stmt.setString(1, name);
                stmt.setString(2, password);
                stmt.executeUpdate();
                c.commit();
            }
            rs.close();
            stmt.close();
            c.close();
        }
        catch (Exception e){
            System.out.println("dbs fail");
            e.printStackTrace();
        }
    }

    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
}
