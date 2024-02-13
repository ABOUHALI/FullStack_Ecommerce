package com.ecommerce.config;

import java.io.IOException;

import javax.crypto.SecretKey;

import com.ecommerce.model.ServerAuthenticationRoles;
import com.ecommerce.model.User;
import com.ecommerce.service.impl.CustomerUserServiceImplementation;
import io.jsonwebtoken.JwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.util.Iterator;
import java.util.List;


public class JwtValidator extends OncePerRequestFilter {

    public static final String SECRET_KEY = "azerty";
    public static final String JWT_HEADER = "Authorization";

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CustomerUserServiceImplementation userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String authorizationHeader = request.getHeader(JWT_HEADER);


        String username = null;


        if (authorizationHeader != null) {
            String jwt = authorizationHeader.substring(7);
            try {
                username = jwtUtil.extractUsername(authorizationHeader);
                if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                    UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);

                    if (jwtUtil.validateToken(jwt, userDetails)) {
                        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                                userDetails, null, userDetails.getAuthorities());
                        usernamePasswordAuthenticationToken
                                .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                        SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                    }
                }
            } catch (JwtException e) {
                User user = new User();
                user.setRole(ServerAuthenticationRoles.ANONYMOUS.name());
                user.setEmail("anonymous");
                user.setPassword("anonymous");
                AnonymousAuthenticationToken anonymousAuthenticationToken = new AnonymousAuthenticationToken("anonymous", user, user.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(anonymousAuthenticationToken);
            }

        } else {
            User user = new User();
            user.setRole(ServerAuthenticationRoles.ANONYMOUS.name());
            user.setEmail("anonymous");
            user.setPassword("anonymous");
            AnonymousAuthenticationToken anonymousAuthenticationToken = new AnonymousAuthenticationToken("anonymous", user, user.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(anonymousAuthenticationToken);
        }
        filterChain.doFilter(request,response);
    }
}

