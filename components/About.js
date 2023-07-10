export const About = () => {
  return (
    <section className="text-center mt-8">
      <div className="bg-bg-section border-none rounded-3xl mb-7">
        <button
          type="button"
          className="flex justify-center w-full font-heading font-bold text-base text-title pt-4 pb-3 pl-12 pr-10 border rounded-3xl border-title-white"
        >
          Детальніше про платформи
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="w-7 h-7 ml-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <ul className="py-3 px-7 text-left">
          <li className="mb-4">
            <h3 className="font-heading text-base uppercase text-dark-pink mb-4">
              Taobao
            </h3>
            <p className="text-title-white font-sans text-sm">
              Платформа розрахована на внутрішній ринок Китаю. Тому ціни тут в 5
              - 10 разів менше, ніж в Україні, навіть враховуючи платну
              доставку. Знайти можна все: одяг, іграшки, взуття, електроніку,
              все для машин, посуд і т.д.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="font-heading font-normal text-base text-dark-pink mb-4">
              1688
            </h3>
            <p className="text-title-white font-sans text-sm">
              Це оптовий сайт і залежить він напряму від Таобао. Ціни тут нижче,
              але купувати потрібно від 2-3х одиниць.
            </p>
          </li>
          <li>
            <h3 className="font-heading font-normal text-base text-dark-pink mb-4">
              Pinduoduo
            </h3>
            <p className="text-title-white font-sans text-sm">
              Торговий майданчик, який поки не такий популярний у нас, як
              Таобао. Але саме тут можна знайти ті ж товари, навіть дешевше! А
              також безліч недорогих реплік (від 100 грн).
            </p>
          </li>
        </ul>
      </div>

      <h2 className="font-heading font-bold text-2xl text-title-white mb-4">
        Що входить у навчання ?
      </h2>
      <ul>
        <li className=" flex justify-start items-center mb-4 font-sans text-sm border w-full rounded-3xl bg-title py-4 px-4 text-title-black">
          <span className="text-dark-pink font-heading font-bold text-4xl mr-6">
            01
          </span>
          Покрокові відеоуроки у записі
        </li>
        <li className=" flex justify-start items-center mb-4 font-sans text-sm border w-full rounded-3xl bg-title py-4 px-4 text-title-black">
          <span className="text-dark-pink font-heading font-bold text-4xl mr-6">
            02
          </span>
          Текстовий формат у Telegram
        </li>
        <li className=" flex justify-start items-center mb-4 font-sans text-sm border w-full rounded-3xl bg-title py-4 px-4 text-title-black">
          <span className="text-dark-pink font-heading font-bold text-4xl mr-6">
            03
          </span>
          Додатки, фішки, поради
        </li>
        <li className=" flex justify-start items-center mb-4 font-sans text-sm text-left border w-full rounded-3xl bg-title py-4 px-4 text-title-black">
          <span className="text-dark-pink font-heading font-bold text-4xl mr-6">
            04
          </span>
          Доступ до чату з учнями, де ділимося досвідом та ін.
        </li>
        <h2 className="font-heading font-bold text-2xl text-title-white mb-4">
          Тариф зі зворотнім зв’язком
        </h2>
        <li className=" flex justify-start items-center mb-4 font-sans text-sm text-left border w-full rounded-3xl bg-title py-4 px-2 text-title-black">
          <span className="text-dark-pink font-heading font-bold text-4xl mr-6">
            05
          </span>
          Зворотній звʼязок зі мною без обмежень, якщо виникли питання /
          складності
        </li>
      </ul>
    </section>
  );
};
