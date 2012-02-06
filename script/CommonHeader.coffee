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
                        .css('backgroundPosition', ((-49)*_i)+'px '+ -56 +'px')
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
                            .addClass(@css.Icon)
                            .append(TempDivTag )
                        
    MenuLink.append(TempliTag)        

   MenuContainer = ($ '<div/>').addClass(@css.MenuContainer)
                               .append(MenuActive)
                               .append(CurrentPage)
                               .append(MenuLink) 
      
   VzImg = ($ '<img/>').addClass(@css.VzImg)                   
   
   VzImgDiv = ($ '<div/>').addClass(@css.ImgDiv)
                          .addClass(@css.Fr)
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

   settingsIcon = ($ '<div/>').addClass(@css.Fr)
                              .addClass(@css.settingsIcon)
   
   optionsDiv = ($ '<div/>').addClass(@css.Fr)
                            .append(userInfo)
                            .append(breaker1)
                            .append(signOutTag)
                            .append(breaker2)
                            .append(helpTag)
							.append(breaker3)
                            .append(settingsIcon)

   VzLogo = ($ '<div/>').attr(id: 'VzLogo' )
                        .attr('align': 'right' )
                        .addClass(@css.Fr)
                        .addClass(@css.Logo)
                        .append(optionsDiv)
                        .append(VzImgDiv)
						
 
   HeaderMenu = ($ '<div/>').attr(id: @css.HeaderMenu)
                            .addClass(@css.Full)
                            .append(MenuContainer)
                            .append(VzLogo)
                       
   ($ @element).attr(id: @options.Name )
               .addClass(@options.BackgroundColor + " BG_Full")
               .append(HeaderMenu)
 
 _init: ->
        element = ($ this.element)
        ($ "#"+this.options.Name+" "+'.' + this.css.Icon ).click (event) => @IconClicked(this.attributes[0].value)  #changed in java cannot death as of now
        ($ "#"+this.options.Name+" "+'.' + this.css.Icon ).mouseover (event) => @IconHover(this.attributes[0].value)  #changed in java cannot death as of now

        ($ "#"+this.options.Name+" "+'.' + this.css.Icon ).mouseout (event) => @Iconmouseout(this.attributes[0].value)  #changed in java cannot death as of now
              
 IconClicked: (ClickedIconTitle) -> 
     Icons = @options.Icons
     URLs = @options.URLs  
     SpritePosition = @options.SpritePosition
     for icon in Icons
      if icon == ClickedIconTitle
         index=_i;    
      else
         $('#' + this.options.Name + " #" + Icons[_i] + "_spriteImg").css 'backgroundPosition', ((-49) * _i) + 'px -56px'
       
     $('.'+@css.MenuHover).animate(left: SpritePosition[index] , 300) 
     $('#' + this.options.Name + " #" + Icons[index] + "_spriteImg").css 'backgroundPosition', ((-49) * _i) + 'px 0'
     window.location = URLs[index] 
  
 IconHover: (ClickedIconTitle) -> 
     Icons = @options.Icons
     URLs = @options.URLs  
     SpritePosition = @options.SpritePosition
     for icon in Icons
      if icon == ClickedIconTitle
         $('#' + this.options.Name + " #" + Icons[_i] + "_spriteImg").css 'backgroundPosition', ((-49) * _i) + 'px 0'

 Iconmouseout: (ClickedIconTitle) -> 
     Icons = @options.Icons
     URLs = @options.URLs  
     SpritePosition = @options.SpritePosition
     for icon in Icons
      if icon == ClickedIconTitle
         $('#' + this.options.Name + " #" + Icons[_i] + "_spriteImg").css 'backgroundPosition', ((-49) * _i) + 'px -56px'
     
  		
 options:
                Name: "Default"
                BackgroundColor: "Orange"
                Icons : ["Home","Accounts","Onboarding","Systems","Orders","Assets","Reports"]
                URLs : ["#Home","#Accounts","#Onboarding","#Systems","#Orders","#Assets","#Reports"]
                SpritePosition: [-30, 58, 146, 234, 322, 410, 498]
                IconColors: [ "#f79027",  "#B9C51D",  "#fac574",  "#92d1dd",  "#Faea7c",  "#61b2db",  "#F29994",  '#FCFFE1']
                SpriteImgSet: 1
                DefaultValue: 50
                Username: "" 

 css:
                MenuHover: 'H_Menu_Hover'
                MenuLink: 'H_MenuLnk'
                MenuContainer : 'Fl H_MenuContainer' 
                Full : 'Full'
                MenuTabCont : 'H_MenuTabCont'
                MenuTabs : 'H_MenuTabs'
                Logo : 'H_UPad'
                VzImg : 'VzImg'
                ImgDiv : 'CB'
                Fr : 'Fr'
                HLink :'H_Lnk FS13'
                HBreak : 'H_Lnk FS14 H_PLR510'
                UserInfo : 'H_UserInfo FS13'
                HeaderMenu: 'HeaderMenu'
                SpriteImg: 'SpriteImg'
                settingsIcon: 'SettingsIco'
                Icon : 'IconClick'
                
$.widget "vdms.CommonHeader", new CommonHeader