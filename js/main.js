var e = "[[b;#66ffff;]root]@lexiethach.com";
var App = {
    echo: function(text) {
        this.echo(text);

        if(ga != undefined) ga('send', 'event', 'echo', 'text', text);
    },
    help: function() {
      showHelp(this);

        if(ga != undefined) ga('send', 'event', 'help');
    },

        ls: function() {
            this.echo('[[b;#66ffff;]autoexec.cfg]');
            this.echo('[[b;#66ffff;]CLASSIFIED.tar.gz]');
            this.echo('[[b;#66ffff;]IAC-2023,80363.matter.pdf]');
            this.echo('[[b;#66ffff;]AlexThachResumev1.docx]');
            this.echo('[[b;#66ffff;]AlexThachFederalResumev1.docx]');
        if(ga != undefined) ga('send', 'event', 'ls');
    },
    whoami: function() {
        this.echo("root"); 

        if(ga != undefined) ga('send', 'event', 'whoami');
    },
       blog: function() {
        if(ga != undefined) ga('send', 'event', 'blog');
        this.echo("Loading the blog... Wait a sec ...")
           setTimeout(function () { document.location.href = 'https://lexicon121.github.io/LexieThachWebsite/'; }, 1000);
    },
        publicPGPkey: function() {
        showPGP(this);
        if(ga != undefined) ga('send', 'event', 'publicPGPkey');
    },
        donate: function() {
        this.echo("\nBitcoin (BTC) - 3Pgqkda3w8ZTzBGT5DeLDiWdkgNTNjNxvo\n");
        this.echo("Ethereum (ETH) - 0x31Dcb542BA6dDf0b16EcB36B5Aedf14d5CEcB897\n");
        this.echo("Tether (USDT) - 0x96AfE6640a310265D3177eFC3bfEAa0dC6F4e31E\n");
        if(ga != undefined) ga('send', 'event', 'tip');
    },
        su: function(user) {
        this.echo("Not today, "+user)
        if(ga != undefined) ga('send', 'event', 'su');
    },
    sudo: function(x) {
        this.error("Segmentation fault!")
        if(ga != undefined) ga('send', 'event', 'sudo');
    },
    cat: function(x) {
        this.error("cat "+x+"?.....If only...");
        if(ga != undefined) ga('send', 'event', 'cat');
    },
    www: function() {
        this.echo("This page built with <a href='http://terminal.jcubic.pl/' target='_blank'>jQuery Terminal Emulator</a> plugin, and hosted by <a href='http://pages.github.com' target='_blank'>GitHub Pages<a/>.", {raw:true});
        if(ga != undefined) ga('send', 'event', 'www');
    },
    id: function(){
        this.echo("uid=0(root) gid=0(root) groups=0(root)");
        if(ga != undefined) ga('send', 'event', 'id','id');
    },
    shutdown: function() {
        this.error('SYSTEM HALT!');
        setTimeout(function () { document.location.href = 'https://hmpg.net/'; }, 2500);
        if(ga != undefined) ga('send', 'event', 'shutdown');
    },
    env: function() {
        this.echo("[[b;#66ffff;]NAME=LexieThach\nTITLE=SecurityEngineer;RobotHacker\nMEDIUMBLOG=https://medium.com/@alex.thach3\nGITHUB=https://github.com/Lexicon121\nBLUESKY=@lexiecon.bsky.social\n_=/usr/bin/env]");
        if(ga != undefined) ga('send', 'event', 'env');
    },
    cv: function() {
        this.echo("Loading my resume");
        setTimeout(function () { document.location.href = 'https://lexicon121.github.io/LexieThachWebsite/AlexThachResumev1.docx'; }, 1000);
        if(ga != undefined) ga('send', 'event', 'env');
    },
    oldsite: function() {
        this.echo("Loading my old site...");
        setTimeout(function () { document.location.href = 'https://lexicon121.github.io/LexieThachSite/'; }, 1000);
        if(ga != undefined) ga('send', 'event', 'env');
    },
    github: function() {
        this.echo("Loading my github...");
        setTimeout(function () { document.location.href = 'https://github.com/Lexicon121'; }, 1000);
        if(ga != undefined) ga('send', 'event', 'env');
    }
}

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

