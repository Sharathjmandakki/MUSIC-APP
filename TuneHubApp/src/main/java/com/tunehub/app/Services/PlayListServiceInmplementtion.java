package com.tunehub.app.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tunehub.app.Entity.PlayList;
import com.tunehub.app.Repositories.PlayListRepository;
@Service
public class PlayListServiceInmplementtion implements PlayListService{

	@Autowired
	PlayListRepository plr;

	@Override
	public String addPlayList(PlayList p) {
		// TODO Auto-generated method stub
			plr.save(p);
		return "success";
	}

	@Override
	public boolean checkPlayList(String name) {
		if(plr.findByName(name).getName().equals(name)) {
			return true;
		}else {
			return false;
		}
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<PlayList> ViewAllPlayList() {
		// TODO Auto-generated method stub
		return plr.findAll();
	}
}
