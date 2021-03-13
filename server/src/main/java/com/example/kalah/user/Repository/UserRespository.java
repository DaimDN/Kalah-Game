package com.example.kalah.user.Repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRespository  extends MongoRepository<user, String> {

    List findAllByEmail(String email);

    user findByEmail(String email);


}
