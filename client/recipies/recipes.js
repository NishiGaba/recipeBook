Template.Recipes.onCreated(function(){						//subscription for database
	var self	=	this;
	self.autorun(function(){
		self.subscribe('recipes')
	});
});

Template.Recipes.helpers({
	recipes: ()=> {
		return Recipes.find({});
	}
});