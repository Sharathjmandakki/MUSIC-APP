package BeatBoxify.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import BeatBoxify.Entity.PlayList;
import BeatBoxify.Entity.Songs;
import BeatBoxify.Entity.Users;
import BeatBoxify.Services.PlayListServiceInmplementtion;
import BeatBoxify.Services.SongServicesImplementation;
import BeatBoxify.Services.UserServiceImplementation;
@CrossOrigin("*")
@RestController
@RequestMapping
public class PlayListController {
	@Autowired
	SongServicesImplementation ssi;
	@Autowired
	PlayListServiceInmplementtion psi;
	@Autowired
	UserServiceImplementation usi;
	@GetMapping("/map-createPlayList")
	public String createPlayList(Model model) {
		model.addAttribute("songs", ssi.viewAllSong());
		return "createplaylist";
	}

	@PostMapping("/addplaylist")
	public String addPlayList(@RequestBody PlayList p) {
		psi.addPlayList(p);
//		List<Songs> ls = p.getSongs();
//		for (Songs s : ls) {
//			s.getPlayList().add(p);
//			ssi.update(s);
//		}
		return "success";
	}

	@GetMapping("/playlists")
	public List<PlayList> ViewPlayList() {
			return psi.ViewAllPlayList();
	}
	
	@PostMapping("/getplaylist")
	public PlayList SearchViewPlayList(@RequestBody PlayList p) {
			return psi.getPlayList(p);
	}
}