package BeatBoxify.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import BeatBoxify.Entity.*;
import java.util.List;

public interface SongRepository extends JpaRepository<Songs, Integer> {
	Songs findByName(String name);
	List<Songs> findByGenre(String genre);
	List<Songs> findByArtist(String artist);
}
