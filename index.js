function rules(){
Swal.fire({
  title: 'Давай поиграем в игру "Угадай число"',
  text: "Мой хитрый компьютер загадал число. У тебя есть всего 5 попыток, чтобы его отгадать. Попробуй выиграть!",
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})
}
setTimeout (rules, 700);

const input = document.querySelector('#guess');
const btn = document.querySelector('#btn');
const randomNumber = Math.floor(Math.random()*20 +1);


btn.addEventListener('click', play);

input.addEventListener('keypress', function(e){
  if (e.key ===  'Enter')
      play();
  }
)

let i = 0;

function play() {
  const userNumber = document.querySelector('#guess').value;

  if (input.value.length === 0) {
    return false;
  } 

  else if (userNumber > 20 || userNumber<1) {
    Swal.fire({
      icon: 'error',
      title: 'Ой!',
      text: 'Нужно ввести число от 1 до 20',
    })
    input.value = '';
  }

  else if (isNaN(userNumber)) {
    Swal.fire({
      icon: 'error',
      title: 'Ой!',
      text: 'Нужно ввести число',
    })
    input.value = '';
  }

  else {
    if (input.value == "1"||input.value == "2"||input.value == "3"||input.value == "4"||
    input.value == "5"||input.value == "6"||input.value == "7"||input.value == "8"||
    input.value == "9"||input.value == "10"||input.value == "11"||input.value == "12"||
    input.value == "13"||input.value == "14"||input.value == "15"||input.value == "16"||
    input.value == "17"||input.value == "18"||input.value == "19"||input.value == "20"){
                        
                        i++;
                        if (i >= 5 && input.value !=randomNumber){
                          Swal.fire({
                                  title: 'Упс! Попытки закончились. Сыграешь еще?',
                                  text: "В этот раз ты проиграл",
                                  icon: 'warning',
                                  showCancelButton: true,
                                  confirmButtonColor: '#6ECB63',
                                  cancelButtonColor: '#d33',
                                  confirmButtonText: '<a class="restart">Новая игра</a>',
                                  cancelButtonText: '<a class="restart" href="#">Не хочу больше играть</a>'
                                }).then((result) => {
                                  if (result.isConfirmed) 
                                    window.location.reload();
                                  });
                        }
                        else if (userNumber < randomNumber) {
                          Swal.fire('Не угадал! Попробуй число побольше')
                        }
      
                        else if (userNumber > randomNumber) {
                          Swal.fire('Не угадал! Попробуй число поменьше')
                        }
      
                        else {
                          if (i <= 5)
                            Swal.fire({
                              title: 'Молодец!',
                              text: `Ты угадал число c ${i}-й потытки!`,
                              imageUrl: 'https://images.unsplash.com/photo-1531686264889-56fdcabd163f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
                              imageWidth: 330,
                              imageHeight: 200,
                              imageAlt: 'image',
                              showCancelButton: false,
                              confirmButtonText: '<a class="restart">Новая игра</a>',
                              confirmButtonColor: 'rgb(7, 126, 17)',
                            }).then((result) => {
                              if (result.isConfirmed)
                                window.location.reload();
                              })
                          else {
                            Swal.fire({
                              icon: 'cancel',
                              title: 'У тебя уже закончились попытки!',
                              showConfirmButton: true,
                              confirmButtonText: '<a class="restart">ОК</a>',
                              confirmButtonColor: 'rgb(7, 126, 17)',
                            }).then((result) => {
                              if (result.isConfirmed)
                                window.location.reload();
                              })
                          }
                        }
    }
  }
}

