package BeatBoxify.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import BeatBoxify.Entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Integer> {
	
}
