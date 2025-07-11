function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
          }
          return e;
        }),
    _extends.apply(null, arguments)
  );
}
function Header() {
  let [e, t] = React.useState(!1),
    [a, i] = React.useState(!1);
  return React.createElement(
    "header",
    { className: "header" },
    React.createElement("a", {
      href: "/",
      className: "header__logo",
      "aria-label": "Яндекс.Дом",
    }),
    React.createElement(
      "button",
      {
        className: "header__menu",
        "aria-expanded": e ? "true" : "false",
        onClick: () => {
          a || i(!0), t(!e);
        },
      },
      React.createElement(
        "span",
        { className: "header__menu-text a11y-hidden" },
        e ? "Закрыть меню" : "Открыть меню"
      )
    ),
    React.createElement(
      "ul",
      {
        className:
          "header__links" +
          (e ? " header__links_opened" : "") +
          (a ? " header__links-toggled" : ""),
      },
      React.createElement(
        "li",
        { className: "header__item" },
        React.createElement(
          "a",
          {
            className: "header__link header__link_current",
            href: "/",
            "aria-current": "page",
          },
          "Сводка"
        )
      ),
      React.createElement(
        "li",
        { className: "header__item" },
        React.createElement(
          "a",
          { className: "header__link", href: "/devices" },
          "Устройства"
        )
      ),
      React.createElement(
        "li",
        { className: "header__item" },
        React.createElement(
          "a",
          { className: "header__link", href: "/scripts" },
          "Сценарии"
        )
      )
    )
  );
}
function Event(e) {
  const t = React.useRef(),
    { onSize: a } = e;
  return (
    React.useEffect(() => {
      const e = t.current.offsetWidth,
        i = t.current.offsetHeight;
      a && a({ width: e, height: i });
    }),
    React.createElement(
      "li",
      { ref: t, className: "event" + (e.slim ? " event_slim" : "") },
      React.createElement(
        "button",
        { className: "event__button" },
        React.createElement("span", {
          className: `event__icon event__icon_${e.icon}`,
          role: "img",
          "aria-label": e.iconLabel,
        }),
        React.createElement("h4", { className: "event__title" }, e.title),
        e.subtitle &&
          React.createElement(
            "span",
            { className: "event__subtitle" },
            e.subtitle
          )
      )
    )
  );
}
const TABS = {
  all: {
    title: "Все",
    items: [
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Yeelight LED Smart Bulb",
        subtitle: "Включено",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "D-Link Omna 180 Cam",
        subtitle: "Включится в 17:00",
      },
      {
        icon: "temp",
        iconLabel: "Температура",
        title: "Elgato Eve Degree Connected",
        subtitle: "Выключено до 17:00",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "LIFX Mini Day & Dusk A60 E27",
        subtitle: "Включится в 17:00",
      },
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Mi Air Purifier 2S",
        subtitle: "Включено",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "Philips Zhirui",
        subtitle: "Включено",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "Philips Zhirui",
        subtitle: "Включено",
      },
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Mi Air Purifier 2S",
        subtitle: "Включено",
      },
    ],
  },
  kitchen: {
    title: "Кухня",
    items: [
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Yeelight LED Smart Bulb",
        subtitle: "Включено",
      },
      {
        icon: "temp",
        iconLabel: "Температура",
        title: "Elgato Eve Degree Connected",
        subtitle: "Выключено до 17:00",
      },
    ],
  },
  hall: {
    title: "Зал",
    items: [
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "Philips Zhirui",
        subtitle: "Выключено",
      },
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Mi Air Purifier 2S",
        subtitle: "Выключено",
      },
    ],
  },
  lights: {
    title: "Лампочки",
    items: [
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "D-Link Omna 180 Cam",
        subtitle: "Включится в 17:00",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "LIFX Mini Day & Dusk A60 E27",
        subtitle: "Включится в 17:00",
      },
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Mi Air Purifier 2S",
        subtitle: "Включено",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "Philips Zhirui",
        subtitle: "Включено",
      },
    ],
  },
  cameras: {
    title: "Камеры",
    items: [
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Mi Air Purifier 2S",
        subtitle: "Включено",
      },
    ],
  },
};
for (let e = 0; e < 6; ++e)
  TABS.all.items = [...TABS.all.items, ...TABS.all.items];
