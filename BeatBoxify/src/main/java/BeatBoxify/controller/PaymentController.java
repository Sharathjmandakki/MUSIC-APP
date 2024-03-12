package BeatBoxify.controller;

import com.razorpay.*;

import BeatBoxify.Entity.Users;
import BeatBoxify.Repositories.UserRepository;
import BeatBoxify.Services.UserServiceImplementation;
import jakarta.servlet.http.HttpSession;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
@CrossOrigin("*")
@RequestMapping
@RestController
public class PaymentController {
	@Autowired
	UserServiceImplementation usi;
	@Autowired
	trUSController uc;
	@Autowired
	UserRepository ur;
	@ResponseBody
	@PostMapping("/createOrder")
	public String createOrder() {
		Order order=null;
		try {
			RazorpayClient razorpay = new RazorpayClient("rzp_test_pp9YPJEHeouiL9", "9McTy8XzpLyjcGtuDcaIf685");
			JSONObject orderRequest = new JSONObject();
			orderRequest.put("amount", 50000);
			orderRequest.put("currency", "INR");
			orderRequest.put("receipt", "receipt#1");
			JSONObject notes = new JSONObject();
			notes.put("notes_key_1", "BeatBoxify");
			orderRequest.put("notes", notes);
			order = razorpay.orders.create(orderRequest);
		} catch (Exception e) {
			// TODO: handle exception
			System.err.println("payement failed");
		}
		return order.toString();
	}
	
	@PostMapping("/verify")
	@ResponseBody
	public boolean verifyPayment(@RequestBody data d) {
	    try {
	    	System.out.println("started");
	        // Initialize Razorpay client with your API key and secret
	        RazorpayClient razorpayClient = new RazorpayClient("rzp_test_pp9YPJEHeouiL9", "9McTy8XzpLyjcGtuDcaIf685");
	        // Create a signature verification data string
//	        String verificationData = d.orderId + "|" + d.paymentId;
//
//	        // Use Razorpay's utility function to verify the signature
//	        boolean isValidSignature = Utils.verifySignature(verificationData, d.signature, "9McTy8XzpLyjcGtuDcaIf685");
	        JSONObject options = new JSONObject();
	        options.put("razorpay_order_id", d.getOrderId()+"");
	        options.put("razorpay_payment_id", d.getPaymentId()+"");
	        options.put("razorpay_signature",d.getSignature()+"");
	        boolean isValidSignature =Utils.verifyPaymentSignature(options,"9McTy8XzpLyjcGtuDcaIf685");
	        if(!isValidSignature) {
	        	payment();
	        }
	        System.out.println(isValidSignature);
	        return !isValidSignature;
	    } catch (RazorpayException e) {
	        e.printStackTrace();
	        System.out.println("not paid");
	        return false;
	    }
	}
	public String payment() {
		Users u=uc.user();
		u.setPaid(true);
		ur.save(u);
		return "added";
	}
	@GetMapping("failure")
	public String Notpaid() {
		return "login";
	}
}

class data{
	private String orderId;
	private String signature;
	private String paymentId;
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	public String getSignature() {
		return signature;
	}
	public void setSignature(String signature) {
		this.signature = signature;
	}
	public String getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}
}
