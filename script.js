
async function page() {
   var data = fetch(`https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json`);
   var out = await data;
   var prom = out.json();
   var out1 = await prom;
   console.log(out1);









   var container = document.createElement('div');
   container.classList.add('container');
   parent = document.querySelector('body');
   parent.insertAdjacentElement('afterbegin', container)


   //var collect = document.querySelector('.collection'); 

   var identity = document.createElement('p');
  //identity.innerText ='Person ID :' + out1[anchor4.innerText].id;
  container.insertAdjacentElement('afterbegin', identity)
 
  var personName = document.createElement('p');
 // personName.innerText ='Name :' + out1[anchor4.innerText].name ;
  container.append(personName);
 
  var mail = document.createElement('p');
 // mail.innerText ='Email :' + out1[anchor4.innerText].email;
  container.append(mail); 







   let inner = document.createElement('div'); // pagination div
   inner.classList.add('page');
   const inner_parent = document.querySelector('.container');
   inner_parent.insertAdjacentElement('afterend', inner);

   let pre_button = document.createElement('button'); // previous button
   pre_button.classList.add('pre');
   pre_button.innerText = 'prev';
   const btn_parent = document.querySelector('.page')
   btn_parent.insertAdjacentElement('afterbegin', pre_button);

   let unorder = document.createElement('ul'); // unorder list
   unorder.classList.add('unorder');
   const unorder_parent = document.querySelector('.page');
   unorder_parent.insertAdjacentElement('beforeend', unorder);

   let nxt_button = document.createElement('button'); // next button
   nxt_button.classList.add('nxt');
   nxt_button.innerText = 'Next';
   const nxt_button_parent = document.querySelector('.page');
   nxt_button_parent.insertAdjacentElement('beforeend', nxt_button);

   let list = document.createElement('li'); // li 1
   list.classList.add('li1');
   const list_parent = document.querySelector('.unorder');
   list_parent.append(list);

   let list2 = document.createElement('li'); // li 2
   list2.classList.add('li2');
   const list_parent2 = document.querySelector('.li1');
   list_parent2.insertAdjacentElement('afterend', list2)

   let list3 = document.createElement('li'); // li 3
   list3.classList.add('li3');
   const list_parent3 = document.querySelector('.li2');
   list_parent3.insertAdjacentElement('afterend', list3)

   let list4 = document.createElement('li'); // li 4
   list4.classList.add('li4');
   const list_parent4 = document.querySelector('.li3');
   list_parent4.insertAdjacentElement('afterend', list4)

   let anchor1 = document.createElement('a');  // anchor-1
   anchor1.classList.add('num1');
   //anchor1.setAttribute('onclick', 'goto(this)');
   const anch_parent1 = document.querySelector('.li1');
   anchor1.innerText = '1';
   anch_parent1.insertAdjacentElement('afterbegin', anchor1);

   let anchor2 = document.createElement('a');  // anchor-2
   anchor2.classList.add('num2');
  // anchor2.setAttribute('onclick', 'goto(this)');
   const anch_parent2 = document.querySelector('.li2');
   anchor2.innerText = '2';
   anch_parent2.insertAdjacentElement('afterbegin', anchor2);

   let anchor3 = document.createElement('a');  // anchor-3
   anchor3.classList.add('num3');
  // anchor3.setAttribute('onclick', 'goto(this)');
   const anch_parent3 = document.querySelector('.li3');
   anchor3.innerText = '3';
   anch_parent3.insertAdjacentElement('afterbegin', anchor3);

   let anchor4 = document.createElement('a');  // anchor-3
   anchor4.classList.add('num4');
   // anchor4.setAttribute('onclick', 'goto(this)');
   const anch_parent4 = document.querySelector('.li4');
   anchor4.innerText = '4';
   anch_parent4.insertAdjacentElement('afterbegin', anchor4);

   test4 = document.querySelector('.num4');
   test4.addEventListener('click', move4);
   function move4() {
      identity.innerText = 'Person ID :' + out1[anchor4.innerText-1].id;
      personName.innerText = 'Name :' + out1[anchor4.innerText-1].name;
      mail.innerText = 'Email :' + out1[anchor4.innerText-1].email;
   }

   test1 = document.querySelector('.num1');
   test1.addEventListener('click', move3);
   function move3() {
      console.log(anchor1.innerText);
      identity.innerText = 'Person ID :' + out1[anchor1.innerText-1].id;
      personName.innerText = 'Name :' + out1[anchor1.innerText-1].name;
      mail.innerText = 'Email :' + out1[anchor1.innerText-1].email;
   }

   test2 = document.querySelector('.num2');
   test2.addEventListener('click', move2);
   function move2() {
      identity.innerText = 'Person ID :' + out1[anchor2.innerText-1].id;
      personName.innerText = 'Name :' + out1[anchor2.innerText-1].name;
      mail.innerText = 'Email :' + out1[anchor2.innerText-1].email;
   }

   test3 = document.querySelector('.num3');
   test3.addEventListener('click', move1);
   function move1() {
      identity.innerText = 'Person ID :' + out1[anchor3.innerText-1].id;
      personName.innerText = 'Name :' + out1[anchor3.innerText-1].name;
      mail.innerText = 'Email :' + out1[anchor3.innerText-1].email;
   }

//console.log(out1[anchor4.innerText]);   

   //  **************************************************************************************************************************


   // *****************************************************************************************************************************


   let next_tag = document.querySelector('[class="nxt"]'); // click event for next
   next_tag.addEventListener('click', change);


   function change() {  // changing the count when next button is clicked
      let ary = [1, 2, 3, 4];
      for (let i of ary) {
         ele = document.querySelector(`.li${i} .num${i}`);
         if ((Number(ele.innerText) + 4) <= 100) {

            ele.innerText = Number(ele.innerText) + 4;
         }
      }
   }


   let pre_tag = document.querySelector('[class="pre"]'); // click event for previous
   pre_tag.addEventListener('click', backward);


   function backward() { // changing the count when previous button is clicked
      let ary = [1, 2, 3, 4];

      for (let i of ary) {
         ele = document.querySelector(`.li${i} .num${i}`);
         if ((Number(ele.innerText) - 4) >= 1) {
            ele.innerText = Number(ele.innerText) - 4;
         }

      }
   }


















}
page()


/*
 goto(x){
   pageNumber = x.innerText;
   console.log(pageNumber);
   //return pageNumber

  




  } */



