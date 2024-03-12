package BeatBoxify.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import BeatBoxify.Entity.PlayList;

import java.util.List;


public interface PlayListRepository extends JpaRepository<PlayList, Integer> {
	PlayList findByName(String name); 
}
