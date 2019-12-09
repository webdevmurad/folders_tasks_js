 // Task 1
 // Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.
    let goods = new Goods('peach', '50', 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwis1u6vn6bmAhV8AxAIHaCtCiQQjRx6BAgBEAQ&url=https%3A%2F%2Flady.mail.ru%2Fproduct%2Fpersik%2F&psig=AOvVaw2zA1UVcHnRadfqWiCz0E_j&ust=1575901126813862', '4');
    console.log(goods);
 //Task 2.
 //  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

 
 //Task 3.
 //  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).

 
 // Task 4.
 // Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.

    let goods2 = new Goods('peach', '50', 'https://foodcity.ru/storage/products/October2018/BBgDyyf8N1gJsiHzn45E.jpg', '4');
    goods2.draw();
 //Task 5.
 // Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.
  
 // Task 6.
 // Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.

    let goods3 = new Goods2('peach', '50', 'https://foodcity.ru/storage/products/October2018/BBgDyyf8N1gJsiHzn45E.jpg', '4', true);
    console.log(goods3);
    goods3.draw();
 // Task 7.
 // Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.
  
    let valid7 = new Valid();
    console.log(valid7);
    valid7.validate();
    console.log(valid7);
 //Task 8.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.
  
    let valid8 = new Valid('murad', 'pass');
    valid8.validate();
    console.log(valid8.isValid);


 //Task 9.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.

    let valid9 = new Valid('mumurad', 'zagyama');
    valid9.validate();
    console.log(valid9.isValid);
 
 //Task 10.
 // Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.
  
    let valid10 = new Valid2('', '');
    valid10.validate();
    console.log(valid10);

 //Task 11.
 // Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
  
 let valid11 = new Valid2('', 'zagazaga');
 valid11.validate();
 console.log(valid11);
 
 //Task 12.
 // Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
  
 let valid12 = new Valid2('muradmurad', 'zagazaga');
 valid12.validate();
 console.log(valid12);