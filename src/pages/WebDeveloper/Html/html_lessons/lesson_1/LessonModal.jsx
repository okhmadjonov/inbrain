import React, { useContext, useState } from 'react';
import './LessonModal.scss'

import Lego from '../../../../../assets/images/modal/lego.png'
import { ReactComponent as Cart} from '../../../../../assets/images/modal/cart.svg'
import Video from './Video';
import Context from '../../../../../components/Context/Context';



const LessonModal = () => {

  const { ModalFunc } = useContext(Context)

//   const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('<button> Кнопка с надписью </button>').then(() => {
        setIsCopied(true);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });

      console.log('<button> Кнопка с надписью </button>');

      setTimeout(()=> {
        setIsCopied(false)
      }, 1000)

  };

    return (
        <div className='lesson_modal'>
            <h1 className='lesson_modal_title'>Текущий урок: <span className='lesson_modal_title_span'>Базовые элементы. HTML</span></h1>
            <Video />
            <div className='lesson_modal_cart' onClick={() => ModalFunc(false)} ><Cart  /></div>
            <p className='lesson_modal_info'>Страницы сайтов собирают из элементов, как конструктор LEGO. Текстовые блоки, картинки,
                ссылки, кнопки — всё это элементы сайта. Элементы описывают на языке HTML. Любая веб-страница содержит код на этом языке
                и сохраняется в HTML-файле. Когда вы открываете сайт, именно файл с HTML-кодом первым делом загружается в браузер.
              </p>
            <img  src={Lego} alt='images' />
            <p className='lesson_modal_info'>HTML-файл — это просто текстовый файл с расширением .html. Но пишут в HTML-файле не список продуктов или заметки о жизни, а HTML-код.
                    Чтобы разобраться, как устроен HTML, рассмотрим пример. Вот кнопка с надписью. Нажмите на неё, чтобы идти дальше:
            </p>
           <div className='lesson_modal_button'>
            <button className='lesson_modal_button_btn'>Кнопка с надписью</button>
            </div>
            <h4 className='lesson_modal_text'>А вот код, который описывает эту кнопку. Если написать его в HTML-файле, такая кнопка появится на сайте:</h4>
            <div className='lesson_modal_wrapper'>
            {isCopied && <p className='modal_copy'>Text copied to clipboard!</p>}
                <div className='lesson_modal_wrapper_left'><pre> <span>&lt;button&gt;</span> Кнопка с надписью<span>&lt;/button&gt;</span></pre> </div>
                <div className='lesson_modal_wrapper_right'> <span onClick={handleCopy}>Скопировать код </span>     HTML  </div>
            </div>

          <p className='lesson_modal_info1'>Наверняка вы обратили внимание на конструкции с угловыми скобками — это HTML-теги. Теги описывают элементы сайта. Например, тег &lt;button&gt; описывает кнопку.
            </p>
        </div>
    );
};

export default LessonModal;