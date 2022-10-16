class WhatsAppController {

    constructor(){

        console.log('WhatsAppController OK');

        this.elementsPrototype();
        this.loadElements();
        this.InitEvent();
    }

loadElements(){

this.el = {};

    document.querySelectorAll('[id]').forEach(element=>{

this.el[Format.getCamelCase(element.id)] = element;

    });

}

    elementsPrototype(){

    Element.prototype.hide = function(){  
    this.style.display = 'none';

       }

       Element.prototype.show = function () {  
    this.style.display= 'block';

       }

       Element.prototype.toggle = function () {  
    this.style.display = (this.style.display ==='none') ? 'block' : 'none'

       }
       Element.prototype.on = function (events, fn) {
          events.split(' ').forEach(event=>{
            this.addEventListener(event, fn);
          });
       }

        Element.prototype.css= function() {
            for(let name in styles){
                this.style[name  ]= styles[name]
            }

        }

        Element.prototype.removeClass = function (name) {
               this.classList.remove(name);
               return this;

        }

        Element.prototype.toggleClass = function (name) {
            this.classList.toggle(name);
            return this;
        }
       
        Element.prototype.hasClass = function (name) {
          return this.classList.constains(name);
                    }

                    HTMLFormElement.prototype.getform = function() {

                        return new FormData(this);
                    }
                    
                    HTMLFormElement.prototype.toJSON = function() {

                        let json= {};

                        this.getform().forEach((valeu, key)=>{

                            json[key]= value;
                        });

                        renturn json;
                    }

                  }




        initEvents(); {

                this.el.myPhoto.on("click", e=>{

                this.closeAllLetf();    
                this.el.panelAddContact.show();
                this.el.panelEditProfile.addClass('open');

            });
        

                this.el.btnNewContact.on("click", e=>{

                this.closeAllLeftPanel();    
                this.el.panelAddContact.show();
                setTimeout(()=>{  
                this.el.panelAddContact.addClass('open');

                }, 300);
            });

            this.el.btnClosePanelEditProfile.on("click", e=>{

                this.el.panelEditProfile.removeClass('open');
                
            });

            this.el.btnClosePanelAddContact.on("click" , e=>{
                this.el.panelEditProfile.removeClass('open');
            });

            this.el.photoContainerEditProfile.on('click', e=>{

                this.el.imputProfilePhoto.click();
            });

            this.el.imputNamePanelEditProfile.on('keypress', e=>{

                if (e.key === 'Enter'){

                    e.preventDefautl();
                    this.el.btnSavePanelEditProfile.click();
                }

            });

            this.el.btnSavePanelEditProfile.on('click', el=>{

                console.log(this.el.btnSavePanelEditProfile.innerHTML);

            });

      }

      closeAllLeftPanel();{

        this.el.panelAddContact.hide();
        this.el.panelEditContact.hide();

      }
    }
         }
