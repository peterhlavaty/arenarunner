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

@WebServlet(name = "register", urlPatterns = {"/api/register"})
public class Register extends HttpServlet {
    public void processRequest(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("RegisterEndpoint");
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
            PreparedStatement stmt = c.prepareStatement("SELECT * FROM public.user WHERE name = ? ;");
            stmt.setString(1, name);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                System.out.println(rs.getString(1));
                response.getWriter().println("Name already exists!");
            }
            else{
                stmt = c.prepareStatement("INSERT INTO public.user (name, password) "
                        + "VALUES ( ?, ? );");
                stmt.setString(1, name);
                stmt.setString(2, password);
                stmt.executeUpdate();
                response.getWriter().println("OK");
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
