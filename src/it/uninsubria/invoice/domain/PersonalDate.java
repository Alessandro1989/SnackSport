package it.uninsubria.invoice.domain;

import java.util.Calendar;
import java.util.GregorianCalendar;


public class PersonalDate {
	private int year;
	private int month;
	private int day;
	public PersonalDate(int year, int month, int day){
		this.year=year;
		this.month=month;
		this.day=day;	
		
	}
	
	public PersonalDate() { // data corrente
		GregorianCalendar date= new GregorianCalendar();
		this.year=date.get(date.YEAR);
		this.month=(date.get(date.MONTH))+1;
		this.day=date.get(date.DAY_OF_MONTH);	
	}
	
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public int getMonth() {
		return month;
	}
	public void setMonth(int month) {
		this.month = month;
	}
	public int getDay() {
		return day;
	}
	public void setDay(int day) {
		this.day = day;
	}
	
	public String toString(){
		return ""+formatDate(year)+"/"+formatDate(month)+"/"+formatDate(day);	
	}
	private String formatDate(int n) {
		if (n < 10) {
			return "0" + n;
		}
		return ""+n;
	}
	
	public boolean correctDate(){
		try{
		GregorianCalendar gc = new GregorianCalendar(year,month,day);
		} catch(Exception e){
			return false;
		}
		return true;
		
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + day;
		result = prime * result + month;
		result = prime * result + year;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PersonalDate other = (PersonalDate) obj;
		if (day != other.day)
			return false;
		if (month != other.month)
			return false;
		if (year != other.year)
			return false;
		return true;
	}
	
	
}
