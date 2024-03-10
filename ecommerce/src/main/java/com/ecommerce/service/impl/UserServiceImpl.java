package com.ecommerce.service.impl;

import com.ecommerce.config.JwtProvider;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.User;
import com.ecommerce.repository.UserRepository;
import com.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtProvider jwtProvider;
    @Override
    public User findUserById(Long userId) throws UserException {
        Optional<User> user = userRepository.findById(userId);
        if(user.isPresent()){
            return user.get();
        }
        throw new UserException("user not found "+userId);
    }

    @Override
    public User findUserProfileByJwt(String jwt) throws UserException {
       String email=jwtProvider.getEmailFromJwtToken(jwt);

       User user = userRepository.findByEmail(email);
       if(user==null){
           throw  new UserException("user not found"+email);
       }
       return user;


    }

    @Override
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }
}
