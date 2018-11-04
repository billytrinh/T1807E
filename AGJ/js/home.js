		$( document ).ready(function() {
			$(".contact").click(function(){ 
				if ($(this).find(".control").hasClass("rotateforward")) {
					$(this).find(".control").removeClass("rotateforward").addClass("rotatebackward");
					$(this).find(".detail").hide(500);
				}
				else if ($(this).find(".control").hasClass("rotatebackward")) {
					$(this).find(".control").removeClass("rotatebackward").addClass("rotateforward");
					$(this).find(".detail").show(500);
				}
				else {
					$(this).find(".control").addClass("rotateforward");
					$(this).find(".detail").show(500);
				} 
			});
		});
		function openMenu() {
			jQuery(".mobile-menu").animate({
				"left":"0"
			},500);
			jQuery(".bg-fade").show();
		}
		function closeMenu(){
			jQuery(".mobile-menu").animate({
				"left":"-67%"
			},500);
			jQuery(".bg-fade").hide();
		}
		jQuery(".has-sub").bind("mouseenter",function(){
			jQuery(this).children("ul.sub-menu").slideDown();
		});
		jQuery(".has-sub").bind("mouseleave",function(){
			jQuery(this).children("ul.sub-menu").hide();
		});
		var demo = angular.module("demoApp",[]);
		demo.directive("header", function() {
			return {
				restrict : "C",
				templateUrl : "/header.html"
			};
		});
		demo.directive("toolapp", function() {
			return {
				restrict : "C",
				templateUrl : "/searchcontact.html"
			};
		});
		demo.controller("DemoController",function($scope){
			var contacts = [
				{
					name: "Cornelia Corina",
					phonenumb: 8491200000,
					email: "Cornelia@gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "York Esmé",
					phonenumb: 8491200000,
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Carlton Norbert",
					phonenumb: 84122111111,
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Merritt Amber",
					phonenumb: 84122111111,
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Brandi Ezekiel",
					phonenumb: 84167444444,
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Isabel Adolph",
					phonenumb: 84167444444,
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Roxane Gemma",
					phonenumb: 8491144444,
					twitter: " @Loremipsum",
					email: " Lorem.ipsum@Gmail.com",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Bennett Alton",
					phonenumb: 8491144444,
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Genevieve Damon",
					phonenumb: 84167555555,
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Inez Emil",
					phonenumb: 84167555555,
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Charleen Sheryll",
					phonenumb: 847815492226,
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Aretha Chrissy",
					phonenumb: 841637715076,
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Ariel Brian",
					phonenumb: 841990357557,
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Yolonda Leon",
					phonenumb: 84708039543,
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Harley Alethea",
					phonenumb: 84911920856,
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Larry Mason",
					phonenumb: 842313297743,
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Madison Andi",
					phonenumb: 841648522348,
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Vicki Jude",
					phonenumb: 84703551177,
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				{
					name: "Nicholas Jenna",
					phonenumb: 841282588734,
					email: " Lorem.ipsum@Gmail.com",
					twitter: " @Loremipsum",
					address: "Lorem Ipsum is simply dummy text of the printing"
				},
				
			];
				$scope.contacts = contacts;	
			});