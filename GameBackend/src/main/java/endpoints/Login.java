package endpoints;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import db.DB;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.stream.Collectors;

@WebServlet(name = "login", urlPatterns = {"/api/login"})
public class Login extends HttpServlet {

    public void processRequest(HttpServletRequest request, HttpServletResponse response){
        System.out.println("LoginEndpoint");
        try{
            ObjectMapper mapper = new ObjectMapper();
            JsonNode jsonNode = mapper.readTree(request.getReader().lines().collect(Collectors.joining()));
            String name = jsonNode.get("name").asText();
            String password = jsonNode.get("password").asText();
//            String name = request.getParameter("name");
//            String password = request.getParameter("password");
            System.out.println("name: " + name);
            System.out.println("pass: " + password);
            Connection c = DB.getConnection();
//            c.setAutoCommit(false);
            PreparedStatement stmt = c.prepareStatement("SELECT password FROM public.user WHERE name = ? ;");
            stmt.setString(1, name);
            ResultSet rs = stmt.executeQuery();
//            c.commit();
            response.setContentType("text/plain");
            if (rs.next()) {
//                System.out.println(rs.getString(1));
//                System.out.println(rs.getString(2));
                if(rs.getString(1).equals(password)){
                    response.getWriter().println("OK");
                }
                else {
                    response.getWriter().println("Incorrect password!");
                }
            }
            else{
                response.getWriter().println("Not registered!");
//                c.commit();
            }
            response.getWriter().flush();
            rs.close();
            stmt.close();
            c.close();
        }
        catch (Exception e){
            System.out.println("dbs fail");
            e.printStackTrace();
        }
    }


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
}
