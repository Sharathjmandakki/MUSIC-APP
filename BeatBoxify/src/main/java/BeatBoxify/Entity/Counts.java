package BeatBoxify.Entity;

public class Counts {
	int total;
	int user;
	int userPaid;
	int UsernotPaid;
	int artest;
	int admin;
	int artestPaid;
	int artestnotpaid;
	
	public int getAdmin() {
		return admin;
	}
	public void setAdmin(int admin) {
		this.admin = admin;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public int getUser() {
		return user;
	}
	public void setUser(int user) {
		this.user = user;
	}
	public int getUserPaid() {
		return userPaid;
	}
	public void setUserPaid(int userPaid) {
		this.userPaid = userPaid;
	}
	public int getUsernotPaid() {
		return UsernotPaid;
	}
	public void setUsernotPaid(int usernotPaid) {
		UsernotPaid = usernotPaid;
	}
	public int getArtest() {
		return artest;
	}
	public void setArtest(int artest) {
		this.artest = artest;
	}
	public int getArtestPaid() {
		return artestPaid;
	}
	public void setArtestPaid(int artestPaid) {
		this.artestPaid = artestPaid;
	}
	public int getArtestnotpaid() {
		return artestnotpaid;
	}
	public void setArtestnotpaid(int artestnotpaid) {
		this.artestnotpaid = artestnotpaid;
	}
	@Override
	public String toString() {
		return "Counts [total=" + total + ", user=" + user + ", userPaid=" + userPaid + ", UsernotPaid=" + UsernotPaid
				+ ", artest=" + artest + ", admin=" + admin + ", artestPaid=" + artestPaid + ", artestnotpaid="
				+ artestnotpaid + "]";
	}
	public Counts() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Counts(int total, int user, int userPaid, int usernotPaid, int artest, int admin, int artestPaid,
			int artestnotpaid) {
		super();
		this.total = total;
		this.user = user;
		this.userPaid = userPaid;
		UsernotPaid = usernotPaid;
		this.artest = artest;
		this.admin = admin;
		this.artestPaid = artestPaid;
		this.artestnotpaid = artestnotpaid;
	}
	
	
	
}
