package BeatBoxify.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Contact {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cid;
	private String email;
	private String username;
	@Lob
	@Column( length = 10000)
	private String message;

	public Contact() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Contact(int cid, String email, String username, String message) {
		super();
		this.cid = cid;
		this.email = email;
		this.username = username;
		this.message = message;
	}

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "Contact [cid=" + cid + ", email=" + email + ", username=" + username + ", message=" + message + "]";
	}

}
