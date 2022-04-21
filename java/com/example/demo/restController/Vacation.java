package com.example.demo.restController;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Vacation")
public class Vacation {
	
	@Id
	private String id;
	
	private String hotelName;
	private String resortType;
	private int price;
	private String description;
	private String houseRules;
	private String amenities;
	private String location;
	
	public Vacation() {
		super();
	}
	
	public Vacation(String id, String hotelName, String resortType, int price, String description, String houseRules,
			String amenities, String location) {
		super();
		this.id = id;
		this.hotelName = hotelName;
		this.resortType = resortType;
		this.price = price;
		this.description = description;
		this.houseRules = houseRules;
		this.amenities = amenities;
		this.location = location;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getHotelName() {
		return hotelName;
	}
	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}
	public String getResortType() {
		return resortType;
	}
	public void setResortType(String resortType) {
		this.resortType = resortType;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getHouseRules() {
		return houseRules;
	}
	public void setHouseRules(String houseRules) {
		this.houseRules = houseRules;
	}
	public String getAmenities() {
		return amenities;
	}
	public void setAmenities(String amenities) {
		this.amenities = amenities;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}

	

}
