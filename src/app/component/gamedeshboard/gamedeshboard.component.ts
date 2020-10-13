import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalManager } from 'ngb-modal';

@Component({
  selector: 'app-gamedeshboard',
  templateUrl: './gamedeshboard.component.html',
  styleUrls: ['./gamedeshboard.component.css']
})
export class GamedeshboardComponent implements OnInit {
  array = [];
  selectedNumber = 0;
  playerOneScore = 0;
  playerTwoScore = 0;
  msg = "";
  playerOneActive = true;
  playerTwoActive = false;

 

  @ViewChild('winnerModel')  winnerModel;
  private winnerModelRef;

  constructor(
    private modalService: ModalManager
  ) { }

  ngOnInit(): void {
    this.submit();

   
  }

  openWinnerModal() {
    this.winnerModelRef = this.modalService.open(this.winnerModel, {
     size: "md",
   })
 }
 

  submit(){
    for(let i =1; i <= 10; i++) {
      let num = Math.floor(Math.random() * 100 % 100);
      this.array.push(num);
      console.log(num);
      
    }
    console.log(this.array);
    
  }
  onNumberSelect(num) {
    if(!(this.array[0] == num) && !(this.array[ this.array.length-1] == num)){
      return;
    }
    this.selectedNumber = num;
    console.log("onNumberSelect selected", this.selectedNumber);
    // this.openWinnerModal();

  }

  playerOne(){
    if(!(this.array[0] == this.selectedNumber) && !(this.array[ this.array.length-1] == this.selectedNumber)){
      return;
    }
    if(!this.playerOneActive) {
      return;
    }
    this.playerOneScore = this.playerOneScore + this.selectedNumber;
    this.array = this.array.filter((item) => this.selectedNumber != item);
    
    this.selectedNumber = 0;
    this.hasWon();
    this.playerTwoActive = true;
    this.playerOneActive = false;

    
  }

  playerTwo(){
    if(!(this.array[0] == this.selectedNumber) && !(this.array[ this.array.length-1] == this.selectedNumber)){
      return;
    }
    if(!this.playerTwoActive) {
      return;
    }
    this.playerTwoScore = this.playerTwoScore + this.selectedNumber;
    this.array = this.array.filter((item) => this.selectedNumber != item);
    this.selectedNumber = 0;
    this.hasWon()
    this.playerOneActive = true;
    this.playerTwoActive = false;
    console.log("playerTwo selected", this.selectedNumber);
  }

  hasWon(){
    if(this.array.length != 0) 
      return 
    if(this.playerOneScore > this.playerTwoScore){
      this.msg = "Player 1st is winner."
      console.log( this.msg );
      
    }else{
      this.msg = "Player 2nd is winner."
      console.log( this.msg );
    }
   

  }

}
