package BeatBoxify.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import BeatBoxify.Entity.PlayList;
import BeatBoxify.Repositories.PlayListRepository;
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
	
	public PlayList getPlayList(PlayList p){
		return plr.findByName(p.getName());
	}
}
