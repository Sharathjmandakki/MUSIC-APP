package BeatBoxify.Services;

import java.util.List;

import BeatBoxify.Entity.PlayList;

public interface PlayListService {

	String addPlayList(PlayList p);
	boolean checkPlayList(String name);
	List<PlayList> ViewAllPlayList();
}
