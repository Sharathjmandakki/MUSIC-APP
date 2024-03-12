package BeatBoxify.Entity;

import java.util.*;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity
public class PlayList {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String name;
	String link;
	@ManyToMany
	List<Songs> songs;
	public PlayList() {
		super();
		// TODO Auto-generated constructor stub
	}
	public PlayList(int id, String name, List<Songs> songs,String link) {
		super();
		this.id = id;
		this.link=link;
		this.name = name;
		this.songs = songs;
	}
	public PlayList(String name, List<Songs> songs) {
		super();
		this.name = name;
		this.songs = songs;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Songs> getSongs() {
		return songs;
	}
	public void setSongs(List<Songs> songs) {
		this.songs = songs;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	@Override
	public String toString() {
		return "PlayList [id=" + id + ", name=" + name + ", link=" + link + "]";
	}
	
}
