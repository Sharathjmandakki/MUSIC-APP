package com.tunehub.app.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tunehub.app.Entity.PlayList;
import com.tunehub.app.Entity.Songs;
import com.tunehub.app.Entity.Users;
import com.tunehub.app.Services.PlayListServiceInmplementtion;
import com.tunehub.app.Services.SongServicesImplementation;
import com.tunehub.app.Services.UserServiceImplementation;

@Controller
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
	public String addPlayList(@ModelAttribute PlayList p) {
		psi.addPlayList(p);
		List<Songs> ls = p.getSongs();
		for (Songs s : ls) {
			s.getPlayList().add(p);
			ssi.update(s);
		}
		return "success";
	}

	@GetMapping("/map-viewplaylist")
	public String ViewPlayList(Model model) {
			List l = psi.ViewAllPlayList();
			System.out.println(l.get(1));
			model.addAttribute("playlist", l);
		return "viewplayList";
	}
}