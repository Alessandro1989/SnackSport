package it.uninsubria.invoice.database;


import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Map;

import it.uninsubria.generic.database.Database;
import it.uninsubria.generic.database.ListOfRows;
import it.uninsubria.invoice.domain.PersonalDate;
import it.uninsubria.invoice.domain.SnackSport;
import it.uninsubria.invoice.domain.SnacksSportsRepository;


public class DatabaseSnacksSportsRepository implements SnacksSportsRepository {

	private final Database database;

	public DatabaseSnacksSportsRepository(Database database) {
		this.database = database;
	}
	
	@Override
	public long size(String table) {
		ListOfRows rows = database.select("select count(*) as count from "+ table);
		return (Long) rows.get(0).get("count");
	}
	
	@Override
	public void addSnack(SnackSport snack) {
		String sql = "insert into snacks (nameFoodType, quantity, user, date) values (?, ?, ?, ?)";
		database.execute(sql, snack.getFoodType(), snack.getQuantity(), snack.getUser(), snack.getDate().toString());
	}
	
	@Override
	public void addSport(SnackSport sport) {
		String sql = "insert into sports (nameSport, minutes, user, date) values (?, ?, ?, ?)";
		database.execute(sql, sport.getFoodType(), sport.getQuantity(), sport.getUser(), sport.getDate().toString());
	}
	
	@Override
	public List<SnackSport> all(String table) {
		List<SnackSport> result = new ArrayList<SnackSport>();
		SnackSport element;
		ListOfRows rows = database.select("select * from "+table);
		for (Map<String, Object> map : rows) {
			//nella classe listOfRows le chiavi vengono salvati in minuscolo.
			
			if(table.equals("snacks"))
				element=getSnack(map);
			else 
				element=getSport(map);
			
			
			result.add(element);
		}
		return result;
	}
	


	@Override
	public List<SnackSport> allByUser(String table, String user) {
		List<SnackSport> result = new ArrayList<SnackSport>();
		SnackSport element;
		ListOfRows rows = database.select("select * from "+table+" where user=\""+user+"\"");
		for (Map<String, Object> map : rows) {
			//nella classe map le chiavi vengono salvati in minuscolo.
			if(table.equals("snacks"))
				element=getSnack(map);
			else 
				element=getSport(map);
			
			
			result.add(element);
		}
		return result;
	}
	
	
	
	private PersonalDate createDate(Date dt) {
		String date= ""+dt;
		String pezziDiData[] = date.split("-");
		
		
		return new PersonalDate(Integer.parseInt(pezziDiData[0]), 
				Integer.parseInt(pezziDiData[1]), Integer.parseInt(pezziDiData[2]));
	}
	
	
	private SnackSport getSnack(Map<String, Object> map){
		String nameFoodType = (String) map.get("namefoodtype");
		int quantity = (Integer) map.get("quantity");
		String userofmap = (String) map.get("user");
		PersonalDate mydate= createDate((Date) map.get("date"));
		return new SnackSport(nameFoodType, quantity, userofmap, mydate);
	}
	
	private SnackSport getSport(Map<String, Object> map){
		String sport = (String) map.get("namesport");
		int minutes = (Integer) map.get("minutes");
		String userofmap = (String) map.get("user");
		PersonalDate mydate= createDate((Date) map.get("date"));
		return new SnackSport(sport, minutes, userofmap, mydate);
	}

}