jQuery(document).ready(function($) {
    
     
     
           $('body').terminal(App, {
         greetings: "[[b;#66ffff;]"+
		"Starting udev:...................................( OK )\n"+
		"Mount devpts:....................................( OK )\n"+
		"Configure kernel options.........................( OK )\n"+
		"Setting clock: "+Date.now()+".....................( OK )\n"+
		"SYSTEM BOOT COMPLETE.............................( OK )\n\n\n"+
		"~MOTD~\n"+
       "     ##### /                                                 /###           /  /                             /       \n" +
                   "  ######  /                               #                 /  ############/ #/                            #/        \n" +
                   " /#   /  /                               ###               /     #########   ##                            ##        \n" +
                   "/    /  /                                 #                #     /  #        ##                            ##        \n" +
                   "    /  /                                                    ##  /  ##        ##                            ##        \n" +
                   "   ## ##              /##   /##    ###  ###       /##          /  ###        ##  /##      /###     /###    ##  /##   \n" +
                   "   ## ##             / ### / ###  #### / ###     / ###        ##   ##        ## / ###    / ###  / / ###  / ## / ###  \n" +
                   "   ## ##            /   ###   ### /###/   ##    /   ###       ##   ##        ##/   ###  /   ###/ /   ###/  ##/   ### \n" +
                   "   ## ##           ##    ###   ##/  ##    ##   ##    ###      ##   ##        ##     ## ##    ## ##         ##     ## \n" +
                   "   ## ##           ########     /##       ##   ########       ##   ##        ##     ## ##    ## ##         ##     ## \n" +
                   "   #  ##           #######     / ###      ##   #######         ##  ##        ##     ## ##    ## ##         ##     ## \n" +
                   "      /            ##         /   ###     ##   ##               ## #      /  ##     ## ##    ## ##         ##     ## \n" +
                   "  /##/           / ####    / /     ###    ##   ####    /         ###     /   ##     ## ##    /# ###     /  ##     ## \n" +
                   " /  ############/   ######/ /       ### / ### / ######/           ######/    ##     ##  ####/ ## ######/   ##     ## \n" +
                   "/     #########      ##### /         ##/   ##/   #####              ###       ##    ##   ###   ## #####     ##    ## \n" +
                   "#                                                                                   /                             /  \n" +
                   " ##                                                                                /                             /   \n" +
                   "                                                                                  /                             /    \n" +
                   "                                                                                 /                             /     \n" +
		"Welcome to Lexie Thach's personal website!\n\n"+
		"Quick Commands\n"+
		"\techo          env          help\n"+
		"\tid           ls           whoami\n\n"+
		"root]@lexiethach.com:~# env\n[[b;#66ffff;]NAME=LexieThach\nTITLE=SecurityEngineer;RobotHacker\nMEDIUMBLOG=https://medium.com/@alex.thach3\nGITHUB=https://github.com/Lexicon121\nBLUESKY=@lexiecon.bsky.social\n_=/usr/bin/env]",
                prompt: function(p){
            var path = '~'
            p(e + ":" + path + "# ");
        },
        onBlur: function() {
            // prevent loosing focus
            return false;
        },
        tabcompletion: true
        });


 
});

function showHelp(consoleObj)
{
        consoleObj.echo("Available commands:");
        consoleObj.echo("\t[[b;#66ffff;]blog]              #Visit my blog");
        consoleObj.echo("\t[[b;#66ffff;]clear]             #Clear the console"); 
        consoleObj.echo("\t[[b;#66ffff;]cv]                #Checkout my resume"); 
        consoleObj.echo("\t[[b;#66ffff;]donate]            #Support my efforts (BTC)");
        consoleObj.echo("\t[[b;#66ffff;]echo]              #Echo...");
        consoleObj.echo("\t[[b;#66ffff;]env]               #Display environment variables");
        consoleObj.echo("\t[[b;#66ffff;]github]            #Visit my github");
        consoleObj.echo("\t[[b;#66ffff;]help]              #This help message");
        consoleObj.echo("\t[[b;#66ffff;]id]                #Id...");
        consoleObj.echo("\t[[b;#66ffff;]ls]                #Ls...");
        consoleObj.echo("\t[[b;#66ffff;]oldsite]           #Visit my old website");
        consoleObj.echo("\t[[b;#66ffff;]shutdown]          #Shutdown system");
        consoleObj.echo("\t[[b;#66ffff;]whoami]            #Whomai...");
        consoleObj.echo("\t[[b;#66ffff;]www]               #Display information about this site");
}
