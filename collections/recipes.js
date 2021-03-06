Recipes	=	new Mongo.Collection('recipes');

Recipes.allow({										//This function lets you to insert only if the userId exists that means if you are signed in.
	insert:function(userId, doc){
		return !!userId;
	}
});

Ingredient	=	new SimpleSchema({
	name: {
		type: String
	},
	amount: {
		type: String
	}
});

RecipesSchema	=	new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	desc: {
		type: String,
		label: "Description"
	},
	ingredients: {
		type: [Ingredient]
	},
	inMenu: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type:"hidden"
		}
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Recipes.attachSchema( RecipesSchema);