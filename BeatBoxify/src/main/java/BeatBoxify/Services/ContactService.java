package BeatBoxify.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import BeatBoxify.Entity.Contact;
import BeatBoxify.Repositories.ContactRepository;
@Service
public class ContactService {
	@Autowired
	ContactRepository cr;

	public String add(Contact c) {
		cr.save(c);
		return "added";
	}
	
	public List<Contact> view() {
		return cr.findAll();
	}
	
	public String delete(Contact c) {
		cr.deleteById(c.getCid());;
		return "deleted";
	}
}
