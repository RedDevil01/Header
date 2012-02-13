window.CommonHeader = class CommonHeader
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
								.addClass(this.css.SpriteImg)  

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
		  
		VzImg = ($ '<img/>').attr('style': 'margin-top:' + @options.Mini*38 + 'px !important')                  
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

		userInfo = ($ '<span/>').text("Hello,"+ @options.Username)
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

		($ @element).attr(id: @options.Name )
					.attr('style': 'margin-top:-'+@options.Mini*68+ 'px')          
					.addClass(@options.BackgroundColor)
					.addClass(@css.wrapperHeader)
					.append(HeaderMenu)


	_init: ->                                                                                               
		element = ($ this.element)
		ClickedIconIndex = 0
		($ "#"+this.options.Name+" "+'.' +this.css.Icon).click (event) =>
			ClickedIconIndex = this.attributes[1].value                                                 # manual changes in javascript!!
			@IconClicked(ClickedIconIndex)
		
		($ "#"+this.options.Name+" "+'.' +this.css.Icon).mouseover (event) =>
			@IconMouseOver(this.attributes[1].value,ClickedIconIndex)                                   # manual changes in javascript!!
		
		($ "#"+this.options.Name+" "+'.' +this.css.Icon).mouseout (event) =>
			@IconMouseOut(this.attributes[1].value,ClickedIconIndex)                                    # manual changes in javascript!!


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
		wrapperHeader : 'ui-widget-header'
		headerMenu: 'ui-header-menu'
		MenuContainer: 'ui-menu-container'
		MenuHover: 'ui-menu-hover'
		MenuLink: 'ui-menu-link'
		MenuTabs: 'ui-menutabs'
		Icon: 'ui-iconclick'
		SpriteImg: 'ui-spriteImg'
		MenuTabCont: 'ui-menu-tab-content'
		wrapperSettings: 'ui-wrapper-settings'
		UserInfo: 'ui-user-info'
		HLink: 'ui-h-link'
		HBreak: 'ui-h-break'
		settingsIcon: 'ui-settings-icon'
		wrapperLogo: 'ui-wrapper-logo'
		VzImg: 'ui-logo-img'
			
$.widget "vdms.CommonHeader", new CommonHeader