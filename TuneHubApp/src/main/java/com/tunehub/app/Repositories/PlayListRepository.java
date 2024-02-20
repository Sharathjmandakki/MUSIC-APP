package com.tunehub.app.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tunehub.app.Entity.PlayList;
import java.util.List;


public interface PlayListRepository extends JpaRepository<PlayList, Integer> {
	PlayList findByName(String name); 
}
