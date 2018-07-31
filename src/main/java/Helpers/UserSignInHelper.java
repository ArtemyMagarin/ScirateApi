/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Helpers;

import javax.servlet.http.HttpServletRequest;

/**
 *
 * @author artemy
 */
public class UserSignInHelper {

    public UserSignInHelper() {
    }
    
    public static boolean isUserLoggedIn(HttpServletRequest request) {
        return (boolean) request.getSession().getAttribute("loggedIn");
    }
    
    public static void setUserLoggedIn(HttpServletRequest request) {
        request.getSession().setAttribute("loggedIn", Boolean.TRUE);
        request.getSession().setMaxInactiveInterval(60 * 60 * 24);
        // TODO: add logging
    }
    
    public static void setUserLoggedOut(HttpServletRequest request) {
        request.getSession().setAttribute("loggedIn", Boolean.FALSE);
        request.getSession().invalidate();
        
        // TODO: add logging
    }
}
