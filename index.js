require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const app=express();
const PORT=process.env.PORT|3000;
const headingContent="Our Amazing Recipes"
const startingContent="We bring inovative recipes for you,we offer you the recipes of world in one place"
const footerContent="vhjbkjnkjnmkjmkommmmvghvhjbhjbnjb "
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI);
const recipeSchema=new mongoose.Schema({
   name: { type: [String], index: true},

   image:String,
   category:String,
   url:String,
   ingredients:Array,
   descriptions:Array,
   
  
});

recipeSchema.index({ name: 'text',descriptions: 'text'}); 

const Recipe=mongoose.model("Recipe",recipeSchema);

async function insertData(){
   try {
      await Recipe.insertMany([{
         name:"Russian Salad",
         image:"salad.jpg",
         category:"Dessert",
         url:"https://www.youtube.com/embed/uswuJJQGQdE?si=KS4HYzS-qKPct1LS" ,
         ingredients:["Cabbage 1 cup",
         "Potato 1","Olive oil 2 Tbsp","Elbow macroni 1 cup","100gm cream,1 Apple","Salt 1/3Tbsp","White pepper 1/3Tbsp","sugar 4 Tbsp","Milk 1 Tbsp","Fruit Cocktail 1 cup","Almonds 10-12","Pineapple according to taste"
      ],
      descriptions:["-Cut Cabbage into small and potato in cubes.","-Add water into a pan." ,"-Add olive oil into it and bring it to boil,add elbow macroni into it,boil until cook.","-Boil potatos in a seperate pan.","-Cut 1 apple into cubes.","-Add cream,salt ,mayonnaise,sugar ,milk and white pepper into a bowl and mix well.","-Add all the ingredients into a bowl and pour the cream mixture on them,mix well.","-Decorate the bowl with pineapple."
   ]
        },
        {
           name:"Fried Rice with Chicken Manchurian",
           image:"rice.JPG",
           category:"Chinese",
           url:"https://www.youtube.com/embed/bFlrMjiSOGc?si=nlizokvM2MVHydCY" ,
           ingredients:[
            "Boneless chicken 250g","corn flour 2 Tbsp","salt 1 Tbsp","white pepper 1/2 Tsp","oil 1 cup","chopped garlic 2 Tbsp","tomato ketchup 4 Tbsp","water","salt 1/2 Tbsp","white pepper 1/2 Tbsp","brown sugar 2 Tbsp","carrot 1 cup","bell pepper 1 cup","cabbage 1 cup","rice 1/2 kg","salt 1 Tbsp","oil 3 Tbsp"," chopped garlic 1 Tbsp","3 eggs","vinegar 1 Tbsp","Worcestershire sauce 1 Tbsp","black pepper 1 Tbsp","soya sauce 1 Tbsp","chilli sauce 1 Tbsp"

            


           ],
           descriptions:["-Chicken Manchurian:","-In a bowl,add chicken,white pepper,salt,cornflour & mix well,cover & marinate for 10 minutes.", "-Fry on medium flame for 6-8 minutes then cook on high flame for 3-4 minutes until crispy & golden brown & set aside.","-In the seperate pan ,add 2 Tbsp cooking oil,garlic,tomato ketchup,salt 1/2 Tbsp & mix well.","-Add 3 Tbsp water,add fried chicken,white pepper 1/2 Tbsp,brown sugar into it and mix well,then add water into it.","-In a bowl add corn flour and water and mix and then add this mixture into chicken.","-Cook for 2-3 minutes and chicken manchurian is ready.","-Fried Rice:","-Now put oil into a pan and stir fry all vegetables.","-Take 5 glass water and bring it to boil,add salt and rice,put them aside when cooked.","-Now add oil,chopped garlic and eggs and fry well.","-Add vegeatables and boiled rice,add vinegar, Worcestershire sauce, black pepper, soya sauce, chilli sauce and mix well.","-Serve fried rice with chicken manchurian."
         ]
         },
        {
           name:"Panini Sandwich",
           image:"sandwich.jpg",
           category:"Fast Food",
           url:"https://www.youtube.com/embed/tIq8C21fBAk?si=56cTdcw8K7H-H-ZM" ,
         ingredients:["-Chicken boneless 500gm","-Medium bell pepper helf","-Onion small one","-Oil 4 Tbsp",
         "-Salt 1 Tsp","-Black pepper 1/2 Tsp","-BBQ sauce 1 Tbsp","-Chilli sauce 1 Tsp","-Worcestershire sauce 1Tsp","-Soya sauce",
         "-Mayonaise 3 Tbsp","-4 Bread slices "
      ],
      descriptions:["-Take chicken and cut it into pieces.","-Cut bell pepper into cubes.","-Chop the onion.",
      "-Add oil in a pan on medium heat,then add chicken and fry it.","-Add salt,black pepper,BBQ sauce,chilli sauce,worcestershire sauce,soya sauce.",
       "-Cook it for 4 minutes.","-Mix chicken and vegetables in a seperate bowl,add mayonaise and mix well.",
       "-Take bread and spread the mixture evenly,cover it with second piece of bread and repeat the process for other slices as well.",
       "-Grill the sandwiches for 3 minutes in a electric griller.","-Cut the sandwiches into half and serve them."
   ] 
          },
          
          {
           name:"Air Fried Fish",
           image:"airfry fish.jpg",
           category:"Air Fryer",
           url:"https://www.youtube.com/embed/35OIbG3xv8w?si=ING-nwnmIGTQGJfp" ,
         ingredients:["-Fish 500gm","-1 lemon","-Salt 1 Tbsp","-1 Tbsp white pepper"
      ],
      descriptions:["-Take fish and make some deep cuts into it.","-Squeeze half lemon on it.","-Apply salt and white pepper on it and spreads well.","-Put the fish in the airfryer with some lemon pieces and set the timer to 20 mins and temperature to 200 degree centigrade.","-After 20 minutes fish is ready." 
   ]
          },
          {
            name:"Creamy Chicken",
            image:"chicken.jpg",
            category:"Traditional",
            url:"https://www.youtube.com/embed/lqRq-6FyY8I?si=YGJRhTsXXr3arf2w" ,
          ingredients:["-Two onion chopped","-Chicken 700gm","-Salt 1 Tbsp","-White pepper 1 Tsp","-Ginger garlic paste 1 Tbsp",
          "-Tbsp butter","-3 Cardamom","-4 Cloves","-Grounded cumin 1 Tsp","-Grounded coriander 1 Tsp","-Yogurt 3 Tbsp",
           "-Cooking cream 250gm"
       ],
       descriptions:["-Take chicken,add salt,white pepper,ginger garlic paste and mix well.",
       "-Marinate for 20 minutes.","-Take a pan and put it on medium heat and add butter,3 cardamom,4 cloves,chopped onion.",
       "-Add the chicken and cook it for 5 minutes.","-Add cumin,coriander and yogurt and mix well.","-Cook for 15 minutes.",
       "-Add cooking cream and cook for two minutes.","-Add some fresh coriander and green chillies for garnishing."
      ]
           },
          {
           name:"Brain Masala",
           image:"brain masala.png",
           category:"Traditional",
           url:"https://www.youtube.com/embed/MmOduEqUTLU?si=3QNeTnIO1N-xev1k" ,
         ingredients:["-Beef brain 500gm","-Water 4 cups","-Ginger garlic paste 1 Tbsp","-Oil 2 Tbsp","-Onion 1 chopped","-Tomato paste 4 Tbsp",
         "-salt 1 Tsp","-Chilli Flakes 1 Tsp","-Pinch of turmeric","-Whole spice powder 2/3 Tsp","-Water 2 Tbsp"

      ],
      descriptions:["-Take 4 cups of water and boil them ,then put beef brain into it,add ginger garlic paste and boil the brain for 5 minutes.",
      "-Drain the water and remove the veins from the brain.",
      "-Cut into pieces.",
       "-On medium flame,add oil into a pan,then put onion into it,cook for 2-3 minutes.",
       "_Then add ginger garlic paste into it,cook for another 1-2 minutes.",
       "-Add tomato paste,salt,chilli flakes,turmeric and mix well.",
       "-Add water 2 Tbsp,add brain into it and mix well.",
       "-Cook for 5-6 minutes.Add some fresh corriander on it for garnishing and brain masala is ready."
   ] 
          },
         {
           name:"Bread Pizza",
           image:"bread piza.jpg",
           category:"Fast Food",
           url:"https://www.youtube.com/embed/a-JeNfNNmoA?si=sDLnSkUvuuJ5LnSA" ,
         ingredients:["-2 tomatoes","-Oil 2 Tbsp","-1 chopped onion","-Garlic powder 1 Tsp","-Oregano 1 Tbsp","-Salt 1 Tbsp","-Brown sugar 1 Tbsp",
         "-Red chilli 1 Tbsp","-Red chilli flakes 1 Tbsp","Chilli sauce 1 Tbsp","Worcestershire sauce 1 Tbsp","-Soya sauce 1 Tsp","Tomato ketchup 1 cup",
         "-1 Non sliced bread","-1/4 red bell pepper","-1/4 yellow bell pepper","-Boneless chicken 200gm","-Oil 2 Tbsp",
         "-Salt 1 Tsp","-White pepper 1/2 Tsp","-Red chilli flakes 1/2 Tsp","-Hot sauce 1 Tbsp","-Soya sauce 1 Tsp","-Oregano 1 Tsp",
         "-1 Chopped onion medium ","-Shreded cheese 1 cup",
      ],
      descriptions:["-Pizza Sauce Preperation:","-Grilled the tomatoes on the stove and remove its skin.",
      "-Add oil into a bowl on medium heat and put onion in it,soothe it for 2 minutes.",
      "-Add garlic powder,oregano,tomatoes,salt,brown sugar,red chilli,red chilli,chilli sauce,Worcestershire sauce and soya sauce.",
      "-Cook it for 2-3 minutes and then add tomato ketchup.","-Cook for 5 minutes.","Pizza sauce is ready.",
      "-Bread Pizza","-Take non sliced bread and cut it into three cubes.","-Cut the centrla portion of bred cubes with the help of knife and press it inside the bread cube with the help of back side of knife",
      "-Cut yellow and red bell pepper in cubes","-Take chicken nd cut into small pieces.",
      "-Take oil into a pan and put it on medium heat,fry the chicken in it and then add salt,white pepper,chilli flakes and hot sauce",
      "-Add soya sauce,oregano 1 Tsp,onion,bell pepper and cook it for 2 minutes","-Now add the filling into bread cubes",
      "-Add homemad pizza sauce at the bottom of three cubes,then add cooked chicken and vegetables and then add layer of cheese at top.",
      "-Bake in the preheated oven for 10 minutes."


      
   ] 
          },
         {
           name:"Fish Fry",
           image:"fishfry.jpg",
           category:"Traditional",
           url:"https://www.youtube.com/embed/pTcaiCUntZM?si=OPFHv1BE4M9CRlGz" ,
         ingredients:["-Fish 700gm","-Ginger garlic paste 1 Tbsp","-Salt 1 Tbsp","-Red chillies 1 Tbsp","-Chilli flakes 1 Tbsp",
         "-Carom seeds 2/3 Tsp","-Coriander Powder 1 Tsp","-Oil 1 Cup",
      ],
      descriptions:["-Take fish and make some deep cuts into it.","-Add ginger garlic paste,salt,red chillies,chilli flakes,carom seeds,coriander powder and spread well.",
      "-Marinate for 1 hour.","-Put a pan on medium heat and add oil in it.",
      "-Fry the fish from both sides.","-Add some lemon and fresh coriander leaves for garnishing."
   ]
          },
          
         {
           name:"Tawa Kaleji",
           image:"lever fry.jpg",
           category:"Traditional",
           url:"https://www.youtube.com/embed/f2LjrJKLf4Q?si=Ta2yrQXmzQg97pnn" ,
         ingredients:["-1/4 cup Oil","-Ginger garlic paste 1 Tbsp","-Chicken liver 400gm","-Red chilli flakes 1/2 Tsp",
         "-Red chilli powder 1/2 Tsp","-Curry powder 1/2 Tsp","-Coriander powder 1/2 Tsp","-Bell pepper slices 7-8 ",
         "-Tomato paste 1/2 cup","-Salt 1 Tbsp"
      ],
      descriptions:["-Take tawa and add oil into it on medium heat.","-Add ginger garlic paste and cook it for 1 minute.", 
      "-Add chicken liver into it and cook for 2-3 minutes.","-Add red chilli flakes,red chilli powder,curry powder,coriander powder.",
      "-Cook for 4-5 minutes and add bell pepper.","-Add tomato paste and cook for 4 minutes.","-Add salt and mix it well.",
      "-Add some chopped green chillies for garnishing and tawa kaleji is ready to serve."
   ]
          },
       
         {
           name:"Bird Nest",
           image:"nest.jpg",
           category:"Traditional",
           url:"https://www.youtube.com/embed/gQXqTDozdlw?si=cOmEaJhrPnKpR2Kx" ,
         ingredients:["-Water 4 cups","-Chicken 150gm","-Potato 3 medium","-Salt 1 Tsp","-Red chillies 1/2 Tsp",
         "-Chillie flakes 1/2 tsp","-Crushed coriander seeds 1 Tsp","-Garlic paste 1 Tsp","-5 eggs","-Vermicelli half packet",
         "-Oil 2 cups",
      ],
      descriptions:["-Take a pot and put it on medium heat and add water,add chicken into boiling water.","-Simmer until chicken is cooked.",
       "-Boil the potatoes.","-Shred the chicken,add boiled potatoes and mix well.","-Add salt,red chillies,chillie flakes,coriander seeds and garlic paste.",
       "-Make desired shape of kababs from the mixture and dip into the egg mixture and then coat with vermicelli.",
       "-Add a pot on a pan and add oil into it and on a medium flame deep fry the kababs.",
       "-Place boiled eggs on kababs for garnishing."
   ]
          },
          
          {
           name:"Chicken Shawarma",
           image:"shawarma.jpg",
           category:"Fast Food",
           url:"https://www.youtube.com/embed/jtSVBaTtun8?si=rA_sF8RRp9zRqVxV" ,
         ingredients:["-Chicken boneless 200gm","-Salt 1 Tsp","-Red chilli powder 1/2 Tsp","-Chicken tikka masala 1 Tsp",
         "-Red chilli sauce 1 Tsp","-Soya sauce 1/2 Tsp","-BBQ sauce 1/2 Tsp","-Cucumber half","-Onion small half",
         "-Mayonnaise 2 tbsp","-1 Tortilla bread "
      ],
      descriptions:["-Take the chicken and cut in slices.","-Add all the ingredients into chicken and mix well.",
      "-Cut the cucumber and onion into small slices.","-Add 1Tbsp oil in a pan on medium heat and add chicken into it and fry for 5 minutes.",
      "-Mix the vegeatables,mayonnaise and chicken into seperate bowl.","-Tale tortilla bread and cut it into half annd fill it with the chicken mixture.",
      "-Repeat the process with the other half as well and serve the pocket shawarma with ketchup."
   ]
          },
          {
            name:"Air Fried Chicken",
            image:"airfry chicken.jpg",
            category:"Air Fryer",
            url:"https://www.youtube.com/embed/Z0dcDn7RsQ8?si=J-Hmdyl_zAXQ-prv" ,
          ingredients:["whole chicken 1000gm","salt 1 Tbsp","chicken tikka masala 2 Tbsp","garlic powder half Tsp","red chilli powder 1 Tsp","half lemon juice","BBq sauce 1 Tbsp","olive oil 1 Tbsp","half potato cubes"
       ],
       descriptions:["-Take whole chicken,add salt,chicken tikka masala,garlic powder,red chilli powder, lemon juice,BBq sauce,olive oil ,potatoe cubes into it and mix well.","-Fill the whole chicken with potato cubes.","-Marinate for 1 hour.","-Put the whole chicken in the airfryer.", "-Set the timer to 30 mins and temperature to 200 degree centigrade.","-After 20 minutes flip the chicken." 
    ]
           },
          {
           name:"White Sauce Pasta",
           image:"pasta.jpg",
           category:"Fast Food",
           url:"https://www.youtube.com/embed/taPYD-YOj80?si=yj0DBcwSqEsZWvHq" ,
         ingredients:["-Chicken boneless 200 gm","-Oil 3 Tbsp","-Salt 1/2 Tsp","-Oregano 1 Tsp", "-Soya sauce 1 Tsp",
         "-Water 4 glass","-Salt 1 Tbsp","-Olive oil 2 Tbsp","-Alfredo pasta half packet","Butter 50 gm","-All purpose flour 2 Tbsp",
          "-Milk 1 cup","-Salt 1/2 Tsp","-White pepper 1 Tsp","-Shreded mozrilla cheese 1 cup","-Chicken 100gm","-Salt 1 pinch",
          "-Black pepper 1 pinch"

      ],
      descriptions:["-Take chicken and cut it into strips.","-Take oil in a seperate pan and fry the chicken.",
      "-Add salt,oregano,soya sauce and cook it for 5 minutes.","-Take 4 glass water in a seperate pan and bring it to boil.",
      "-Add salt,olive oil and pasta into it and boil until pasta get soft.","Strain the pasta and place it into a seperate bowl.",
      "-Sauce Preperation:","-Add butter into a pan on a medium heat and after it melt down add flour into it and fry it for 1 minute.",
       "-Add milk,salt,white pepper into it.","-Add cheese and cook for 2 minutes.","-Now add fried chicken and pasta into it and mix well.",
      "Take the chicken and add salt and pepper and marinate it for 10 minutes.","-Grill the marinated chicken for 15 minutes." ,
      "-Put pasta into a bowl and place the grilled chicken on top of it and serve it."
   ]
          },
          {
            name:"Chicken Wings",
            image:"wings.jpg",
            category:"Air Fryer",
            url:"https://www.youtube.com/embed/yG-794Ml8oQ?si=uBQc82-NLL9wn1ve" ,
          ingredients:["-Chicken wings 500gm","-Salt 1 Tsp","-Black pepper half Tsp","-White pepper half Tsp","-BBq sauce half Tbsp","-Half lemon" 
       ],
       descriptions:["-Take chicken wings,add salt ,black pepper,white pepper,BBq sauce and lemon and mix well.","-Put the wings in the airfryer and set the timer to 20 mins and temperature to 180 degree centigrade.","-After 20 minutes wings are ready."] 
            
           },
         
         
          {
            name:"Mango Sago Drink",
            image:"mangodrink.jpg",
            category:"Dessert",
            url:"https://www.youtube.com/embed/pQ-kMcFejXU?si=RrqKPb2RmAzVBheT" ,
         ingredients:["-3 cups of water","-Sago seeds 2 Tbsp","-3 cups mango cubes","-Ice cubes","-2 Tbsp sugar","-3 cups mango cubes","-crushed almonds as required"
      ],
      descriptions:["-Take water and bring it to boil then add sago seeds,cook it for 15 minutes.","-Take mango cubes and  sugar and make smoothie.","-Now put some ice cubes into a glass,add boiled sago seeds,half glass mango smoothie,put some mango cubes,a pinch of crushed almond on top of it for garnishing." 
   ]
           }
         ]);
         
   } catch (error) {
      console.log('err'+ error);
   }
}
insertData();


