!function(o){"object"==typeof module&&"object"==typeof module.exports?o(require("jquery"),window,document):o(jQuery,window,document)}(function(o,t,e,i){o.fn.simpleScrollFollow=function(t){var e=Array.prototype.slice.call(arguments,1);return this.each(function(){o.fn.simpleScrollFollow.processEach(this,t,e)})},o.fn.simpleScrollFollow.processEach=function(t,e,i){var l=o(t).data("simple-scroll-follow");return l&&e in l&&"_"!=e.charAt(0)?(l[e].apply(l,i),"call public method"):"object"!=typeof e&&e?(console.error('Sub-method "'+e+'" does not exist on $.simpleScrollFollow'),"error"):(o(t).data("simple-scroll-follow",new o.simpleScrollFollow(t,e)),"init plugin")},o.simpleScrollFollow=function(e,i){this._setOption(i),this._setFollow(e);var l=this;o(t).scroll(function(){l._handleScroll.call(l)}),this.timer=!1,o(t).resize(function(){l._handleResize.call(l)})},o.extend(o.simpleScrollFollow.prototype,{setEnabled:function(o){return o===i||o?this.option.enabled=!0:(this._moveDefaultPosition(),this.option.enabled=!1)},_moveDefaultPosition:function(){o(this.follow.elem).css({position:"",top:"",bottom:"",left:"",right:""}).width("")},_setFollow:function(t){return this.follow={elem:t,width:o(t).width(),offset_top:o(t).offset().top,offset_bottom:this._calcOffsetBottom(t),offset_left:o(t).offset().left,position_top:"auto"==o(t).css("top")?0:Number(o(t).css("top").replace(/px$/,""))}},_setOption:function(t){return this.option=o.extend({enabled:!0,limit_elem:o("body"),min_width:0,upper_side:null,lower_side:null},t),"string"==typeof this.option.limit_elem&&(this.option.limit_elem=o(this.option.limit_elem)),this.option},_calcOffsetBottom:function(t){return o(t).offset().top+this._calcElemHeight(t)},_calcElemHeight:function(t){return o(t).height()+Number(o(t).css("border-top-width").replace(/px$/,""))+Number(o(t).css("border-bottom-width").replace(/px$/,""))+Number(o(t).css("padding-top").replace(/px$/,""))+Number(o(t).css("padding-bottom").replace(/px$/,""))},_handleScroll:function(){if(!this.option.enabled)return!1;if(o(t).width()<this.option.min_width)return this._moveDefaultPosition.call(this),!1;var e={scroll_top:this._getUpperSide(),scroll_bottom:this._getLowerSide()},i={offset_top:o(this.follow.elem).offset().top,offset_bottom:this._calcOffsetBottom(this.follow.elem)},l={offset_bottom:this._calcOffsetBottom(this.option.limit_elem)};return!(l.offset_bottom-this.follow.offset_top<i.offset_bottom-i.offset_top)&&(this._handleScrollMain(e,i,l),!0)},_getUpperSide:function(){var e=o(t).scrollTop();if(this.option.upper_side){var i=this._calcOffsetBottom(this.option.upper_side);e<i&&(e=i)}return e},_getLowerSide:function(){var e=o(t).scrollTop()+o(t).height();if(this.option.lower_side){var i=o(this.option.lower_side).offset().top;e>i&&(e=i)}return e},_handleScrollMain:function(o,t,e){return o.scroll_top<this.follow.offset_top?(this._move1(),1):o.scroll_top>e.offset_bottom?(this._move2(t,e),2):o.scroll_bottom-o.scroll_top>t.offset_bottom-t.offset_top?e.offset_bottom-o.scroll_top<t.offset_bottom-t.offset_top?(this._move2(t,e),3):(this._move3(),4):o.scroll_bottom>e.offset_bottom?(this._move2(t,e),5):o.scroll_bottom-this.follow.offset_top>t.offset_bottom-t.offset_top?(this._move4(),6):(this._move1(),7)},_move1:function(){o(this.follow.elem).css({position:"absolute",top:"",bottom:"",left:"",right:""}).width(this.follow.width)},_move2:function(t,e){o(this.follow.elem).css({position:"absolute",top:e.offset_bottom-this.follow.offset_top-(t.offset_bottom-t.offset_top)+this.follow.position_top,bottom:"auto",left:"",right:""}).width(this.follow.width)},_move3:function(){o(this.follow.elem).css({position:"fixed",top:this._getPositionToStickToWindow(this.option.upper_side),bottom:"auto",left:this.follow.offset_left,right:"auto"}).width(this.follow.width)},_move4:function(){o(this.follow.elem).css({position:"fixed",top:"auto",bottom:this._getPositionToStickToWindow(this.option.lower_side),left:this.follow.offset_left,right:"auto"}).width(this.follow.width)},_getPositionToStickToWindow:function(o){return o?this._calcElemHeight(o):0},_handleResize:function(){!1!==this.timer&&clearTimeout(this.timer);var e=this;return this.timer=setTimeout(function(){e._moveDefaultPosition.call(e),e._setFollow.call(e,e.follow.elem),o(t).trigger("scroll")},200)}})});