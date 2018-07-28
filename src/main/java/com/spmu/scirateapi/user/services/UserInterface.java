/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.spmu.scirateapi.user.services;

/**
 *
 * @author tishkovav
 */
import javax.ws.rs.*;

@Path("/user")
public interface UserInterface {
  @GET
  @Path("/")
  String echo(@QueryParam("q") String original);
}
