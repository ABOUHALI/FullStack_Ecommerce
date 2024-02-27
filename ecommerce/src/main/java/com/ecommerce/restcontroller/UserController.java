package com.ecommerce.restcontroller;

import com.ecommerce.exception.UserException;

import com.ecommerce.model.User;
import com.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<User> getUserProfile(@RequestHeader("Authorization") String jwt)throws UserException{
        return new ResponseEntity<User>(userService.findUserProfileByJwt(jwt),
                HttpStatus.ACCEPTED);
    }


}
