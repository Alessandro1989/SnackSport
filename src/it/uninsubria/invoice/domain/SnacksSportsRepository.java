package it.uninsubria.invoice.domain;

import java.util.Date;
import java.util.List;


public interface SnacksSportsRepository {

	void addSnack(SnackSport snack);
	void addSport(SnackSport sport);
	List<SnackSport> all(String table);
	List<SnackSport> allByUser(String table, String user);
	long size(String table);
}
