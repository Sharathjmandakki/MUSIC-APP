package com.tunehub.app.Services;

import java.util.List;

import com.tunehub.app.Entity.PlayList;

public interface PlayListService {

	String addPlayList(PlayList p);
	boolean checkPlayList(String name);
	List<PlayList> ViewAllPlayList();
}
