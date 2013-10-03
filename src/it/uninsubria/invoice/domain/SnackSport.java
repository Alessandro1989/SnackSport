package it.uninsubria.invoice.domain;

import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Date;

public class SnackSport {
	private String foodType;
	private int quantity;
	private String user;
	private PersonalDate date;
	
	public SnackSport(String foodType, int quantity, String user, PersonalDate date) {
		this.foodType = foodType;
		this.quantity = quantity;
		this.user = user;
		this.date = date;
		
	}
	
	public String getFoodType() {
		return foodType;
	}
	
	public void setFoodType(String foodType) {
		this.foodType = foodType;
	}


	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	

	public String getUser() {
		return user;
	}


	public void setUser(String user) {
		this.user = user;
	}


	public PersonalDate getDate() {
		return date;
	}


	public void setDate(PersonalDate date) {
		this.date = date;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		//other è l'altro oggetto con il quale si sta confrontando questo oggetto
		
		SnackSport other = (SnackSport) obj; 
	    		
		if (foodType == null) {
			if (other.foodType != null)
				return false;
		} else if (!foodType.equals(other.foodType))
			return false;
		
		if (!isNumber(""+this.quantity)) {
			if (!isNumber(""+other.quantity))
				return false;
		} else if (quantity!=other.quantity)
			return false;
		
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		
		if (this.date == null) {
			if (other.date != null)
				return false;
		} else if (!this.date.equals(other.date))
			return false;
		
		
		return true;
	}
	
	private boolean isNumber(String Str){
		try  
	    {  
	      int i = Integer.parseInt(Str);  
	    }  
	    catch(NumberFormatException ex)  
	    {  
	      return false;  
	    }  
	    return true;  
	}

	public String SnacktoJson() {
		String template = "{ \"foodType\": \"%s\", \"quantity\": %d, \"user\": \"%s\", \"date\": \"%s\" }";
		return String.format(template, foodType, quantity, user, date.toString());
		
	}
	
	public String SporttoJson() {
		String template = "{ \"sport\": \"%s\", \"minutes\": %d, \"user\": \"%s\", \"date\": \"%s\" }";
		return String.format(template, foodType, quantity, user, date.toString());
		
	}
	
}