app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
 });
app.get("/",async(req,res)=>{
try{
   const limitNumber=3;
   const requiredNumber=4;
   const recipes=await Recipe.find({}).limit(limitNumber);
   const recent=await Recipe.find({}).sort({_id:-1}).limit(requiredNumber);
   res.render("index.ejs",
   {heading:headingContent,
      content:startingContent,
      recipes:recipes,
      recent:recent
   });
}catch(error){
      res.status(500).send({message:error.message||"error occured"});
}
});

 app.get("/airfryer",async(req, res) =>{
   try{
      const airFryerRecipes=await Recipe.find({"category":"Air Fryer"});
      
      res.render("airfryer.ejs",
      {airFryerRecipes:airFryerRecipes});
   }catch(error){
         res.status(500).send({message:error.message||"error occured"});
   } 
 });
 app.get("/fastfood",async(req, res) =>{
   try{
      const fastFoodRecipes=await Recipe.find({category:"Fast Food"});
      const latest=await Recipe.find({category:"Fast Food"}).sort({_id:-1}).limit(1);
      res.render("fastfood.ejs",
      {fastFoodRecipes:fastFoodRecipes,latest:latest});
   }catch(error){
         res.status(500).send({message:error.message||"error occured"});
   } 
 });

 app.get("/Desserts",async(req, res) =>{
   try{
      const dessertRecipes=await Recipe.find({category:"Dessert"});
      
      res.render("desserts.ejs",
      {dessertRecipes:dessertRecipes}); 
      
   }catch(error){
         res.status(500).send({message:error.message||"error occured"});
   } 
 });

 app.get("/chinese",async(req, res) =>{
   try{
      const chineseRecipes=await Recipe.find({category:"Chinese"});
      
      res.render("chinese.ejs",
      {chineseRecipes:chineseRecipes});
   }catch(error){
         res.status(500).send({message:error.message||"error occured"});
   } 
 });


 
