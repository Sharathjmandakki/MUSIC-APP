package BeatBoxify.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import BeatBoxify.Entity.Contact;
import BeatBoxify.Services.ContactService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin("*")
public class ContactController {
	@Autowired
	ContactService cs;
	@PostMapping("/addContact")
	public String addContact(@RequestBody Contact c) {
		return cs.add(c);
	}
	@PostMapping("/deleteContact")
	public String deleteContact(@RequestBody Contact c) {
		return cs.delete(c);
	}
	@GetMapping("/viewContact")
	public List<Contact> viewAllContact() {
		return cs.view();
	}
	
}
