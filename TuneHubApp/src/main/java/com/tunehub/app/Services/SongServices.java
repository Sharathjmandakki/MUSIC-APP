package com.tunehub.app.Services;
import com.tunehub.app.Entity.*;
import java.util.*;
public interface SongServices {
String addsong(Songs s);
boolean checkSong(String song);
List<Songs> viewAllSong();
Songs findSong(String name);
String updateSong(String name,String link);
String update(Songs s);
}
