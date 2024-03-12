package BeatBoxify.Entity;

import java.time.LocalDateTime;

import javax.annotation.processing.Generated;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String username;
	String email;
	String dob;
	String gender;
	@Lob
	@Column( length = 1000)
	String address;
	String roal;
	String password;
	String Date;
	boolean paid=false;
	@Override
	public String toString() {
		return "Users [id=" + id + ", username=" + username + ", email=" + email + ", Dob=" + dob + ", gender=" + gender
				+ ", address=" + address + ", roal=" + roal + ", password=" + password + ", paid="+ paid+" ]";
	}
	public Users(int id, String username, String email, String dob, String gender, String address, String roal,
			String password,boolean paid) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.dob = dob;//
		this.gender  = gender;//
		this.address = address;
		this.roal = roal;
		this.password = password;
		this.paid=paid;
//		this.Date=LocalDateTime.now().toString();
	}
	
	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getRoal() {
		return roal;
	}
	public void setRoal(String roal) {
		this.roal = roal;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public boolean getPaid() {
		return paid;
	}
	public void setPaid(boolean paid) {
		this.paid = paid;
	}
	
	
}
