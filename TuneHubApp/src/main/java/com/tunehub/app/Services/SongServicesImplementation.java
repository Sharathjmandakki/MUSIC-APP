package com.tunehub.app.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tunehub.app.Entity.Songs;
import com.tunehub.app.Repositories.SongRepository;
@Service
public class SongServicesImplementation implements SongServices{
	@Autowired
	SongRepository sr;
	@Override
	public String addsong(Songs s) {
		// TODO Auto-generated method stub
		sr.save(s);
		return "adminHome";
	}
	@Override
	public boolean checkSong(String song) {
		if(sr.findByName(song)==null) {
			return false;
		}else {
			return true;
		}
		// TODO Auto-generated method stub
	}
	@Override
	public List<Songs> viewAllSong() {
		// TODO Auto-generated method stub
		return sr.findAll();
	}
	@Override
	public Songs findSong(String name) {
		// TODO Auto-generated method stub
		return sr.findByName(name);
	}
	@Override
	public String updateSong(String name, String link) {
		if(sr.findByName(name)==null) {
			return "updateSong";
		}else {
			Songs s=sr.findByName(name);
			s.setLink(link);
			sr.save(s);
			return "success";
		}
	}
	@Override
	public String update(Songs s) {
		// TODO Auto-generated method stub
		sr.save(s);
		return "success";
	}
}
