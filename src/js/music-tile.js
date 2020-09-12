import Swiper from 'swiper';
import * as pageContent from '../../page-content.json';

const createTileContent = function() {
  const data = pageContent.portfolio.music;
  const swiperWrapper = document.querySelector('.swiper-container .swiper-wrapper');

  data.forEach(item => {
    const swiperSlide = document.createElement('div');
    const iframe = `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src=${item.url}></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-783255173" title="Kamil Grolik" target="_blank" style="color: #cccccc; text-decoration: none;">Kamil Grolik</a> · <a href="https://soundcloud.com/user-783255173/${item.slug}" title=${item.title} target="_blank" style="color: #cccccc; text-decoration: none;">${item.title}</a></div>`;

    swiperSlide.classList.add('swiper-slide');
    swiperSlide.innerHTML = iframe;
    swiperWrapper.appendChild(swiperSlide);
  });
};

const initSwiper = function() {
  return new Swiper ('.swiper-container', {
    direction: 'horizontal',
    // loop: true,
    effect: 'coverflow',
    slidesPerView: 3,
    slidesOffsetBefore: 30,
    coverflowEffect: {
      rotate: 30,
      slideShadows: true,
    },
    mousewheel: {
      forceToAxis: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
};

export const initMusicTile = function() {
  createTileContent();
  initSwiper();
};