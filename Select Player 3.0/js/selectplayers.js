
(function($){
   
    /***
     * Arrays to hold the formation
     */
    var systems = new Array();

    //4-4-2
    systems['4-4-2'] = new Array();
    systems['4-4-2']['x'] = [480,120,400,615,850,80,400,620,900,400,620];
    systems['4-4-2']['y'] = [68,220,220,220,220,385,385,385,385,540,540];

    //4-3-3
    systems['4-3-3'] = new Array();
    systems['4-3-3']['x'] = [480,120,400,615,850,80,480,900,40,480,950];
    systems['4-3-3']['y'] = [68,220,220,220,220,385,385,385,540,540,540];

    //3-5-2
    systems['3-5-2'] = new Array();
    systems['3-5-2']['x'] = [480,120,490,850,80,300,530,750,910,400,620];
    systems['3-5-2']['y'] = [68,220,220,220,385,385,385,385,385,540,540];

    //3-4-3
    systems['3-4-3'] = new Array();
    systems['3-4-3']['x'] = [480,120,490,850,80,400,620,900,40,480,950];
    systems['3-4-3']['y'] = [68,220,220,220,385,385,385,385,540,540,540];

    const mediaQuery = window.matchMedia("(max-width:768px)");
    const mediaQuery1 = window.matchMedia("(max-width:1024px)");
    const mediaQuery2 = window.matchMedia("(max-width:1366px)");
    const mediaQuery3 = window.matchMedia("(max-width:1920px)");
    const mediaQuery4 = window.matchMedia("(max-width:2560px)");
    const mediaQuery5 = window.matchMedia("(max-width:720px)");
    const mediaQuery6 = window.matchMedia("(max-width:962px)");
    
if(mediaQuery.matches){//768PX
    // FOR 768
    //4-4-2
    systems['4-4-2']['x'] = [270,60,220,350,480,30,210,350,520,200,350];
    systems['4-4-2']['y'] = [0,60,60,60,60,185,185,185,185,295,295];

    //4-3-3
    systems['4-3-3']['x'] = [270,60,220,350,480,30,260,520,0,270,550];
    systems['4-3-3']['y'] = [0,60,60,60,60,185,185,185,295,295,295];

    systems['3-4-3']['x'] = [270,60,270,480,30,200,350,520,0,270,550];
    systems['3-4-3']['y'] = [0,60,60,60,185,185,185,185,295,295,295];

    systems['3-5-2']['x'] = [270,60,270,480,30,180,300,400,520,200,350];
    systems['3-5-2']['y'] = [0,60,60,60,185,185,185,185,185,295,295];

}

else if(mediaQuery1.matches){//1024PX
    //4-4-2
    systems['4-4-2']['x'] = [390,100,320,500,680,45,320,490,730,300,480];
    systems['4-4-2']['y'] = [35,120,120,120,120,280,280,280,280,430,430];

    //4-3-3
    systems['4-3-3']['x'] = [390,100,320,500,680,45,405,730,5,390,750];
    systems['4-3-3']['y'] = [35,120,120,120,120,280,280,280,430,430,430];

    systems['3-4-3']['x'] = [390,100,410,680,45,320,490,730,5,390,750];
    systems['3-4-3']['y'] = [35,120,120,120,280,280,280,280,430,430,430];

    systems['3-5-2']['x'] = [390,100,410,680,45,280,400,500,730,300,480];
    systems['3-5-2']['y'] = [35,120,120,120,280,280,280,280,280,430,430];
}
else if(mediaQuery2.matches){//1366PX
    //4-4-2
    systems['4-4-2']['x'] = [480,120,400,615,850,80,400,620,900,400,620];
    systems['4-4-2']['y'] = [68,220,220,220,220,385,385,385,385,540,540];

    //4-3-3
    systems['4-3-3']['x'] = [480,120,400,615,850,80,480,900,40,480,950];
    systems['4-3-3']['y'] = [68,220,220,220,220,385,385,385,540,540,540];

    //3-5-2
    systems['3-5-2']['x'] = [480,120,490,850,80,300,530,750,910,400,620];
    systems['3-5-2']['y'] = [68,220,220,220,385,385,385,385,385,540,540];

    //3-4-3
    systems['3-4-3']['x'] = [480,120,490,850,80,400,620,900,40,480,950];
    systems['3-4-3']['y'] = [68,220,220,220,385,385,385,385,540,540,540];
}
else if(mediaQuery3.matches){ //1920PX
    //4-4-2
    systems['4-4-2']['x'] = [570,150,430,690,1000,110,420,700,1030,420,730];
    systems['4-4-2']['y'] = [100,270,270,270,270,435,435,435,435,645,645];

    //4-3-3
    systems['4-3-3']['x'] = [570,150,430,690,1000,110,560,1030,40,570,1070];
    systems['4-3-3']['y'] = [100,270,270,270,270,435,435,435,645,645,645];

    //3-5-2
    systems['3-5-2']['x'] = [570,150,560,1000,110,400,570,750,1030,420,730];
    systems['3-5-2']['y'] = [100,270,270,270,435,435,435,435,435,645,645];

    //3-4-3
    systems['3-4-3']['x'] = [570,150,560,1000,110,420,700,1030,40,570,1070];
    systems['3-4-3']['y'] = [100,270,270,270,435,435,435,435,645,645,645];
}

else if(mediaQuery4.matches){//2560PX
       //4-4-2
       systems['4-4-2']['x'] = [565,180,460,675,970,120,460,680,1010,460,680];
       systems['4-4-2']['y'] = [95,220,220,220,220,435,435,435,435,640,640];
   
       //4-3-3
       systems['4-3-3']['x'] = [565,180,460,675,970,120,570,1010,60,575,1040];
       systems['4-3-3']['y'] = [95,220,220,220,220,435,435,435,640,640,640];
   
       //3-5-2
       systems['3-5-2']['x'] = [565,180,570,970,120,380,580,780,1010,460,680];
       systems['3-5-2']['y'] = [95,220,220,220,435,435,435,435,435,640,640];
   
       //3-4-3
       systems['3-4-3']['x'] = [565,180,570,970,120,460,680,1010,60,575,1040];
       systems['3-4-3']['y'] = [95,220,220,220,435,435,435,435,640,640,640];

}
if(mediaQuery5.matches){//720PX
    
    // FOR 720
    //4-4-2
    systems['4-4-2']['x'] = [205,40,150,270,350,20,140,280,370,140,280];
    systems['4-4-2']['y'] = [15,75,75,75,75,165,165,165,165,230,230];

    //4-3-3
    systems['4-3-3']['x'] = [205,40,150,270,350,20,210,370,10,210,410];
    systems['4-3-3']['y'] = [15,75,75,75,75,165,165,165,230,230,230];

    systems['3-4-3']['x'] = [205,40,200,350,20,140,280,370,10,210,410];
    systems['3-4-3']['y'] = [15,75,75,75,165,165,165,165,230,230,230];

    systems['3-5-2']['x'] = [205,40,200,350,20,140,215,285,370,140,280];
    systems['3-5-2']['y'] = [15,75,75,75,165,165,165,165,165,230,230];
}
else if(mediaQuery6.matches){//962PX
    //4-4-2
    systems['4-4-2']['x'] = [285,70,220,370,500,45,220,380,510,200,400];
    systems['4-4-2']['y'] = [28,95,95,95,95,210,210,210,210,295,295];

    //4-3-3
    systems['4-3-3']['x'] = [285,70,220,370,500,45,300,510,5,280,560];
    systems['4-3-3']['y'] = [28,95,95,95,95,210,210,210,295,295,295];
    //3-4-3
    systems['3-4-3']['x'] = [285,70,300,500,45,220,380,510,5,280,560];
    systems['3-4-3']['y'] = [28,95,95,95,185,185,185,185,295,295,295];
    //3-5-2
    systems['3-5-2']['x'] = [285,70,300,500,45,180,280,400,510,200,400];
    systems['3-5-2']['y'] = [28,95,95,95,185,185,185,185,185,295,295];
}


   

//REMAINS 1024PX, 2560PX, 1440PX,425PX,375PX,320PX

    var methods = {
        
        /**
         * Initializes a plugin instance.
         * 
         * Supported settings are:
         * 
         * - system (the playing system)
         * - width (the width of the field)
         * - yspacing (the vertical spacing between player rows)
         * - xspacing (the horizontal spacing between players)
         * 
         * @param array options Settings
         */
        init : function (options) {
            return this.each(function(){
                var $this = $(this),
                data = $this.data('matchcenter');
                // define default settings
                var settings = {
                    target : $this,
                    players : [],
                    system : '4-4-2',
                    width : 400,
                    yspacing : 100,
                    xspacing : 10,
                }
                
                // if the plugin hasn't been initialized yet
                if (!data) {
                    $(this).addClass('matchcenter-field');
                    if (options) {
                        data = $.extend({}, settings, options);
                        $(this).data('matchcenter', data);
                    } else {
                        $(this).data('matchcenter', settings);
                    }
                }
            });
        },
        
        /**
         * Set playing system. Transforms the current playing system
         * to the given one.
         * 
         * @param string system Playing system (e.g. "4-4-2")
         */
        setPlayingSystem : function(system) {
            return this.each(function(){
                var $this = $(this),
                data = $this.data('matchcenter');
                data.system = system;
                var xpos = 0;
                var ypos = 0;
                $.each(data.players, function(key, value) {
                    xpos = systems[data.system]['x'][key];
                    ypos = systems[data.system]['y'][key];
                    $('#player' + value).animate({'left': xpos + 'px', 'top': ypos + 'px'}, "slow");
                });
            });
        },
        
        /**
         * Add a new player to the field.
         * 
         * @param int pos Number of the position on the field (1-11)
         * @param int id ID of the player (application specific)
         * @param int nr Shirt number of the player
         * @param string Display name of the player
         */
        addPlayer : function(pos, id) {
            return this.each(function(){
                var $this = $(this),
                data = $this.data('matchcenter');
                var xpos = systems[data.system]['x'][pos-1];
                var ypos = systems[data.system]['y'][pos-1];
                var player = '<div id="player' + id + '" class="player cf" style="left: ' + xpos + 'px; top: ' + ypos + 'px;">';
                player += '</div>';
                $this.append(player);
                $('#player' + id).delay(pos * 100).fadeIn();
                data.players.push(id);
            });
        },
        
        
        /**
         * Destroys the plugin instance.
         */
        destroy : function() {
            return this.each(function(){
                var $this = $(this),
                data = $this.data('matchcenter');
                $(window).unbind('.matchcenter');
                data.matchcenter.remove();
                $this.removeData('matchcenter');
            })
        },
        
    };

	$.fn.matchcenter = function(method) {
	    if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call( arguments, 1));
        } else if (typeof method === 'object' || ! method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' +  method + ' does not exist on jQuery.matchcenter');
        }
    };
    var a = document.getElementById('442'); 
a.addEventListener('click', () =>{ $('#matchfield').matchcenter('setPlayingSystem', '4-4-2');}, false);

var b = document.getElementById('433'); 
b.addEventListener('click', () =>{ $('#matchfield').matchcenter('setPlayingSystem', '4-3-3');}, false);

var c = document.getElementById('343'); 
c.addEventListener('click', () =>{ $('#matchfield').matchcenter('setPlayingSystem', '3-4-3');}, false);

var d = document.getElementById('352'); 
d.addEventListener('click', () =>{ $('#matchfield').matchcenter('setPlayingSystem', '3-5-2');}, false);

})(jQuery);

