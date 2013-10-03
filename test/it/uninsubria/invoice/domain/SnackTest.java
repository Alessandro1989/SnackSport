package it.uninsubria.invoice.domain;

import static org.junit.Assert.*;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import org.junit.Test;

public class SnackTest {
	@Test
	public void constructorAndGetters() {
		PersonalDate date = new PersonalDate();
		SnackSport firstSnack= new SnackSport("pane", 300, "ale", date);
		assertEquals("pane", firstSnack.getFoodType());
		assertEquals(300, firstSnack.getQuantity());
		assertEquals("ale", firstSnack.getUser());

		assertEquals(date, firstSnack.getDate());
		firstSnack.setQuantity(250);
		firstSnack.setUser("fabio");
		assertEquals(250, firstSnack.getQuantity());
		assertEquals("fabio", firstSnack.getUser());
	
	}
	
	@Test
	public void Equals() {
		PersonalDate date = new PersonalDate();
		SnackSport firstSnack= new SnackSport("pane", 300, "fabio", date);
		SnackSport secondSnack= new SnackSport("pane", 30, "fab", date);
		
		//assertFalse(false);ale
		assertTrue(firstSnack!=secondSnack);
		
		secondSnack.setUser("fabio");
		secondSnack.setQuantity(300);
		
		assertEquals(firstSnack,secondSnack);
		
		//se lasciavo date modificava automaticamente i valori degli snacks, ???
		
		PersonalDate anotherdate = new PersonalDate(1900, 2, 12); //e' già passato per cui..
		secondSnack.setDate(anotherdate);
			
		assertTrue(firstSnack!=secondSnack);
		
	}
	@Test
	public void returnsJsonRepresentation() throws Exception {
		PersonalDate date = new PersonalDate();
		SnackSport firstSnack= new SnackSport("pane", 300, "fabio", date);
		String pz[] = date.toString().split("/");
		String expected = "{ \"foodType\": \"pane\", \"quantity\": 300, \"user\": \"fabio\", \"date\": \""+pz[0]+"/"+pz[1]+"/"+pz[2]+"\" }";
		assertEquals(expected, firstSnack.SnacktoJson());
	}
	
	@Test
	public void returnsJsonSportRepresentation() throws Exception {
		PersonalDate date = new PersonalDate();
		SnackSport firstSport= new SnackSport("corsa", 400, "ale", date);
		String pz[] = date.toString().split("/");
		String expected = "{ \"sport\": \"corsa\", \"minutes\": 400, \"user\": \"ale\", \"date\": \""+pz[0]+"/"+pz[1]+"/"+pz[2]+"\" }";
		assertEquals(expected, firstSport.SporttoJson());
	}
	

}
