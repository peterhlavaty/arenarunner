package endpoints;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
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

@WebServlet(name = "maps", urlPatterns = {"/api/maps"})
public class Maps extends HttpServlet {
    public void processRequest(HttpServletRequest request, HttpServletResponse response){
        System.out.println("MapEndpoint");
        try{
//            String name = request.getParameter("name");
//            String password = request.getParameter("password");
//            System.out.println("name: " + name);
//            System.out.println("pass: " + password);
            Connection c = DB.getConnection();
//            c.setAutoCommit(false);
            PreparedStatement stmt = c.prepareStatement("SELECT id, map FROM public.map ;");
            ResultSet rs = stmt.executeQuery();
            response.setContentType("application/json");

            ObjectMapper mapper = new ObjectMapper();
            ObjectNode jsonObject = mapper.createObjectNode();
            while (rs.next()) {
                jsonObject.put(rs.getString(1), rs.getString(2));
            }
            response.getWriter().print(mapper.writeValueAsString(jsonObject));
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
