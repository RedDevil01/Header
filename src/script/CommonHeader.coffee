window.ccHeader = class ccHeader
	_create: -> 
		MenuActive = ($ '<div/>').addClass(@css.MenuHover)

		CurrentPage = ($ '<div/>').attr(id:"HiddenCPage")  
								 .attr(value: "Home" )
								 .hide()
								 
		MenuLink = ( $ '<ul/>').addClass(@css.MenuLink)

		for icon in @options.Icons 
			IconTag=($ '<div/>').attr(id: icon + "_spriteImg" )
								.attr(style:"font-weight: normal" )
								.css('backgroundPosition', @options.SpriteIconHorizontalPosition[_i]+'px '+ @options.SpriteIconVerticalPosition[@options.IconSet]+'px')
								.addClass(@css.SpriteImg)  

			MenuTabCont = ($ '<div/>').attr(style: "font-weight: normal")
									  .text(icon)
									  .addClass(@css.MenuTabCont)

			TempDivTag = ($ '<div/>').attr(id:"Div"+icon )  
									 .attr(title: icon )  
									 .addClass(@css.MenuTabs)
									 .append(IconTag)
									 .append(MenuTabCont )
								  
			TempliTag = ( $ '<li/>').attr(title: icon)
									.attr(id: _i)
									.addClass(@css.Icon)
									.append(TempDivTag )
								
			MenuLink.append(TempliTag)        

		MenuContainer = ($ '<div/>').addClass(@css.MenuContainer)
								   .append(MenuActive)
								   .append(CurrentPage)
								   .append(MenuLink) 
		  
		VzImg = ($ '<div/>').attr(id:"Vz Image" )  
							.addClass(@css.VzImg)                     

		VzImgDiv = ($ '<div/>').addClass(@css.wrapperLogo)
							   .append(VzImg)

		helpTag = ($ '<a/>').text("Help")
							.attr(id: 'help')
							.attr('href','javascript:void(0)' )   
							.addClass(@css.HLink)
				   
		signOutTag = ($ '<a/>').text("Sign Out")
					  .attr(id: 'signOut')
					  .attr('href','javascript:void(0)' )   
					  .addClass(@css.HLink)

		breaker1 = ($ '<span/>').text('|')
								.addClass(@css.HBreak)

		breaker2 = ($ '<span/>').text('|')
								.addClass(@css.HBreak)

		breaker3 = ($ '<span/>').text('|')
								.addClass(@css.HBreak)

		userInfo = ($ '<span/>').attr(id: 'Hello_UserName')
								.text("Hello,"+ @options.Username  )
								.addClass(@css.UserInfo)

		settingsIcon = ($ '<div/>').addClass(@css.settingsIcon)

		optionsDiv = ($ '<div/>').append(userInfo)
								 .append(breaker1)
								 .append(signOutTag)
								 .append(breaker2)
								 .append(helpTag)
								 .append(breaker3)
								 .append(settingsIcon)

		VzLogo = ($ '<div/>').attr(id: 'VzLogo' )
							 .attr('align': 'right' )
							 .addClass(@css.wrapperSettings)
							 .addClass(@css.Logo)
							 .append(optionsDiv)
							 .append(VzImgDiv)
							

		HeaderMenu = ($ '<div/>').attr(id: @css.HeaderMenu)
								 .addClass(@css.headerMenu)
								 .append(MenuContainer)
								 .append(VzLogo)
		
		ThemeHeading = ($ '<label/>').attr(id: "ThemeHeading")
								   .addClass(@css.ThemeHeading)
								   .text("Header Themes")
		
		BlueColorOption = ($ '<div/>').attr(id: "Blue")
									  .addClass(@css.ColorOption)
									  .append(($ '<div/>').addClass(@css.Radio).append(($ '<input/>').addClass(@css.RadioButton).addClass(@css.Set).attr(type: "radio").attr('checked': true)))
									  .append(($ '<div/>').addClass('aquaBlue'))
									  .append(($ '<b/>').text("Aqua Blue"))
								 
		
		RedColorOption = ($ '<div/>').attr(id: "Red")
									  .addClass(@css.ColorOption)
									  .append(($ '<div/>').addClass(@css.Radio).append(($ '<input/>').attr(type: "radio").addClass(@css.RadioButton)))
									  .append(($ '<div/>').addClass('red'))
									  .append(($ '<b/>').text("Red"))
		
		OrangeColorOption = ($ '<div/>').attr(id: "Orange")
									  .addClass(@css.ColorOption)
									  .append(($ '<div/>').addClass(@css.Radio).append(($ '<input/>').attr(type: "radio").addClass(@css.RadioButton)))
									  .append(($ '<div/>').addClass('orange'))
									  .append(($ '<b/>').text("Orange"))
		
		FullOption = ($ '<div/>').attr(id: "FullOption")
								 .attr(title: '0')
								 .addClass(@css.Radio)
								 .append(($ '<input/>').attr(id: "").attr(type: "radio").attr('checked': true).addClass(@css.RadioButton).addClass(@css.Set))
		
		TextOption = ($ '<div/>').attr(id: "TextOption")
								 .attr(title: '1')
								 .addClass(@css.Radio)
								 .append(($ '<input/>').attr(id: "Text").attr(type: "radio").addClass(@css.RadioButton))
		
		IconOption = ($ '<div/>').attr(id: "IconOption")
								 .attr(title: '2')
								 .addClass(@css.Radio)
								 .append(($ '<input/>').attr(id: "Icon").attr(type: "radio").addClass(@css.RadioButton))
		
		ThemeWrapper = ($ '<div/>').attr(id: "ThemeWrapper")
								   .addClass(@css.ThemeWrapper)
								   .append(BlueColorOption)
								   .append(RedColorOption)
								   .append(OrangeColorOption)
								
		
		SizeHeading = ($ '<label/>').attr(id: "SizeHeading")
								  .addClass(@css.SizeHeading)
								  .text("Header Size")
								  
		SizeWrapper = ($ '<div/>').attr(id: "SizeWrapper")
								  .addClass(@css.SizeWrapper)
								  .append(FullOption)
								  .append(($ '<b/>').text("Full Header View"))
								  .append(IconOption)
								  .append(($ '<b/>').text("Minimised Icon View"))
								  .append(TextOption)
								  .append(($ '<b/>').text("Minimised Text View"))
		
		
		ButtonsHolder = ($ '<div/>').attr(id: "ButtonsHolder")
									.addClass(@css.ButtonsHolder)
									.append(($ '<a/>').attr(id: "Cancel_button").attr(href: "#").addClass(@css.Button).text("Cancel"))
									.append(($ '<a/>').attr(id: "Save_button").attr(href: "#").addClass(@css.Button).text("Save"))
		
		Padding =  ($ '<div/>').attr(id: "Padding")
							   .addClass(@css.Padding)
							   .append(ThemeHeading)
							   .append(ThemeWrapper)
							   .append(SizeHeading)
							   .append(SizeWrapper)
							   .append(ButtonsHolder)
		
		PersonalizePopUpContent =  ($ '<div/>').attr(id: "PersonalizePopUpContent")
											   .addClass(@css.PersonalizePopUpContent)
											   .append(Padding)
		
		PersonalizePopUpTitle = ($ '<div/>').attr(id: "PersonalizePopUpTitle")
											.addClass(@css.PersonalizePopUpTitle)
											.text("Personalize Settings")
		
		PersonalizePopUp =  ($ '<div/>').attr(id: "PersonalizePopUp")
										.addClass(@css.PersonalizePopUp)
										.append(PersonalizePopUpTitle)
										.append(PersonalizePopUpContent)

		PersonalizeContainer = ($ '<div/>').attr(id: "PersonalizeContainer")
										   .addClass(@css.PersonalizeContainer)
										   .append(PersonalizePopUp)
										   .attr(style: "display:none")
		
		LightBox = ($ '<div/>').attr(id: "LightBox")
							   .addClass(@css.LightBox)
							   .attr(style: "display:none")
		
		
		($ @element).attr(id: @options.Name )
					.addClass(@options.BackgroundColor)
					.addClass(@css.wrapperHeader)
					.append(HeaderMenu)
					.append(LightBox)
					.append(PersonalizeContainer)
					
					
		
	_init: ->
		me = this
		element = ($ @element)
		ClickedIconIndex = 0
		
		($ "#"+@options.Name+" "+'.' +@css.Icon).click (event) ->
			ClickedIconIndex = this.attributes[1].value
			me.IconClicked(ClickedIconIndex)
		
		($ "#"+@options.Name+" "+'.' +@css.Icon).mouseover (event) ->
			me.IconMouseOver(this.attributes[1].value,ClickedIconIndex)
		
		($ "#"+@options.Name+" "+'.' +@css.Icon).mouseout (event) ->
			me.IconMouseOut(this.attributes[1].value,ClickedIconIndex)
			
		($ "#"+@options.Name+" "+'.' +@css.settingsIcon).click (event) ->
			$(me.element[0].children[1]).attr(style: "display:block")
			$(me.element[0].children[2]).attr(style: "display:block")
		
		($ "#"+@options.Name + " #signOut" ).click (event) ->
			Header_SignOut(this.previousSibling.previousSibling.textContent.replace("Hello,", ""))
			
		($ "#"+@options.Name + " #help" ).click (event) ->
			Header_Help(this.previousSibling.previousSibling.previousSibling.previousSibling.textContent.replace("Hello,", ""))
			
		
		($ "#"+@options.Name + " #Cancel_button" ).click (event) ->
			$(me.element[0].children[1]).attr(style: "display:none")
			$(me.element[0].children[2]).attr(style: "display:none")
		
		($ "#"+@options.Name + " #Save_button" ).click (event) ->
			$(me.element).removeClass(me.options.BackgroundColor)
			me.options.BackgroundColor = ($ "#"+me.options.Name + ' .' + me.css.ThemeWrapper + ' .' + me.css.Set )[0].parentNode.parentNode.attributes[0].value
			$(me.element).addClass(me.options.BackgroundColor)
			
			($ "#"+me.options.Name + " ."+ me.css.headerMenu ).removeClass().addClass(me.css.headerMenu).addClass( ($ "#"+me.options.Name + ' .' + me.css.SizeWrapper + ' .' + me.css.Set)[0].id)
			
			$(me.element[0].children[1]).attr(style: "display:none")
			$(me.element[0].children[2]).attr(style: "display:none")
				
			
		($ "#"+@options.Name + ' .' + @css.ThemeWrapper + ' .' + @css.RadioButton ).click (event) ->
			($ "#"+me.options.Name + ' .' + me.css.ThemeWrapper + ' .' + me.css.Set ).attr('checked': false).removeClass(me.css.Set)
			($ this).addClass(me.css.Set)
		
		($ "#"+@options.Name + ' .' + @css.SizeWrapper + ' .' + @css.RadioButton ).click (event) ->
			($ "#"+me.options.Name + ' .' + me.css.SizeWrapper + ' .' + me.css.Set ).attr('checked': false).removeClass(me.css.Set)
			($ this).addClass(me.css.Set)
				
			
			
	ChangeUserName: (NewUserName, HeaderName) ->
		($ '#'+HeaderName+ " #Hello_UserName"  ).text("Hello,"+ NewUserName)
		
	IconClicked: (ClickedIconIndex) -> 
		for icon in @options.Icons
			$('#' + @options.Name + " #" + @options.Icons[_i]+"_spriteImg").css 'backgroundPosition', @options.SpriteIconHorizontalPosition[_i] + 'px '+ @options.SpriteIconVerticalPosition[@options.IconSet]+'px'
		$('.'+@css.MenuHover).animate(left: @options.HighlighterMovementPosition[ClickedIconIndex] , 300) 
		$('#' + @options.Name + " #" + @options.Icons[ClickedIconIndex] + "_spriteImg").css 'backgroundPosition', @options.SpriteIconHorizontalPosition[ClickedIconIndex] + 'px 0'
		window.location = @options.URLs[ClickedIconIndex] 

	IconMouseOver: (MouseOverIndex , ClickedIconIndex ) -> 
		$('#' + @options.Name + " #" + @options.Icons[MouseOverIndex] + "_spriteImg").css 'backgroundPosition', @options.SpriteIconHorizontalPosition[MouseOverIndex] + 'px 0'
		if MouseOverIndex != ClickedIconIndex
			$('#' + @options.Name + " #" + @options.Icons[MouseOverIndex] + "_spriteImg").next().attr('style' : 'font-weight : bold')
		
	IconMouseOut: (MouseOutIndex , ClickedIconIndex ) ->
		if MouseOutIndex != ClickedIconIndex
			$('#' + @options.Name + " #" + @options.Icons[MouseOutIndex] + "_spriteImg").css 'backgroundPosition', @options.SpriteIconHorizontalPosition[MouseOutIndex] + 'px '+ @options.SpriteIconVerticalPosition[@options.IconSet]+'px'
			$('#' + @options.Name + " #" + @options.Icons[MouseOutIndex] + "_spriteImg").next().attr('style' : 'font-weight : normal')
			
	options:
		Name: "Default"
		Username: "" 
		BackgroundColor: "Orange"
		Mini :0
		IconSet: 1
		Icons : ["Home","Accounts","Onboarding","Systems","Orders","Assets","Reports"]
		URLs : ["#Home","#Accounts","#Onboarding","#Systems","#Orders","#Assets","#Reports"]
		HighlighterMovementPosition: [-30, 58, 146, 234, 322, 410, 498]
		SpriteIconHorizontalPosition: [0, -49, -98, -147, -196, -245, -294 ]
		SpriteIconVerticalPosition: [-56,-105 ,-150]
	

	css:
		wrapperHeader : 'ccHeader'
		headerMenu: 'ccHeader-header-menu'
		MenuContainer: 'ccHeader-menu-container'
		MenuHover: 'ccHeader-menu-hover'
		MenuLink: 'ccHeader-menu-link'
		MenuTabs: 'ccHeader-menutabs'
		Icon: 'ccHeader-iconclick'
		SpriteImg: 'ccHeader-spriteImg'
		MenuTabCont: 'ccHeader-menu-tab-content'
		wrapperSettings: 'ccHeader-wrapper-settings'
		UserInfo: 'ccHeader-user-info'
		HLink: 'ccHeader-h-link'
		HBreak: 'ccHeader-h-break'
		settingsIcon: 'ccHeader-settings-icon'
		wrapperLogo: 'ccHeader-wrapper-logo'
		VzImg: 'ccHeader-logo-img'
		PersonalizeContainer:'ccHeader-popup-wrapper'
		PersonalizePopUp:'ccHeader-popup'
		PersonalizePopUpTitle: 'ccHeader-popup-title'
		PersonalizePopUpContent: 'ccHeader-popup-content'
		Padding:'padding'
		ThemeHeading: 'label'
		ColorOption: 'ccHeader-themes-row'
		SizeHeading: 'label labelSpace'
		SizeOption: ''
		ButtonsHolder: 'ccHeader-pop-btnWrapper'
		LightBox: 'ccHeader-lightBox'
		Radio: 'radio'
		RadioButton: 'RadioButton'
		Button: 'button'
		Set : 'Set'
		SizeWrapper: 'ccHeader-size-row'	
		ThemeWrapper: 'ThemeWrapper'
		
$.widget "cc.ccHeader", new ccHeader

Header_SignOut = (Username) ->
	SignOut(Username)

Header_Help = (Username) ->
	Help(Username)


