(function() {
  var Header_Help, Header_SignOut, ccHeader;

  window.ccHeader = ccHeader = (function() {

    function ccHeader() {}

    ccHeader.prototype._create = function() {
      var BlueColorOption, ButtonsHolder, CurrentPage, FullOption, HeaderMenu, IconOption, IconTag, LightBox, MenuActive, MenuContainer, MenuLink, MenuTabCont, OrangeColorOption, Padding, PersonalizeContainer, PersonalizePopUp, PersonalizePopUpContent, PersonalizePopUpTitle, RedColorOption, SizeHeading, SizeWrapper, TempDivTag, TempliTag, TextOption, ThemeHeading, ThemeWrapper, VzImg, VzImgDiv, VzLogo, breaker1, breaker2, breaker3, helpTag, icon, optionsDiv, settingsIcon, signOutTag, userInfo, _i, _len, _ref;
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
      VzImg = ($('<div/>')).attr({
        id: "Vz Image"
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
      userInfo = ($('<span/>')).attr({
        id: 'Hello_UserName'
      }).text("Hello," + this.options.Username).addClass(this.css.UserInfo);
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
      ThemeHeading = ($('<label/>')).attr({
        id: "ThemeHeading"
      }).addClass(this.css.ThemeHeading).text("Header Themes");
      BlueColorOption = ($('<div/>')).attr({
        id: "Blue"
      }).addClass(this.css.ColorOption).append(($('<div/>')).addClass(this.css.Radio).append(($('<input/>')).addClass(this.css.RadioButton).addClass(this.css.Set).attr({
        type: "radio"
      }).attr({
        'checked': true
      }))).append(($('<div/>')).addClass('aquaBlue')).append(($('<b/>')).text("Aqua Blue"));
      RedColorOption = ($('<div/>')).attr({
        id: "Red"
      }).addClass(this.css.ColorOption).append(($('<div/>')).addClass(this.css.Radio).append(($('<input/>')).attr({
        type: "radio"
      }).addClass(this.css.RadioButton))).append(($('<div/>')).addClass('red')).append(($('<b/>')).text("Red"));
      OrangeColorOption = ($('<div/>')).attr({
        id: "Orange"
      }).addClass(this.css.ColorOption).append(($('<div/>')).addClass(this.css.Radio).append(($('<input/>')).attr({
        type: "radio"
      }).addClass(this.css.RadioButton))).append(($('<div/>')).addClass('orange')).append(($('<b/>')).text("Orange"));
      FullOption = ($('<div/>')).attr({
        id: "FullOption"
      }).attr({
        title: '0'
      }).addClass(this.css.Radio).append(($('<input/>')).attr({
        id: ""
      }).attr({
        type: "radio"
      }).attr({
        'checked': true
      }).addClass(this.css.RadioButton).addClass(this.css.Set));
      TextOption = ($('<div/>')).attr({
        id: "TextOption"
      }).attr({
        title: '1'
      }).addClass(this.css.Radio).append(($('<input/>')).attr({
        id: "Text"
      }).attr({
        type: "radio"
      }).addClass(this.css.RadioButton));
      IconOption = ($('<div/>')).attr({
        id: "IconOption"
      }).attr({
        title: '2'
      }).addClass(this.css.Radio).append(($('<input/>')).attr({
        id: "Icon"
      }).attr({
        type: "radio"
      }).addClass(this.css.RadioButton));
      ThemeWrapper = ($('<div/>')).attr({
        id: "ThemeWrapper"
      }).addClass(this.css.ThemeWrapper).append(BlueColorOption).append(RedColorOption).append(OrangeColorOption);
      SizeHeading = ($('<label/>')).attr({
        id: "SizeHeading"
      }).addClass(this.css.SizeHeading).text("Header Size");
      SizeWrapper = ($('<div/>')).attr({
        id: "SizeWrapper"
      }).addClass(this.css.SizeWrapper).append(FullOption).append(($('<b/>')).text("Full Header View")).append(IconOption).append(($('<b/>')).text("Minimised Icon View")).append(TextOption).append(($('<b/>')).text("Minimised Text View"));
      ButtonsHolder = ($('<div/>')).attr({
        id: "ButtonsHolder"
      }).addClass(this.css.ButtonsHolder).append(($('<a/>')).attr({
        id: "Cancel_button"
      }).attr({
        href: "#"
      }).addClass(this.css.Button).text("Cancel")).append(($('<a/>')).attr({
        id: "Save_button"
      }).attr({
        href: "#"
      }).addClass(this.css.Button).text("Save"));
      Padding = ($('<div/>')).attr({
        id: "Padding"
      }).addClass(this.css.Padding).append(ThemeHeading).append(ThemeWrapper).append(SizeHeading).append(SizeWrapper).append(ButtonsHolder);
      PersonalizePopUpContent = ($('<div/>')).attr({
        id: "PersonalizePopUpContent"
      }).addClass(this.css.PersonalizePopUpContent).append(Padding);
      PersonalizePopUpTitle = ($('<div/>')).attr({
        id: "PersonalizePopUpTitle"
      }).addClass(this.css.PersonalizePopUpTitle).text("Personalize Settings");
      PersonalizePopUp = ($('<div/>')).attr({
        id: "PersonalizePopUp"
      }).addClass(this.css.PersonalizePopUp).append(PersonalizePopUpTitle).append(PersonalizePopUpContent);
      PersonalizeContainer = ($('<div/>')).attr({
        id: "PersonalizeContainer"
      }).addClass(this.css.PersonalizeContainer).append(PersonalizePopUp).attr({
        style: "display:none"
      });
      LightBox = ($('<div/>')).attr({
        id: "LightBox"
      }).addClass(this.css.LightBox).attr({
        style: "display:none"
      });
      return ($(this.element)).attr({
        id: this.options.Name
      }).addClass(this.options.BackgroundColor).addClass(this.css.wrapperHeader).append(HeaderMenu).append(LightBox).append(PersonalizeContainer);
    };

    ccHeader.prototype._init = function() {
      var ClickedIconIndex, element, me;
      me = this;
      element = $(this.element);
      ClickedIconIndex = 0;
      ($("#" + this.options.Name + " " + '.' + this.css.Icon)).click(function(event) {
        ClickedIconIndex = this.attributes[1].value;
        return me.IconClicked(ClickedIconIndex);
      });
      ($("#" + this.options.Name + " " + '.' + this.css.Icon)).mouseover(function(event) {
        return me.IconMouseOver(this.attributes[1].value, ClickedIconIndex);
      });
      ($("#" + this.options.Name + " " + '.' + this.css.Icon)).mouseout(function(event) {
        return me.IconMouseOut(this.attributes[1].value, ClickedIconIndex);
      });
      ($("#" + this.options.Name + " " + '.' + this.css.settingsIcon)).click(function(event) {
        $(me.element[0].children[1]).attr({
          style: "display:block"
        });
        return $(me.element[0].children[2]).attr({
          style: "display:block"
        });
      });
      ($("#" + this.options.Name + " #signOut")).click(function(event) {
        return Header_SignOut(this.previousSibling.previousSibling.textContent.replace("Hello,", ""));
      });
      ($("#" + this.options.Name + " #help")).click(function(event) {
        return Header_Help(this.previousSibling.previousSibling.previousSibling.previousSibling.textContent.replace("Hello,", ""));
      });
      ($("#" + this.options.Name + " #Cancel_button")).click(function(event) {
        $(me.element[0].children[1]).attr({
          style: "display:none"
        });
        return $(me.element[0].children[2]).attr({
          style: "display:none"
        });
      });
      ($("#" + this.options.Name + " #Save_button")).click(function(event) {
        $(me.element).removeClass(me.options.BackgroundColor);
        me.options.BackgroundColor = ($("#" + me.options.Name + ' .' + me.css.ThemeWrapper + ' .' + me.css.Set))[0].parentNode.parentNode.attributes[0].value;
        $(me.element).addClass(me.options.BackgroundColor);
        ($("#" + me.options.Name + " ." + me.css.headerMenu)).removeClass().addClass(me.css.headerMenu).addClass(($("#" + me.options.Name + ' .' + me.css.SizeWrapper + ' .' + me.css.Set))[0].id);
        $(me.element[0].children[1]).attr({
          style: "display:none"
        });
        return $(me.element[0].children[2]).attr({
          style: "display:none"
        });
      });
      ($("#" + this.options.Name + ' .' + this.css.ThemeWrapper + ' .' + this.css.RadioButton)).click(function(event) {
        ($("#" + me.options.Name + ' .' + me.css.ThemeWrapper + ' .' + me.css.Set)).attr({
          'checked': false
        }).removeClass(me.css.Set);
        return ($(this)).addClass(me.css.Set);
      });
      return ($("#" + this.options.Name + ' .' + this.css.SizeWrapper + ' .' + this.css.RadioButton)).click(function(event) {
        ($("#" + me.options.Name + ' .' + me.css.SizeWrapper + ' .' + me.css.Set)).attr({
          'checked': false
        }).removeClass(me.css.Set);
        return ($(this)).addClass(me.css.Set);
      });
    };

    ccHeader.prototype.ChangeUserName = function(NewUserName, HeaderName) {
      return ($('#' + HeaderName + " #Hello_UserName")).text("Hello," + NewUserName);
    };

    ccHeader.prototype.IconClicked = function(ClickedIconIndex) {
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

    ccHeader.prototype.IconMouseOver = function(MouseOverIndex, ClickedIconIndex) {
      $('#' + this.options.Name + " #" + this.options.Icons[MouseOverIndex] + "_spriteImg").css('backgroundPosition', this.options.SpriteIconHorizontalPosition[MouseOverIndex] + 'px 0');
      if (MouseOverIndex !== ClickedIconIndex) {
        return $('#' + this.options.Name + " #" + this.options.Icons[MouseOverIndex] + "_spriteImg").next().attr({
          'style': 'font-weight : bold'
        });
      }
    };

    ccHeader.prototype.IconMouseOut = function(MouseOutIndex, ClickedIconIndex) {
      if (MouseOutIndex !== ClickedIconIndex) {
        $('#' + this.options.Name + " #" + this.options.Icons[MouseOutIndex] + "_spriteImg").css('backgroundPosition', this.options.SpriteIconHorizontalPosition[MouseOutIndex] + 'px ' + this.options.SpriteIconVerticalPosition[this.options.IconSet] + 'px');
        return $('#' + this.options.Name + " #" + this.options.Icons[MouseOutIndex] + "_spriteImg").next().attr({
          'style': 'font-weight : normal'
        });
      }
    };

    ccHeader.prototype.options = {
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

    ccHeader.prototype.css = {
      wrapperHeader: 'ccHeader',
      headerMenu: 'ccHeader-header-menu',
      MenuContainer: 'ccHeader-menu-container',
      MenuHover: 'ccHeader-menu-hover',
      MenuLink: 'ccHeader-menu-link',
      MenuTabs: 'ccHeader-menutabs',
      Icon: 'ccHeader-iconclick',
      SpriteImg: 'ccHeader-spriteImg',
      MenuTabCont: 'ccHeader-menu-tab-content',
      wrapperSettings: 'ccHeader-wrapper-settings',
      UserInfo: 'ccHeader-user-info',
      HLink: 'ccHeader-h-link',
      HBreak: 'ccHeader-h-break',
      settingsIcon: 'ccHeader-settings-icon',
      wrapperLogo: 'ccHeader-wrapper-logo',
      VzImg: 'ccHeader-logo-img',
      PersonalizeContainer: 'ccHeader-popup-wrapper',
      PersonalizePopUp: 'ccHeader-popup',
      PersonalizePopUpTitle: 'ccHeader-popup-title',
      PersonalizePopUpContent: 'ccHeader-popup-content',
      Padding: 'padding',
      ThemeHeading: 'label',
      ColorOption: 'ccHeader-themes-row',
      SizeHeading: 'label labelSpace',
      SizeOption: '',
      ButtonsHolder: 'ccHeader-pop-btnWrapper',
      LightBox: 'ccHeader-lightBox',
      Radio: 'radio',
      RadioButton: 'RadioButton',
      Button: 'button',
      Set: 'Set',
      SizeWrapper: 'ccHeader-size-row',
      ThemeWrapper: 'ThemeWrapper'
    };

    return ccHeader;

  })();

  $.widget("cc.ccHeader", new ccHeader);

  Header_SignOut = function(Username) {
    return SignOut(Username);
  };

  Header_Help = function(Username) {
    return Help(Username);
  };
  
  }).call(this);