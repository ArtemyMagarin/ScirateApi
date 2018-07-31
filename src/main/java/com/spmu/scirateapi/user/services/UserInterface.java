/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.spmu.scirateapi.user.services;

/**
 *
 * @author artemy
 */
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;

@Path("/user")
public interface UserInterface {
  @GET
  @Path("{id}")
  Response getUser(@PathParam("id") Integer id,  @Context HttpServletRequest request);
  
  @GET
  @Path("/")
  Response getMe( @Context HttpServletRequest request );  
}
