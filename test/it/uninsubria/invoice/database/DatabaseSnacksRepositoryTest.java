package it.uninsubria.invoice.database;

import static org.junit.Assert.*;
import static org.junit.Assert.assertEquals;
import it.uninsubria.generic.database.Database;
import it.uninsubria.generic.database.DatabaseConnector;
import it.uninsubria.invoice.database.DatabaseSnacksSportsRepository;
import it.uninsubria.invoice.domain.PersonalDate;
import it.uninsubria.invoice.domain.SnackSport;
import it.uninsubria.invoice.domain.SnacksSportsRepository;


import java.sql.Connection;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;


public class DatabaseSnacksRepositoryTest {
	private Connection connection = 
		new DatabaseConnector(
				"snacks",
				"snacks", 
				"jdbc:mysql://localhost/snacks_test", 
				"com.mysql.jdbc.Driver")
			.getConnection();
	private Database database = new Database(connection);
	private SnacksSportsRepository repository = new DatabaseSnacksSportsRepository(database);

	@Before
	public void setUp() {
		database.execute("delete from snacks");
		database.execute("delete from sports");
	}
	
	@Test
	public void isEmptyInitially() {
		assertEquals(0, repository.size("snacks"));
		assertEquals(0, repository.size("sports"));
	}
	
	@Test
	public void addOneSnack() throws Exception {
		//GregorianCalendar date = new GregorianCalendar();
		PersonalDate date = new PersonalDate();
		SnackSport firstSnack= new SnackSport("pane", 300, "ale", date);
		repository.addSnack(firstSnack);
		
		assertEquals(1, repository.size("snacks"));
		SnackSport found = repository.all("snacks").get(0);
		assertEquals(firstSnack, found);
	}
	
	@Test
	public void addFewSnack() throws Exception {
		PersonalDate date = new PersonalDate();
		SnackSport firstSnack= new SnackSport("pane", 300, "ale", date);
		SnackSport secondSnack= new SnackSport("patate", 240, "ale", date);
		SnackSport thirdSnack= new SnackSport("cipolla", 200, "fabio", date);
		
		repository.addSnack(firstSnack);
		repository.addSnack(secondSnack);
		repository.addSnack(thirdSnack);
		
		assertEquals(3, repository.size("snacks"));
		SnackSport found = repository.all("snacks").get(0);
		SnackSport secondfound = repository.all("snacks").get(1);
		SnackSport thirdfound = repository.all("snacks").get(2);
		
		assertEquals(firstSnack, found);
		assertEquals(secondSnack, secondfound);
		assertEquals(thirdSnack, thirdfound);
		
	}
	
	@Test
	public void GetSnacksByUser() throws Exception {
		PersonalDate date = new PersonalDate();
		SnackSport firstSnack= new SnackSport("pane", 300, "ale", date);
		SnackSport secondSnack= new SnackSport("patate", 240, "ale", date);
		SnackSport thirdSnack= new SnackSport("cipolla", 200, "fabio", date);
		SnackSport fourthSnack= new SnackSport("cipolla", 200, "giovanni", date);
		SnackSport fifthSnack= new SnackSport("tonno", 220, "ale", date);
		SnackSport sixthSnack= new SnackSport("insalata", 300, "fabio", date);
		
		repository.addSnack(firstSnack);
		repository.addSnack(secondSnack);
		repository.addSnack(thirdSnack);
		repository.addSnack(fourthSnack);
		repository.addSnack(fifthSnack);
		repository.addSnack(sixthSnack);
		
		
		assertEquals(6, repository.size("snacks"));
		
		List<SnackSport> fabio = repository.allByUser("snacks","fabio");
		assertEquals(2, fabio.size());
		SnackSport fabioFirst = fabio.get(0);
		SnackSport fabioSecond = fabio.get(1);
		
		assertEquals(thirdSnack, fabioFirst);
		assertEquals(sixthSnack, fabioSecond);
		
		
		List<SnackSport> ale = repository.allByUser("snacks","ale");
		assertEquals(3, ale.size());
		SnackSport aleFirst = ale.get(0);
		SnackSport aleSecond = ale.get(1);
		SnackSport aleThird = ale.get(2);
		
		assertEquals(firstSnack, aleFirst);
		assertEquals(secondSnack, aleSecond);
		assertEquals(fifthSnack, aleThird);
				
		
		SnackSport giovanniFirst = repository.allByUser("snacks","giovanni").get(0);

		assertEquals(fourthSnack, giovanniFirst);
		
		
	}
	
	@Test
	public void addOneSport() throws Exception {
		//GregorianCalendar date = new GregorianCalendar();
		PersonalDate date = new PersonalDate();
		SnackSport firstSport= new SnackSport("corsa", 50, "ale", date);
		repository.addSport(firstSport);
		
		assertEquals(1, repository.size("sports"));
		SnackSport found = repository.all("sports").get(0);
		assertEquals(firstSport, found);
	}
	
	@Test
	public void addFewSports() throws Exception {
		PersonalDate date = new PersonalDate();
		SnackSport firstSport= new SnackSport("corsa", 150, "ale", date);
		SnackSport secondSport= new SnackSport("tennis", 140, "ale", date);
		SnackSport thirdSport= new SnackSport("calcio", 70, "fabio", date);
		
		repository.addSport(firstSport);
		repository.addSport(secondSport);
		repository.addSport(thirdSport);
		
		assertEquals(3, repository.size("sports"));
		SnackSport found = repository.all("sports").get(0);
		SnackSport secondfound = repository.all("sports").get(1);
		SnackSport thirdfound = repository.all("sports").get(2);
		
		assertEquals(firstSport, found);
		assertEquals(secondSport, secondfound);
		assertEquals(thirdSport, thirdfound);
		
	}
	
	@Test
	public void GetSportsByUser() throws Exception {
		PersonalDate date = new PersonalDate();
		SnackSport firstSport= new SnackSport("calcio", 300, "ale", date);
		SnackSport secondSport= new SnackSport("tennis", 240, "ale", date);
		SnackSport thirdSport= new SnackSport("pallavolo", 200, "fabio", date);
		SnackSport fourthSport= new SnackSport("nuoto", 200, "giovanni", date);
		SnackSport fifthSport= new SnackSport("tennis", 220, "ale", date);
		SnackSport sixthSport= new SnackSport("calcio", 300, "fabio", date);
		
		repository.addSport(firstSport);
		repository.addSport(secondSport);
		repository.addSport(thirdSport);
		repository.addSport(fourthSport);
		repository.addSport(fifthSport);
		repository.addSport(sixthSport);
		
		
		assertEquals(6, repository.size("sports"));
		
		List<SnackSport> fabio = repository.allByUser("sports","fabio");
		assertEquals(2, fabio.size());
		SnackSport fabioFirst = fabio.get(0);
		SnackSport fabioSecond = fabio.get(1);
		
		assertEquals(thirdSport, fabioFirst);
		assertEquals(sixthSport, fabioSecond);
		
		
		List<SnackSport> ale = repository.allByUser("sports","ale");
		assertEquals(3, ale.size());
		SnackSport aleFirst = ale.get(0);
		SnackSport aleSecond = ale.get(1);
		SnackSport aleThird = ale.get(2);
		
		assertEquals(firstSport, aleFirst);
		assertEquals(secondSport, aleSecond);
		assertEquals(fifthSport, aleThird);
				
		
		SnackSport giovanniFirst = repository.allByUser("sports","giovanni").get(0);

		assertEquals(fourthSport, giovanniFirst);
		
		
	}
	

	
	
	
}
