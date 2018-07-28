package com.spmu.scirateapi.user.services;

/**
 *
 * @author artemy
 */
import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.*;

@ApplicationScoped
@Path("/user")
public class UserService implements UserInterface{
  @GET
  @Path("/")
  @Override
  public String echo(@QueryParam("q") String original) {
      return original;
  };
}
