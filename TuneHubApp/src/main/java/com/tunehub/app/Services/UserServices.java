package com.tunehub.app.Services;

import com.tunehub.app.Entity.*;

public interface UserServices {
//these are abstract methods where body of this method should be given 
	String newUser(Users u); // this method for adding new user

	boolean checkUser(String email);// for checking the user present in db or not

	String GetPassword(String email);// getting the password for login

	String GetRoal(String email);// getting the roal for roal-base sign in

	Users GetUser(String email);

	String UpdateUser(Users u);

	String resetPass(String email, String password);
}
