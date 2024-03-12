package BeatBoxify.Services;

import java.util.List;

import BeatBoxify.Entity.*;

public interface UserServices {
//these are abstract methods where body of this method should be given 
	String newUser(Users u); // this method for adding new user

	boolean checkUser(String email);// for checking the user present in db or not

	String GetRoal(Users u);// getting the roal for roal-base sign in

	Users GetUser(String email);

	String UpdateUser(Users u);

	String resetPass(String email, String password);

	List<Users> getUsers(String sort);

	List<Users> getAllUsers();

	String login(Users u);

	String deleteUser(Users u);

	Counts count();
}
