import React from "react";

import * as RiIcons from "react-icons/ri";
import petrov from "../../../assets/images/petrov.png";

export const user = [
  {
    img: petrov,
    name: "UserName",
    balance: "balance 99 000 сум",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];

export const SidebarData = [
  {
    title: "Веб разработчик",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Приветствие",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
      },
    ],
  },
  {
    title: "Приветствие",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Привет",
        /*         path: '/documentation/HTML', */
        cName: "sub-nav",
      },
      {
        title: "Что такое веб-разработка?",
        /*         path: '/documentation/HTML', */
        cName: "Про трудоустройство",
      },
      {
        title: "Как устроено обучение",
        /*         path: '/documentation/HTML', */
        cName: "sub-nav",
      },
      {
        title: "Команда сопровождения",
        /*         path: '/documentation/HTML', */
        cName: "sub-nav",
      },
      {
        title: "Программа обучения",
        /*         path: '/documentation/HTML', */
        cName: "sub-nav",
      },
      {
        title: "Какие проекты предстоит делать?",
        /*         path: '/documentation/HTML', */
        cName: "sub-nav",
      },
      {
        title: "Про реальные проекты",
        /*         path: '/documentation/HTML', */
        cName: "sub-nav",
      },
      {
        title: "Сколько времени придётся тратить на учёбу?",
        /*         path: '/documentation/HTML', */
        cName: "sub-nav",
      },
      {
        title: "Будет сложно. Но у Вас получится",
        /*         path: '/documentation/HTML', */
        cName: "sub-nav",
      },
      {
        title: "Начать обучение",
        /*         path: '/documentation/HTML', */
        cName: "sub-nav",
      },
      {
        title: "Приветствие",
        /*         path: '/documentation/HTML', */
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "HTML",
    path: "/Lessons/HTML",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Базовые элементы HTML",
        path: "/Webdev/lesson_1",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
      },
      {
        title: "CheckTasks",
        path: "/Webdev/Task_1",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
      },
      {
        title: "Теги HTML",
        path: "/Webdev/Lorem",
      },
      {
        title: "Заголовки",
        path: "/Webdev/Lorem",
      },
      {
        title: "Урок 4",
        path: "/Webdev/Lorem",
      },
      {
        title: "Урок 5",
        path: "/Webdev/Lorem",
      },
      {
        title: "Урок 6",
        path: "/Webdev/Lorem",
      },
      {
        title: "Урок 7",
        path: "/Webdev/Lorem",
      },
      {
        title: "Урок 8",
        path: "/Webdev/Lorem",
      },
      {
        title: "Урок 9",
        path: "/Webdev/Lorem",
      },
      {
        title: "Урок 10",
        path: "/Webdev/Lorem",
      },
      {
        title: "Урок 11",
        path: "/Webdev/Lorem",
      },
    ],
  },
  {
    title: "CSS",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Lorem",
        path: "/Webdev/Lorem",
      },
      {
        title: "Lorem",
        path: "/Webdev/Lorem",
      },
      {
        title: "Lorem",
        path: "/Webdev/Lorem",
      },
      {
        title: "Lorem",
        path: "/Webdev/Lorem",
      },
    ],
  },
  {
    title: "JavaScript",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Lorem",
        path: "/Webdev/Lorem",
      },
      {
        title: "Lorem",
        path: "/Webdev/Lorem",
      },
      {
        title: "Lorem",
        path: "/Webdev/Lorem",
      },
      {
        title: "Lorem",
        path: "/Webdev/Lorem",
      },
    ],
  },

  {
    title: "Справочник",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Documents",
      },
    ],
  },
  {
    title: "HTML",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "HTML Теги",
      },
      {
        title: " <!- - >",
      },
      {
        title: "<!DOCTYPE>",
      },
      {
        title: "<a>",
      },
      {
        title: "<abbr>",
      },
      {
        title: "<acronym>",
      },
      {
        title: "<address>",
      },
      {
        title: "<applet>",
      },
      {
        title: "<area>",
      },
      {
        title: "<article>",
      },
      {
        title: "<aside>",
      },
      {
        title: "<audio>",
      },
      {
        title: "<b>",
      },
      {
        title: "<base>",
      },
      {
        title: "<basefont>",
      },
      {
        title: "<bdi>",
      },
      {
        title: "<bdo>",
      },
      {
        title: "<big>",
      },
      {
        title: "<blockquote>",
      },
      {
        title: "<body>",
      },
      {
        title: "<br>",
      },
    ],
  },
  {
    title: "CSS",
    path: "/documentation/CSS",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "css",
      },
    ],
  },
  {
    title: "JavaScript",
    path: "/documentation/JavaScript",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Javascript",
      },
    ],
  },
  {
    title: "Экспресс тесты",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "express",
      },
    ],
  },
  {
    title: "HTML",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Html",
      },
    ],
  },
  {
    title: "CSS",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "css",
      },
    ],
  },
  {
    title: "JavaScript",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "js",
      },
    ],
  },
];
