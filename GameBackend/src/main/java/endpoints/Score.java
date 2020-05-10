package endpoints;

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
import java.sql.Timestamp;
import java.util.Calendar;

@WebServlet(name = "score", urlPatterns = {"/api/score"})
public class Score extends HttpServlet {
    public void processRequest(HttpServletRequest request, HttpServletResponse response){
        System.out.println("ScoreEndpoint");
        try{
            String name = request.getParameter("user");
            String mapId = request.getParameter("mapId");
            String score = request.getParameter("score");
            System.out.println("name: " + name);
            System.out.println("map: " + mapId);
            System.out.println("score: " + score);
            Connection c = DB.getConnection();
            PreparedStatement stmt = c.prepareStatement("SELECT id FROM public.user WHERE name = ? ;");
            stmt.setString(1, name);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                Integer user_id = rs.getInt(1);
                stmt = c.prepareStatement("INSERT INTO public.game (user_id, map_id, score, timestamp) "
                        + "VALUES ( ?, ?, ?, ? );");
                stmt.setInt(1, user_id);
                stmt.setInt(2, Integer.parseInt(mapId));
                stmt.setInt(3, Integer.parseInt(score));
                stmt.setTimestamp(4, new Timestamp(Calendar.getInstance().getTime().getTime()));
                stmt.executeUpdate();
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
