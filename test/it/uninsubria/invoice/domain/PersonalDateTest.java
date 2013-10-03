package it.uninsubria.invoice.domain;

import static org.junit.Assert.*;

import java.util.Calendar;

import java.util.GregorianCalendar;

import org.junit.Test;



public class PersonalDateTest {

	@Test
	public void constructorAndGetters() {
		GregorianCalendar gc= new GregorianCalendar();
		
		
		PersonalDate date = new PersonalDate(2012,12,15);
		assertEquals(2012, date.getYear());
		assertEquals(12, date.getMonth());
		assertEquals(15, date.getDay());
		
		date.setDay(16);
		date.setMonth(10);
		date.setYear(2010);
		
		assertEquals(2010, date.getYear());
		assertEquals(10, date.getMonth());
		assertEquals(16, date.getDay());
		
		date=new PersonalDate();
		
		
		assertEquals(gc.get(gc.YEAR), date.getYear());
		assertEquals(gc.get(gc.MONTH)+1, date.getMonth());
		assertEquals(gc.get(gc.DAY_OF_MONTH), date.getDay());
		
		System.out.println(date.toString());
		
		
	}
	
	@Test
	public void ToString() {
		PersonalDate date = new PersonalDate(2012,12,15);
		System.out.println(date.toString());
		assertEquals("2012/12/15",date.toString());
		date.setDay(2);
		date.setMonth(4);
		assertEquals("2012/04/02",date.toString());
	}
	
	

}
