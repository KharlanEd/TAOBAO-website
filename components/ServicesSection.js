const servicesList = [
  {
    title: "Pinduoduo",
    price: 999,
    priceithFeedback: 1300,
    currency: "грн",
  },
  {
    title: "TAOBAO + 1688",
    price: 1100,
    priceithFeedback: 1600,
    currency: "грн",
  },
  {
    title: "TAOBAO + 1688 + pinduoduo",
    price: 1499,
    priceithFeedback: 2100,
    currency: "грн",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-8 text-center px-4">
      <h2 className="text-2xl font-bold text-center text-title-light ">
        TAOBAO / 1688 / Pinduoduo / WeChat
      </h2>
      <strong className="text-title text-sm">
        Запамʼятай ці 4 назви, якщо хочеш купувати речі в 5 разів дешевше або
        відкрити свій магазин
      </strong>
      <p className="text-title-light py-2 px-6 bg-violet-light-dark rounded-2xl w-80">
        Мій курс вже пройшли 30+ учнів та деякі вже відкрили свої магазини
      </p>
      <strong className="text-title text-sm">
        Почни свій шлях і ти Давай заощяджувати разом!
      </strong>

      <ul className="text-title-light">
        {servicesList.map(({title, price, priceithFeedback, currency}, idx) => (
          <li key={idx}>
            <h3>{title}</h3>
            <ul>
              <li>
                <p>самостійне проходження</p>
                <p>{`${price} ${currency}`}</p>
              </li>
              <li>
                <p>Зі зворотнім зв’язком</p>
                <p>{`${priceithFeedback} ${currency}`}</p>
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <button></button>
        </li>
        <li>
          <button></button>
        </li>
        <li>
          <button></button>
        </li>
      </ul>
      <a
        className="w-40 h-12 bg-button-pay px-14 py-4 rounded-3xl font-bold shadow-button-pay"
        href="#"
      >
        Купити
      </a>
    </section>
  );
};
