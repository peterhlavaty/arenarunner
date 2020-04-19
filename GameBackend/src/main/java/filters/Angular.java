package filters;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@WebFilter("/*")
public class Angular implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        if (!(request instanceof HttpServletRequest)) {
            return;
        }
        HttpServletRequest req = (HttpServletRequest) request;

        if (isAllowed(req)) {
            chain.doFilter(request, response);
        } else { // forward every other request to index page
            req.getRequestDispatcher("/index.html").forward(request, response);
        }
    }

    private boolean isAllowed(HttpServletRequest req) {
//        if(req.getServletPath().startsWith("/api")){
//            return true;
//        }
//        return false;
        if(req.getServletPath().endsWith(".js")||req.getServletPath().contains("index.html")){
            return true;
        }
        List<String> allowed = Arrays.asList("/assets", "/js", "/css", "/api", "/app");
        for (String path : allowed) {
            if (req.getServletPath().startsWith(path)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public void destroy() {

    }
}
