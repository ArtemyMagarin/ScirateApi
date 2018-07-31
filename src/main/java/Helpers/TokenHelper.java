/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Helpers;

import java.security.SecureRandom;

/**
 *
 * @author tishkovav
 */
public class TokenHelper {
    protected static SecureRandom random = new SecureRandom();
        
    public static synchronized String generateToken( String username ) {
            long longToken = Math.abs( random.nextLong() );
            String random = Long.toString( longToken, 16 );
            return ( random );
    } 
}
