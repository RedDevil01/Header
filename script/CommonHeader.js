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
                }).css('backgroundPosition', this.options.SpriteIconHorizontalPosition[_i] + 'px ' + this.options.SpriteIconVerticalPosition[this.options.IconSet] + 'px').addClass(this.css.SpriteImg);
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
            VzImg = ($('<img/>')).attr({
                'style': 'margin-top:' + this.options.Mini * 38 + 'px !important'
            }).addClass(this.css.VzImg);
            VzImgDiv = ($('<div/>')).addClass(this.css.wrapperLogo).append(VzImg);
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
            settingsIcon = ($('<div/>')).addClass(this.css.settingsIcon);
            optionsDiv = ($('<div/>')).append(userInfo).append(breaker1).append(signOutTag).append(breaker2).append(helpTag).append(breaker3).append(settingsIcon);
            VzLogo = ($('<div/>')).attr({
                id: 'VzLogo'
            }).attr({
                'align': 'right'
            }).addClass(this.css.wrapperSettings).addClass(this.css.Logo).append(optionsDiv).append(VzImgDiv);
            HeaderMenu = ($('<div/>')).attr({
                id: this.css.HeaderMenu
            }).addClass(this.css.headerMenu).append(MenuContainer).append(VzLogo);
            return ($(this.element)).attr({
                id: this.options.Name
            }).attr({
                'style': 'margin-top:-' + this.options.Mini * 68 + 'px'
            }).addClass(this.options.BackgroundColor).addClass(this.css.wrapperHeader).append(HeaderMenu);
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
                $('#' + this.options.Name + " #" + this.options.Icons[_i] + "_spriteImg").css('backgroundPosition', this.options.SpriteIconHorizontalPosition[_i] + 'px ' + this.options.SpriteIconVerticalPosition[this.options.IconSet] + 'px');
            }
            $('.' + this.css.MenuHover).animate({
                left: this.options.HighlighterMovementPosition[ClickedIconIndex]
            }, 300);
            $('#' + this.options.Name + " #" + this.options.Icons[ClickedIconIndex] + "_spriteImg").css('backgroundPosition', this.options.SpriteIconHorizontalPosition[ClickedIconIndex] + 'px 0');
            return window.location = this.options.URLs[ClickedIconIndex];
        };

        CommonHeader.prototype.IconMouseOver = function (MouseOverIndex, ClickedIconIndex) {
            $('#' + this.options.Name + " #" + this.options.Icons[MouseOverIndex] + "_spriteImg").css('backgroundPosition', this.options.SpriteIconHorizontalPosition[MouseOverIndex] + 'px 0');
            if (MouseOverIndex !== ClickedIconIndex) {
                return $('#' + this.options.Name + " #" + this.options.Icons[MouseOverIndex] + "_spriteImg").next().attr({
                    'style': 'font-weight : bold'
                });
            }
        };

        CommonHeader.prototype.IconMouseOut = function (MouseOutIndex, ClickedIconIndex) {
            if (MouseOutIndex !== ClickedIconIndex) {
                $('#' + this.options.Name + " #" + this.options.Icons[MouseOutIndex] + "_spriteImg").css('backgroundPosition', this.options.SpriteIconHorizontalPosition[MouseOutIndex] + 'px ' + this.options.SpriteIconVerticalPosition[this.options.IconSet] + 'px');
                return $('#' + this.options.Name + " #" + this.options.Icons[MouseOutIndex] + "_spriteImg").next().attr({
                    'style': 'font-weight : normal'
                });
            }
        };

        CommonHeader.prototype.options = {
            Name: "Default",
            Username: "",
            BackgroundColor: "Orange",
            Mini: 0,
            IconSet: 1,
            Icons: ["Home", "Accounts", "Onboarding", "Systems", "Orders", "Assets", "Reports"],
            URLs: ["#Home", "#Accounts", "#Onboarding", "#Systems", "#Orders", "#Assets", "#Reports"],
            HighlighterMovementPosition: [-30, 58, 146, 234, 322, 410, 498],
            SpriteIconHorizontalPosition: [0, -49, -98, -147, -196, -245, -294],
            SpriteIconVerticalPosition: [-56, -105, -150]
        };

        CommonHeader.prototype.css = {
            wrapperHeader: 'ui-widget-header',
            headerMenu: 'ui-header-menu',
            MenuContainer: 'ui-menu-container',
            MenuHover: 'ui-menu-hover',
            MenuLink: 'ui-menu-link',
            MenuTabs: 'ui-menutabs',
            Icon: 'ui-iconclick',
            SpriteImg: 'ui-spriteImg',
            MenuTabCont: 'ui-menu-tab-content',
            wrapperSettings: 'ui-wrapper-settings',
            UserInfo: 'ui-user-info',
            HLink: 'ui-h-link',
            HBreak: 'ui-h-break',
            settingsIcon: 'ui-settings-icon',
            wrapperLogo: 'ui-wrapper-logo',
            VzImg: 'ui-logo-img'
        };

        return CommonHeader;

    })();

    $.widget("vdms.CommonHeader", new CommonHeader);

}).call(this);
