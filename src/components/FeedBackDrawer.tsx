import { Drawer } from "antd";
import { FormEvent, useRef, useState } from "react";
import { useAppContext } from "../MyContext";

export const FeedBackDrawer = () => {
  const questRef = useRef<HTMLInputElement>(null);
  const answRef = useRef<HTMLTextAreaElement>(null);
  const categRef = useRef<HTMLSelectElement>(null);
  const errRef = useRef<HTMLSpanElement>(null);
  const [buttonContent, setButtonContent] = useState("");
  const { openDrawer, handleToggleDrawer } = useAppContext();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (answRef.current?.value && questRef.current?.value) {
      setButtonContent("posting...");
      const post = {
        question: String(questRef.current?.value),
        answer: String(answRef.current?.value),
        timeCreated: String(new Date().toLocaleString()),
        category: String(categRef.current?.value),
      };
      console.table({ "ready to post to server ": post });

      try {
      } catch (e) {
        // toast.error("failed to post new post");
        console.error(e);
      }
      setButtonContent("post");
      answRef.current.value = "";
      questRef.current.value = "";
    } else {
      errRef.current.setAttribute("style", "opacity:1");
      !questRef.current.value &&
        questRef.current.setAttribute("style", "border-bottom:2px solid red");
      !answRef.current.value &&
        answRef.current.setAttribute("style", "border-bottom:2px solid red");
      setTimeout(() => {
        errRef.current.setAttribute("style", "opacity:0");
        questRef.current.setAttribute(
          "style",
          "border-bottom:2px solid var(--black)"
        );
        answRef.current.setAttribute(
          "style",
          "border-bottom:2px solid var(--black)"
        );
      }, 3000);
    }
  };

  return (
    <Drawer
      placement="right"
      width={800}
      height={"80%"}
      open={openDrawer}
      onClose={handleToggleDrawer}
      headerStyle={{
        display: "flex",
        background: "var(--bg)",
        width: "100%",
      }}
      style={{ backgroundColor: "" }}
    >
      <div className="drawerContent">
        <div className="leftSideDrawer">
          <h1>Вы можете оставить заявку и мы с вами свяжемся</h1>
        </div>
        <form className="addPostForm" onSubmit={(e) => handleSubmit(e)}>
          <span className="error-form" ref={errRef}>
            Заполните все поля
          </span>
          <label htmlFor="question">Тема</label>
          <input type="text" name="question" ref={questRef} />
          <label htmlFor="answer">Ответ</label>
          <textarea name="answer" ref={answRef} />
          <button>{buttonContent}</button>
        </form>
      </div>
    </Drawer>
  );
};
