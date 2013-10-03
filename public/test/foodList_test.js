var foodList_test = TestCase.create({
    name: 'foodList_test',

    
    testFoodList: function() {
        var foods = new FoodList();
        var i;

        //console.log(foods.getFood(foods.carniFresche[i].name)); per trovare l'errore..

        for (i=0; i<foods.sport.length; i++){
            
            this.assertTrue(null!=foods.getFood(foods.sport[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.sport[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.sport[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.sport[i].name).caloriesFor100Grams>=0);
        }

        for (i=0; i<foods.verduraFresca.length; i++){
            this.assertTrue(null!=foods.getFood(foods.verduraFresca[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.verduraFresca[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.verduraFresca[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.verduraFresca[i].name).caloriesFor100Grams>=0);

        }

         for (i=0; i<foods.legumi.length; i++){
            this.assertTrue(null!=foods.getFood(foods.legumi[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.legumi[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.legumi[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.legumi[i].name).caloriesFor100Grams>=0);

        }

        for (i=0; i<foods.legumi.length; i++){
            this.assertTrue(null!=foods.getFood(foods.legumi[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.legumi[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.legumi[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.legumi[i].name).caloriesFor100Grams>=0);

        }

        for (i=0; i<foods.fruttaFresca.length; i++){
            this.assertTrue(null!=foods.getFood(foods.fruttaFresca[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.fruttaFresca[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.fruttaFresca[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.fruttaFresca[i].name).caloriesFor100Grams>=0);

        }

        for (i=0; i<foods.fruttaEOrtaggiConservati.length; i++){
            this.assertTrue(null!=foods.getFood(foods.fruttaEOrtaggiConservati[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.fruttaEOrtaggiConservati[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.fruttaEOrtaggiConservati[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.fruttaEOrtaggiConservati[i].name).caloriesFor100Grams>=0);

        }

        for (i=0; i<foods.bevandeAnalcoliche.length; i++){
            this.assertTrue(null!=foods.getFood(foods.bevandeAnalcoliche[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.bevandeAnalcoliche[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.bevandeAnalcoliche[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.bevandeAnalcoliche[i].name).caloriesFor100Grams>=0);

        }

        for (i=0; i<foods.bevandeAlcoliche.length; i++){
            this.assertTrue(null!=foods.getFood(foods.bevandeAlcoliche[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.bevandeAlcoliche[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.bevandeAlcoliche[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.bevandeAlcoliche[i].name).caloriesFor100Grams>=0);

        }        

        for (i=0; i<foods.grassiECondimenti.length; i++){
            this.assertTrue(null!=foods.getFood(foods.grassiECondimenti[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.grassiECondimenti[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.grassiECondimenti[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.grassiECondimenti[i].name).caloriesFor100Grams>=0);

        }      

        for (i=0; i<foods.cerealiEDerivati.length; i++){
            this.assertTrue(null!=foods.getFood(foods.cerealiEDerivati[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.cerealiEDerivati[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.cerealiEDerivati[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.cerealiEDerivati[i].name).caloriesFor100Grams>=0);

        }         
 
        for (i=0; i<foods.carniFresche.length; i++){
            this.assertTrue(null!=foods.getFood(foods.carniFresche[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.carniFresche[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.carniFresche[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.carniFresche[i].name).caloriesFor100Grams>=0);


        }   
      
        for (i=0; i<foods.carniConservate.length; i++){
            this.assertTrue(null!=foods.getFood(foods.carniConservate[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.carniConservate[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.carniConservate[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.carniConservate[i].name).caloriesFor100Grams>=0);

        }   

        for (i=0; i<foods.frattaglie.length; i++){
            this.assertTrue(null!=foods.getFood(foods.frattaglie[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.frattaglie[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.frattaglie[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.frattaglie[i].name).caloriesFor100Grams>=0);

        }   

         for (i=0; i<foods.pesci.length; i++){
            this.assertTrue(null!=foods.getFood(foods.pesci[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.pesci[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.pesci[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.pesci[i].name).caloriesFor100Grams>=0);

        }   
       
         for (i=0; i<foods.pesciConservati.length; i++){
            this.assertTrue(null!=foods.getFood(foods.pesciConservati[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.pesciConservati[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.pesciConservati[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.pesciConservati[i].name).caloriesFor100Grams>=0);

        }   

         for (i=0; i<foods.latticini.length; i++){
            this.assertTrue(null!=foods.getFood(foods.latticini[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.latticini[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.latticini[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.latticini[i].name).caloriesFor100Grams>=0);

        }   
       
        for (i=0; i<foods.uova.length; i++){
            this.assertTrue(null!=foods.getFood(foods.uova[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.uova[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.uova[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.uova[i].name).caloriesFor100Grams>=0);

        }   
 
        for (i=0; i<foods.dolci.length; i++){
            this.assertTrue(null!=foods.getFood(foods.dolci[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.dolci[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.dolci[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.dolci[i].name).caloriesFor100Grams>=0);

        }   
       
        for (i=0; i<foods.piattiProntiEVarie.length; i++){
            this.assertTrue(null!=foods.getFood(foods.piattiProntiEVarie[i].name).name);
            this.assertTrue(""!=foods.getFood(foods.piattiProntiEVarie[i].name).name);
            this.assertTrue(null!=foods.getFood(foods.piattiProntiEVarie[i].name).caloriesFor100Grams);
            this.assertTrue(foods.getFood(foods.piattiProntiEVarie[i].name).caloriesFor100Grams>=0);

        }   
     
        
    },


}); 
