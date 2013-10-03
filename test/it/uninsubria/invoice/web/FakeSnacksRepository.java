package it.uninsubria.invoice.web;

import java.util.ArrayList;
import java.util.List;


import it.uninsubria.invoice.domain.SnackSport;
import it.uninsubria.invoice.domain.SnacksSportsRepository;

public class FakeSnacksRepository implements SnacksSportsRepository {

	
	List<SnackSport> listSnack = new ArrayList<SnackSport>();
	List<SnackSport> listSport = new ArrayList<SnackSport>();
	@Override
	public long size(String table) {
		// TODO Auto-generated method stub
		if(table.equals("snacks"))
			return listSnack.size();
		else
			return listSport.size();
		
	}

	@Override
	public void addSnack(SnackSport snack) {
		// TODO Auto-generated method stub
		listSnack.add(snack);
		
	}
	@Override
	public void addSport(SnackSport sport) {
		// TODO Auto-generated method stub
		listSport.add(sport);
		
	}

	@Override
	public List<SnackSport> all(String table) {
		if(table.equals("snacks"))
			return listSnack;
		else
			return listSport;
	}

	@Override
	public List<SnackSport> allByUser(String table, String user) {
		List<SnackSport> snacksSportUser = new ArrayList<SnackSport>();
		List<SnackSport> list;
		if(table.equals("snacks"))
			list=listSnack;
		else
			list=listSport;
		
		for(int i=0; i<list.size(); i++){
			SnackSport element=list.get(i);
				
			if(element.getUser().equals(user))
				snacksSportUser.add(element);
		}
		return snacksSportUser;
	}
	
	
	
}