const TABS_KEYS = Object.keys(TABS);
function Main() {
  const e = React.useRef(),
    t = React.useRef(!1),
    [a, i] = React.useState(""),
    [l, c] = React.useState(!1);
  React.useEffect(() => {
    a ||
      t.current ||
      ((t.current = !0),
      i(new URLSearchParams(location.search).get("tab") || "all"));
  });
  let n = [];
  const s = (e) => {
    n = [...n, e];
  };
  React.useEffect(() => {
    const t = n.reduce((e, t) => e + t.width, 0),
      a = (n.reduce((e, t) => e + t.height, 0), t > e.current.offsetWidth);
    a !== l && c(a);
  });
  return React.createElement(
    "main",
    { className: "main" },
    React.createElement(
      "section",
      { className: "section main__general" },
      React.createElement(
        "h2",
        {
          className: "section__title section__title-header section__main-title",
        },
        "Главное"
      ),
      React.createElement(
        "div",
        { className: "hero-dashboard" },
        React.createElement(
          "div",
          { className: "hero-dashboard__primary" },
          React.createElement(
            "h3",
            { className: "hero-dashboard__title" },
            "Привет, Геннадий!"
          ),
          React.createElement(
            "p",
            { className: "hero-dashboard__subtitle" },
            "Двери и окна закрыты, сигнализация включена."
          ),
          React.createElement(
            "ul",
            { className: "hero-dashboard__info" },
            React.createElement(
              "li",
              { className: "hero-dashboard__item" },
              React.createElement(
                "div",
                { className: "hero-dashboard__item-title" },
                "Дома"
              ),
              React.createElement(
                "div",
                { className: "hero-dashboard__item-details" },
                "+23",
                React.createElement("span", { className: "a11y-hidden" }, "°")
              )
            ),
            React.createElement(
              "li",
              { className: "hero-dashboard__item" },
              React.createElement(
                "div",
                { className: "hero-dashboard__item-title" },
                "За окном"
              ),
              React.createElement(
                "div",
                { className: "hero-dashboard__item-details" },
                "+19",
                React.createElement("span", { className: "a11y-hidden" }, "°"),
                React.createElement("div", {
                  className: "hero-dashboard__icon hero-dashboard__icon_rain",
                  role: "img",
                  "aria-label": "Дождь",
                })
              )
            )
          )
        ),
        React.createElement(
          "ul",
          { className: "hero-dashboard__schedule" },
          React.createElement(Event, {
            icon: "temp",
            iconLabel: "Температура",
            title: "Philips Cooler",
            subtitle: "Начнет охлаждать в 16:30",
          }),
          React.createElement(Event, {
            icon: "light",
            iconLabel: "Освещение",
            title: "Xiaomi Yeelight LED Smart Bulb",
            subtitle: "Включится в 17:00",
          }),
          React.createElement(Event, {
            icon: "light",
            iconLabel: "Освещение",
            title: "Xiaomi Yeelight LED Smart Bulb",
            subtitle: "Включится в 17:00",
          })
        )
      )
    ),
    React.createElement(
      "section",
      { className: "section main__scripts" },
      React.createElement(
        "h2",
        { className: "section__title section__title-header" },
        "Избранные сценарии"
      ),
      React.createElement(
        "ul",
        { className: "event-grid" },
        React.createElement(Event, {
          slim: !0,
          icon: "light2",
          iconLabel: "Освещение",
          title: "Выключить весь свет в доме и во дворе",
        }),
        React.createElement(Event, {
          slim: !0,
          icon: "schedule",
          iconLabel: "Расписание",
          title: "Я ухожу",
        }),
        React.createElement(Event, {
          slim: !0,
          icon: "light2",
          iconLabel: "Освещение",
          title: "Включить свет в коридоре",
        }),
        React.createElement(Event, {
          slim: !0,
          icon: "temp2",
          iconLabel: "Температура",
          title: "Набрать горячую ванну",
          subtitle: "Начнётся в 18:00",
        }),
        React.createElement(Event, {
          slim: !0,
          icon: "temp2",
          iconLabel: "Температура",
          title: "Сделать пол тёплым во всей квартире",
        })
      )
    ),
    React.createElement(
      "section",
      { className: "section main__devices" },
      React.createElement(
        "div",
        { className: "section__title" },
        React.createElement(
          "h2",
          { className: "section__title-header" },
          "Избранные устройства"
        ),
        React.createElement(
          "select",
          {
            className: "section__select",
            defaultValue: "all",
            onInput: (e) => {
              i(e.target.value);
            },
          },
          TABS_KEYS.map((e) =>
            React.createElement("option", { key: e, value: e }, TABS[e].title)
          )
        ),
        React.createElement(
          "ul",
          { role: "tablist", className: "section__tabs" },
          TABS_KEYS.map((e) =>
            React.createElement(
              "li",
              {
                key: e,
                role: "tab",
                "aria-selected": e === a ? "true" : "false",
                tabIndex: e === a ? "0" : void 0,
                className:
                  "section__tab" + (e === a ? " section__tab_active" : ""),
                id: `tab_${e}`,
                "aria-controls": `panel_${e}`,
                onClick: () => i(e),
              },
              TABS[e].title
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "section__panel-wrapper", ref: e },
        TABS_KEYS.map((e) =>
          React.createElement(
            "div",
            {
              key: e,
              role: "tabpanel",
              className:
                "section__panel" + (e === a ? "" : " section__panel_hidden"),
              "aria-hidden": e === a ? "false" : "true",
              id: `panel_${e}`,
              "aria-labelledby": `tab_${e}`,
            },
            React.createElement(
              "ul",
              { className: "section__panel-list" },
              TABS[e].items.map((e, t) =>
                React.createElement(
                  Event,
                  _extends({ key: t }, e, { onSize: s })
                )
              )
            )
          )
        ),
        l &&
          React.createElement("div", {
            className: "section__arrow",
            onClick: () => {
              const t = e.current.querySelector(
                ".section__panel:not(.section__panel_hidden)"
              );
              t && t.scrollTo({ left: t.scrollLeft + 400, behavior: "smooth" });
            },
          })
      )
    )
  );
}
setTimeout(() => {
  ReactDOM.createRoot(document.getElementById("app")).render(
    React.createElement(
      React.Fragment,
      null,
      React.createElement(Header, null),
      React.createElement(Main, null)
    )
  );
}, 100);
