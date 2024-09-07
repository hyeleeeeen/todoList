"use client";

import { useRouter } from "next/navigation";
import style from "./addTodoModal.module.css";
import ReactTextareaAutosize from "react-textarea-autosize";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import useTodoStore from "@/store/formdata";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FcCalendar } from "react-icons/fc";

export default function AddTodoModal() {
  const { addTodo } = useTodoStore();
  const [content, setContent] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  const onChangeDate = (date: Date | null) => {
    setSelectedDate(date);
  };

  const getFormattedDate = (date: Date | null) => {
    if (!date) return null;
    const offset = new Date().getTimezoneOffset() * 60000; // 기본값이 영국표준시여서 편차 계산
    const adjustedDate = new Date(date.getTime() - offset); // 선택한 날짜와 편차 빼주기
    return adjustedDate.toISOString().split("T")[0];
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      content: content,
      completed: false,
      date: getFormattedDate(selectedDate),
    };
    addTodo(newTodo);
    setContent("");
    setSelectedDate(null);
  };
  const router = useRouter();
  const onClickBack = () => {
    router.back();
  };

  const onClickReset = () => {
    setContent("");
    setSelectedDate(null);
  };

  return (
    <div className={style.modalBackground}>
      <div className={style.container}>
        <header className={style.header}>
          <button type="button" onClick={onClickBack}>
            X
          </button>
        </header>
        <form onSubmit={onSubmit} className={style.form}>
          <div className={style.input}>
            <label htmlFor="todo">할일 추가하기</label>
            <div className={style.inputBox}>
              <ReactTextareaAutosize
                onChange={onChange}
                value={content}
                name="todo"
                id="todo"
                className={style.textarea}
                maxLength={30}
                required
              />
            </div>
          </div>
          <div className={style.date}>
            <label htmlFor="date">마감 날짜</label>
            <div className={style.dateBox}>
              <DatePicker
                dateFormat="yyyy/MM/dd"
                placeholderText="Click me!"
                minDate={new Date()}
                selected={selectedDate ? new Date(selectedDate) : null}
                onChange={onChangeDate}
                name="date"
                id="date"
                className={style.datePicker}
              />
              <FcCalendar className={style.icon} />
            </div>
          </div>
          <div className={style.btnBox}>
            <button type="submit" className={style.addBtn} disabled={!content}>
              Add
            </button>
            <button
              onClick={onClickReset}
              type="reset"
              className={style.resetBtn}
              disabled={!content && !selectedDate}
            >
              reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
