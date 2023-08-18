export default class Accordion {
    constructor (accordion) {
        this.accordion = accordion.accordion;
        this.accordionItems = accordion.accordionItems;
        
        this.accordionList = accordion.accordionList;
        
        this.accordionQuestions = this.accordionList.map(element => element.question);
        this.accordionAnswer = this.accordionList.map(element => element.answer);
        
        this.elementSymbol = accordion.elementSymbol;

        this.classActive = 'accordion__active';
        this.classAnswer = 'accordion__answer';
    }

    toggleAccordion (question) {
        setTimeout(() => this.removeAccordionClassActivator(), 1);
        setTimeout(() => this.addAccordionAnswer(question), 2);
    }
        
    removeAccordionClassActivator () {
        const activeElement = document.querySelector(`.${this.classAnswer}`)

        for (let i = 0; i < this.accordionItems.length; i++) {
            if (this.accordionItems[i].classList.contains(this.classActive)) {
                this.accordionItems[i].classList.remove(this.classActive);
                activeElement.remove();
            }
        } 
    }
    
    addAccordionAnswer (question) {
        for (let i = 0; i < this.accordionItems.length; i++) {
            if (question === this.accordionQuestions[i]) {
                this.accordionItems[i].classList.add(this.classActive);
                
                if (this.accordionItems[i].classList.contains(this.classActive)) {
                    const answerElement = document.createElement('p');

                    answerElement.classList.add(this.classAnswer);
                    answerElement.textContent = this.accordionAnswer[i];

                    this.accordionItems[i].appendChild(answerElement);
                }
            }
        }
    }

    correctWidthInItem () {
        const width = this.accordion.clientWidth;
    
        for (let i = 0; i < this.accordionItems.length; i++) {
            console.log(this.elementSymbol);
            if (this.accordionQuestions[i].length <= this.elementSymbol && width > 700) {
                this.accordionItems[i].style.maxWidth = '48%';
            }
        }
    }
}