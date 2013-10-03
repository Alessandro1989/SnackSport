package it.uninsubria.invoice.web;


import java.io.File;
import java.util.List;

import org.simpleframework.http.RequestHeader;

import it.uninsubria.generic.web.HttpMethod;
import it.uninsubria.generic.web.Page;
import it.uninsubria.generic.web.WebRequest;
import it.uninsubria.generic.web.WebResponse;

import it.uninsubria.invoice.domain.PersonalDate;
import it.uninsubria.invoice.domain.SnackSport;
import it.uninsubria.invoice.domain.SnacksSportsRepository;


public class SnackPage extends Page {

	private final SnacksSportsRepository repository;

	public SnackPage(SnacksSportsRepository repository) {
		this.repository = repository;
	}

	@Override
	public void handle(WebRequest request, WebResponse response) {
		
		if (HttpMethod.POST == request.getMethod()) {
			
			System.out.println("POST");
			addSnackSport(request, response);
			
		}
		else if( (request.getPath().contains("/snacks/")) && (!request.getPath().toString().contains("nourl")) )
			returnAllSnacksSportsByUser(response, request.getPath(), "snacks"); 
		else if( (request.getPath().contains("/sports/"))&& (!request.getPath().toString().contains("nourl")) )
			returnAllSnacksSportsByUser(response, request.getPath(), "sports");
		else
			NotFound(response);
	}
	
	private void NotFound(WebResponse response) {
		response.setContentType("text/html");
		response.setStatus(500);
		response.setBody("Page not valid, <a href=\"/index.html\">Go here</>");
	}
	
	private void returnAllSnacksSportsByUser(WebResponse response, String path, String table) {
		String user=path.substring(8);
				
		String body = "";
		
		if(!user.equals("")){
			for (SnackSport snack : repository.allByUser(table, user)) {
				
				if (!body.isEmpty()) {
					body += ",";
				}
				
				if(table.equals("snacks"))
					body += "  " + snack.SnacktoJson() + "\n";
				else
					body += "  " + snack.SporttoJson() + "\n";
				
			}
		}
		
		body = "[\n" + body + "]";
		response.setContentType("application/json");
		response.setStatus(200);
		response.setBody(body);
	}
	
	
	private void addSnackSport(WebRequest request, WebResponse response) {
				
		String user=request.getParameter("user");
		
		
		if(request.getParameter("size")!=null){
			int size=Integer.parseInt(request.getParameter("size"));
			for(int i=0;i<size;i++){
				String snack=request.getParameter("snack["+i+"]");
				String pezzisnack[]=snack.split(";");//pane;300;2012/6/21
				String date[]=pezzisnack[2].split("/");
				PersonalDate pd=new PersonalDate(Integer.parseInt(date[0]),Integer.parseInt(date[1]),Integer.parseInt(date[2]));
				if(request.getParameter("type").equals("sport"))
					repository.addSport(new SnackSport(pezzisnack[0],Integer.parseInt(pezzisnack[1]),user,pd));
				else
					repository.addSnack(new SnackSport(pezzisnack[0],Integer.parseInt(pezzisnack[1]),user,pd));
			}
		
		} else {
			String foodType = request.getParameter("selectFood");
			int quantity = Integer.parseInt(request.getParameter("quantity"));
			int year = Integer.parseInt(request.getParameter("selectYear"));
			int month = Integer.parseInt(request.getParameter("selectMonth"));
			int day = Integer.parseInt(request.getParameter("selectDay"));
			
			PersonalDate pd=new PersonalDate(year,month,day);
			
			if(request.getParameter("type").equals("sport"))
				repository.addSport(new SnackSport(foodType,quantity,user,pd));
			else
				repository.addSnack(new SnackSport(foodType,quantity,user,pd));
		}
				
		response.setStatus(201);
		
	}
	


}
