package it.uninsubria.invoice.web;

import static org.junit.Assert.*;

import java.util.Date;
import java.util.GregorianCalendar;

import it.uninsubria.generic.web.FakeWebRequest;
import it.uninsubria.generic.web.FakeWebResponse;
import it.uninsubria.generic.web.HttpMethod;
import it.uninsubria.generic.web.WebResponse;

import it.uninsubria.invoice.domain.PersonalDate;
import it.uninsubria.invoice.domain.SnackSport;
import it.uninsubria.invoice.domain.SnacksSportsRepository;

import org.junit.Test;
import org.simpleframework.http.Request;

public class SnackPageTest {
	SnacksSportsRepository repository = new FakeSnacksRepository();
	SnackPage page = new SnackPage(repository);
	FakeWebRequest request = new FakeWebRequest();
	FakeWebResponse response = new FakeWebResponse();

	@Test
	public void addSnack() throws Exception {
		request.setPath("/users/asd");
		request.setMethod(HttpMethod.POST);
		
		request.setParameter("type", "snack");
		request.setParameter("user", "asd");
		request.setParameter("selectFood", "patate");
		request.setParameter("quantity", "300");
			
		request.setParameter("selectYear", "2012");
		request.setParameter("selectMonth", "5");//maggio? o giugno?
		request.setParameter("selectDay", "3");
		
		
		page.handle(request, response);
		
		assertEquals(1, repository.size("snacks"));
		PersonalDate pd = new PersonalDate(2012,5,3);
		assertEquals(new SnackSport("patate", 300, "asd", pd), repository.all("snacks").get(0));
		assertEquals(201, response.getStatus());
	}
	
	@Test
	public void addSomeSnacks() throws Exception {
		request.setPath("/users/asd");
		request.setMethod(HttpMethod.POST);
		
		request.setParameter("type", "snack");
		request.setParameter("user", "asd");
		request.setParameter("size", "3"); 
		request.setParameter("snack[0]", "patate;300;2012/05/03");
		request.setParameter("snack[1]", "pane;200;2012/05/21");
		request.setParameter("snack[2]", "tonno;200;2012/05/21");
		
		page.handle(request, response);
		
		assertEquals(3, repository.size("snacks"));
		PersonalDate pd = new PersonalDate(2012,5,3);
		assertEquals(new SnackSport("patate", 300, "asd", pd), repository.all("snacks").get(0));
		
		pd=new PersonalDate(2012,5,21);
		
		assertEquals(new SnackSport("pane", 200, "asd", pd), repository.all("snacks").get(1));
		assertEquals(new SnackSport("tonno", 200, "asd", pd), repository.all("snacks").get(2));
		
		assertEquals(201, response.getStatus());
	}
	
	@Test
	public void getAllSnacks() throws Exception {
		PersonalDate date = new PersonalDate();
		SnackSport firstSnack= new SnackSport("pane", 300, "ale", date);
		SnackSport secondSnack= new SnackSport("patate", 240, "ale", date);
		SnackSport thirdSnack= new SnackSport("cipolla", 200, "giovanni", date);
				
		repository.addSnack(firstSnack);
		repository.addSnack(secondSnack);
		repository.addSnack(thirdSnack);
		
		request.setPath("/snacks/ale");
		request.setMethod(HttpMethod.GET);
		
		page.handle(request, response);
		
		assertEquals(200, response.getStatus());
		assertEquals("application/json", response.getContentType());
		String expected = "" +
				"[\n" +
				"  " + firstSnack.SnacktoJson() + "\n" +
				",  " + secondSnack.SnacktoJson() + "\n" +
				"]";
		assertEquals(expected , response.getBody());
	}
	
	@Test
	public void addSport() throws Exception {
		request.setPath("/users/asd");
		request.setMethod(HttpMethod.POST);
		
		request.setParameter("type", "sport");
		request.setParameter("user", "asd");
		request.setParameter("selectFood", "corsa");
		request.setParameter("quantity", "60");
			
		request.setParameter("selectYear", "2012");
		request.setParameter("selectMonth", "5");//maggio? o giugno?
		request.setParameter("selectDay", "3");
		
		
		page.handle(request, response);
		
		assertEquals(1, repository.size("sports"));
		PersonalDate pd = new PersonalDate(2012,5,3);
		assertEquals(new SnackSport("corsa", 60, "asd", pd), repository.all("sports").get(0));
		assertEquals(201, response.getStatus());
	}
	
	@Test
	public void addSomeSports() throws Exception {
		request.setPath("/users/asd");
		request.setMethod(HttpMethod.POST);
		
		request.setParameter("type", "sport");
		request.setParameter("user", "asd");
		request.setParameter("size", "3"); 
		request.setParameter("snack[0]", "corsa;300;2012/05/03");
		request.setParameter("snack[1]", "tennis;200;2012/05/21");
		request.setParameter("snack[2]", "nuoto;200;2012/05/21");
		
		page.handle(request, response);
		
		assertEquals(3, repository.size("sports"));
		PersonalDate pd = new PersonalDate(2012,5,3);
		assertEquals(new SnackSport("corsa", 300, "asd", pd), repository.all("sport").get(0));
		
		pd=new PersonalDate(2012,5,21);
		
		assertEquals(new SnackSport("tennis", 200, "asd", pd), repository.all("sport").get(1));
		assertEquals(new SnackSport("nuoto", 200, "asd", pd), repository.all("sport").get(2));
		
		assertEquals(201, response.getStatus());
	}
	
	@Test
	public void getAllSports() throws Exception {
		PersonalDate date = new PersonalDate();
		SnackSport firstSport= new SnackSport("corsa", 300, "ale", date);
		SnackSport secondSport= new SnackSport("tennis", 240, "ale", date);
		SnackSport thirdSport= new SnackSport("nuoto", 200, "giovanni", date);
				
		repository.addSport(firstSport);
		repository.addSport(secondSport);
		repository.addSport(thirdSport);
		
		request.setPath("/sports/ale");
		request.setMethod(HttpMethod.GET);
		
		page.handle(request, response);
		
		assertEquals(3, repository.size("sports"));
		
		assertEquals(200, response.getStatus());
		assertEquals("application/json", response.getContentType());
		String expected = "" +
				"[\n" +
				"  " + firstSport.SporttoJson() + "\n" +
				",  " + secondSport.SporttoJson() + "\n" +
				"]";
		assertEquals(expected , response.getBody());
	}
	
	
}
