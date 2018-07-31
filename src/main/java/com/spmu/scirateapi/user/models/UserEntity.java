package com.spmu.scirateapi.user.models;

import Helpers.HibernateUtil;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.security.crypto.bcrypt.BCrypt;
import com.google.gson.JsonObject;

/**
 *
 * @author artemy
 */
@Entity
@Table(name = "tUsers")
public class UserEntity implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Column(name="login")
    private String login;
    
    @NotNull
    @Column(name="password")
    private String password;
    
    @Column(name="token")
    private String token;
    
    @Column(name="loggedIn")
    private boolean loggedIn;
    
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="lastLogin")
    private Date lastLogin;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isLoggedIn() {
        return loggedIn;
    }

    public void setLoggedIn(boolean loggedIn) {
        this.loggedIn = loggedIn;
    }

    public Date getLastLogin() {
        return lastLogin;
    }

    public void setLastLogin(Date lastLogin) {
        this.lastLogin = lastLogin;
    }

    public void setToken(String token) {
        this.token = token;
    }
    
    public static UserEntity getUserByToken(String token) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Criteria criteria = session.createCriteria(UserEntity.class);
        UserEntity user = (UserEntity) criteria.add(Restrictions.eq("token", token))
                             .uniqueResult();
        
        return user;
    }
    
    public String getJson() {
        JsonObject json = new JsonObject();
        json.addProperty("id", getId());
        json.addProperty("login", getLogin());
        json.addProperty("lastLogin", getLastLogin().toString());
        json.addProperty("online", isLoggedIn());
        
        return json.getAsString();  
    }
    

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof UserEntity)) {
            return false;
        }
        UserEntity other = (UserEntity) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.spmu.scirateapi.user.models.UserEntity[ id=" + id + " ]";
    }
    
}
