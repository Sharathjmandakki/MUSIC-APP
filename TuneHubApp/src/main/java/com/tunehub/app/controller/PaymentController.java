package com.tunehub.app.controller;

import com.razorpay.*;
import com.tunehub.app.Entity.Users;
import com.tunehub.app.Services.UserServiceImplementation;

import jakarta.servlet.http.HttpSession;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.GetMapping;


@RequestMapping
@Controller
public class PaymentController {
	@Autowired
	UserServiceImplementation usi;
	
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
			notes.put("notes_key_1", "Tea, Earl Grey, Hot");
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
	public boolean verifyPayment(@RequestParam  String orderId, @RequestParam String paymentId, @RequestParam String signature) {
	    try {
	        // Initialize Razorpay client with your API key and secret
	        RazorpayClient razorpayClient = new RazorpayClient("rzp_test_pp9YPJEHeouiL9", "9McTy8XzpLyjcGtuDcaIf685");
	        // Create a signature verification data string
	        String verificationData = orderId + "|" + paymentId;

	        // Use Razorpay's utility function to verify the signature
	        boolean isValidSignature = Utils.verifySignature(verificationData, signature, "9McTy8XzpLyjcGtuDcaIf685");

	        return isValidSignature;
	    } catch (RazorpayException e) {
	        e.printStackTrace();
	        return false;
	    }
	}
	
	@GetMapping("payment-success")
	public String paid(HttpSession hs) {
		String email=hs.getAttribute("email").toString();
		Users u =usi.GetUser(email);
		u.setPaid(true);
		return usi.UpdateUser(u);
	}
	@GetMapping("payment-failure")
	public String Notpaid() {
		return "login";
	}
	
	
	
}
