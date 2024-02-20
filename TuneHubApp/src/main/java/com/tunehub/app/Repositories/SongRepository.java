package com.tunehub.app.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tunehub.app.Entity.*;
public interface SongRepository extends JpaRepository<Songs, Integer> {
	Songs findByName(String name);
}
