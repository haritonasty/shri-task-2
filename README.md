# Тестовое задание № 2 в Яндекс ШРИ

Кратко о том, что сделано/не сделано в задании

- Для стилей использовала SASS. Писала стили для 4 брекпоинтов, потому что отталкивалась от предложенного макета.
- Для html решила не использовать ничего, т.к. подумала, что всего одна страничка. После он так вырос, что стало тяжело ориентироваться, поэтому приняла решение воспользоваться совсем простым вспомогательным сборщиком html - rigger. Это плагин для gulp, у которого есть главный файл, куда подключаются кусочки html, разбросанные по другим файлам. Вложенность бОльшего уровня он не обеспечивает. Поэтому структуру папок я сделала условно отталкиваясь от этого.
- разделила стили/шаблоны на 6 главных блоков и 1 shared:
 1. header,
 2. main (главный блок),
 3. scenarios (избранные сценарии),
 4. devices (избранные девайсы)
 5. footer,
 6. popups (все, что связано с модалками)

- Картинки минифицировала, svg почистила до минимума
- Сложно было протестировать верстку в Edge и Safari, т.к. работаю на линуксе.. Но за каждым свойством подглядывала в caniuse и выискивыла различия. Надеюсь, что ничего не поехало (:
- JS не ставила цель написать как в "реальном проекте", скорее с целью продемонстрировать, как можно оживить, поэтому если где-то требуются схожие части JS, то я ограничивалась одним примером. по JS сделано:
   1. Если блок devices переполнен, соответствующая стрелочка подсвечивается. На стрелочки в этом блоке также можно нажимать. Для блока scenarios такую реализацию не сделала, потому что очень долго разбиралась, как так, стрелочки влево и вправо наприсованы, а верстка блоков такая, что переполнение должно быть по логике по оси OY. Поэтому этот блок у меня листается по вертикали)
   2. Нажав на любой из девайсов открывается 1 из 3 модалок, которая привязана к типу устройства (у меня там нет большой связи между названиями, привязывала рандомом). Так как задание на верстку, я не написала логику для переносом названия устройства, его расписания на модальное окно, но если что это делается чтением из event-а.
   3. В круглом регуляторе можно варьировать температуру от +20 до +35 (так как это регулятор теплоты пола(?). Эти цифры можно с легкостью подменить в JS. Этот интерактив дергает положение треугольника и положение фигуры, обозначающей прогресс (оранжевую часть регулятора). Регулятор полностью сделан с использованием svg. Так как нужно было сделать просто, я не делала очень сложную логику считывания положения тача или мыши, а решила сделать невидымый блок со скроллом поверх регулятора, так, чтобы положение скролла коррелировало с показанием на регуляторе. таким образом, привести в действие регулятор можно скроллом или свайпом вверх/вниз.
   3. На модальном окне с разноцветным регулятором (там, где изменение температуры) изменяются еще цифры справа. Не знала, что конкретно нужно делать там, где нужно менять свет, поэтому оставила не анимированную иконку. можно было бы ее подсвечивать с разной интенсивностью, но для этого нужно чуть больше JS и щепотку времени.
   4. Написала небольшую логику для открытия бокового меню на мобильной версии в режиме портрета,
   5. Написала dropdown, но решила не делать фильтрацию, так как эта задача уже чисто на js.
   





