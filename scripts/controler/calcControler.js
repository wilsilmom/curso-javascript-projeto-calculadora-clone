class CalcController{
    
    constructor(){
        this._operation = [];
        this._locale = 'pt-BR'
        this._displayCalc=""
        this._displayCalcEl = document.querySelector("#display");
        this._dataEL = document.querySelector("#data");
        this._timeEL = document.querySelector("#hora");
        this._currentDate
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){
        this.setdisplayDatetime();
        setInterval(()=>{
            this.setdisplayDatetime();  
            this._displayCalcEl.innerHTML =(this._displayCalc);  
        }, 1000);
        
        
    }
    addEventListenerAll(el, events, fn){
        events.split(' ').forEach(events=>{
            el.addEventListener(events, fn, false)
        })
    }

    clearAll(){
        this._operation=[]
    }

    clearEntry(){
        this._operation.pop();
    }
    addOperation(value){
        this._operation.push(value);
    }



    setError(){
        this._displayCalc="Error"
    }

    execbtn(value){
        switch(value){

            case 'ac':
                this.clearAll();
                break
            case 'ce':
                this.clearEntry();
                break
            case 'porcento':

                break
            case 'divisao':

                break
            case 'multiplicacao':

                break
            case 'subtracao':

                break
            case 'soma':

                break
            case 'igual':

                break
            default:
                this.setError();
                break
            
        }
    }
    
    initButtonsEvents(){
        let buttons=document.querySelectorAll("#buttons > g, #parts > g");
        buttons.forEach((btn, index)=>{
            this.addEventListenerAll(btn, "click drag",(e)=>{
                //let textBtn =btn.className.baseVal.replace("btn-", "")
                console.log(btn.className.baseVal.replace("btn-", ""))
                //this.execbtn();
            });
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e=>{
                btn.style.cursor="pointer";
            })
        })
        
    }



    setdisplayDatetime(){
        this.displayTime = this._currentDate.toLocaleTimeString(this._locale)
        this.displayDate = this._currentDate.toLocaleDateString(this._locale)
    }

    set displayDate (valor){
        return this._dataEL.innerHTML= valor; 
    }

    get displayDate(){
        return this._dataEL.innerHTML;
    }

    set displayTime(valor){
        return this._timeEL.innerHTML=valor;
    }

    get displayTime(){
        return this._timeEL.innerHTML;
    }

    get _currentDate(){
        return new Date();
    }

    get displayCalc(){
        return this._displayCalc.innerHTML;
    }

    set displayCalc(valor){
        this._displayCalc=valor;
    }

    set dataAtual(valor){
        this._currentDate=valor;
    }

    get dataAtual(){
        return this._currentDate
    }
}