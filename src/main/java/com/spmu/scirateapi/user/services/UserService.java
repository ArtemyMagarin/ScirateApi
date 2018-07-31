package com.spmu.scirateapi.user.services;

/**
 *
 * @author artemy
 */
import com.spmu.scirateapi.user.models.UserEntity;
import javax.enterprise.context.ApplicationScoped;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;

@ApplicationScoped
@Path("/user")
public class UserService implements UserInterface{
  
  @GET
  @Path("/")
  @Override
  public Response getMe( @Context HttpServletRequest request ) {
    String token = (String) request.getSession().getAttribute("token");
    if (token == null) {
        return Response.status(403).entity("Invalid token").build();
    }
    
    UserEntity user = UserEntity.getUserByToken(token);
    if (user == null) {
        return Response.status(403).entity("Invalid token").build();
    }
    
    return Response.ok(user.getJson(), "application/json").build();
  };
  
  @GET
  @Path("/{id}")
  @Override
  public Response getUser(Integer id,  @Context HttpServletRequest request) {
    return Response.ok().build();
  };

}
