(function () {

    var CommonHeader;

    window.CommonHeader = CommonHeader = (function () {

        function CommonHeader() { }

        CommonHeader.prototype._create = function () {
            var CurrentPage, HeaderMenu, IconTag, MenuActive, MenuContainer, MenuLink, MenuTabCont, TempDivTag, TempliTag, VzImg, VzImgDiv, VzLogo, breaker1, breaker2, breaker3, helpTag, icon, optionsDiv, settingsIcon, signOutTag, userInfo, _i, _len, _ref;
            MenuActive = ($('<div/>')).addClass(this.css.MenuHover);
            CurrentPage = ($('<div/>')).attr({
                id: "HiddenCPage"
            }).attr({
                value: "Home"
            }).hide();
			
			
            MenuLink = ($('<ul/>')).addClass(this.css.MenuLink);
            _ref = this.options.Icons;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                icon = _ref[_i];
                IconTag = ($('<div/>')).attr({
                    id: icon + "_spriteImg"
                }).attr({
                    style: "font-weight: normal"
                }).css('backgroundPosition', ((-49) * _i) + 'px ' + -56 + 'px').addClass(this.css.SpriteImg);
                MenuTabCont = ($('<div/>')).attr({
                    style: "font-weight: normal"
                }).text(icon).addClass(this.css.MenuTabCont);
                TempDivTag = ($('<div/>')).attr({
                    id: "Div" + icon
                }).attr({
                    title: icon
                }).addClass(this.css.MenuTabs).append(IconTag).append(MenuTabCont);
                TempliTag = ($('<li/>')).attr({
                    title: icon
                }).addClass(this.css.Icon).append(TempDivTag);
                MenuLink.append(TempliTag);				
				
            }
            MenuContainer = ($('<div/>')).addClass(this.css.MenuContainer).append(MenuActive).append(CurrentPage).append(MenuLink);
			
			
			
            VzImg = ($('<img/>')).addClass(this.css.VzImg);
            VzImgDiv = ($('<div/>')).addClass(this.css.ImgDiv).addClass(this.css.Fr).append(VzImg);
            helpTag = ($('<a/>')).text("Help").attr({
                id: 'help'
            }).attr('href', 'javascript:void(0)').addClass(this.css.HLink);
            signOutTag = ($('<a/>')).text("Sign Out").attr({
                id: 'signOut'
            }).attr('href', 'javascript:void(0)').addClass(this.css.HLink);
            breaker1 = ($('<span/>')).text('|').addClass(this.css.HBreak);
            breaker2 = ($('<span/>')).text('|').addClass(this.css.HBreak);
            breaker3 = ($('<span/>')).text('|').addClass(this.css.HBreak);
            userInfo = ($('<span/>')).text("Hello," + this.options.Username).addClass(this.css.UserInfo);
            settingsIcon = ($('<div/>')).addClass(this.css.Fr).addClass(this.css.settingsIcon);
            optionsDiv = ($('<div/>')).addClass(this.css.Fr).append(userInfo).append(breaker1).append(signOutTag).append(breaker2).append(helpTag).append(breaker3).append(settingsIcon);
            VzLogo = ($('<div/>')).attr({
                id: 'VzLogo'
            }).attr({
                'align': 'right'
            }).addClass(this.css.Fr).addClass(this.css.Logo).append(optionsDiv).append(VzImgDiv);
            HeaderMenu = ($('<div/>')).attr({
                id: this.css.HeaderMenu
            }).addClass(this.css.Full).append(MenuContainer).append(VzLogo);
            return ($(this.element)).attr({
                id: this.options.Name
            }).addClass(this.options.BackgroundColor + " BG_Full").append(HeaderMenu);
			
        };

        CommonHeader.prototype._init = function () {
            var element,
      _this = this;
            element = $(this.element);
            ($("#" + this.options.Name + " " + '.' + this.css.Icon)).click(function (event) {
                return _this.IconClicked(this.attributes[0].value);
            });
            ($("#" + this.options.Name + " " + '.' + this.css.Icon)).mouseover(function (event) {
                return _this.IconHover(this.attributes[0].value);
            });
            return ($("#" + this.options.Name + " " + '.' + this.css.Icon)).mouseout(function (event) {
                return _this.Iconmouseout(this.attributes[0].value);
            });
        };

        CommonHeader.prototype.IconClicked = function (ClickedIconTitle) {
            var Icons, SpritePosition, URLs, icon, index, _i, _len;
            Icons = this.options.Icons;
            URLs = this.options.URLs;
            SpritePosition = this.options.SpritePosition;
            for (_i = 0, _len = Icons.length; _i < _len; _i++) {
                icon = Icons[_i];
                if (icon === ClickedIconTitle) {
                    index = _i;	
                } else {
                    $('#' + this.options.Name + " #" + Icons[_i] + "_spriteImg").css('backgroundPosition', ((-49) * _i) + 'px -56px');
                }
            }
            $('.' + this.css.MenuHover).animate({
                left: SpritePosition[index]
            }, 300);
            $('#' + this.options.Name + " #" + Icons[index] + "_spriteImg").css('backgroundPosition', ((-49) * _i) + 'px 0px');
            return window.location = URLs[index];
        };

        CommonHeader.prototype.IconHover = function (ClickedIconTitle) {
            var Icons, SpritePosition, URLs, icon, _i, _len, _results;
            Icons = this.options.Icons;
            URLs = this.options.URLs;
			
            SpritePosition = this.options.SpritePosition;
            _results = [];
            for (_i = 0, _len = Icons.length; _i < _len; _i++) {
                icon = Icons[_i];
                if (icon === ClickedIconTitle) {
                    _results.push($('#' + this.options.Name + " #" + Icons[_i] + "_spriteImg").css('backgroundPosition', ((-49) * _i) + 'px 0px'));
					
                } else {
                    _results.push(void 0);
                }
            }
            return _results;
        };

        CommonHeader.prototype.Iconmouseout = function (ClickedIconTitle) {
            var Icons, SpritePosition, URLs, icon, _i, _len, _results;
            Icons = this.options.Icons;
            URLs = this.options.URLs;
			
            SpritePosition = this.options.SpritePosition;
            _results = [];
            for (_i = 0, _len = Icons.length; _i < _len; _i++) {
                icon = Icons[_i];
                if (icon === ClickedIconTitle) {
                    _results.push($('#' + this.options.Name + " #" + Icons[_i] + "_spriteImg").css('backgroundPosition', ((-49) * _i) + 'px 0px'));
                } 
				else if(icon != ClickedIconTitle)
				{
					_results.push($('#' + this.options.Name + " #" + Icons[_i] + "_spriteImg").css('backgroundPosition', ((-49) * _i) + 'px -56px'));
				}
				else {
                    _results.push(void 0);
                }
            }
            return _results;
        };
		
		

        CommonHeader.prototype.options = {
            Name: "Default",
            BackgroundColor: "Orange",
            Icons: ["Home", "Accounts", "Onboarding", "Systems", "Orders", "Assets", "Reports"],
            URLs: ["#Home", "#Accounts", "#Onboarding", "#Systems", "#Orders", "#Assets", "#Reports"],
            SpritePosition: [-30, 58, 146, 234, 322, 410, 498],
            IconColors: ["#f79027", "#B9C51D", "#fac574", "#92d1dd", "#Faea7c", "#61b2db", "#F29994", '#FCFFE1'],
            SpriteImgSet: 1,
            DefaultValue: 50,
            Username: ""
        };

        CommonHeader.prototype.css = {
            MenuHover: 'H_Menu_Hover',
            MenuLink: 'H_MenuLnk',
            MenuContainer: 'Fl H_MenuContainer',
            Full: 'Full',
            MenuTabCont: 'H_MenuTabCont',
            MenuTabs: 'H_MenuTabs',
            Logo: 'H_UPad',
            VzImg: 'VzImg',
            ImgDiv: 'CB',
            Fr: 'Fr',
            HLink: 'H_Lnk FS13',
            HBreak: 'H_Lnk FS14 H_PLR510',
            UserInfo: 'H_UserInfo FS13',
            HeaderMenu: 'HeaderMenu',
            SpriteImg: 'SpriteImg',
            settingsIcon: 'SettingsIco',
            Icon: 'IconClick'
        };

        return CommonHeader;

    })();

    $.widget("vdms.CommonHeader", new CommonHeader);

//    var CommonHeader;

//    window.CommonHeader = CommonHeader = (function () {

//        function CommonHeader() { }

//        CommonHeader.prototype._create = function () {
//            var CurrentPage, HeaderMenu, IconTag, MenuActive, MenuContainer, MenuLink, MenuTabCont, TempDivTag, TempliTag, VzImg, VzImgDiv, VzLogo, breaker1, breaker2, breaker3, helpTag, icon, optionsDiv, settingsIcon, signOutTag, userInfo, _i, _len, _ref;
//            MenuActive = ($('<div/>')).addClass(this.css.MenuHover);
//            CurrentPage = ($('<div/>')).attr({
//                id: "HiddenCPage"
//            }).attr({
//                value: "Home"
//            }).hide();
//            MenuLink = ($('<ul/>')).addClass(this.css.MenuLink);
//            _ref = this.options.Icons;
//            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
//                icon = _ref[_i];
//                IconTag = ($('<div/>')).attr({
//                    id: icon + "_spriteImg"
//                }).attr({
//                    style: "font-weight: normal"
//                }).css('backgroundPosition', ((-49) * _i) + 'px ' + -56 + 'px').addClass(this.css.SpriteImg);
//                MenuTabCont = ($('<div/>')).attr({
//                    style: "font-weight: normal"
//                }).text(icon).addClass(this.css.MenuTabCont);
//                TempDivTag = ($('<div/>')).attr({
//                    id: "Div" + icon
//                }).attr({
//                    title: icon
//                }).addClass(this.css.MenuTabs).append(IconTag).append(MenuTabCont);
//                TempliTag = ($('<li/>')).attr({
//                    title: icon
//                }).addClass(this.css.Icon).append(TempDivTag);
//                MenuLink.append(TempliTag);
//            }
//            MenuContainer = ($('<div/>')).addClass(this.css.MenuContainer).append(MenuActive).append(CurrentPage).append(MenuLink);
//            VzImg = ($('<img/>')).addClass(this.css.VzImg);
//            VzImgDiv = ($('<div/>')).addClass(this.css.ImgDiv).addClass(this.css.Fr).append(VzImg);
//            helpTag = ($('<a/>')).text("Help").attr({
//                id: 'help'
//            }).attr('href', 'javascript:void(0)').addClass(this.css.HLink);
//            signOutTag = ($('<a/>')).text("Sign Out").attr({
//                id: 'signOut'
//            }).attr('href', 'javascript:void(0)').addClass(this.css.HLink);
//            breaker1 = ($('<span/>')).text('|').addClass(this.css.HBreak);
//            breaker2 = ($('<span/>')).text('|').addClass(this.css.HBreak);
//            breaker3 = ($('<span/>')).text('|').addClass(this.css.HBreak);
//            userInfo = ($('<span/>')).text("Hello," + this.options.Username).addClass(this.css.UserInfo);
//            settingsIcon = ($('<div/>')).addClass(this.css.Fr).addClass(this.css.settingsIcon);
//            optionsDiv = ($('<div/>')).addClass(this.css.Fr).append(userInfo).append(breaker1).append(signOutTag).append(breaker2).append(helpTag).append(breaker3).append(settingsIcon);
//            VzLogo = ($('<div/>')).attr({
//                id: 'VzLogo'
//            }).attr({
//                'align': 'right'
//            }).addClass(this.css.Fr).addClass(this.css.Logo).append(optionsDiv).append(VzImgDiv);
//            HeaderMenu = ($('<div/>')).attr({
//                id: this.css.HeaderMenu
//            }).addClass(this.css.Full).append(MenuContainer).append(VzLogo);
//            return ($(this.element)).attr({
//                id: this.options.Name
//            }).addClass(this.options.BackgroundColor + " BG_Full").append(HeaderMenu);
//        };


//        CommonHeader.prototype._init = function () {
//            var element,
//      _this = this;
//            element = $(this.element);
//            ($("#" + this.options.Name + " " + '.' + this.css.Icon)).click(function (event) {
//                return _this.IconClicked(this.attributes[0].value);
//            });
//            ($("#" + this.options.Name + " " + '.' + this.css.Icon)).mouseover(function (event) {
//                return _this.IconHover(this.attributes[0].value);
//            });
//            return ($("#" + this.options.Name + " " + '.' + this.css.Icon)).mouseout(function (event) {
//                return _this.Iconmouseout(this.attributes[0].value);
//            });
//        };

//        CommonHeader.prototype.IconClicked = function (ClickedIconTitle) {
//            var Icons, SpritePosition, URLs, icon, index, _i, _len;
//            Icons = this.options.Icons;
//            URLs = this.options.URLs;
//            SpritePosition = this.options.SpritePosition;
//            for (_i = 0, _len = Icons.length; _i < _len; _i++) {
//                icon = Icons[_i];
//                if (icon === ClickedIconTitle) {
//                    index = _i;
//                } else {
//                    $('#' + this.options.Name + " #" + Icons[_i] + "_spriteImg").css('backgroundPosition', ((-49) * _i) + 'px -56px');
//                }
//            }
//            $('.' + this.css.MenuHover).animate({
//                left: SpritePosition[index]
//            }, 300);
//            $('#' + this.options.Name + " #" + Icons[index] + "_spriteImg").css('backgroundPosition', ((-49) * _i) + 'px 0');
//            return window.location = URLs[index];
//        };

//        CommonHeader.prototype.IconHover = function (ClickedIconTitle) {
//            var Icons, SpritePosition, URLs, icon, _i, _len, _results;
//            Icons = this.options.Icons;
//            URLs = this.options.URLs;
//            SpritePosition = this.options.SpritePosition;
//            _results = [];
//            for (_i = 0, _len = Icons.length; _i < _len; _i++) {
//                icon = Icons[_i];
//                if (icon === ClickedIconTitle) {
//                    _results.push($('#' + this.options.Name + " #" + Icons[_i] + "_spriteImg").css('backgroundPosition', ((-49) * _i) + 'px 0'));
//                } else {
//                    _results.push(void 0);
//                }
//            }
//            return _results;
//        };

//        CommonHeader.prototype.Iconmouseout = function (ClickedIconTitle) {
//            var Icons, SpritePosition, URLs, icon, _i, _len, _results;
//            Icons = this.options.Icons;
//            URLs = this.options.URLs;
//            SpritePosition = this.options.SpritePosition;
//            _results = [];
//            for (_i = 0, _len = Icons.length; _i < _len; _i++) {
//                icon = Icons[_i];
//                if (icon === ClickedIconTitle) {
//                    _results.push($('#' + this.options.Name + " #" + Icons[_i] + "_spriteImg").css('backgroundPosition', ((-49) * _i) + 'px -56px'));
//                } else {
//                    _results.push(void 0);
//                }
//            }
//            return _results;
//        };



//        CommonHeader.prototype.options = {
//            Name: "Default",
//            BackgroundColor: "Orange",
//            Icons: ["Home", "Accounts", "Onboarding", "Systems", "Orders", "Assets", "Reports"],
//            URLs: ["#Home", "#Accounts", "#Onboarding", "#Systems", "#Orders", "#Assets", "#Reports"],
//            SpritePosition: [-30, 58, 146, 234, 322, 410, 498],
//            IconColors: ["#f79027", "#B9C51D", "#fac574", "#92d1dd", "#Faea7c", "#61b2db", "#F29994", '#FCFFE1'],
//            SpriteImgSet: 1,
//            DefaultValue: 50,
//            Username: ""
//        };

//        CommonHeader.prototype.css = {
//            MenuHover: 'H_Menu_Hover',
//            MenuLink: 'H_MenuLnk',
//            MenuContainer: 'Fl H_MenuContainer',
//            Full: 'Full',
//            MenuTabCont: 'H_MenuTabCont',
//            MenuTabs: 'H_MenuTabs',
//            Logo: 'H_UPad',
//            VzImg: 'VzImg',
//            ImgDiv: 'CB',
//            Fr: 'Fr',
//            HLink: 'H_Lnk FS13',
//            HBreak: 'H_Lnk FS14 H_PLR510',
//            UserInfo: 'H_UserInfo FS13',
//            HeaderMenu: 'HeaderMenu',
//            SpriteImg: 'SpriteImg',
//            settingsIcon: 'SettingsIco',
//            Icon: 'IconClick'
//        };

//        return CommonHeader;

//    })();

//    $.widget("vdms.CommonHeader", new CommonHeader);

}).call(this);