//  app.get("/recipes", function(req, res){
//    Recipe.find({}).then(function(recipes){
    
//       res.render("recipes.ejs", {recipes:recipes});
      
//     })
//      .catch(function(err){
//       console.log(err);
//     })
//  });
 

app.get("/recipes",async(req,res)=>{
   try{
      const limitNumber=3;
      const latestlimit=1;
      const all=8;
      const traditional=await Recipe.find({"category":"Traditional"}).limit(6);
      const recipes=await Recipe.find({}).limit(limitNumber);
      const latest=await Recipe.find({"category":"Traditional"}).sort({_id:-1}).limit(latestlimit);
      const allRecipes=await Recipe.find({}).limit(all);
      res.render("recipes.ejs",{recipes:recipes ,latest:latest,allRecipes:allRecipes,traditional});
   }catch(error){
         res.status(500).send({message:error.message||"error occured"});
   }
   }); 
app.get("/recipes/:id",async(req,res)=>{
   try{
      let recipeId=req.params.id;
      const recipe=await Recipe.findById(recipeId);
      
      res.render("recipe.ejs",{recipe:recipe});
   }catch(error){
         res.status(500).send({message:error.message||"error occured"});
   }
   }); 

   app.post("/search",async(req,res)=>{
      const message="Match Not found";
      try{
         let searchTerm=req.body.searchTerm;
         let exactTerm="\""+searchTerm+"\"";
         let recipe=await Recipe.find({$text:{$search:exactTerm,$diacriticSensitive:true}});
        
         res.render("search.ejs",{recipe:recipe,message:message});
         if(!recipe.length){
             res.render("search.ejs",{recipe:recipe,message:message});
         }
         
        
      }catch(error){
        
         console.log(error.message);

           
      }
      }); 

  
