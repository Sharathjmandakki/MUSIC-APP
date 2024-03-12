package BeatBoxify.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import BeatBoxify.Entity.Counts;
import BeatBoxify.Entity.Users;
import BeatBoxify.Repositories.UserRepository;

@Service
public class UserServiceImplementation implements UserServices {
	@Autowired
	UserRepository ur;

	// body for all abstract method
	@Override
	public String newUser(Users user) {
		if (ur.findByEmail(user.getEmail()) == null) {
			if (ur.findByUsername(user.getUsername()) == null) {
				if(user.getRoal().equals("Admin")) {
					user.setPaid(true);
				}
				ur.save(user);
				return "user added";
			} else {
				return "username already exist plese try with another";
			}
		} else {
			return "email already exist plese try with another";
		}
	}

	@Override
	public boolean checkUser(String email) {
		if (ur.findByEmail(email) == null) {// this method ckeck the use is present in db
			// if no
			return false;
		} else {
			// if yes
			return true;
		}
	}
	@Override
	public String login(Users u) {
		try {
			Users user = GetUser(u.getEmail());
			if (user.getPassword().equals(u.getPassword())) {
				return user.getRoal();
			} else {
				return "Worng Password";
			}
		} catch (Exception e) {
			return "email/username dosent exist please try to register";
		}
	}

	@Override
	public String GetRoal(Users u) {
		Users user = ur.findByEmail(u.getEmail());
		if (user == null) {
			user = ur.findByUsername(u.getEmail());
		}
		return user.getRoal();
	}

	@Override
	public Users GetUser(String email) {
		// TODO Auto-generated method stub
		Users u = ur.findByEmail(email);
		if (u == null) {
			return ur.findByUsername(email);
		}
		return u;
	}

	@Override
	public String UpdateUser(Users u) {
		Users user=ur.findByEmail(u.getEmail());
		user.setRoal(u.getRoal());
		user.setAddress(u.getAddress());
		ur.save(user);
		return "updated";
	}
	@Override
	public String deleteUser(Users u) {
		Users user=ur.findByEmail(u.getEmail());
		ur.deleteById(user.getId());
		return "deleted";
	}

	@Override
	public String resetPass(String email, String password) {
		// TODO Auto-generated method stub
		try {
			Users u = GetUser(email);
			if (u.getPassword().equals(password)) {
				return "Password is same as old password";
			} else {
				u.setPassword(password);
				ur.save(u);
			}
		} catch (Exception e) {
			System.err.println(e);
		}
		return "success";
	}

	@Override
	public List<Users> getUsers(String sort) {
		if (sort.equals("Paid")) {
			return ur.findByPaid(true);
		} else if (sort.equals("UnPaid")) {
			return ur.findByPaid(false);
		} else {
			return ur.findAll();
		}
	}

	@Override
	public List<Users> getAllUsers() {
		// TODO Auto-generated method stub
		return ur.findAll();
	}
	
	
	@Override
	public Counts count() {
		int artistNotPaid=0;
		int userNotPaid=0;
		
		for(Users u:ur.findByPaid(false)) {
			if(u.getRoal().equals("User")) {
				userNotPaid++;
			}else if(u.getRoal().equals("Artest")) {
				artistNotPaid++;
			}
		}
		
		Counts c=new Counts();
		c.setTotal((int)ur.count());
		c.setArtest(ur.findByRoal("Artest").size());
		c.setUser(ur.findByRoal("User").size());
		c.setAdmin(ur.findByRoal("Admin").size());
		c.setArtestnotpaid(artistNotPaid);
		c.setArtestPaid(ur.findByRoal("Artest").size()-userNotPaid);
		c.setUsernotPaid(userNotPaid);
		c.setUserPaid(ur.findByRoal("User").size() - userNotPaid);
		return c;
	}
}
