package endpoints;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
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

@WebServlet(name = "leaderboard", urlPatterns = {"/api/leaderboard"})
public class Leaderboard extends HttpServlet {

    public void processRequest(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("LeaderboardEndpoint");
        try{
            Connection c = DB.getConnection();
            PreparedStatement stmt = c.prepareStatement("select name, avg(score) as score, count(map_id) " +
                    "from " +
                    "(select max(score) as score, user_id, map_id " +
                    "from public.game " +
                    "where timestamp >= date_trunc('week', current_date) " +
                    "group by user_id, map_id) as a " +
                    "join public.user " +
                    "on public.user.id = user_id " +
                    "group by name " +
                    "having count(map_id) > 2 " +
                    "order by score desc " +
                    "limit 10 " +
                    ";");
            ResultSet rs = stmt.executeQuery();
            response.setContentType("application/json");
            ObjectMapper mapper = new ObjectMapper();
            ArrayNode jsonArray = mapper.createArrayNode();
            int index = 1;
            while (rs.next()) {
                ObjectNode jsonObject = mapper.createObjectNode();
                jsonObject.put("name", rs.getString(1));
                jsonObject.put("score", rs.getString(2));
                jsonObject.put("no", index++);
                jsonArray.add(jsonObject);
            }
            response.getWriter().print(mapper.writeValueAsString(jsonArray));
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
