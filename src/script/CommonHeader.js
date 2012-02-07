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
                }).attr({
                    id: _i
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
            var ClickedIconIndex, element,
      _this = this;
            element = $(this.element);
            ClickedIconIndex = 0;
            ($("#" + this.options.Name + " " + '.' + this.css.Icon)).click(function (event) {
                ClickedIconIndex = this.attributes[1].value;
                return _this.IconClicked(ClickedIconIndex);
            });
            ($("#" + this.options.Name + " " + '.' + this.css.Icon)).mouseover(function (event) {
                return _this.IconMouseOver(this.attributes[1].value, ClickedIconIndex);
            });
            return ($("#" + this.options.Name + " " + '.' + this.css.Icon)).mouseout(function (event) {
                return _this.IconMouseOut(this.attributes[1].value, ClickedIconIndex);
            });
        };

        CommonHeader.prototype.IconClicked = function (ClickedIconIndex) {
            var icon, _i, _len, _ref;
            _ref = this.options.Icons;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                icon = _ref[_i];
                $('#' + this.options.Name + " #" + this.options.Icons[_i] + "_spriteImg").css('backgroundPosition', ((-49) * _i) + 'px -56px');
            }
            $('.' + this.css.MenuHover).animate({
                left: this.options.SpritePosition[ClickedIconIndex]
            }, 300);
            $('#' + this.options.Name + " #" + this.options.Icons[ClickedIconIndex] + "_spriteImg").css('backgroundPosition', ((-49) * ClickedIconIndex) + 'px 0');
            return window.location = this.options.URLs[ClickedIconIndex];
        };

        CommonHeader.prototype.IconMouseOver = function (MouseOverIndex) {
            return $('#' + this.options.Name + " #" + this.options.Icons[MouseOverIndex] + "_spriteImg").css('backgroundPosition', ((-49) * MouseOverIndex) + 'px 0');
        };

        CommonHeader.prototype.IconMouseOut = function (MouseOutIndex, ClickedIconIndex) {
            if (MouseOutIndex !== ClickedIconIndex) {
                return $('#' + this.options.Name + " #" + this.options.Icons[MouseOutIndex] + "_spriteImg").css('backgroundPosition', ((-49) * MouseOutIndex) + 'px -56px');
            }
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
}).call(this);
