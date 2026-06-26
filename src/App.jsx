import { useState } from "react";
import { Trans, Plural, useLingui } from "@lingui/react/macro";
import { locales, dynamicActivate } from "./i18n.js";

const App = () => {
  const { i18n, t } = useLingui();
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);

  const switchLocale = (locale) => dynamicActivate(locale);

  return (
    <main className="container">
      <header className="header">
        <h1>
          <Trans>Lingui Translation Demo</Trans>
        </h1>
        <div className="lang-switcher">
          {Object.entries(locales).map(([code, label]) => (
            <button
              key={code}
              className={i18n.locale === code ? "active" : ""}
              onClick={() => switchLocale(code)}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      <section className="card">
        <h2>
          <Trans comment="Section header above a name input that greets the user">
            Greeting
          </Trans>
        </h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t`Type your name`}
        />
        <p>
          {name ? (
            <Trans>Hello {name}, welcome back!</Trans>
          ) : (
            <Trans>Hello stranger, please tell us your name.</Trans>
          )}
        </p>
      </section>

      <section className="card">
        <h2>
          <Trans comment="Section header for a demo of plural message forms">
            Pluralization
          </Trans>
        </h2>
        <div className="counter">
          <button onClick={() => setCount((c) => Math.max(0, c - 1))}>-</button>
          <span>{count}</span>
          <button onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
        <p>
          <Plural
            value={count}
            _0="You have no unread messages"
            one="You have # unread message"
            other="You have # unread messages"
          />
        </p>
      </section>

      <section className="card">
        <h2>
          <Trans comment="Section header for the 'about this app' description. Noun, not a preposition">
            About
          </Trans>
        </h2>
        <p>
          <Trans>
            This is a small demo app to test internationalization tooling with
            Lingui. Switch between English and German to see translations in
            action.
          </Trans>
        </p>
      </section>
    </main>
  );
};

export default App;
